<template>
  <section class="hero-section">
    <div class="hero-overlay"></div>
    <div class="hero-container">
      <div class="glitch-text" data-text="WE ARE GETTING MARRIED">WE ARE GETTING MARRIED</div>
      <h1 class="hero-title">
        <span class="gradient-text">Willy</span>
        <span class="ampersand">&</span>
        <span class="gradient-text">Agnes</span>
      </h1>
      <p class="hero-subtitle">invite you to witness our love story</p>
      <div class="hero-date">
        <CalendarIcon class="icon" />
        <span>Saturday, 15th June 2025</span>
      </div>
      <div class="hero-location">
        <MapPinIcon class="icon" />
        <span>The Grand Hall, New York City</span>
      </div>

      <button class="rsvp-btn" @click="goToRsvp">
        <span class="btn-text">RSVP Now</span>
        <span class="btn-glow"></span>
      </button>

      <div class="scroll-indicator">
        <div class="mouse">
          <div class="mouse-wheel"></div>
        </div>
        <span>scroll to explore</span>
      </div>
    </div>

    <div class="hero-particles">
      <div v-for="i in 50" :key="i" class="particle" :style="{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 5}s` }"></div>
    </div>
  </section>
</template>

<script setup>
import { CalendarIcon, MapPinIcon } from '@heroicons/vue/24/outline'

const goToRsvp = () => {
  const rsvpSection = document.getElementById('rsvp')
  if (rsvpSection) {
    rsvpSection.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 50%, rgba(138, 43, 226, 0.15) 0%, transparent 70%);
}

.hero-container {
  position: relative;
  text-align: center;
  z-index: 10;
  padding: 0 2rem;
}

.glitch-text {
  position: relative;
  font-size: 0.9rem;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-bottom: 2rem;
  color: #a8a29e;
}

.glitch-text::before {
  content: attr(data-text);
  position: absolute;
  left: 2px;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #ff00c8, #00c8ff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0);
  filter: blur(0.5px);
  animation: glitch-anim 0.3s infinite linear alternate-reverse;
  opacity: 0.7;
}

.hero-title {
  font-size: clamp(3rem, 10vw, 7rem);
  font-weight: 900;
  margin-bottom: 1rem;
  line-height: 1;
  letter-spacing: -2px;
}

.gradient-text {
  background: linear-gradient(135deg, #ff00c8 0%, #00c8ff 50%, #9c27b0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 20px rgba(138, 43, 226, 0.4);
}

.ampersand {
  position: relative;
  display: inline-block;
  color: #ff3d86;
  filter: drop-shadow(0 0 15px rgba(255, 61, 134, 0.6));
}

.hero-subtitle {
  font-size: 1.2rem;
  color: #c7c7c7;
  margin-bottom: 2rem;
  letter-spacing: 2px;
}

.hero-date, .hero-location {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  color: #a8a29e;
}

.hero-date {
  font-weight: 500;
}

.icon {
  width: 20px;
  height: 20px;
  color: #00c8ff;
}

.rsvp-btn {
  position: relative;
  margin-top: 2rem;
  padding: 1rem 3rem;
  border: 2px solid #9c27b0;
  border-radius: 50px;
  background: transparent;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;
}

.rsvp-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 30px rgba(138, 43, 226, 0.6);
}

.btn-text {
  position: relative;
  z-index: 2;
}

.btn-glow {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #9c27b0, #6c27b0);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1;
}

.rsvp-btn:hover .btn-glow {
  opacity: 1;
}

.scroll-indicator {
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #6b7280;
}

.mouse {
  width: 20px;
  height: 34px;
  border: 2px solid #4b5563;
  border-radius: 10px;
}

.mouse-wheel {
  width: 4px;
  height: 4px;
  background: #9c27b0;
  border-radius: 50%;
  margin: 4px auto;
  animation: scroll 2s infinite;
}

.hero-particles {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  animation: float 5s infinite linear;
}

@keyframes glitch-anim {
  0%, 100% { transform: translate(0); }
  20% { transform: translate(-1px, 1px); }
  40% { transform: translate(-1px, -1px); }
  60% { transform: translate(1px, 1px); }
  80% { transform: translate(1px, -1px); }
}

@keyframes scroll {
  0% { opacity: 0; transform: translateY(0); }
  50% { opacity: 1; }
  100% { opacity: 0; transform: translateY(10px); }
}

@keyframes float {
  0% { transform: translateY(0) scale(1); opacity: 0; }
  10% { opacity: 1; }
  100% { transform: translateY(-100vh) scale(2); opacity: 0; }
}
</style>
