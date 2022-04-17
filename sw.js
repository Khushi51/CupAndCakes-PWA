// install service worker
self.addEventListener('install', evt => {
    console.log('service worker has been installed');
});

// activate service worker
self.addEventListener('activate', evt => {
    console.log('service worker has been activated');
});

// fetch event
self.addEventListener('fetch', evt => {
    console.log('fetch event', evt);
});

// push event
self.addEventListener('push', e=> {
    console.log('push', e);
    var body;
    if (e.data) {
    body = e.data.text();
    } else {
    body = 'Push message no payload';
    }
    var options = {
    body: body,
    icon: 'img/cake-1.jpeg',
    vibrate: [100, 50, 100],
    data: {
    dateOfArrival: Date.now(),
    primaryKey: 1
    },
    actions: [
    {action: 'explore', title: 'Explore other items',
    icon: 'img/cake-1.jpeg'},
    {action: 'close', title: 'Maybe later',
    icon: 'img/cake-2.jpeg'},
    ]
    };
    e.waitUntil(
    self.registration.showNotification('Push Notification', options)
    );
    });

// sync event
self.addEventListener('sync', function(event) {
    console.log("sync event", event);
    }
    );
    