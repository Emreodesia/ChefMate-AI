<template>
  <div class="content-card">
    <h2>Kategoriler</h2>
    <div class="categories">
      <div 
        v-for="category in categories" 
        :key="category.id"
        class="category-item"
        @click="selectCategory(category)"
      >
        <span class="emoji">{{ category.emoji }}</span>
        <span class="category-name">{{ category.name }}</span>
        <span class="category-count">{{ category.count }} tarif</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const categories = ref([
  { id: 1, name: 'Kahvaltı', emoji: '🍳', count: 24 },
  { id: 2, name: 'Öğle Yemeği', emoji: '🍽️', count: 45 },
  { id: 3, name: 'Tatlılar', emoji: '🍰', count: 18 },
  { id: 4, name: 'Vejetaryen', emoji: '🥗', count: 32 },
  { id: 5, name: 'Dünya Mutfağı', emoji: '🌍', count: 67 }
]);

const selectCategory = (category) => {
  // Add click animation
  const element = event.target.closest('.category-item');
  element.style.transform = 'scale(0.95)';
  setTimeout(() => {
    element.style.transform = 'translateY(-3px)';
  }, 150);
  
  console.log('Selected category:', category.name);
  // Here you can add logic to filter recipes by category
};
</script>

<style scoped>
.content-card {
  background: linear-gradient(135deg, rgba(26, 26, 26, 0.9), rgba(45, 45, 45, 0.9));
  backdrop-filter: blur(30px);
  border-radius: 25px;
  border: 2px solid var(--glass-border);
  padding: 35px;
  box-shadow: var(--premium-shadow);
  transition: all 0.4s ease;
  animation: fadeInUp 1s ease-out;
  position: relative;
  overflow: hidden;
}

.content-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, transparent 30%, rgba(212, 175, 55, 0.05) 50%, transparent 70%);
  animation: shimmer 4s infinite;
  pointer-events: none;
}

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.content-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 35px 70px rgba(212, 175, 55, 0.25);
  border-color: rgba(212, 175, 55, 0.4);
}

.content-card h2 {
  font-family: 'Cinzel', serif;
  font-size: 2.2em;
  margin-bottom: 30px;
  color: var(--text-gold);
  letter-spacing: 1px;
  position: relative;
  z-index: 2;
}

/* Kategoriler */
.categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
  position: relative;
  z-index: 2;
}

.category-item {
  background: linear-gradient(135deg, rgba(212, 175, 55, 0.1), rgba(255, 215, 0, 0.05));
  padding: 25px 20px;
  border-radius: 20px;
  text-align: center;
  cursor: pointer;
  transition: all 0.4s ease;
  border: 2px solid rgba(212, 175, 55, 0.2);
  backdrop-filter: blur(15px);
  position: relative;
  overflow: hidden;
}

.category-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, transparent 30%, rgba(212, 175, 55, 0.1) 50%, transparent 70%);
  animation: shimmer 3s infinite;
  pointer-events: none;
}

.category-item:hover {
  background: linear-gradient(135deg, rgba(212, 175, 55, 0.2), rgba(255, 215, 0, 0.1));
  transform: translateY(-5px);
  border-color: rgba(212, 175, 55, 0.4);
  box-shadow: 0 15px 40px rgba(212, 175, 55, 0.2);
}

.category-item .emoji {
  font-size: 3em;
  margin-bottom: 15px;
  display: block;
  filter: drop-shadow(0 0 10px rgba(212, 175, 55, 0.3));
  transition: all 0.3s ease;
}

.category-item:hover .emoji {
  transform: scale(1.1);
  filter: drop-shadow(0 0 15px rgba(212, 175, 55, 0.5));
}

.category-name {
  display: block;
  font-family: 'Cinzel', serif;
  font-size: 1.2em;
  font-weight: 600;
  color: var(--text-gold);
  margin-bottom: 8px;
  letter-spacing: 1px;
}

.category-count {
  display: block;
  font-size: 0.9em;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 400;
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
  .categories {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 15px;
  }
  
  .category-item {
    padding: 20px 15px;
  }
  
  .category-item .emoji {
    font-size: 2.5em;
  }
  
  .category-name {
    font-size: 1.1em;
  }
}
</style> 