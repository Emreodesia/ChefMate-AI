<template>
  <div class="content-card recipe-highlight">
    <div class="premium-indicator">
      <span class="premium-star">⭐</span>
      <span>Premium Tarif</span>
    </div>
    <h2>Günün Tarifi</h2>
    <div class="recipe-image">
      <div class="recipe-emoji">🍝</div>
      <div class="recipe-overlay">
        <span class="cooking-time">⏰ 20 dk</span>
        <span class="difficulty">📊 Orta</span>
      </div>
    </div>
    <div class="recipe-title">Spaghetti Carbonara</div>
    <div class="recipe-description">
      Geleneksel İtalyan lezzeti, krema kullanmadan sadece yumurta, parmesan ve guanciale ile hazırlanan otantik carbonara tarifi.
    </div>
    <div class="recipe-stats">
      <div class="stat-item">
        <span class="stat-icon">🔥</span>
        <span>450 kcal</span>
      </div>
      <div class="stat-item">
        <span class="stat-icon">👥</span>
        <span>4 kişilik</span>
      </div>
      <div class="stat-item">
        <span class="stat-icon">⭐</span>
        <span>4.9/5</span>
      </div>
    </div>
    <a href="#" class="recipe-button">Tarife Git</a>
  </div>
</template>

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
  margin-bottom: 25px;
  color: var(--text-gold);
  letter-spacing: 1px;
  position: relative;
  z-index: 2;
}

.premium-indicator {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(212, 175, 55, 0.15);
  padding: 8px 16px;
  border-radius: 20px;
  border: 1px solid rgba(212, 175, 55, 0.3);
  margin-bottom: 20px;
  font-size: 0.9em;
  font-weight: 500;
  color: var(--text-gold);
  position: relative;
  z-index: 2;
}

.premium-star {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

/* Günün Tarifi */
.recipe-highlight {
  background: linear-gradient(135deg, rgba(212, 76, 60, 0.1), rgba(192, 57, 43, 0.1));
  border: 2px solid rgba(212, 175, 55, 0.3);
}

.recipe-highlight .recipe-image {
  width: 100%;
  height: 220px;
  background: var(--gold-gradient);
  border-radius: 15px;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(212, 175, 55, 0.3);
}

.recipe-emoji {
  font-size: 5em;
  filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.3));
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.recipe-overlay {
  position: absolute;
  top: 15px;
  right: 15px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.recipe-overlay span {
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 0.8em;
  font-weight: 500;
  backdrop-filter: blur(10px);
}

.recipe-title {
  font-family: 'Cinzel', serif;
  font-size: 1.8em;
  margin-bottom: 15px;
  color: var(--text-gold);
  letter-spacing: 1px;
  position: relative;
  z-index: 2;
}

.recipe-description {
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 25px;
  line-height: 1.7;
  font-size: 1.05em;
  position: relative;
  z-index: 2;
}

.recipe-stats {
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  position: relative;
  z-index: 2;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 6px;
  background: rgba(212, 175, 55, 0.1);
  padding: 8px 12px;
  border-radius: 15px;
  border: 1px solid rgba(212, 175, 55, 0.2);
  font-size: 0.9em;
  font-weight: 500;
  color: var(--text-gold);
}

.stat-icon {
  font-size: 1.1em;
}

.recipe-button {
  display: inline-block;
  padding: 15px 30px;
  background: var(--gold-gradient);
  color: var(--text-dark);
  text-decoration: none;
  border-radius: 30px;
  font-weight: 600;
  font-size: 1.05em;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(212, 175, 55, 0.3);
  letter-spacing: 1px;
  position: relative;
  z-index: 2;
}

.recipe-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(212, 175, 55, 0.4);
  background: linear-gradient(135deg, #ffd700, #d4af37, #f4c430);
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
  .recipe-stats {
    flex-direction: column;
    gap: 10px;
  }
  
  .stat-item {
    justify-content: center;
  }
}
</style> 