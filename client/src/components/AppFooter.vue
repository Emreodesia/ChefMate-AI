<script setup>
import { ref } from 'vue';

defineProps({
  isDarkMode: Boolean
});

const emit = defineEmits(['toggle-dark-mode']);

const toggleDarkMode = () => {
  emit('toggle-dark-mode');
};
</script>

<template>
  <div class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>ChefMate AI</h3>
          <ul>
            <li><a href="#">Hakkımızda</a></li>
            <li><a href="#">Nasıl Çalışır</a></li>
            <li><a href="#">Özellikler</a></li>
            <li><a href="#">İletişim</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Tarifler</h3>
          <ul>
            <li><a href="#">Kahvaltı</a></li>
            <li><a href="#">Ana Yemek</a></li>
            <li><a href="#">Tatlılar</a></li>
            <li><a href="#">Vejetaryen</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Destek</h3>
          <ul>
            <li><a href="#">Yardım Merkezi</a></li>
            <li><a href="#">SSS</a></li>
            <li><a href="#">Geri Bildirim</a></li>
            <li><a href="#">Topluluk</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Sosyal Medya</h3>
          <ul>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">YouTube</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 ChefMate AI. Tüm hakları saklıdır. | Gizlilik Politikası | Kullanım Şartları</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Footer */
.footer {
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(20px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 50px 0;
  margin-top: 80px;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 30px;
}

.footer-section h3 {
  font-family: 'Playfair Display', serif;
  font-size: 1.5em;
  margin-bottom: 20px;
  color: var(--accent-color);
}

.footer-section ul {
  list-style: none;
}

.footer-section ul li {
  margin-bottom: 10px;
}

.footer-section ul li a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: all 0.3s ease;
}

.footer-section ul li a:hover {
  color: white;
}

.footer-bottom {
  text-align: center;
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.6);
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 30px;
  }
}
</style> 