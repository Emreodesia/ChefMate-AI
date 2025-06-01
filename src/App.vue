<script setup>
import { ref, onMounted } from 'vue';
import HeroSection from './components/HeroSection.vue';
import RecipeOfTheDay from './components/RecipeOfTheDay.vue';
import CategoryTabs from './components/CategoryTabs.vue';
import RecipeDetailPage from './components/RecipeDetailPage.vue';
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
  <HeroSection />

  <main>
    <RecipeOfTheDay />
    <CategoryTabs />
    <RecipeDetailPage />
    <BlogSection />
  </main>

  <AppFooter :isDarkMode="isDarkMode" @toggle-dark-mode="toggleDarkMode" />
</template>

<style>
:root {
  --color-primary-italian: #d63031; /* Italian Red */
  --color-secondary-italian: #e17055; /* Terracotta */
  --color-accent-italian: #fdcb6e; /* Warm Yellow */
  --color-green-italian: #00b894; /* Basil Green */
  --color-light-bg: #ffeaa7; /* Light Peach Background */
  --color-dark-text: #2d3436; /* Dark Grey Text */
  --color-light-text: #f8f9fa; /* Light Grey Text */
  --font-serif: 'Georgia', 'Times New Roman', serif;
  --font-sans-serif: 'Open Sans', sans-serif; /* Keep Open Sans for body text if needed, or change to another suitable sans-serif */
}

body {
  font-family: var(--font-serif);
  margin: 0;
  background: linear-gradient(135deg, var(--color-light-bg), #fab1a0, var(--color-secondary-italian));
  color: var(--color-dark-text);
}

html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  overflow-x: hidden; /* Prevent horizontal scroll */
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Global styles that affect the whole app or are not component-specific */
/* Dark Mode Styles for global elements */
body.dark-mode {
  background-color: #333;
  color: var(--color-light-text);
}

main {
  flex-grow: 1;
  max-width: 1200px; /* İçeriği ortalamak ve boşluk bırakmak için */
  margin: 0 auto; /* İçeriği ortalamak için */
  padding: 40px 20px; /* İçerik etrafında boşluk bırakmak için */
}
</style>
