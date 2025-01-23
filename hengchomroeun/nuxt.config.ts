// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-01-14",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxt/icon"],
  app: {
    head: {
      title: "Heng Chomroeun's Portfolio", // Default title
      meta: [
        { name: 'description', content: 'This website is overview of my personal self and my works related to design' },
        { property: 'og:title', content: 'My Portfolio' },
        { property: 'og:description', content: 'This is where I showcase my works' },
        { property: 'og:image', content: 'https://hengchomroeun.vercel.app/publicimg.png' },
        { property: 'og:url', content: 'https://hengchomroeun.vercel.app/' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'en_US' },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
    scrollBehavior(to: any, from: any, savedPosition: any) {
      if (savedPosition) {
        return savedPosition; // Restore the saved position when navigating back
      } else {
        return { x: 0, y: 0 }; // Default to the top of the page
      }
    },
  },

});
