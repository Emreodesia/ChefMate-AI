<script setup>
import { ref, onMounted } from 'vue';

const chatMessages = ref([]);
const messageInput = ref('');
const chatMessagesContainer = ref(null);

const recipes = {
  'carbonara': {
    title: '🍝 Spaghetti Carbonara',
    ingredients: ['400g spaghetti', '200g guanciale', '4 yumurta sarısı', '100g Pecorino Romano', 'Karabiber'],
    instructions: 'Guanciale\'yi kızartın, yumurta sarısı ve peyniri karıştırın. Haşlanmış spaghettiyi tavada karıştırın. Ateşten alıp yumurta karışımını ekleyin.',
    time: '20 dakika',
    difficulty: 'Orta'
  },
  'risotto': {
    title: '🍚 Mantarlı Risotto',
    ingredients: ['300g risotto pirinci', '500ml tavuk suyu', '200g mantar', '1 soğan', '100ml beyaz şarap', 'Parmesan'],
    instructions: 'Soğanı kavurun, pirinci ekleyin. Şarapla deglaze edin. Sıcak suyu yavaşça ekleyin. Mantarları ekleyin.',
    time: '35 dakika',
    difficulty: 'Orta'
  },
  'tiramisu': {
    title: '🍰 Tiramisu',
    ingredients: ['500g mascarpone', '6 yumurta', '100g şeker', '300ml espresso', 'Kedi dili bisküvi', 'Kakao'],
    instructions: 'Yumurta sarısı ve şekeri çırpın. Mascarpone ekleyin. Bisküvileri kahveye batırın. Katmanlar halinde dizin.',
    time: '30 dakika + 4 saat soğutma',
    difficulty: 'Kolay'
  }
};

const addMessage = (content, isUser = false, customId = null) => {
  chatMessages.value.push({
    id: customId || Date.now(),
    content,
    isUser
  });
  
  // Scroll to bottom after message is added
  setTimeout(() => {
    if (chatMessagesContainer.value) {
      chatMessagesContainer.value.scrollTop = chatMessagesContainer.value.scrollHeight;
    }
  }, 100);
};

