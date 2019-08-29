importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

workbox.routing.registerRoute(
  /\.js$/,
  new workbox.strategies.NetworkFirst()
);

workbox.routing.registerRoute(
  /\.css$/,
  new workbox.strategies.NetworkFirst()
);

workbox.routing.registerRoute(
  /\.(?:png|jpg|jpeg|svg|gif)$/,
  new workbox.strategies.CacheFirst()
);


// ServiceWorker処理：https://developers.google.com/web/fundamentals/primers/service-workers/?hl=ja

// // キャッシュ名とキャッシュファイルの指定
// var CACHE_NAME = 'pwa-sample-caches';
// var urlsToCache = [
// 	'/test/',
// 	'/test/main.css',
// 	'/test/main.js'
// ];

// // インストール処理
// self.addEventListener('install', function(event) {
// 	event.waitUntil(
// 		caches
// 			.open(CACHE_NAME)
// 			.then(function(cache) {
// 				return cache.addAll(urlsToCache);
// 			})
// 	);
// });

// // リソースフェッチ時のキャッシュロード処理
// self.addEventListener('fetch', function(event) {
// 	event.respondWith(
// 		caches
// 			.match(event.request)
// 			.then(function(response) {
// 				return response ? response : fetch(event.request);
// 			})
// 	);
// });
