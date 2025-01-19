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
  // app: {
  //   pageTransition: { name: "page", mode: "out-in" },
  //   layoutTransition: { name: "layout", mode: "out-in" },
  //   scrollBehavior(to: any, from: any, savedPosition: any) {
  //     if (savedPosition) {
  //       return savedPosition; // Restore the saved position when navigating back
  //     } else {
  //       return { x: 0, y: 0 }; // Default to the top of the page
  //     }
  //   },
  // },
  
});
