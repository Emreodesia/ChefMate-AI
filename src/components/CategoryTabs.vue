<template>
    <section class="categories">
      <h2>Kategoriler</h2>
      <div class="category-tabs">
        <button class="category-tab">Kahvaltı</button>
        <button class="category-tab">Öğle Yemeği</button>
        <button class="category-tab">Tatlılar</button>
        <button class="category-tab">Vejetaryen</button>
        <button class="category-tab">Dünya Mutfağı</button>
      </div>
    </section>
</template>

<style scoped>
.categories {
  text-align: center;
  margin-bottom: 40px;
}

.categories h2 {
  font-family: var(--font-serif);
  font-size: 2.5rem;
  color: var(--color-primary-italian);
  margin-bottom: 30px;
}

.category-tabs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
}

.category-tab {
  background: linear-gradient(135deg, var(--color-accent-italian), var(--color-green-italian));
  color: var(--color-dark-text);
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.category-tab:hover {
  background: linear-gradient(135deg, #e6b25c, #008f75);
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.2);
}

/* Dark Mode */
body.dark-mode .categories h2 {
  color: var(--color-light-text);
}

body.dark-mode .category-tab {
  background: linear-gradient(135deg, #636e72, #444);
  color: var(--color-light-text);
}

body.dark-mode .category-tab:hover {
  background: linear-gradient(135deg, #7b868a, #555);
}
</style> 