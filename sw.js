importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-database-compat.js');

const firebaseConfig = {
    databaseURL: "https://ana-uygulama-f22cb-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Arka planda dinleme başlat
db.ref('ortakKanal').on('value', (snapshot) => {
    const data = snapshot.val();
    if (data && data.metin) {
        // Bildirimi göster
        self.registration.showNotification('YAVRU UYGULAMA', {
            body: data.metin,
            icon: 'https://cdn-icons-png.flaticon.com/512/3103/3103611.png',
            vibrate: [300, 100, 300],
            tag: 'mesaj-bildirim',
            renotify: true
        });
    }
});

self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    event.waitUntil(clients.openWindow('/'));
});
