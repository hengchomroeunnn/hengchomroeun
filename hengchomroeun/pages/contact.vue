<template>
  <div class="">
    <div class="contact-page container mx-auto p-6 shadow-lg rounded-lg my-8">
      <h1 class="text-4xl font-extrabold ">Get in Touch</h1>
      <div class=" my-4">You can reach me anytime.</div>
      <form @submit.prevent="submitForm" class="">
        <div class="form-group mb-6">
          <label for="name" class="block text-sm font-semibold mb-2">Name:</label>
          <input type="text" id="name" v-model="form.name" required class="shadow appearance-none border border-gray-100 rounded-2xl w-full py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary" />
        </div>
        <div class="form-group mb-6">
          <label for="email" class="block text-sm font-semibold mb-2">Email:</label>
          <input type="email" id="email" v-model="form.email" required class="shadow appearance-none border border-gray-100 rounded-2xl w-full py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary" />
        </div>
        <div class="form-group mb-6">
          <label for="message" class="block text-sm font-semibold mb-2">Message:</label>
          <textarea id="message" v-model="form.message" required class="shadow appearance-none border border-gray-100 rounded-2xl w-full py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary h-32"></textarea>
        </div>
        <div class="flex items-center justify-between">
          <button type="submit" class="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-6 hover:bg-text rounded-full focus:outline-none focus:ring-2 focus:ring-primary">Send</button>
        </div>
        <p v-if="successMessage" class="text-green-500 mt-4">{{ successMessage }}</p>
        <p v-if="errorMessage" class="text-red-500 mt-4">{{ errorMessage }}</p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { createClient } from '@supabase/supabase-js'
const supabase = createClient(
  'https://bwareuaigtfjibehuggt.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3YXJldWFpZ3RmamliZWh1Z2d0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcyMDY0MDYsImV4cCI6MjA1Mjc4MjQwNn0.4nlzWzDZvbiWhUcCVTyRA_v66GdF2t8FEZF-uJTru-'
)

const form = ref({
  name: '',
  email: '',
  message: '',
})

const successMessage = ref('')
const errorMessage = ref('')

async function submitForm() {
  try {
    // Insert data into the 'emails' table
    const { error } = await supabase.from('emails').insert([form.value])

    if (error) {
      throw error
    }

    // Show success message and clear the form
    successMessage.value = 'Your message has been sent successfully!'
    errorMessage.value = ''
    form.value = { name: '', email: '', message: '' }
  } catch (err) {
    // Show error message
    errorMessage.value = 'Failed to send your message. Please try again later.'
    successMessage.value = ''
  }
}
</script>

<style scoped>
.contact-page {
  max-width: 600px;
}
</style>