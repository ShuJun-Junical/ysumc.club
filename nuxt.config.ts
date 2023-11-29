// https://nuxt.com/docs/api/configuration/nuxt-config
import prerenderList from './prerenderList'
export default defineNuxtConfig({
  nitro: {
    prerender: {
      routes: prerenderList,
    },
  },
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
          content:
            'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0',
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
  modules: [
    '@nuxt/image',
    'nuxt-simple-sitemap',
    '@nuxt/content',
    '@vueuse/nuxt',
  ],
  ssr: true,
  image: {
    quality: 85,
    format: ['webp'],
    dir: 'assets/image',
    screens: {
      xs: 768,
      sm: 768,
      md: 1280,
      lg: 1280,
      xl: 1536,
      xxl: 1536,
      '2xl': 1536,
    },
  },
  site: {
    url: 'https://ysumc.club',
  },
  content: {
    documentDriven: {
      injectPage: false,
    },
  },
})
