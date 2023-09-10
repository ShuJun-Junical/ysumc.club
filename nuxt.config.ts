// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    // pageTransition: true,
    // layoutTransition: true,
    head: {
      title: '燕山大学MC社',
      charset: 'utf-8',
      link: [
        {
          rel: 'icon',
          type: 'image/svg',
          href: '/favicon.svg',
        },
      ],
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          hid: 'description',
          name: 'description',
          content: '燕山大学MC社',
        },
      ],
      htmlAttrs: {
        lang: 'zh-Hans-CN',
      },
    },
  },
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['~/assets/css/main.scss'],
  modules: ['@nuxt/image'],
  ssr: true,
  image: {
    quality: 80,
    format: ['avif', 'webp'],
    dir: 'assets/image',
  },
})
