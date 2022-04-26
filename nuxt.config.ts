import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
   typescript: {
      shim: false
   },
   head: {
      link: [
         { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ]
   }
})