<template>
  <section class="hero">
    <div class="italian-pattern"></div>
    
    <div class="floating-ingredients">
        <div class="ingredient">🍅</div>
        <div class="ingredient">🧄</div>
        <div class="ingredient">🧀</div>
        <div class="ingredient">🌿</div>
        <div class="ingredient">🍝</div>
    </div>
    
    <div class="hero-content">
        <div class="chef-avatar">👨‍🍳</div>
        
        <h1><span class="brand-name">ChefMate AI</span></h1>
        <p class="subtitle">Nonna'nın Bilgeliği, Yapay Zeka'nın Gücü</p>
        <p class="italian-quote">La cucina italiana è l'amore fatto cibo</p>
        
        <div class="warm-chat">
            <div class="chat-header">
                <div class="ai-chef-avatar">🤖</div>
                <div class="chat-name">Chef Marco AI</div>
                <div style="margin-left: auto; font-size: 0.9rem; color: #00b894;">● Çevrimiçi</div>
            </div>
            
            <div class="chat-input-area">
                <input type="text" class="chat-input" placeholder="Ciao! Bugün hangi İtalyan lezzetini keşfetmek istiyorsun?" readonly v-model="chatInputPlaceholder">
            </div>
            
            <div class="ai-message">
                <span v-html="currentChatMessage"></span>
            </div>
        </div>
        
        <div class="features-garden">
            <div class="feature-card">
                <span class="feature-icon">🍝</span>
                <div class="feature-title">Nonna'nın Sırları</div>
                <div class="feature-desc">Geleneksel İtalyan tariflerini modern tekniklerle birleştiren akıllı öneriler</div>
            </div>
            <div class="feature-card">
                <span class="feature-icon">🎭</span>
                <div class="feature-title">Bölgesel Lezzetler</div>
                <div class="feature-desc">Sicilya'dan Toskana'ya, her bölgenin özgün tariflerini keşfedin</div>
            </div>
            <div class="feature-card">
                <span class="feature-icon">🌿</span>
                <div class="feature-title">Taze Malzemeler</div>
                <div class="feature-desc">Mevsimlik malzemelerle en lezzetli tarifleri buluyor ve öneriyor</div>
            </div>
        </div>
        
        <button class="warm-cta" @click="startCooking">{{ ctaButtonText }}</button>
        
        <div class="italian-stats">
            <div class="stat-item">
                <span class="stat-icon">🏛️</span>
                <span class="stat-number" data-target="500">0</span>
                <div class="stat-label">Geleneksel Tarif</div>
            </div>
            <div class="stat-item">
                <span class="stat-icon">❤️</span>
                <span class="stat-number" data-target="50000">0</span>
                <div class="stat-label">Mutlu Famiglia</div>
            </div>
            <div class="stat-item">
                <span class="stat-icon">⭐</span>
                <span class="stat-number" data-target="4.9">0.0</span>
                <div class="stat-label">Stellato (Yıldızlı)</div>
            </div>
        </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const ctaButtonText = ref('Insieme Cuciniamo! (Birlikte Pişirelim!)');
const chatInputPlaceholder = ref("Ciao! Bugün hangi İtalyan lezzetini keşfetmek istiyorsun?");
const currentChatMessage = ref('<strong>Mamma mia!</strong> Dolabında domates, fesleğen ve mozzarella var mı? Sana perfetto bir Caprese salatası tarifi vereyim! Ayrıca bu malzemelerle yapabileceğin 5 farklı İtalyan tarifi daha var. 🍅✨');

