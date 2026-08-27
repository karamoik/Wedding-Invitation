<script setup>
import { onMounted } from 'vue'
import HeroSection from './components/HeroSection.vue'
import CountdownTimer from './components/CountdownTimer.vue'
import CoupleSection from './components/CoupleSection.vue'
import PhotoGallery from './components/PhotoGallery.vue'
import EventDetails from './components/EventDetails.vue'
import RsvpForm from './components/RsvpForm.vue'
import FooterSection from './components/FooterSection.vue'

onMounted(() => {
  document.title = "Alex & Taylor's Wedding Invitation"
})
</script>

<template>
  <div class="app">
    <HeroSection />
    <CountdownTimer />
    <CoupleSection />
    <PhotoGallery />
    <EventDetails />
    <RsvpForm />
    <FooterSection />
  </div>
</template>

<style>
.app {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: #000;
  color: #fff;
  scroll-behavior: smooth;
  overflow-x: hidden;
}
</style>