const generateResponse = async (userMessage) => {
  try {
    const response = await fetch('http://localhost:3001/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: userMessage })
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error('Error calling AI API:', error);
    return 'Üzgünüm, şu anda AI servisi kullanılamıyor. Lütfen daha sonra tekrar deneyin. 🤖';
  }
};

const sendMessage = async () => {
  const message = messageInput.value.trim();
  if (!message) return;

  addMessage(message, true);
  messageInput.value = '';

  // Loading mesajı ekle
  const loadingId = Date.now();
  addMessage('🤖 AI düşünüyor...', false, loadingId);

  try {
    const response = await generateResponse(message);
    
    // Loading mesajını kaldır ve AI yanıtını ekle
    chatMessages.value = chatMessages.value.filter(msg => msg.id !== loadingId);
    addMessage(response);
  } catch (error) {
    // Loading mesajını kaldır ve hata mesajını ekle
    chatMessages.value = chatMessages.value.filter(msg => msg.id !== loadingId);
    addMessage('Üzgünüm, bir hata oluştu. Lütfen tekrar deneyin.');
  }
};

const handleKeyPress = async (e) => {
  if (e.key === 'Enter') {
    await sendMessage();
  }
};

onMounted(() => {
  // Add initial bot message
  addMessage('Ciao! Ben ChefMate AI, İtalyan mutfağının sırlarını ve dünya lezzetlerini biliyorum. Size nasıl yardımcı olabilirim? 🍝✨');
});
</script>

<template>
  <div class="chat-section">
    <div class="luxury-border">
      <div class="border-corner top-left"></div>
      <div class="border-corner top-right"></div>
      <div class="border-corner bottom-left"></div>
      <div class="border-corner bottom-right"></div>
    </div>
    
    <div class="chat-header">
      <div class="ai-logo">
        <div class="logo-inner">🤖</div>
        <div class="logo-ring"></div>
        <div class="logo-particles">
          <div class="particle" v-for="i in 6" :key="i"></div>
        </div>
      </div>
      <h2 class="chat-title">ChefMate AI</h2>
      <p class="chat-subtitle">Premium Yapay Zeka Destekli Kişisel Şef Asistanınız</p>
      <div class="ai-features">
        <div class="feature-item">
          <span class="feature-icon">🧠</span>
          <span>Akıllı Tarif Önerisi</span>
        </div>
        <div class="feature-item">
          <span class="feature-icon">⚡</span>
          <span>Anında Yanıt</span>
        </div>
        <div class="feature-item">
          <span class="feature-icon">🌍</span>
          <span>Dünya Mutfağı</span>
        </div>
        <div class="feature-item">
          <span class="feature-icon">💡</span>
          <span>Pratik İpuçları</span>
        </div>
      </div>
    </div>
    <div class="chat-container">
      <div class="chat-messages" ref="chatMessagesContainer">
        <div 
          v-for="message in chatMessages" 
          :key="message.id" 
          :class="['message', message.isUser ? 'user' : 'bot']"
        >
          <div class="message-content" v-html="message.content"></div>
        </div>
      </div>
      <div class="chat-input">
        <input 
          type="text" 
          v-model="messageInput"
          @keypress="handleKeyPress"
          placeholder="Tarif sorun, ipuçları alın..." 
        />
        <button class="send-button" @click="sendMessage" :disabled="messageInput.trim().length === 0">
          <span>Gönder</span>
          <div class="button-glow"></div>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.chat-section {
  background: linear-gradient(135deg, rgba(26, 26, 26, 0.95), rgba(45, 45, 45, 0.95));
  backdrop-filter: blur(40px);
  border-radius: 35px;
  border: 3px solid var(--glass-border);
  padding: 60px;
  margin-bottom: 100px;
  box-shadow: var(--luxury-shadow);
  animation: fadeInUp 1.2s ease-out;
  position: relative;
  overflow: hidden;
}

.luxury-border {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
}

.border-corner {
  position: absolute;
  width: 50px;
  height: 50px;
  border: 2px solid var(--text-gold);
  opacity: 0.6;
}

.top-left {
  top: 20px;
  left: 20px;
  border-right: none;
  border-bottom: none;
}

.top-right {
  top: 20px;
  right: 20px;
  border-left: none;
  border-bottom: none;
}

.bottom-left {
  bottom: 20px;
  left: 20px;
  border-right: none;
  border-top: none;
}

.bottom-right {
  bottom: 20px;
  right: 20px;
  border-left: none;
  border-top: none;
}

.chat-section::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 50%);
  animation: rotate 20s linear infinite;
  pointer-events: none;
}

.chat-section::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, transparent 30%, rgba(212, 175, 55, 0.05) 50%, transparent 70%);
  animation: shimmer 4s infinite;
  pointer-events: none;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.chat-header {
  text-align: center;
  margin-bottom: 50px;
  position: relative;
  z-index: 2;
}