const startCooking = () => {
    const italianPhrases = [
        "Prepariamo tutto! (Her şeyi hazırlıyoruz!) 🍳",
        "La cucina si riscalda... (Mutfak ısınıyor...) 🔥",
        "Benvenuto nella famiglia! (Ailemize hoş geldin!) 👨‍👩‍👧‍👦",
        "Andiamo a cucinare! (Hadi pişirmeye!) 🍝"
    ];
    
    let index = 0;
    const updateButtonText = () => {
        ctaButtonText.value = italianPhrases[index];
        index++;
        
        if (index < italianPhrases.length) {
            setTimeout(updateButtonText, 1200);
        } else {
            setTimeout(() => {
                ctaButtonText.value = "🍝 La Cucina è Pronta! (Mutfak Hazır!)";
                const btn = document.querySelector('.warm-cta');
                if (btn) {
                    btn.style.background = "linear-gradient(135deg, #00b894, #55a3ff)";
                }
            }, 1500);
        }
    };
    
    updateButtonText();
};

const animateNumbers = () => {
    const numbers = document.querySelectorAll('.stat-number');
    
    numbers.forEach(number => {
        const target = parseFloat(number.getAttribute('data-target'));
        const increment = target / 80;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            if (target > 1000) {
                number.textContent = Math.floor(current).toLocaleString();
            } else if (target < 10) {
                number.textContent = current.toFixed(1);
            } else {
                number.textContent = Math.floor(current);
            }
        }, 40);
    });
};

const changeChatResponse = () => {
    const responses = [
        "Perfetto! Sana bugün özel olarak Nonna Teresa'nın gizli ragu tarifini öğreteyim. 100 yıllık aile sırrı! 🍝👵",
        "Che bello! Malzemelerine göre sana 3 farklı pasta tarifi hazırladım. Hangisiyle başlamak istersin? 🤔🍅",
        "Bravo! Bu akşam için romantik bir İtalyan yemeği mi hazırlıyorsun? Sana mükemmel bir menü önereyim! 💕🕯️"
    ];
    
    let responseIndex = 0;
    setInterval(() => {
        currentChatMessage.value = '<strong>Chef Marco düşünüyor...</strong> 🤔💭';
        
        setTimeout(() => {
            currentChatMessage.value = `👨‍🍳 <strong>Ecco!</strong> ${responses[responseIndex]}`;
        }, 2000);
        
        responseIndex = (responseIndex + 1) % responses.length;
    }, 8000);
};

onMounted(() => {
    setTimeout(animateNumbers, 1000);
    setTimeout(changeChatResponse, 3000);
    
    setTimeout(() => {
        chatInputPlaceholder.value = "Benvenuto! Hangi İtalyan lezzeti için yardıma ihtiyacın var? 🇮🇹";
    }, 2000);

    // Malzeme hover efekti
    document.addEventListener('mousemove', (e) => {
        const ingredients = document.querySelectorAll('.ingredient');
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        ingredients.forEach((ingredient, index) => {
            const speed = (index + 1) * 0.3;
            const offsetX = (x - 0.5) * speed * 30;
            const offsetY = (y - 0.5) * speed * 20;
            
            ingredient.style.transform = `translate(${offsetX}px, ${offsetY}px) rotate(${offsetX}deg)`;
        });
    });

    // Scroll efekti
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const chef = document.querySelector('.chef-avatar');
        const pattern = document.querySelector('.italian-pattern');
        
        if (chef) {
          chef.style.transform = `translateY(${scrolled * 0.1}px) rotate(${scrolled * 0.05}deg)`;
        }
        if (pattern) {
          pattern.style.transform = `translateY(${scrolled * 0.2}px)`;
        }
    });
});
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Georgia', 'Times New Roman', serif;
    overflow-x: hidden;
    background: linear-gradient(135deg, #ffeaa7, #fab1a0, #e17055);
}

.hero {
    min-height: 100vh;
    background: linear-gradient(135deg, 
        rgba(255, 234, 167, 0.9) 0%,
        rgba(250, 177, 160, 0.95) 30%,
        rgba(225, 112, 85, 0.9) 70%,
        rgba(186, 104, 85, 0.95) 100%
    );
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding: 40px 20px;
}

