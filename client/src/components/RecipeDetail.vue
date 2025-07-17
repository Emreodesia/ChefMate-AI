<template>
  <div class="content-card recipe-detail">
    <h2>Tarif Detayı</h2>
    <h3>Spaghetti Carbonara</h3>
    <div class="recipe-info">
      <p><strong>Malzemeler:</strong> 400g spaghetti, 200g guanciale, 4 yumurta sarısı, 100g Pecorino Romano, karabiber</p>
      <p><strong>Pişirme Süresi:</strong> 20 dakika</p>
      <p><strong>Adım Adım Anlatım:</strong> Guanciale'yi kızartın, yumurta sarısı ve peyniri karıştırın. Haşlanmış spaghettiyi tavada karıştırın. Ateşten alıp yumurta karışımını ekleyin. Sürekli karıştırarak kremalı kıvam elde edin.</p>
    </div>
    <div class="user-reviews">
      <h4>Kullanıcı Yorumları</h4>
      <p>⭐⭐⭐⭐⭐ "Harika bir tarif! Gerçekten İtalyan lezzeti." - Maria</p>
      <p>⭐⭐⭐⭐⭐ "Çok kolay ve lezzetli, kesinlikle denemelisiniz." - Giuseppe</p>
    </div>
  </div>
</template>

<style scoped>
.content-card {
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  border: 1px solid var(--glass-border);
  padding: 30px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  animation: fadeInUp 0.8s ease-out;
}

.content-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);
}

.content-card h2 {
  font-family: 'Playfair Display', serif;
  font-size: 2em;
  margin-bottom: 20px;
  color: var(--accent-color);
}

/* Tarif Detayı */
.recipe-detail {
  background: rgba(243, 156, 18, 0.1);
  border: 1px solid rgba(243, 156, 18, 0.3);
}

.recipe-detail h3 {
  font-family: 'Playfair Display', serif;
  font-size: 1.8em;
  margin-bottom: 15px;
  color: var(--accent-color);
}

.recipe-info {
  margin-bottom: 15px;
}

.recipe-info strong {
  color: var(--accent-color);
}

.recipe-info p {
  margin-bottom: 10px;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
}

.user-reviews {
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 12px;
  margin-top: 20px;
}

.user-reviews h4 {
  color: #f39c12;
  margin-bottom: 10px;
  font-family: 'Playfair Display', serif;
  font-size: 1.2em;
}

.user-reviews p {
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 8px;
  font-style: italic;
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
</style> 