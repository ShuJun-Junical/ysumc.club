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
    quality: 85,
    format: ['avif', 'webp', 'jpg'],
    dir: 'assets/image',
  },
})
