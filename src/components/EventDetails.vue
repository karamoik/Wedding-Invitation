<template>
  <section class="event-section">
    <div class="event-container">
      <h2 class="section-title">
        <span class="gradient-text">Event Details</span>
        <span class="section-divider"></span>
      </h2>

      <div class="event-grid">
        <div class="event-item">
          <div class="event-icon">
            <CakeIcon class="icon" />
          </div>
          <h3>Wedding Ceremony</h3>
          <p class="event-time">Saturday, 15th June 2025 • 4:00 PM</p>
          <p class="event-location">The Grand Ballroom, New York</p>
        </div>

        <div class="event-item">
          <div class="event-icon">
            <MusicalNoteIcon class="icon" />
          </div>
          <h3>Reception Party</h3>
          <p class="event-time">Saturday, 15th June 2025 • 7:00 PM</p>
          <p class="event-location">The Grand Ballroom Garden, New York</p>
        </div>
      </div>

      <div class="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.376393418415!2d-74.00598!3d40.7127281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1e7!2m2!1d-74.00598!3d40.7127281!4m13!3e6!4m5!1m0!1m5!1m0!1m10!1m5!1m0!1e4!1v0!5f0"
          width="100%"
          height="400"
          style="border: 0; border-radius: 16px;"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script setup>
import { CakeIcon, MusicalNoteIcon } from '@heroicons/vue/24/outline'
</script>

<style scoped>
.event-section {
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
}

.event-container {
  max-width: 800px;
  margin: 0 auto;
}

.event-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.event-item {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
}

.event-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.event-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 1rem;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff00c8, #00c8ff);
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon {
  width: 28px;
  height: 28px;
  color: #fff;
}

.event-item h3 {
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.event-time, .event-location {
  color: #d1d5db;
  margin-bottom: 0.25rem;
}

.map-container {
  margin-top: 2rem;
}
</style>
