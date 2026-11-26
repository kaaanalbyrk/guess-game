const DOSYA_SURUMU = 12;   // app.js ile aynı olmalı (dosyalar birbirine uyuyor mu diye kontrol edilir)
// logic.js — Saf fonksiyonlar (tahmin eşleştirme)
// Türkçe karakterleri ve aksanları sadeleştirir: "Mbappé"→"mbappe", "İbrahimoviç"→"ibrahimovic"
function norm(s) {
  return String(s).toLocaleLowerCase('tr').normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/ı/g, 'i').replace(/[^a-z ]/g, '').replace(/\s+/g, ' ').trim();
}
// Harf farkı sayısı (küçük yazım hataları için)
function lev(a, b) {
  const d = Array.from({length: a.length + 1}, (_, i) => [i]);
  for (let j = 1; j <= b.length; j++) d[0][j] = j;
  for (let i = 1; i <= a.length; i++) for (let j = 1; j <= b.length; j++)
    d[i][j] = Math.min(d[i-1][j] + 1, d[i][j-1] + 1, d[i-1][j-1] + (a[i-1] === b[j-1] ? 0 : 1));
  return d[a.length][b.length];
}
// Tahmin doğru mu? Ad, takma ad veya 1 harflik yazım hatası kabul edilir
function isCorrect(guess, p) {
  const g = norm(guess); if (!g) return false;
  return [p.name, ...(p.aliases || [])].map(norm).some(n => n === g || (g.length >= 5 && lev(n, g) <= 1));
}
// Yazım mesafesi (harf yer değiştirmesi 1 hata sayılır)
function osa(a, b) {
  const d = Array.from({length: a.length + 1}, (_, i) => [i]);
  for (let j = 1; j <= b.length; j++) d[0][j] = j;
  for (let i = 1; i <= a.length; i++) for (let j = 1; j <= b.length; j++) {
    d[i][j] = Math.min(d[i-1][j] + 1, d[i][j-1] + 1, d[i-1][j-1] + (a[i-1] === b[j-1] ? 0 : 1));
    if (i > 1 && j > 1 && a[i-1] === b[j-2] && a[i-2] === b[j-1]) d[i][j] = Math.min(d[i][j], d[i-2][j-2] + 1);
  }
  return d[a.length][b.length];
}
// Tahmin doğru değil ama isme çok yakın mı? (yazım hatası: can götürmez, "ismi doğru yazınız" uyarısı verilir)
function isNear(guess, p) {
  const g = norm(guess); if (g.length < 3) return false;
  const tol = g.length <= 4 ? 1 : g.length <= 7 ? 2 : 3;
  const cands = new Set();
  [p.name, ...(p.aliases || [])].forEach(x => { const n = norm(x); cands.add(n); n.split(' ').forEach(t => { if (t.length >= 4) cands.add(t); }); });
  return [...cands].some(n => Math.abs(n.length - g.length) <= tol && osa(n, g) <= tol);
}
// ---------- Ligler ----------
const LIGLER = [
  {id: 'all', ad: 'Tüm Ligler', bayrak: '🌍'},
  {id: 'tr', ad: 'Türkiye Süper Lig', bayrak: '🇹🇷'},
  {id: 'es', ad: 'İspanya LaLiga', bayrak: '🇪🇸'},
  {id: 'it', ad: 'İtalya Serie A', bayrak: '🇮🇹'},
  {id: 'fr', ad: 'Fransa Ligue 1', bayrak: '🇫🇷'},
  {id: 'de', ad: 'Almanya Bundesliga', bayrak: '🇩🇪'},
  {id: 'en', ad: 'İngiltere Premier League', bayrak: '🏴󠁧󠁢󠁥󠁮󠁧󠁿'}
];
// Kulüp → bugün oynadığı lig. Yeni kulüp eklenince buraya da yazılır (listede yoksa oyuncu sadece "Tüm Ligler"de çıkar).
const KULUP_LIG = {};
for (const [lig, kulupler] of Object.entries({
  tr: ['Galatasaray', 'Fenerbahçe', 'Beşiktaş', 'Trabzonspor'],
  es: ['Real Madrid', 'Barcelona', 'Atlético Madrid'],
  it: ['AC Milan', 'Inter', 'Juventus', 'Roma', 'Napoli', 'Parma', 'Fiorentina', 'Lazio'],
  fr: ['Paris Saint-Germain', 'AS Monaco', 'Marseille', 'Lyon'],
  de: ['Bayern Münih', 'Borussia Dortmund', 'Bayer Leverkusen', 'VfB Stuttgart'],
  en: ['Manchester City', 'Manchester United', 'Arsenal', 'Chelsea', 'Liverpool', 'Tottenham', 'Everton', 'Newcastle United']
})) kulupler.forEach(k => KULUP_LIG[k] = lig);
// Oyuncunun EN SON kaydı: bitiş yılı en büyük olan satır (günümüz = en son). Kiralıklar ortada kalırsa yanıltmaz.
function sonKulup(p) {
  let best = null, bestEnd = -1;
  p.rows.forEach(r => {
    const m = String(r[1]).match(/\d{4}/g), end = /günümüz/.test(r[1]) ? 9999 : (m ? +m[m.length - 1] : 0);
    if (end >= bestEnd) { best = r[0]; bestEnd = end; }
  });
  return best;
}
const ligOf = p => p.lig || KULUP_LIG[sonKulup(p)] || null;
const ligHavuzu = (players, id) => id === 'all' ? players : players.filter(p => ligOf(p) === id);
// Seviye atlamak için gereken XP: 1. seviye 15, sonra 20, 30, 40, 50 ve 5'ten sonra hep 50
function xpNeed(level) { return level <= 1 ? 15 : Math.min(level * 10, 50); }
// 1 XP ekler; yeterliyse seviye atlatır ve XP sıfırlanır
function gainXp(st) {
  let level = st.level, xp = st.xp + 1, up = false;
  if (xp >= xpNeed(level)) { level++; xp = 0; up = true; }
  return {level, xp, up};
}
// Can yenilenmesi: her 5 dakikada +1 can (en fazla max). st: {lives, ts}  ts = sayacın başladığı an
const REGEN_MS = 5 * 60000;
function regen(st, now, max = 5) {
  let {lives, ts} = st;
  if (lives >= max) return {lives, ts: now};   // 5 ve üstü canlarda yenilenme yok, can korunur
  if (ts > now) ts = now;
  const gained = Math.floor((now - ts) / REGEN_MS);
  if (gained > 0) { lives = Math.min(max, lives + gained); ts = lives >= max ? now : ts + gained * REGEN_MS; }
  return {lives, ts};
}
// 187000 ms → "3:07"
function fmtTime(ms) { const s = Math.max(0, Math.ceil(ms / 1000)); return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); }
if (typeof module !== 'undefined') module.exports = {LIGLER, KULUP_LIG, sonKulup, ligOf, ligHavuzu, norm, lev, isCorrect, isNear, osa, xpNeed, gainXp, regen, fmtTime, REGEN_MS};
