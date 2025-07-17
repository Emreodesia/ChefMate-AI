<template>
    <section class="recipe-of-the-day">
      <h2>Günün Tarifi</h2>
      <div class="recipe-card">
        <h3>Lezzetli Bir Yemek</h3>
        <p>Kısa bir açıklama...</p>
        <button>Tarife Git</button>
      </div>
    </section>
</template>

<style scoped>
.recipe-of-the-day {
  margin-bottom: 40px;
  text-align: center;
}

.recipe-of-the-day h2 {
  font-family: var(--font-serif);
  font-size: 2.5rem;
  color: var(--color-primary-italian);
  margin-bottom: 30px;
}

.recipe-card {
  background: rgba(255, 255, 255, 0.8);
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.recipe-card h3 {
  font-family: var(--font-serif);
  font-size: 1.8rem;
  color: var(--color-dark-text);
  margin-bottom: 10px;
}

.recipe-card p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #636e72; /* Daha koyu gri ton */
  margin-bottom: 20px;
}

.recipe-card button {
  background: linear-gradient(135deg, var(--color-primary-italian), var(--color-secondary-italian));
  color: var(--color-light-text);
  border: none;
  padding: 12px 25px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1rem;
  transition: background-color 0.3s ease;
}

.recipe-card button:hover {
  background: linear-gradient(135deg, #a7282a, #b95d46); /* Hover için daha koyu tonlar */
}

/* Dark Mode */
body.dark-mode .recipe-of-the-day h2 {
  color: var(--color-accent-italian);
}

body.dark-mode .recipe-card {
  background-color: #555;
}

body.dark-mode .recipe-card h3,
body.dark-mode .recipe-card p {
  color: var(--color-light-text);
}
</style> 