<script setup>
import { ref, onMounted } from 'vue';
import ChatSection from './components/ChatSection.vue';
import RecipeHighlight from './components/RecipeHighlight.vue';
import CategoriesSection from './components/CategoriesSection.vue';
import RecipeDetail from './components/RecipeDetail.vue';
import BlogSection from './components/BlogSection.vue';
import AppFooter from './components/AppFooter.vue';

const isDarkMode = ref(false);

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  if (isDarkMode.value) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
};

onMounted(() => {
  // Check for user's preferred color scheme or saved setting
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (prefersDark) {
    isDarkMode.value = true;
    document.body.classList.add('dark-mode');
  }
});
</script>

<template>
  <!-- Animated Background Particles -->
  <div class="particles-container">
    <div class="particle" v-for="i in 20" :key="i"></div>
  </div>

  <!-- Header -->
  <div class="header">
    <div class="container">
      <div class="logo-container">
        <div class="logo-icon">🍝</div>
        <h1>ChefMate AI</h1>
      </div>
      <p class="subtitle">Nonna'nın Bilgeliği, Yapay Zeka'nın Gücü</p>
      <p class="italian-quote">La cucina italiana è l'amore fatto cibo</p>
      <div class="premium-badges">
        <div class="premium-badge">
          <span class="badge-icon">⭐</span>
          <span>Premium AI Technology</span>
        </div>
        <div class="premium-badge">
          <span class="badge-icon">🏆</span>
          <span>5-Star Rated</span>
        </div>
        <div class="premium-badge">
          <span class="badge-icon">💎</span>
          <span>Luxury Experience</span>
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <!-- Chat Section -->
    <ChatSection />

    <!-- Content Grid -->
    <div class="content-grid">
      <!-- Günün Tarifi -->
      <RecipeHighlight />
      
      <!-- Kategoriler -->
      <CategoriesSection />
    </div>

    <!-- Tarif Detayı -->
    <RecipeDetail />

    <!-- Blog Section -->
    <BlogSection />
  </div>

  <!-- Footer -->
  <AppFooter :isDarkMode="isDarkMode" @toggle-dark-mode="toggleDarkMode" />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Cinzel:wght@400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --primary-color: #1a1a1a;
  --secondary-color: #d4af37;
  --accent-color: #ffd700;
  --gold-gradient: linear-gradient(135deg, #d4af37 0%, #ffd700 50%, #f4c430 100%);
  --premium-gradient: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%);
  --bg-gradient: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #2d2d2d 100%);
  --text-light: #ffffff;
  --text-gold: #d4af37;
  --text-dark: #1a1a1a;
  --glass-bg: rgba(255, 255, 255, 0.05);
  --glass-border: rgba(212, 175, 55, 0.2);
  --premium-shadow: 0 20px 60px rgba(212, 175, 55, 0.15);
  --luxury-shadow: 0 30px 80px rgba(212, 175, 55, 0.25);
}

body {
  font-family: 'Inter', sans-serif;
  background: var(--bg-gradient);
  color: var(--text-light);
  line-height: 1.6;
  overflow-x: hidden;
}

body::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="20" cy="20" r="0.5" fill="rgba(212,175,55,0.1)"/><circle cx="80" cy="40" r="0.5" fill="rgba(212,175,55,0.1)"/><circle cx="40" cy="80" r="0.5" fill="rgba(212,175,55,0.1)"/><circle cx="60" cy="60" r="0.5" fill="rgba(212,175,55,0.1)"/></pattern></defs><rect width="100%" height="100%" fill="url(%23grain)"/></svg>');
  pointer-events: none;
  z-index: -1;
}

/* Animated Particles */
.particles-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: var(--text-gold);
  border-radius: 50%;
  animation: float-particle 6s infinite linear;
  opacity: 0.6;
}

