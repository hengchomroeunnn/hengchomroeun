<template>
  <div class="contact-page container mx-auto p-6">
    <h1 class="text-3xl font-bold mb-6 text-center">Contact Me</h1>
    <form @submit.prevent="submitForm" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="form-group mb-4">
        <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Name:</label>
        <input type="text" id="name" v-model="form.name" required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      <div class="form-group mb-4">
        <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email:</label>
        <input type="email" id="email" v-model="form.email" required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      <div class="form-group mb-6">
        <label for="message" class="block text-gray-700 text-sm font-bold mb-2">Message:</label>
        <textarea id="message" v-model="form.message" required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"></textarea>
      </div>
      <div class="flex items-center justify-between">
        <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Send</button>
      </div>
    </form>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://bwareuaigtfjibehuggt.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3YXJldWFpZ3RmamliZWh1Z2d0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcyMDY0MDYsImV4cCI6MjA1Mjc4MjQwNn0.4nlzWzDZvbiWhUcCVTyRA_v66GdF2t8FEZF-uJTru-I'
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
