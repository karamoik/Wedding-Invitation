<template>
  <section class="gallery-section">
    <div class="gallery-container">
      <h2 class="section-title">
        <span class="gradient-text">Our Moments</span>
        <span class="section-divider"></span>
      </h2>
      <p class="section-subtitle">Captured memories through our journey</p>

      <div class="gallery-grid">
        <div
          v-for="(photo, index) in photos"
          :key="index"
          class="gallery-item"
          :style="{ animationDelay: `${index * 0.1}s` }"
          @click="openLightbox(index)"
        >
          <img :src="photo.src" :alt="photo.alt" class="gallery-img" loading="lazy" />
          <div class="gallery-overlay">
            <EyeIcon class="overlay-icon" />
          </div>
        </div>
      </div>

      <div v-if="lightboxOpen" class="lightbox-overlay" @click="closeLightbox">
        <div class="lightbox-content" @click.stop>
          <button class="lightbox-close" @click="closeLightbox">
            <XMarkIcon class="close-icon" />
          </button>
          <img :src="photos[currentPhoto].src" :alt="photos[currentPhoto].alt" class="lightbox-img" />
          <button class="lightbox-nav prev" @click="prevPhoto">
            <ChevronLeftIcon class="nav-icon" />
          </button>
          <button class="lightbox-nav next" @click="nextPhoto">
            <ChevronRightIcon class="nav-icon" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { EyeIcon, XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline'

const photos = [
  { src: 'https://images.unsplash.com/photo-1519710164239-da128dcedf5d?ixlib=rb-4-0&auto=format&fit=crop&w=500&h=500&q=80', alt: 'First date' },
  { src: 'https://images.unsplash.com/photo-15405741630267-a1a8b99a3f5f?ixlib=rb-4-0&auto=format&fit=crop&w=500&h=500&q=80', alt: 'Coffee date' },
  { src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4-0&auto=format&fit=crop&w=500&h=500&q=80', alt: 'Together' },
  { src: 'https://images.unsplash.com/photo-1533238438604-7c8c6b6f4e95?ixlib=rb-4-0&auto=format&fit=crop&w=500&h=500&q=80', alt: 'Engagement' },
  { src: 'https://images.unsplash.com/photo-1519673558843-9b841d2b338e?ixlib=rb-4-0&auto=format&fit=crop&w=500&h=500&q=80', alt: 'Sunset' },
  { src: 'https://images.unsplash.com/photo-1503714098981-f474e6fc2a3f?ixlib=rb-4-0&auto=format&fit=crop&w=500&h=500&q=80', alt: 'Laugh' },
]

const lightboxOpen = ref(false)
const currentPhoto = ref(0)

const openLightbox = (index) => {
  currentPhoto.value = index
  lightboxOpen.value = true
}

const closeLightbox = () => {
  lightboxOpen.value = false
}

const prevPhoto = () => {
  currentPhoto.value = (currentPhoto.value - 1 + photos.length) % photos.length
}

const nextPhoto = () => {
  currentPhoto.value = (currentPhoto.value + 1) % photos.length
}
</script>

<style scoped>
.gallery-section {
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
}

.gallery-container {
  max-width: 1200px;
  margin: 0 auto;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 3rem;
}

.gallery-item {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transform-origin: center;
  animation: scale-in 0.6s ease forwards;
  opacity: 0;
  transform: scale(0.9);
}

.gallery-item:hover {
  transform: scale(1.02);
}

.gallery-img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.gallery-item:hover .gallery-img {
  transform: scale(1.1);
}

.gallery-overlay {
  position: absolute;
  inset: 0;
  background: rgba(138, 43, 226, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.overlay-icon {
  width: 32px;
  height: 32px;
  color: #fff;
}

.lightbox-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}

.lightbox-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
}

.lightbox-img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.lightbox-close {
  position: absolute;
  top: -50px;
  right: 0;
  background: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
}

.nav-icon {
  width: 32px;
  height: 32px;
  color: #fff;
}

.lightbox-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: #fff;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
}

.lightbox-nav.prev { left: -70px; }
.lightbox-nav.next { right: -70px; }

@keyframes scale-in {
  to { opacity: 1; transform: scale(1); }
}
</style>