.ai-logo {
  width: 120px;
  height: 120px;
  margin: 0 auto 30px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-inner {
  width: 100px;
  height: 100px;
  background: var(--gold-gradient);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3.5em;
  box-shadow: 0 20px 50px rgba(212, 175, 55, 0.5);
  animation: pulse 3s infinite;
  position: relative;
  border: 3px solid rgba(212, 175, 55, 0.4);
  z-index: 2;
}

.logo-ring {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  background: var(--gold-gradient);
  border-radius: 50%;
  z-index: 1;
  animation: rotate 8s linear infinite;
  opacity: 0.3;
}

.logo-particles {
  position: absolute;
  width: 100%;
  height: 100%;
}

.logo-particles .particle {
  position: absolute;
  width: 6px;
  height: 6px;
  background: var(--text-gold);
  border-radius: 50%;
  animation: orbit 4s linear infinite;
}

.logo-particles .particle:nth-child(1) { top: 10%; left: 50%; animation-delay: 0s; }
.logo-particles .particle:nth-child(2) { top: 20%; right: 20%; animation-delay: 0.5s; }
.logo-particles .particle:nth-child(3) { bottom: 20%; left: 20%; animation-delay: 1s; }
.logo-particles .particle:nth-child(4) { bottom: 10%; left: 50%; animation-delay: 1.5s; }
.logo-particles .particle:nth-child(5) { top: 50%; left: 10%; animation-delay: 2s; }
.logo-particles .particle:nth-child(6) { top: 50%; right: 10%; animation-delay: 2.5s; }

@keyframes orbit {
  0% {
    transform: rotate(0deg) translateX(60px) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translateX(60px) rotate(-360deg);
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
    box-shadow: 0 20px 50px rgba(212, 175, 55, 0.5);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 25px 60px rgba(212, 175, 55, 0.7);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 20px 50px rgba(212, 175, 55, 0.5);
  }
}

.chat-title {
  font-family: 'Cinzel', serif;
  font-size: 3em;
  font-weight: 700;
  background: var(--gold-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 20px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  letter-spacing: 3px;
}

.chat-subtitle {
  color: var(--text-gold);
  font-size: 1.3em;
  margin-bottom: 25px;
  font-style: italic;
  font-weight: 300;
  letter-spacing: 2px;
}

.ai-features {
  display: flex;
  justify-content: center;
  gap: 35px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(212, 175, 55, 0.15);
  padding: 18px 25px;
  border-radius: 30px;
  border: 2px solid rgba(212, 175, 55, 0.3);
  backdrop-filter: blur(20px);
  transition: all 0.4s ease;
  font-size: 1em;
  font-weight: 600;
  color: var(--text-gold);
  position: relative;
  overflow: hidden;
}

.feature-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.feature-item:hover::before {
  left: 100%;
}

.feature-item:hover {
  background: rgba(212, 175, 55, 0.25);
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(212, 175, 55, 0.3);
  border-color: rgba(212, 175, 55, 0.5);
}

.feature-icon {
  font-size: 1.4em;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.chat-container {
  height: 500px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 25px;
  border: 2px solid rgba(212, 175, 55, 0.3);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
  box-shadow: inset 0 0 40px rgba(0, 0, 0, 0.4);
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 30px;
  scroll-behavior: smooth;
}

.message {
  margin-bottom: 25px;
  animation: messageSlide 0.7s ease-out;
}

@keyframes messageSlide {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.message.user {
  text-align: right;
}

.message.bot {
  text-align: left;
}

.message-content {
  display: inline-block;
  padding: 20px 30px;
  border-radius: 30px;
  max-width: 70%;
  backdrop-filter: blur(20px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  font-size: 1.1em;
  line-height: 1.7;
}

.message.user .message-content {
  background: var(--gold-gradient);
  color: var(--text-dark);
  border-radius: 30px 30px 10px 30px;
  font-weight: 600;
  box-shadow: 0 10px 30px rgba(212, 175, 55, 0.3);
}

.message.bot .message-content {
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 30px 30px 30px 10px;
  border: 2px solid rgba(212, 175, 55, 0.3);
}

.chat-input {
  display: flex;
  padding: 30px;
  background: rgba(0, 0, 0, 0.3);
  border-top: 2px solid rgba(212, 175, 55, 0.3);
  gap: 25px;
}

.chat-input input {
  flex: 1;
  padding: 20px 30px;
  border: 2px solid rgba(212, 175, 55, 0.4);
  border-radius: 35px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1.1em;
  outline: none;
  backdrop-filter: blur(20px);
  transition: all 0.4s ease;
  font-weight: 500;
}

.chat-input input::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.chat-input input:focus {
  border-color: var(--accent-color);
  box-shadow: 0 0 30px rgba(255, 215, 0, 0.4);
  background: rgba(255, 255, 255, 0.2);
}

.send-button {
  padding: 20px 35px;
  background: var(--gold-gradient);
  color: var(--text-dark);
  border: none;
  border-radius: 35px;
  cursor: pointer;
  font-weight: 700;
  font-size: 1.1em;
  transition: all 0.4s ease;
  box-shadow: 0 12px 35px rgba(212, 175, 55, 0.4);
  letter-spacing: 2px;
  position: relative;
  overflow: hidden;
}

.send-button .button-glow {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.5s ease;
}

.send-button:hover .button-glow {
  left: 100%;
}

.send-button:hover {
  transform: translateY(-5px);
  box-shadow: 0 18px 45px rgba(212, 175, 55, 0.5);
  background: linear-gradient(135deg, #ffd700, #d4af37, #f4c430);
}

@media (max-width: 768px) {
  .chat-container {
    height: 450px;
  }
  
  .chat-section {
    padding: 40px 25px;
  }
  
  .ai-features {
    gap: 25px;
  }
  
  .feature-item {
    padding: 15px 20px;
    font-size: 0.95em;
  }
  
  .luxury-border {
    display: none;
  }
}
</style> 