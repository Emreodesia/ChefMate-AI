<template>
  <div class="blog-section">
    <h2>Blog</h2>
    <div class="blog-grid">
      <div class="blog-card">
        <h3>Sağlıklı Beslenme İpuçları</h3>
        <p>Dengeli ve sağlıklı beslenme için günlük hayatınızda uygulayabileceğiniz pratik öneriler ve besin değerleri hakkında bilgiler...</p>
        <a href="#" class="blog-link">Devamını Oku →</a>
      </div>
      <div class="blog-card">
        <h3>Şef Önerileri</h3>
        <p>Ünlü şeflerden mutfak sırları, profesyonel pişirme teknikleri ve ev mutfağında uygulayabileceğiniz püf noktaları...</p>
        <a href="#" class="blog-link">Devamını Oku →</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Blog Section */
.blog-section {
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  border: 1px solid var(--glass-border);
  padding: 40px;
  margin-bottom: 60px;
  animation: fadeInUp 0.8s ease-out;
}

.blog-section h2 {
  font-family: 'Playfair Display', serif;
  font-size: 2.5em;
  text-align: center;
  margin-bottom: 40px;
  color: var(--accent-color);
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.blog-card {
  background: rgba(255, 255, 255, 0.1);
  padding: 25px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.blog-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.15);
}

.blog-card h3 {
  font-family: 'Playfair Display', serif;
  font-size: 1.4em;
  margin-bottom: 15px;
  color: white;
}

.blog-card p {
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 15px;
  line-height: 1.6;
}

.blog-link {
  color: var(--accent-color);
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.blog-link:hover {
  color: white;
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

@media (max-width: 768px) {
  .blog-section {
    padding: 30px 20px;
  }
  
  .blog-section h2 {
    font-size: 2em;
  }
}
</style> 