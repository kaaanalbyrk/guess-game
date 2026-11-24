// app.js — ekran akışı: açılış → menü → oyun
const $ = s => document.querySelector(s);
const show = id => ['splash','home','game'].forEach(x => $('#' + x).hidden = x !== id);
const S = {queue: [], i: 0, busy: false, lives: 5, coins: 10, xp: 0, level: 1, hinted: false};
const COST_HINT = 1, COST_PASS = 3, LEVEL_COINS = 10, START_COINS = 10;

// 1) Açılış: çember 4 sn'de dolar, sonra menü gelir
requestAnimationFrame(() => requestAnimationFrame(() => $('#arc').style.strokeDashoffset = 0));
setTimeout(() => { show('home'); $('#home').classList.add('in'); }, 4200);

// 2) Oyna: yeşil bar yüklenir, ardından oyuncu çıkar
$('#play').onclick = () => {
  S.queue = [...PLAYERS].sort(() => Math.random() - .5); S.i = 0;
  show('game'); loadPlayer();
};
function loadPlayer() {
  const bar = $('#gbar i'), c = $('#career');
  S.busy = true; c.classList.remove('show'); $('#result').hidden = true; $('#msg').textContent = ''; $('#msg').className = '';
  $('#inp').value = ''; S.hinted = false;
  bar.style.transition = 'none'; bar.style.width = '0'; bar.offsetWidth;
  bar.style.transition = 'width 1.4s ease-out'; bar.style.width = '100%';
  setTimeout(() => { renderCareer(S.queue[S.i]); c.classList.add('show'); S.busy = false; }, 1500);
}
// Kariyer zaman çizgisi: takım + dönem (oyuncunun adı gösterilmez)
function renderCareer(p) {
  $('#career').innerHTML = '<ol class="tl">' + p.rows.map(r => `<li><b>${r[0]}</b><span>${r[1]}</span></li>`).join('') + '</ol>';
  $('#career').scrollTop = 0;
}

// Can sistemi: Yanlış tahmin -1 can. Her 5 dakikada +1 can (5'e kadar), seviye atlayınca +1 can (5'in üstüne de çıkabilir).
const MAX = 5, REGEN_MIN = 5;
function refreshLives() {
  localStorage.removeItem('sg_lock');                       // eski 15 dk kilit sisteminden kalan kayıt
  const v = localStorage.getItem('sg_lives'), t = localStorage.getItem('sg_ts');
  const st = regen({lives: v === null ? MAX : Math.max(0, Math.min(99, +v)), ts: t === null ? Date.now() : +t}, Date.now(), MAX);
  localStorage.setItem('sg_lives', st.lives); localStorage.setItem('sg_ts', st.ts);
  S.lives = st.lives; S.ts = st.ts;
  $('#lives').textContent = S.lives; $('#heart').classList.toggle('empty', S.lives === 0);
  $('#regen').textContent = S.lives < MAX ? fmtTime(nextMs()) : '';
}
const nextMs = () => REGEN_MS - (Date.now() - S.ts);        // bir sonraki cana kalan süre
function setLives(n, hit) {
  n = Math.max(0, Math.min(99, n));
  const ts = n >= MAX ? Date.now() : (S.lives >= MAX ? Date.now() : S.ts);   // can doluyken ilk kayıpta sayaç başlar
  localStorage.setItem('sg_lives', n); localStorage.setItem('sg_ts', ts); refreshLives();
  if (hit) { const h = $('#heart'); h.classList.remove('hit'); h.offsetWidth; h.classList.add('hit'); }
}
function addLife() { refreshLives(); setLives(S.lives + 1); return true; }   // seviye atlayınca can 5'in üstüne de çıkabilir
function showLocked() {
  const m = $('#msg'); m.className = 'err';
  m.textContent = `Tahmin hakkın bitti. ${REGEN_MIN} dakika sonra tekrar gel. (yeni can: ${fmtTime(nextMs())})`;
}
refreshLives();
setInterval(() => {
  const was = S.lives; refreshLives(); const m = $('#msg');
  if (was === 0 && S.lives > 0) { m.textContent = ''; m.className = ''; }
  else if (S.lives === 0 && m.textContent.startsWith('Tahmin hakkın bitti')) showLocked();   // geri sayımı güncelle
}, 1000);

