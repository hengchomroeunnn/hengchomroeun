<template>
  <nav class="sticky top-0 z-50 bg-white p-4 border-b-2">
    <div class="flex justify-between items-center">
      <div>
        <NuxtLink to="/" class="flex items-center">
          <img
            src="../assets/images/jrlogo.png"
            alt="HENG CHOMROEUN'S LOGO"
            class="w-[64px]" />
          <!-- <div class="font-semibold text-xl">HENG CHOMROEUN</div> -->
        </NuxtLink>
      </div>
      <div>
        <ul class="flex space-x-8 items-center">
          <li>
            <NuxtLink
              to="/"
              class="hover:text-primary"
              :class="{
                'text-primary border-b-2 border-primary': $route.path === '/',
              }"
              >Work</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/about"
              class="hover:text-primary"
              :class="{
                'text-primary border-b-2 border-primary':
                  $route.path === '/about',
              }"
              >About</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/contact"
              class="hover:text-primary"
              :class="{
                'text-primary border-b-2 border-primary':
                  $route.path === '/contact',
              }"
              >Contact</NuxtLink
            >
          </li>
          <li>
            <nuxt-link
            to="https://drive.google.com/file/d/1jEGE7NrVU3SH2Lz17M3DR3MPXQWXz_NJ/view?usp=sharing" target="_blank"
              type="button"
              class="bg-primary text-white font-medium py-2 px-4 rounded-full hover:bg-text transition duration-300 ease-in-out">
              Resume
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style>
/* Add your custom styles here if needed */
</style>
