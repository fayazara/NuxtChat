export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@nuxt/ui",
    "@nuxtjs/google-fonts",
    "@nuxtjs/fontaine",
    "@vueuse/nuxt",
    "@nuxt/content"
  ],
  runtimeConfig: {
    openaiApiKey: process.env.OPENAI_API_KEY,
  },
  content: {
    highlight: {
      theme: 'github-dark'
    }
  },
  googleFonts: {
    display: "swap",
    families: {
      Inter: [400, 500, 600, 700, 800, 900],
    },
  },
});
