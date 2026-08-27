<template>
  <section class="rsvp-section" id="rsvp">
    <div class="rsvp-container">
      <h2 class="section-title">
        <span class="gradient-text">RSVP</span>
        <span class="section-divider"></span>
      </h2>
      <p class="section-subtitle">Please let us know if you can make it</p>

      <form @submit.prevent="submitRsvp" class="rsvp-form">
        <div class="form-grid">
          <div class="form-group">
            <input
              v-model="formData.name"
              type="text"
              id="name"
              placeholder=" "
              required
            />
            <label for="name">Full Name</label>
          </div>

          <div class="form-group">
            <input
              v-model="formData.email"
              type="email"
              id="email"
              placeholder=" "
              required
            />
            <label for="email">Email Address</label>
          </div>

          <div class="form-group">
            <input
              v-model="formData.phone"
              type="tel"
              id="phone"
              placeholder=" "
            />
            <label for="phone">Phone Number</label>
          </div>

          <div class="form-group">
            <select v-model="formData.attendance" id="attendance">
              <option value="">Select</option>
              <option value="yes">Yes, I will attend</option>
              <option value="no">I cannot attend</option>
            </select>
            <label for="attendance">Will you attend?</label>
          </div>

          <div class="form-group full-width">
            <textarea
              v-model="formData.guests"
              id="guests"
              placeholder=" "
              rows="3"
            ></textarea>
            <label for="guests">Number of Guests & Names</label>
          </div>

          <div class="form-group full-width">
            <textarea
              v-model="formData.message"
              id="message"
              placeholder=" "
              rows="3"
            ></textarea>
            <label for="message">Your Message (Optional)</label>
          </div>
        </div>

        <button type="submit" class="submit-btn" :disabled="isSubmitting">
          <span v-if="isSubmitting" class="spinner"></span>
          <span class="btn-text">{{ isSubmitting ? 'Sending...' : 'Submit RSVP' }}</span>
        </button>

        <div v-if="submitStatus === 'success'" class="success-message">
          <CheckCircleIcon class="status-icon" />
          <p>Thank you! Your RSVP has been submitted successfully.</p>
        </div>

        <div v-if="submitStatus === 'error'" class="error-message">
          <XCircleIcon class="status-icon" />
          <p>Something went wrong. Please try again.</p>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { CheckCircleIcon, XCircleIcon } from '@heroicons/vue/24/solid'
import { saveRsvpToGoogleSheets } from '../utils/googleSheets'

const formData = ref({
  name: '',
  email: '',
  phone: '',
  attendance: '',
  guests: '',
  message: '',
})

const isSubmitting = ref(false)
const submitStatus = ref('')

const submitRsvp = async () => {
  if (isSubmitting.value) return

  isSubmitting.value = true
  submitStatus.value = ''

  try {
    await saveRsvpToGoogleSheets(formData.value)

    formData.value = {
      name: '',
      email: '',
      phone: '',
      attendance: '',
      guests: '',
      message: '',
    }
    submitStatus.value = 'success'
  } catch (error) {
    submitStatus.value = 'error'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.rsvp-section {
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 80vh;
  display: flex;
  align-items: center;
}

.rsvp-container {
  max-width: 600px;
  margin: 0 auto;
  width: 100%;
}

.rsvp-form {
  margin-top: 2rem;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.form-group {
  position: relative;
}

.form-group.full-width {
  grid-column: 1 / -1;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  color: #fff;
  font-size: 1rem;
  transition: all 0.3s ease;
  outline: none;
  resize: none;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: #9c27b0;
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 0 2px rgba(156, 39, 176, 0.2);
}

.form-group label {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #9ca3af;
  transition: all 0.3s ease;
  pointer-events: none;
  background: transparent;
}

.form-group input:focus + label,
.form-group input:not(:placeholder-shown) + label,
.form-group select:focus + label,
.form-group select:not(:placeholder-shown) + label,
.form-group textarea:focus + label,
.form-group textarea:not(:placeholder-shown) + label {
  top: 0;
  font-size: 0.75rem;
  transform: translateY(-50%);
  color: #00c8ff;
}

.submit-btn {
  position: relative;
  width: 100%;
  padding: 1rem;
  background: linear-gradient(135deg, #ff00c8, #9c27b0);
  border: none;
  border-radius: 12px;
  color: #fff;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(156, 39, 176, 0.4);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.btn-text {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.spinner {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.success-message, .error-message {
  margin-top: 1.5rem;
  padding: 1rem;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.success-message {
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid rgba(34, 197, 94, 0.3);
  color: #4ade80;
}

.error-message {
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  color: #f87171;
}

.status-icon {
  width: 20px;
  height: 20px;
}
</style>
