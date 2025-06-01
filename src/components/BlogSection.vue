<template>
    <section class="blog-section">
      <h2>Blog</h2>
      <div class="blog-posts">
        <div class="blog-post-card">
          <h3>Sağlıklı Beslenme İpuçları</h3>
          <p>Kısa bir blog yazısı özeti...</p>
          <button>Devamını Oku</button>
        </div>
        <div class="blog-post-card">
          <h3>Şef Önerileri</h3>
          <p>Kısa bir blog yazısı özeti...</p>
          <button>Devamını Oku</button>
        </div>
      </div>
    </section>
</template>

<style scoped>
.blog-section {
  padding: 40px 20px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
}

.blog-section h2 {
  font-family: var(--font-serif);
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 30px;
  color: var(--color-primary-italian);
}

.blog-posts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.blog-post-card {
  background: rgba(255, 255, 255, 0.9);
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.blog-post-card h3 {
  font-family: var(--font-serif);
  font-size: 1.6rem;
  margin-bottom: 10px;
  color: var(--color-dark-text);
}

.blog-post-card p {
  font-size: 1rem;
  line-height: 1.5;
  color: #636e72;
  margin-bottom: 15px;
}

.blog-post-card button {
  background: linear-gradient(135deg, var(--color-accent-italian), var(--color-secondary-italian));
  color: var(--color-dark-text);
  border: none;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.blog-post-card button:hover {
  background: linear-gradient(135deg, #e6b25c, #b95d46);
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

/* Dark Mode */
body.dark-mode .blog-section {
  background-color: #444;
}

body.dark-mode .blog-section h2 {
  color: var(--color-light-text);
}

body.dark-mode .blog-post-card {
  background-color: #555;
}

body.dark-mode .blog-post-card h3,
body.dark-mode .blog-post-card p {
  color: var(--color-light-text);
}

/* Responsive Design */
@media (max-width: 768px) {
  .blog-section {
    padding: 20px 15px;
  }

  .blog-posts {
    grid-template-columns: 1fr;
  }
}
</style> 