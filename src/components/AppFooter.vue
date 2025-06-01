<script setup>
import { ref } from 'vue';

defineProps({
  isDarkMode: Boolean
});

const toggleDarkMode = () => {
  // Emit an event to the parent (App.vue) to handle dark mode toggle
  // This will be handled in App.vue, which controls the body class
};
</script>

<template>
  <footer class="hero-footer">
    <div class="footer-content-new">
      <div class="social-icons-new">
        <a href="#" class="icon-link glass-effect"><img src="/icons/facebook.svg" alt="Facebook"></a>
        <a href="#" class="icon-link glass-effect"><img src="/icons/instagram.svg" alt="Instagram"></a>
        <a href="#" class="icon-link glass-effect"><img src="/icons/twitter.svg" alt="Twitter"></a>
      </div>
      <div class="subscription-form-new glass-effect">
        <h3>Yeniliklerden Haberdar Olun!</h3>
        <div class="subscribe-input-group">
          <input type="email" placeholder="E-posta adresiniz..." class="glass-effect">
          <button class="subscribe-btn glass-effect">Abone Ol</button>
        </div>
      </div>
    </div>
    <div class="dark-mode-toggle-new">
      <label for="dark-mode-checkbox">Dark Mode</label>
      <input type="checkbox" id="dark-mode-checkbox" :checked="isDarkMode" @change="$emit('toggle-dark-mode')">
    </div>
    <p class="copyright">&copy; {{ new Date().getFullYear() }} Yemek Tarifleri. Tüm Hakları Saklıdır.</p>
  </footer>
</template>

<style scoped>
.hero-footer {
  background: linear-gradient(135deg, 
      rgba(255, 234, 167, 0.9) 0%,
      rgba(250, 177, 160, 0.95) 30%,
      rgba(225, 112, 85, 0.9) 70%,
      rgba(186, 104, 85, 0.95) 100%
  );
  color: var(--color-dark-text); /* HeroSection metin rengine uygun */
  padding: 40px 20px;
  text-align: center;
  margin-top: 40px;
  position: relative;
  overflow: hidden;
}

.hero-footer::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="food-pattern-footer" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="2" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23food-pattern-footer)"/></svg>');
    animation: float 20s ease-in-out infinite reverse;
}

.footer-content-new {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
  z-index: 1;
  position: relative;
}

.social-icons-new {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
}

.icon-link {
  display: inline-block;
  padding: 10px;
  border-radius: 50%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.icon-link:hover {
  transform: translateY(-5px) scale(1.1);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.social-icons-new img {
  width: 25px;
  height: 25px;
  /* filter: brightness(0) invert(1); */ /* İkonları beyaz yapmak için - HeroSection renkleri koyu olduğu için kaldırıyorum */
  filter: none; /* İkonların orijinal renklerini kullanmak için */
}

.subscription-form-new {
  padding: 20px;
  border-radius: 10px;
  max-width: 400px;
  text-align: center;
  background: rgba(255, 255, 255, 0.15); /* HeroSection content background */
  backdrop-filter: blur(10px); /* HeroSection content blur */
  border: 2px solid rgba(255, 255, 255, 0.3); /* HeroSection content border */
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1); /* HeroSection content shadow */
}

.subscription-form-new h3 {
  font-family: var(--font-serif);
  font-size: 2rem;
  margin-bottom: 15px;
  color: var(--color-dark-text); /* HeroSection metin rengine uygun */
  text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.3); /* HeroSection h1 text-shadow */
}

.subscribe-input-group {
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
}

.subscribe-input-group input {
  flex: 1;
  padding: 12px 15px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.2);
  color: var(--color-dark-text); /* HeroSection input text color */
  outline: none;
}

.subscribe-input-group input::placeholder {
  color: rgba(0, 0, 0, 0.5); /* HeroSection input placeholder color */
}

.subscribe-btn {
  background: linear-gradient(135deg, var(--color-primary-italian), var(--color-secondary-italian)); /* HeroSection CTA gradient */
  color: var(--color-light-text);
  border: none;
  border-radius: 5px;
  padding: 12px 20px;
  font-weight: 600;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(214, 48, 49, 0.3); /* HeroSection CTA shadow */
}

.subscribe-btn:hover {
  transform: scale(1.05);
  background: linear-gradient(135deg, #a7282a, #b95d46); /* Hover için daha koyu tonlar */
  box-shadow: 0 12px 35px rgba(214, 48, 49, 0.4); /* HeroSection CTA hover shadow */
}

.dark-mode-toggle-new {
  margin-top: 30px;
  color: var(--color-dark-text); /* HeroSection metin rengine uygun */
  z-index: 1;
  position: relative;
}

.copyright {
  margin-top: 20px;
  font-size: 0.9rem;
  opacity: 0.8;
  z-index: 1;
  position: relative;
  color: var(--color-dark-text); /* HeroSection metin rengine uygun */
}

/* Responsive Design */
@media (max-width: 768px) {
  .footer-content-new {
    flex-direction: column;
    gap: 30px;
  }

  .subscribe-input-group {
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
  }

  .subscribe-input-group input,
  .subscribe-btn {
    width: 100%;
  }
}

/* Glassmorphism effect enhancement (re-defined locally if not global) */
/* Bu kısım HeroSection'ın background ve content stilleri ile çakışabileceği için düzenlendi */
/* Abonelik formu için zaten özel stil tanımladık, bu yüzden bu genel glass-effect'i sosyal ikonlar için bırakıyorum */
.glass-effect {
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

body.dark-mode .glass-effect {
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
}
</style> 