/* İtalyan deseni arka plan */
.italian-pattern {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.1;
    background-image: 
        radial-gradient(circle at 25% 25%, #d63031 2px, transparent 2px),
        radial-gradient(circle at 75% 75%, #00b894 2px, transparent 2px),
        radial-gradient(circle at 50% 50%, #fdcb6e 1px, transparent 1px);
    background-size: 50px 50px, 60px 60px, 40px 40px;
    animation: patternFloat 20s linear infinite;
}

@keyframes patternFloat {
    0% { transform: translateX(0) translateY(0); }
    100% { transform: translateX(50px) translateY(30px); }
}

.hero-content {
    text-align: center;
    color: #2d3436;
    z-index: 2;
    max-width: 1000px;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    border-radius: 30px;
    padding: 50px 40px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
    animation: slideUp 1s ease-out;
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(50px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.chef-avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: linear-gradient(135deg, #ff7675, #fd79a8);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
    margin: 0 auto 20px;
    border: 5px solid rgba(255, 255, 255, 0.8);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    animation: chefBounce 3s ease-in-out infinite;
    position: relative;
}

.chef-avatar::after {
    content: '✨';
    position: absolute;
    top: -10px;
    right: -5px;
    font-size: 1.5rem;
    animation: sparkle 2s ease-in-out infinite;
}

@keyframes chefBounce {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
}

@keyframes sparkle {
    0%, 100% { opacity: 0.5; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.2); }
}

.hero h1 {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 15px;
    color: #2d3436;
    text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.3);
    font-family: 'Georgia', serif;
}

.hero .brand-name {
    background: linear-gradient(45deg, #d63031, #e17055, #fdcb6e);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    background-size: 200% 200%;
    animation: colorShift 4s ease-in-out infinite;
}

@keyframes colorShift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
}

.hero .subtitle {
    font-size: 1.4rem;
    margin-bottom: 1.5rem;
    color: #636e72;
    font-style: italic;
    font-weight: 400;
}

.italian-quote {
    font-size: 1.1rem;
    margin-bottom: 2.5rem;
    color: #d63031;
    font-style: italic;
    font-weight: 500;
    position: relative;
}

.italian-quote::before,
.italian-quote::after {
    content: '"';
    font-size: 2rem;
    color: #e17055;
    position: relative;
    top: 5px;
}

/* Sıcak sohbet kutusu */
.warm-chat {
    background: rgba(255, 255, 255, 0.9);
    border-radius: 20px;
    padding: 25px;
    margin-bottom: 2.5rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    border: 3px solid rgba(214, 48, 49, 0.2);
    text-align: left;
    position: relative;
}

.warm-chat::before {
    content: '🍅';
    position: absolute;
    top: -15px;
    left: 20px;
    font-size: 2rem;
    background: white;
    padding: 5px;
    border-radius: 50%;
}

.chat-header {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 15px;
    padding-bottom: 10px;
    border-bottom: 2px dotted rgba(214, 48, 49, 0.3);
}

.ai-chef-avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, #00b894, #55a3ff);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
}

.chat-name {
    font-weight: 600;
    color: #2d3436;
    font-size: 1.1rem;
}

.chat-input-area {
    background: #f8f9fa;
    border-radius: 15px;
    padding: 8px;
    margin-bottom: 15px;
    border: 2px solid rgba(214, 48, 49, 0.2);
}

.chat-input {
    width: 100%;
    background: none;
    border: none;
    padding: 12px 15px;
    font-size: 1rem;
    color: #2d3436;
    outline: none;
    font-family: inherit;
}

.chat-input::placeholder {
    color: #636e72;
    font-style: italic;
}

.ai-message {
    background: linear-gradient(135deg, #ffeaa7, #fab1a0);
    padding: 15px;
    border-radius: 15px;
    color: #2d3436;
    font-size: 0.95rem;
    line-height: 1.6;
    border-left: 4px solid #d63031;
    position: relative;
}

.ai-message::before {
    content: '👨‍🍳';
    margin-right: 8px;
    font-size: 1.2rem;
}

/* İtalyan tarzı özellik kartları */
.features-garden {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
    margin-bottom: 3rem;
}

.feature-card {
    background: rgba(255, 255, 255, 0.8);
    border-radius: 20px;
    padding: 25px;
    text-align: center;
    transition: all 0.3s ease;
    border: 3px solid transparent;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    position: relative;
    overflow: hidden;
}

.feature-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: linear-gradient(90deg, #d63031, #e17055, #fdcb6e, #00b894);
    background-size: 200% 100%;
    animation: rainbowSlide 3s linear infinite;
}

@keyframes rainbowSlide {
    0% { background-position: 0% 0%; }
    100% { background-position: 200% 0%; }
}

.feature-card:hover {
    transform: translateY(-8px) scale(1.02);
    border-color: rgba(214, 48, 49, 0.3);
    box-shadow: 0 15px 40px rgba(214, 48, 49, 0.2);
}

.feature-icon {
    font-size: 3rem;
    margin-bottom: 15px;
    display: block;
    animation: iconBounce 2s ease-in-out infinite;
}

@keyframes iconBounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
}

.feature-title {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 10px;
    color: #2d3436;
}

.feature-desc {
    font-size: 0.95rem;
    color: #636e72;
    line-height: 1.5;
}

/* Sıcak CTA butonu */
.warm-cta {
    background: linear-gradient(135deg, #d63031, #e17055);
    border: none;
    border-radius: 25px;
    padding: 18px 45px;
    color: white;
    font-size: 1.2rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-bottom: 3rem;
    text-transform: none;
    font-family: inherit;
    box-shadow: 0 8px 25px rgba(214, 48, 49, 0.3);
    position: relative;
    overflow: hidden;
}

.warm-cta::before {
    content: '👨‍🍳 ';
    margin-right: 8px;
}

.warm-cta::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.5s ease;
}

.warm-cta:hover::after {
    width: 300px;
    height: 300px;
}

.warm-cta:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(214, 48, 49, 0.4);
}

/* İtalyan istatistikler */
.italian-stats {
    display: flex;
    justify-content: center;
    gap: 3rem;
    flex-wrap: wrap;
}

.stat-item {
    text-align: center;
    background: rgba(255, 255, 255, 0.6);
    padding: 20px;
    border-radius: 15px;
    border: 2px solid rgba(214, 48, 49, 0.2);
    min-width: 150px;
}

.stat-icon {
    font-size: 2rem;
    margin-bottom: 10px;
    display: block;
}

.stat-number {
    display: block;
    font-size: 2.2rem;
    font-weight: 700;
    color: #d63031;
    margin-bottom: 5px;
}

.stat-label {
    font-size: 0.9rem;
    color: #636e72;
    font-weight: 500;
}

/* Yüzen İtalyan öğeleri */
.floating-ingredients {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
}

.ingredient {
    position: absolute;
    font-size: 2rem;
    animation: ingredientFloat 12s infinite ease-in-out;
}

.ingredient:nth-child(1) { top: 10%; left: 10%; animation-delay: 0s; }
.ingredient:nth-child(2) { top: 70%; right: 15%; animation-delay: 3s; }
.ingredient:nth-child(3) { top: 30%; left: 80%; animation-delay: 6s; }
.ingredient:nth-child(4) { bottom: 20%; left: 20%; animation-delay: 9s; }
.ingredient:nth-child(5) { top: 50%; right: 25%; animation-delay: 1.5s; }

@keyframes ingredientFloat {
    0%, 100% {
        transform: translateY(0px) rotate(0deg);
        opacity: 0.4;
    }
    50% {
        transform: translateY(-30px) rotate(180deg);
        opacity: 0.8;
    }
}

/* Responsive Design */
@media (max-width: 768px) {
    .hero-content {
        padding: 30px 20px;
    }
    
    .hero h1 {
        font-size: 2.5rem;
    }
    
    .chef-avatar {
        width: 100px;
        height: 100px;
        font-size: 3rem;
    }
    
    .features-garden {
        grid-template-columns: 1fr;
    }
    
    .italian-stats {
        gap: 1.5rem;
    }
    
    .chat-header {
        flex-direction: column;
        text-align: center;
        gap: 10px;
    }
}
</style> 