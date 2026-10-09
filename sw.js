const C='gymlog-v4',F=['./','./index.html','./manifest.json','./icon.png','./icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(F)));self.skipWaiting()});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x))))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>{const n=fetch(e.request).then(x=>{if(x&&x.ok)caches.open(C).then(c=>c.put(e.request,x.clone()));return x}).catch(()=>r);return r||n})));
