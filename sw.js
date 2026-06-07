// Lector PWA — service worker (offline cache)
const CACHE = "cadence-v12";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-maskable.png",
  "./apple-touch-icon.png",
];

// Install: pre-cache app shell
self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

// Activate: clean old caches
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim())
  );
});

// Fetch: cache-first for app shell + CDN libs, network fallback
self.addEventListener("fetch", (e) => {
  const url = e.request.url;
  // Cache CDN dependencies (React, Babel, fonts, pdf.js) on first use
  const isCDN = url.includes("unpkg.com") || url.includes("cdnjs.cloudflare.com") || url.includes("fonts.googleapis.com") || url.includes("fonts.gstatic.com") || url.includes("jsdelivr.net");
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request).then((cached) => {
      if (cached) return cached;
      return fetch(e.request).then((res) => {
        if ((ASSETS.some((a) => url.endsWith(a.replace("./", ""))) || isCDN) && res.ok) {
          const clone = res.clone();
          caches.open(CACHE).then((c) => c.put(e.request, clone));
        }
        return res;
      }).catch(() => cached);
    })
  );
});
