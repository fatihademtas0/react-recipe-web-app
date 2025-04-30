# 👨‍🍳 Chef Claude - Yapay Zekayla Güçlendirilmiş Yemek Tarifi Uygulaması

Chef Claude, sahip olduğunuz malzemelere göre size önerilen bir yemek tarifi sunan, Hugging Face'in AI gücünü kullanan modern bir React uygulamasıdır. Kullanıcı sadece birkaç malzeme yazar ve Chef Claude ona özel bir tarif önerir!

## 🚀 Özellikler

- Kullanıcının girdiği malzemelere göre tarif üretir
- İngilizce ve Türkçe dil desteği
- AI (Mixtral - Hugging Face) destekli tarif oluşturma
- React tabanlı component yapısı
- Markdown formatında tarif gösterimi
- Dinamik form ve liste yönetimi

## 🌐 Dil Desteği
- Uygulama İngilizce (en) ve Türkçe (tr) dillerini destekler. Form üzerindeki dropdown’dan istediğiniz dili seçebilirsiniz.

## 🧰 Kullanılan Teknolojiler

- React (Vite + JSX)
- Hugging Face Inference API (Mixtral Modeli)
- `react-markdown` paketi ile formatlı içerik gösterimi
- CSS ile temel stil düzenlemeleri
- .env dosyası ile güvenli token saklama

## 👨‍🍳 Ekran Görüntüleri

### Türkçe
![app-tr](https://github.com/user-attachments/assets/28e41322-5039-426f-bba9-9bdc5bd573d8)

![tarif-tr](https://github.com/user-attachments/assets/3cd1958e-22d0-462a-90aa-6fbda7a3d6a9)

### İngilizce
![app-en](https://github.com/user-attachments/assets/21a6cc1d-0745-4b6b-b44d-b49da7f203cd)

![recipe](https://github.com/user-attachments/assets/11619d2d-ed97-414c-bb68-0bcf0d352a2b)



## 📦 Kurulum

Projenin çalışması için aşağıdaki adımları izle:

### 1. Bu repoyu klonla:

```bash
git clone https://github.com/fatihademtas0/react-recipe-web-app.git
cd react-recipe-web-app
```

### 2. Bağımlılıkları Yükle:

```bash
npm install
```

### 3. .env Dosyasını Yapılandır
Proje kök dizininde bir .env dosyası oluşturmanız gerekecek. Bu dosyada Hugging Face API erişim anahtarınızı saklayacaksınız. Dosya şu şekilde olmalıdır:

```bash
VITE_HF_ACCESS_TOKEN=your_huggingface_api_token
```

### 4. Geliştirme Sunucusunu Çalıştır

```bash
npm run dev
```

### 5. Uygulamayı Görüntüle
Tarayıcınızda http://localhost:3000 adresine giderek uygulamayı görebilirsiniz. Malzemelerinizi ekleyebilir ve İngilizce veya Türkçe olarak tarif önerileri alabilirsiniz!



