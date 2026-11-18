// Önbellek: dosyaları güncelleyince VERSION'ı artır.
const VERSION = 'games-v2';
const FILES = ['./','index.html','style.css','app.js','logic.js','players.js','manifest.webmanifest','icons/icon-180.png','icons/icon-192.png','icons/icon-512.png'];
self.addEventListener('install', e => e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting())));
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener('fetch', e => { if (e.request.method === 'GET') e.respondWith(caches.match(e.request, {ignoreSearch:true}).then(h => h || fetch(e.request).catch(() => caches.match('index.html')))); });
