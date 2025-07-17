<template>
    <section class="recipe-detail-page">
      <h2>Tarif Detayı</h2>
      <div class="recipe-content">
        <h3>Tarif Adı</h3>
        <p><strong>Malzemeler:</strong> Lorem ipsum dolor sit amet...</p>
        <p><strong>Pişirme Süresi:</strong> 30 dakika</p>
        <p><strong>Adım Adım Anlatım:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
        <div class="user-comments">
          <h4>Kullanıcı Yorumları</h4>
          <p>Henüz yorum yok.</p>
        </div>
      </div>
    </section>
</template>

<style scoped>
.recipe-detail-page {
  padding: 40px 20px; /* Bileşen içi boşluk */
  /* max-width: 1200px; */ /* App.vue tarafından yönetilecek */
  /* margin: 40px auto; */ /* App.vue tarafından yönetilecek */
  background: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
}

.recipe-detail-page h2 {
  font-family: var(--font-serif);
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 30px;
  color: var(--color-primary-italian);
}

.recipe-content h3 {
  font-family: var(--font-serif);
  font-size: 2rem;
  margin-bottom: 15px;
  color: var(--color-dark-text);
}

.recipe-content p {
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 10px;
  color: #636e72;
}

.user-comments h4 {
  font-family: var(--font-serif);
  font-size: 1.5rem;
  margin-top: 30px;
  margin-bottom: 15px;
  color: var(--color-dark-text);
}

/* Dark Mode */
body.dark-mode .recipe-detail-page {
  background-color: #444;
}

body.dark-mode .recipe-detail-page h2 {
  color: var(--color-accent-italian);
}

body.dark-mode .recipe-content h3,
body.dark-mode .recipe-content p,
body.dark-mode .user-comments h4,
body.dark-mode .user-comments p {
  color: var(--color-light-text);
}

/* Responsive Design */
@media (max-width: 768px) {
  .recipe-detail-page {
    padding: 20px 15px;
  }
}
</style> 