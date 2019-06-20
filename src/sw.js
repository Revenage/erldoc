const CACHE = "cache-and-update-v1";

self.addEventListener("install", event => {
  event.waitUntil(
    caches
      .open(CACHE)
      .then(cache =>
        cache.addAll([
          "/erldoc/",
          "/erldoc/index.html",
          "/erldoc/*.png",
          "/erldoc/*.svg",
          "/erldoc/content/tags.json",
          "/erldoc/content/**/*.json",
          "/erldoc/translations/**/*.json"
        ])
      )
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(fromCache(event.request));
  event.waitUntil(update(event.request));
});

self.addEventListener("activate", event => {
  console.log("activated");
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
    )
    .catch(err => console.log(err));
}