// Service worker mínimo: no cachea nada de forma agresiva, solo existe
// para que Chrome/Android reconozca esta página como una app instalable
// de verdad (con display "fullscreen"), en vez de un simple acceso directo.

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Deja pasar todas las peticiones normalmente (sin caché offline por ahora)
  event.respondWith(fetch(event.request));
});
