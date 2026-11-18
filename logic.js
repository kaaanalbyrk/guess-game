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
if (typeof module !== 'undefined') module.exports = {norm, lev, isCorrect};
