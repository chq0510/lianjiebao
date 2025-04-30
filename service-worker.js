
self.addEventListener('install', function(event) {
    console.log('[ServiceWorker] Install');
});

self.addEventListener('fetch', function(event) {
    // 默认直接走网络，保持简单
});