// 3) Tahmin: yalnızca harf girilebilir
$('#inp').addEventListener('input', e => {
  e.target.value = e.target.value.replace(/[^\p{L}\s'’.-]/gu, ''); e.target.classList.remove('bad');
  refreshLives(); if (S.lives === 0) { e.target.value = ''; showLocked(); }   // hak yoksa yazılamaz
});
$('#inp').addEventListener('keydown', e => { if (e.key === 'Enter') guess(); });
$('#go').onclick = guess;
function guess() {
  if (S.busy) return;
  refreshLives(); if (S.lives === 0) return showLocked();
  const p = S.queue[S.i], v = $('#inp').value;
  if (!v.trim()) return;
  if (isCorrect(v, p)) {
    $('#inp').blur();
    const r = gainXp(S); S.xp = r.xp; S.level = r.level;   // her doğru bilişte +1 XP
    let gotLife = false;
    if (r.up) { S.coins += LEVEL_COINS; gotLife = addLife(); }   // seviye atlayınca +10 coin ve +1 can
    saveProgress(); updateHud(); showResult(p, 'ok');
    if (r.up) showLevelUp(gotLife);
  } else if (isNear(v, p)) {                                   // ismi yanlış yazdı: can gitmez, uyarı verilir
    const i = $('#inp'); i.classList.remove('bad'); i.offsetWidth; i.classList.add('bad');
    $('#msg').className = 'err'; $('#msg').textContent = 'Futbolcunun ismini doğru yazınız.';
  } else {
    const i = $('#inp'); i.classList.remove('bad'); i.offsetWidth; i.classList.add('bad');
    setLives(S.lives - 1, true);
    if (S.lives === 0) showLocked(); else { $('#msg').className = 'err'; $('#msg').textContent = `Yanlış! Kalan hak: ${S.lives}`; }
  }
}
// ---------- XP, coin, ipucu ve pas ----------
function loadProgress() {
  const g = (k, d) => { const v = localStorage.getItem(k); return v === null ? d : +v; };
  S.coins = g('sg_coins', START_COINS); S.xp = g('sg_xp', 0); S.level = g('sg_level', 1); updateHud();
}
function saveProgress() { localStorage.setItem('sg_coins', S.coins); localStorage.setItem('sg_xp', S.xp); localStorage.setItem('sg_level', S.level); }
function updateHud() {
  const need = xpNeed(S.level);
  $('#slvl').textContent = S.level; $('#xptxt').textContent = `${S.xp} - ${need}`;
  $('#xpfill').style.width = (S.xp / need * 100) + '%'; $('#coins').textContent = S.coins;
}
function spend(n) {
  if (S.coins < n) { const m = $('#msg'); m.className = 'err'; m.textContent = `Yeterli coin yok (${n} coin gerekir).`; return false; }
  S.coins -= n; saveProgress(); updateHud(); return true;
}
// Sonuç ekranı: doğru bilince ya da pas geçince oyuncunun adı gösterilir
function showResult(p, type) {
  const last = S.i === S.queue.length - 1, ok = type === 'ok';
  $('#result').innerHTML = `<b class="${ok ? '' : 'pass'}">${ok ? '✓ Doğru!' : '⏭ Pas geçildi'}</b><h2>${p.name}</h2><small>${ok ? '+1 XP' : `-${COST_PASS} coin`}</small><button id="next">${last ? 'Tekrar oyna' : 'Sıradaki'}</button>`;
  $('#result').hidden = false;
  $('#next').onclick = () => { S.i++; if (S.i >= S.queue.length) { S.queue.sort(() => Math.random() - .5); S.i = 0; } loadPlayer(); };
}
function showLevelUp(gotLife) {
  $('#up').innerHTML = `<div class="pop"><div class="st"><svg class="ico"><use href="#sStar"/></svg><b>${S.level}</b></div><h3>Tebrikler seviye atladınız</h3><p>Yeni seviye: ${S.level}</p>
    <div class="gain"><svg><use href="#sCoin"/></svg>${LEVEL_COINS} coin kazandınız</div>${gotLife ? '<div class="gain"><svg><use href="#sHeart"/></svg>1 can kazandınız</div>' : ''}<button id="ok">Tamam</button></div>`;
  $('#up').hidden = false; $('#ok').onclick = () => { $('#up').hidden = true; };
}
// İpucu (1 coin): oyuncunun mevkisi. Aynı oyuncuda ikinci basış ücretsiz, tekrar gösterir
$('#hint').onclick = () => {
  if (S.busy) return;
  if (!S.hinted) { if (!spend(COST_HINT)) return; S.hinted = true; }
  $('#msg').className = ''; $('#msg').textContent = 'Mevki: ' + S.queue[S.i].pos;
};
// Pas (3 coin): oyuncu bilinmiş gibi adı gösterilir, XP verilmez
$('#pass').onclick = () => {
  if (S.busy || !spend(COST_PASS)) return;
  $('#inp').blur(); showResult(S.queue[S.i], 'pass');
};
loadProgress();

// Yakınlaştırmayı engelle (iPhone)
['gesturestart','gesturechange','gestureend'].forEach(ev => document.addEventListener(ev, e => e.preventDefault()));
document.addEventListener('touchmove', e => { if (e.touches.length > 1) e.preventDefault(); }, {passive:false});
if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(console.error);
