<template>
  <section class="countdown-section">
    <div class="countdown-container">
      <h2 class="section-title">
        <span class="gradient-text">Countdown</span>
        <span class="section-divider"></span>
      </h2>
      <p class="section-subtitle">The big day is coming soon</p>

      <div class="countdown-grid">
        <div v-for="item in timeLeft" :key="item.label" class="countdown-item">
          <div class="countdown-number">{{ item.value }}</div>
          <div class="countdown-label">{{ item.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'

const weddingDate = new Date('2025-06-15T00:00:00')
const now = ref(new Date())
let intervalId = null

const timeLeft = computed(() => {
  const diff = weddingDate - now.value
  if (diff <= 0) {
    return [
      { value: '00', label: 'Days' },
      { value: '00', label: 'Hours' },
      { value: '00', label: 'Minutes' },
      { value: '00', label: 'Seconds' },
    ]
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)

  return [
    { value: String(days).padStart(2, '0'), label: 'Days' },
    { value: String(hours).padStart(2, '0'), label: 'Hours' },
    { value: String(minutes).padStart(2, '0'), label: 'Minutes' },
    { value: String(seconds).padStart(2, '0'), label: 'Seconds' },
  ]
})

onMounted(() => {
  intervalId = setInterval(() => {
    now.value = new Date()
  }, 1000)
})

onBeforeUnmount(() => {
  if (intervalId) clearInterval(intervalId)
})
</script>

<style scoped>
.countdown-section {
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  text-align: center;
}

.section-title {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.section-divider {
  flex: 1;
  height: 2px;
  background: linear-gradient(90, transparent, #9c27b0, transparent);
  max-width: 200px;
}

.section-subtitle {
  color: #9ca3af;
  margin-bottom: 3rem;
  font-size: 1.1rem;
}

.countdown-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 600px;
  margin: 0 auto;
}

.countdown-item {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(156, 39, 176, 0.3);
  border-radius: 16px;
  padding: 1.5rem 1rem;
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease;
}

.countdown-item:hover {
  transform: scale(1.05);
}

.countdown-number {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  background: linear-gradient(135deg, #ff00c8 0%, #00c8ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.countdown-label {
  font-size: 1rem;
  color: #9ca3af;
  margin-top: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
}
</style>
