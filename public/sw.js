const CACHE_NAME = 'avedu-v1';
const urlsToCache = [
  '/',
  '/assets/hero-education.jpg',
  '/assets/course/mba.jpg',
  '/assets/course/bca.jpg',
  '/assets/course/bba.jpg',
  '/assets/course/bcom.jpg',
  '/lovable-uploads/d1a868cd-cbeb-4c57-9a43-86bb3e758613.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});