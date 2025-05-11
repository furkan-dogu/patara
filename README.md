# 📊 Patara 

Bu proje, modern web teknolojileri kullanılarak geliştirilmiş, tarih aralığına göre filtreleme, dinamik sayfalama ve animasyonlu geçişler sunan bir kazanç (earnings) tablosu bileşenidir.

## 🚀 Kullanılan Teknolojiler

- ✅ **Next.js** (`pages` router kullanılmıştır)
- ✅ **TypeScript**
- ✅ **Tailwind CSS**
- ✅ **shadcn/ui** bileşenleri
- ✅ **framer-motion** (animasyonlar için)

## ⚙️ Kurulum ve Geliştirme Ortamını Çalıştırma

> Proje Node.js 18+ sürümüyle test edilmiştir.

## Proje Linki

[https://patara-xi.vercel.app/](https://patara-xi.vercel.app/)

### 1. Bağımlılıkları Yükle

```bash
npm install
```

### 2. Geliştirme Ortamını Başlat

```bash
npm run dev
```

Tarayıcıda http://localhost:3000 adresine giderek projeyi görüntüleyebilirsiniz.

### Üretim Ortamı (Opsiyonel)

```bash
npm run build
npm run start
```

## 🧩 Özellikler

- 📅 **Tarih Filtresi:** `1D`, `1W`, `1M`, `1Y`, `ALL` seçenekleriyle veri filtreleme
- 🔢 **Sayfalama:** Akıllı pagination mantığı (`1 ... 5 6 7 ... 10`) desteklenir
- 🎞️ **Animasyonlar:** `framer-motion` ile satır geçiş animasyonları
- 📱 **Responsive Tasarım:** Mobil uyumlu arayüz
- 🚫 **Boş Veri Durumu:** Filtre sonrası veri yoksa `"No data found"` mesajı gösterilir
- 🎨 **Özelleştirilmiş UI:** Tüm bileşenler `shadcn/ui` ve `tailwindcss` ile stilize edilmiştir

## 📁 Scriptler

| Komut           | Açıklama                            |
|-----------------|-------------------------------------|
| `npm run dev`   | Geliştirme sunucusunu başlatır      |
| `npm run build` | Üretim için projeyi derler          |
| `npm run start` | Derlenmiş projeyi çalıştırır        |
| `npm run lint`  | Kod kalitesini kontrol eder         |
