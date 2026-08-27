<template>
  <section class="couple-section">
    <div class="couple-container">
      <h2 class="section-title">
        <span class="gradient-text">The Couple</span>
        <span class="section-divider"></span>
      </h2>

      <div class="couple-grid">
        <div class="person-card">
          <div class="person-image">
            <div class="image-frame">
              <div class="person-placeholder">
                <span>Willy</span>
              </div>
            </div>
          </div>
          <h3 class="person-name">Willy</h3>
          <p class="person-title">Software Engineer</p>
        </div>

        <div class="couple-divider">
          <div class="heart-icon">
            <HeartIcon class="icon" />
          </div>
        </div>

        <div class="person-card">
          <div class="person-image">
            <div class="image-frame">
              <div class="person-placeholder">
                <span>Agnes</span>
              </div>
            </div>
          </div>
          <h3 class="person-name">Agnes</h3>
          <p class="person-title">UX Designer</p>
        </div>
      </div>

      <div class="love-story">
        <p>We met in a coffee shop on a rainy Tuesday. What started as a conversation about the weather turned into a conversation about everything. Two years later, here we are, ready to spend forever together.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { HeartIcon } from '@heroicons/vue/24/solid'
</script>

<style scoped>
.couple-section {
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
}

.couple-container {
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
}

.couple-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  gap: 2rem;
  margin: 3rem 0;
}

.person-card {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.person-image {
  width: 200px;
  height: 200px;
  margin-bottom: 1rem;
}

.image-frame {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff00c8, #00c8ff, #9c27b0);
  padding: 4px;
  position: relative;
}

.image-frame::before {
  content: '';
  position: absolute;
  inset: 4px;
  border-radius: 50%;
  background: linear-gradient(135deg, #0f0c29, #1a1a2e);
}

.person-placeholder {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #ff00c8, #00c8ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: pulse-glow 2s infinite;
}

@keyframes pulse-glow {
  0%, 100% { filter: brightness(1); }
  50% { filter: brightness(1.2) hue-rotate(90deg); }
}

.person-name {
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 0.25rem;
}

.person-title {
  color: #9ca3af;
}

.couple-divider {
  display: flex;
  align-items: center;
  justify-content: center;
}

.heart-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff00c8, #9c27b0);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: beat 1s infinite ease;
}

.icon {
  width: 32px;
  height: 32px;
  color: #fff;
}

@keyframes beat {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

.love-story {
  margin-top: 3rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  backdrop-filter: blur(10px);
}

.love-story p {
  color: #d1d5db;
  line-height: 1.8;
  font-size: 1.1rem;
}
</style>