.particle:nth-child(1) { left: 10%; animation-delay: 0s; }
.particle:nth-child(2) { left: 20%; animation-delay: 1s; }
.particle:nth-child(3) { left: 30%; animation-delay: 2s; }
.particle:nth-child(4) { left: 40%; animation-delay: 3s; }
.particle:nth-child(5) { left: 50%; animation-delay: 4s; }
.particle:nth-child(6) { left: 60%; animation-delay: 5s; }
.particle:nth-child(7) { left: 70%; animation-delay: 0s; }
.particle:nth-child(8) { left: 80%; animation-delay: 1s; }
.particle:nth-child(9) { left: 90%; animation-delay: 2s; }
.particle:nth-child(10) { left: 15%; animation-delay: 3s; }
.particle:nth-child(11) { left: 25%; animation-delay: 4s; }
.particle:nth-child(12) { left: 35%; animation-delay: 5s; }
.particle:nth-child(13) { left: 45%; animation-delay: 0s; }
.particle:nth-child(14) { left: 55%; animation-delay: 1s; }
.particle:nth-child(15) { left: 65%; animation-delay: 2s; }
.particle:nth-child(16) { left: 75%; animation-delay: 3s; }
.particle:nth-child(17) { left: 85%; animation-delay: 4s; }
.particle:nth-child(18) { left: 95%; animation-delay: 5s; }
.particle:nth-child(19) { left: 5%; animation-delay: 0s; }
.particle:nth-child(20) { left: 85%; animation-delay: 1s; }

@keyframes float-particle {
  0% {
    transform: translateY(100vh) scale(0);
    opacity: 0;
  }
  10% {
    opacity: 0.6;
  }
  90% {
    opacity: 0.6;
  }
  100% {
    transform: translateY(-100px) scale(1);
    opacity: 0;
  }
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
}

/* Header */
.header {
  text-align: center;
  padding: 100px 0;
  background: var(--premium-gradient);
  backdrop-filter: blur(40px);
  border-bottom: 3px solid var(--glass-border);
  margin-bottom: 80px;
  animation: slideDown 1.2s ease-out;
  position: relative;
  overflow: hidden;
}

.header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, transparent 30%, rgba(212, 175, 55, 0.1) 50%, transparent 70%);
  animation: shimmer 4s infinite;
}

.header::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 50%, rgba(255, 215, 0, 0.1) 0%, transparent 50%);
  animation: pulse-glow 4s ease-in-out infinite alternate;
}

@keyframes pulse-glow {
  0% { opacity: 0.3; }
  100% { opacity: 0.7; }
}

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  margin-bottom: 30px;
}

.logo-icon {
  font-size: 5em;
  filter: drop-shadow(0 0 30px rgba(212, 175, 55, 0.8));
  animation: glow 3s ease-in-out infinite alternate;
  position: relative;
}

.logo-icon::before {
  content: '';
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  background: var(--gold-gradient);
  border-radius: 50%;
  z-index: -1;
  animation: rotate 10s linear infinite;
  opacity: 0.3;
}

@keyframes rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes glow {
  from { 
    filter: drop-shadow(0 0 30px rgba(212, 175, 55, 0.8));
    transform: scale(1);
  }
  to { 
    filter: drop-shadow(0 0 50px rgba(212, 175, 55, 1));
    transform: scale(1.05);
  }
}

.header h1 {
  font-family: 'Cinzel', serif;
  font-size: 4.5em;
  font-weight: 700;
  margin-bottom: 20px;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  background: var(--gold-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  letter-spacing: 3px;
  position: relative;
}

.header h1::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 3px;
  background: var(--gold-gradient);
  border-radius: 2px;
}

.header .subtitle {
  font-size: 1.6em;
  color: var(--text-gold);
  margin-bottom: 20px;
  font-style: italic;
  font-weight: 300;
  letter-spacing: 2px;
}

.header .italian-quote {
  font-family: 'Playfair Display', serif;
  font-size: 1.5em;
  color: var(--accent-color);
  font-style: italic;
  margin-top: 20px;
  letter-spacing: 2px;
  text-shadow: 0 2px 8px rgba(212, 175, 55, 0.3);
}

.premium-badges {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
  flex-wrap: wrap;
}

.premium-badge {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: rgba(212, 175, 55, 0.15);
  padding: 15px 25px;
  border-radius: 35px;
  border: 2px solid var(--glass-border);
  backdrop-filter: blur(15px);
  font-weight: 600;
  color: var(--text-gold);
  box-shadow: var(--premium-shadow);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.premium-badge::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.premium-badge:hover::before {
  left: 100%;
}

.premium-badge:hover {
  transform: translateY(-3px);
  box-shadow: var(--luxury-shadow);
  border-color: rgba(212, 175, 55, 0.4);
}

.badge-icon {
  font-size: 1.3em;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

/* Content Grid */
.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-bottom: 100px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .header h1 {
    font-size: 3.2em;
  }
  
  .content-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .logo-container {
    flex-direction: column;
    gap: 15px;
  }
  
  .premium-badges {
    flex-direction: column;
    align-items: center;
  }
  
  .premium-badge {
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex-grow: 1;
}
</style>
