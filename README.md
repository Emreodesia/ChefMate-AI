# ChefMate AI - Yapay Zeka Destekli Yemek Tarifi Asistanı

ChefMate AI, Gemini AI teknolojisi kullanarak yemek tarifleri, pişirme teknikleri ve mutfak ipuçları sunan modern bir web uygulamasıdır.

## 🚀 Özellikler

- 🤖 **AI Destekli Sohbet**: Gemini AI ile gerçek zamanlı yemek tarifi asistanı
- 🍳 **Detaylı Tarifler**: Malzeme listesi ve adım adım talimatlar
- 🌍 **Dünya Mutfağı**: Farklı kültürlerden tarifler
- 💡 **Mutfak İpuçları**: Pişirme teknikleri ve püf noktaları
- 📱 **Modern UI**: Responsive ve kullanıcı dostu arayüz

## 🛠️ Kurulum

### Gereksinimler
- Node.js (v16 veya üzeri)
- npm veya yarn

### Adımlar

1. **Projeyi klonlayın**
```bash
git clone <repository-url>
cd ChefMate-AI
```

2. **Bağımlılıkları yükleyin**
```bash
npm install
```

3. **Environment variables ayarlayın**
`.env` dosyası oluşturun:
```env
GEMINI_API_KEY=your_gemini_api_key_here
PORT=3001
```

4. **Uygulamayı başlatın**

**Sadece Frontend (Geliştirme):**
```bash
npm run dev
```

**Sadece Backend Server:**
```bash
npm run server
```

**Frontend + Backend (Önerilen):**
```bash
npm run dev:full
```

## 📡 API Endpoints

### Chat Endpoint
- **URL**: `POST /api/chat`
- **Body**: `{ "message": "kullanıcı mesajı" }`
- **Response**: `{ "response": "AI yanıtı", "timestamp": "..." }`

### Health Check
- **URL**: `GET /api/health`
- **Response**: `{ "status": "OK", "message": "..." }`

## 🎯 Kullanım

1. Uygulamayı başlattıktan sonra `http://localhost:5173` adresine gidin
2. Chat bölümünde yemek tarifleri, pişirme teknikleri veya mutfak ipuçları hakkında sorular sorun
3. AI asistanı size detaylı yanıtlar verecektir

## 🔧 Teknolojiler

- **Frontend**: Vue.js 3, Vite
- **Backend**: Node.js, Express.js
- **AI**: Google Gemini API
- **Styling**: CSS3, Custom animations

## 📝 Örnek Sorular

- "Carbonara tarifi nasıl yapılır?"
- "Pilav pişirme teknikleri nelerdir?"
- "Evde pizza hamuru nasıl yapılır?"
- "Balık pişirme ipuçları verir misin?"
- "Tatlı tarifleri önerir misin?"

## 🔒 Güvenlik

- API key'ler environment variables ile güvenli şekilde saklanır
- CORS ayarları yapılandırılmıştır
- Input validation mevcuttur

## 🐛 Sorun Giderme

### Backend bağlantı hatası
- Backend server'ın çalıştığından emin olun (`npm run server`)
- Port 3001'in kullanılabilir olduğunu kontrol edin

### API key hatası
- `.env` dosyasında doğru API key'in olduğunu kontrol edin
- Gemini API key'inizin geçerli olduğunu doğrulayın

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

---

**ChefMate AI** - Mutfakta yapay zeka ile yanınızda! 🍳🤖
