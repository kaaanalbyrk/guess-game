// app.js — ekran akışı: açılış → menü → oyun
const $ = s => document.querySelector(s);
const show = id => ['splash','home','game'].forEach(x => $('#' + x).hidden = x !== id);
const S = {queue: [], i: 0, busy: false, lives: 5};

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
  $('#inp').value = '';
  bar.style.transition = 'none'; bar.style.width = '0'; bar.offsetWidth;
  bar.style.transition = 'width 1.4s ease-out'; bar.style.width = '100%';
  setTimeout(() => { renderCareer(S.queue[S.i]); c.classList.add('show'); S.busy = false; }, 1500);
}
// Kariyer zaman çizgisi: takım + dönem (oyuncunun adı gösterilmez)
function renderCareer(p) {
  $('#career').innerHTML = '<ol class="tl">' + p.rows.map(r => `<li><b>${r[0]}</b><span>${r[1]}</span></li>`).join('') + '</ol>';
  $('#career').scrollTop = 0;
}

// Can sistemi: 5 hak, her yanlışta -1, 0 olunca 15 dk kilit (tarayıcıda saklanır)
const MAX = 5, LOCK_MIN = 15;
function refreshLives() {
  const lock = +localStorage.getItem('sg_lock') || 0, v = localStorage.getItem('sg_lives');
  if (lock && Date.now() >= lock) { localStorage.removeItem('sg_lock'); localStorage.setItem('sg_lives', MAX); }
  S.lives = lock && Date.now() < lock ? 0 : (v === null ? MAX : Math.max(0, Math.min(MAX, +v)));
  $('#lives').textContent = S.lives; $('#heart').classList.toggle('empty', S.lives === 0);
}
function setLives(n) {
  localStorage.setItem('sg_lives', n);
  if (n === 0) localStorage.setItem('sg_lock', Date.now() + LOCK_MIN * 60000);
  refreshLives(); const h = $('#heart'); h.classList.remove('hit'); h.offsetWidth; h.classList.add('hit');
}
function showLocked() {
  const left = Math.max(1, Math.ceil(((+localStorage.getItem('sg_lock') || 0) - Date.now()) / 60000));
  const m = $('#msg'); m.className = 'err'; m.textContent = `Tahmin hakkın bitti. ${LOCK_MIN} dakika sonra tekrar gel. (kalan ~${left} dk)`;
}
refreshLives(); setInterval(() => { const was = S.lives; refreshLives(); if (was === 0 && S.lives > 0) $('#msg').textContent = ''; }, 5000);

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
    const last = S.i === S.queue.length - 1;
    $('#result').innerHTML = `<b>✓ Doğru!</b><h2>${p.name}</h2><button id="next">${last ? 'Tekrar oyna' : 'Sıradaki'}</button>`;
    $('#result').hidden = false;
    $('#next').onclick = () => { S.i++; if (S.i >= S.queue.length) { S.queue.sort(() => Math.random() - .5); S.i = 0; } loadPlayer(); };
  } else {
    const i = $('#inp'); i.classList.remove('bad'); i.offsetWidth; i.classList.add('bad');
    setLives(S.lives - 1);
    if (S.lives === 0) showLocked(); else { $('#msg').className = 'err'; $('#msg').textContent = `Yanlış! Kalan hak: ${S.lives}`; }
  }
}
// İpucu: oyuncunun baş harfi
$('#hint').onclick = () => { if (!S.busy) { $('#msg').className = ''; $('#msg').textContent = 'Baş harf: ' + S.queue[S.i].name[0]; } };

// Yakınlaştırmayı engelle (iPhone)
['gesturestart','gesturechange','gestureend'].forEach(ev => document.addEventListener(ev, e => e.preventDefault()));
document.addEventListener('touchmove', e => { if (e.touches.length > 1) e.preventDefault(); }, {passive:false});
if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(console.error);
