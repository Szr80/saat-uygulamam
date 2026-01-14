// Bildirim geldiğinde yapılacak işlem
self.addEventListener('push', function(event) {
    const data = event.data ? event.data.text() : 'Yeni bir sistem mesajı var!';
    
    const options = {
        body: data,
        icon: 'https://cdn-icons-png.flaticon.com/512/3103/3103611.png',
        badge: 'https://cdn-icons-png.flaticon.com/512/3103/3103611.png',
        vibrate: [300, 100, 300],
        tag: 'canli-mesaj', // Üst üste binmesin, güncellensin
        renotify: true,    // Her yeni mesajda tekrar titret/ses çıkar
        data: {
            dateOfArrival: Date.now(),
            primaryKey: '1'
        }
    };

    event.waitUntil(
        self.registration.showNotification('YAVRU UYGULAMA', options)
    );
});

// Bildirime tıklandığında uygulamayı aç
self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(
        clients.openWindow('/') 
    );
});
