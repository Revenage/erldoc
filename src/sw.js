const CACHE = "cache-and-update-v1";

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => {
      cache.addAll([
        "/erldoc/",
        "/erldoc/index.html",
        "/erldoc/content/tags.json",
        "/erldoc/content/**/*",
        "/erldoc/translations/**/*"
      ]);
    })
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(fromCache(event.request));
  event.waitUntil(update(event.request));
});

function fromCache(request) {
  return caches
    .open(CACHE)
    .then(cache =>
      cache.match(request).then(matching => matching || fetch(request))
    )
    .catch(() => fetch(request));
}

function update(request) {
  return caches
    .open(CACHE)
    .then(cache =>
      fetch(request).then(response => cache.put(request, response))
    );
}
