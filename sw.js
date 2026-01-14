// Uygulamanın telefon hafızasına düzgün yerleşmesi için gerekli en temel servis bekçisi
const CACHE_NAME = 'yavru-saat-v1';

// Yükleme aşaması
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

// Aktivasyon aşaması
self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

// Veri akışını engellemeyen, sadece uygulamanın "Uygulama" olarak tanınmasını sağlayan bölüm
self.addEventListener('fetch', (event) => {
    // Statik dosya yönetimi gerekirse buraya eklenir, şimdilik boş bırakıyoruz.
});
