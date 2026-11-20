// app.js — ekran akışı: açılış → menü → oyun
const $ = s => document.querySelector(s);
const show = id => ['splash','home','game'].forEach(x => $('#' + x).hidden = x !== id);
const S = {queue: [], i: 0, busy: false};

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
  S.busy = true; c.classList.remove('show'); $('#result').hidden = true; $('#msg').textContent = '';
  $('#inp').value = '';
  bar.style.transition = 'none'; bar.style.width = '0'; bar.offsetWidth;
  bar.style.transition = 'width 1.4s ease-out'; bar.style.width = '100%';
  setTimeout(() => { renderCareer(S.queue[S.i]); c.classList.add('show'); S.busy = false; }, 1500);
}
// Kariyer tablosu (oyuncunun adı gösterilmez)
function renderCareer(p) {
 
// Kariyer tablosu (oyuncunun adı gösterilmez)
function renderCareer(p) {
  $('#career').innerHTML =
    `<table>
      <tr>
        <th>Sezon</th>
        <th>Takım</th>
      </tr>` +
    p.rows.map(r =>
      `<tr>
        <td>${r[0]}</td>
        <td>${r[1]}</td>
      </tr>`
    ).join('') +
    `</table>`;

  $('#career').scrollTop = 0;
}


// 3) Tahmin: yalnızca harf girilebilir
$('#inp').addEventListener('input', e => { e.target.value = e.target.value.replace(/[^\p{L}\s'’.-]/gu, ''); e.target.classList.remove('bad'); });
$('#inp').addEventListener('keydown', e => { if (e.key === 'Enter') guess(); });
$('#go').onclick = guess;
function guess() {
  if (S.busy) return;
  const p = S.queue[S.i], v = $('#inp').value;
  if (!v.trim()) return;
  if (isCorrect(v, p)) {
    $('#inp').blur();
    const last = S.i === S.queue.length - 1;
    $('#result').innerHTML = `<b>✓ Doğru!</b><h2>${p.name}</h2><button id="next">${last ? 'Tekrar oyna' : 'Sıradaki'}</button>`;
    $('#result').hidden = false;
    $('#next').onclick = () => { S.i++; if (S.i >= S.queue.length) { S.queue.sort(() => Math.random() - .5); S.i = 0; } loadPlayer(); };
  } else { const i = $('#inp'); i.classList.remove('bad'); i.offsetWidth; i.classList.add('bad'); $('#msg').textContent = 'Yanlış, tekrar dene.'; }
}
// İpucu: oyuncunun baş harfi
$('#hint').onclick = () => { if (!S.busy) $('#msg').textContent = 'Baş harf: ' + S.queue[S.i].name[0]; };

// Yakınlaştırmayı engelle (iPhone)
['gesturestart','gesturechange','gestureend'].forEach(ev => document.addEventListener(ev, e => e.preventDefault()));
document.addEventListener('touchmove', e => { if (e.touches.length > 1) e.preventDefault(); }, {passive:false});
if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(console.error);
