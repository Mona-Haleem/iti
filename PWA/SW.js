const cacheName = "PWA lab";
const assets = [
    './styles.css',
    './index.html',
    './index.js',
    './manifest/manifest.json',
    './manifest/icon512_maskable.png',
    './manifest/icon512_rounded.png',
    './images/eg.png',
    './images/sd.png'
]

self.addEventListener("install", (installedEvent) => {
    installedEvent.waitUntil(
        caches.open(cacheName).then((cache) => {
            cache.addAll(assets)
        }).catch((err) => console.log(err))
    )
});

this.addEventListener("activate", (activatedEvent) => {
    activatedEvent.waitUntil(
        caches.keys().then((k) => {
            return Promise.all(
                k.filter((key) => key != cacheName).map((key) => caches.delete(key))
            )
        })
    )
})

self.addEventListener("fetch", (fetchedEvent) => {
    if (!navigator.onLine) {
        fetchedEvent.respondWith(
            caches.match(fetchedEvent.request).then(res => res)
        )
    }

})
