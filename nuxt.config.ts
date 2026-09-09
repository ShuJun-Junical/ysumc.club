// https://nuxt.com/docs/api/configuration/nuxt-config
import { existsSync } from 'node:fs'
import { createRequire } from 'node:module'
import { dirname, isAbsolute, join } from 'node:path'
import { pathToFileURL } from 'node:url'
import prerenderList from './prerenderList'

// nuxt-simple-sitemap 3.x uses the route-rules path from older Nitro releases.
const nitroRuntimeDir = join(
  dirname(createRequire(import.meta.url).resolve('nitropack/package.json')),
  'dist/runtime',
)
const legacyRouteRules = join(nitroRuntimeDir, 'route-rules.mjs')

export default defineNuxtConfig({
  hooks: {
    'nitro:build:before'(nitro) {
      // Image rc.1 resolves this prerender directory as a URL, including on Windows.
      const ipx = nitro.options._config.runtimeConfig?.ipx
      if (typeof ipx?.dir === 'string' && isAbsolute(ipx.dir)) {
        ipx.dir = pathToFileURL(ipx.dir).href
      }
    },
  },
  nitro: {
    compatibilityDate: '2026-09-09',
    alias: {
      '#internal/nitro/route-rules': existsSync(legacyRouteRules)
        ? legacyRouteRules
        : join(nitroRuntimeDir, 'internal/route-rules.mjs'),
    },
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
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // Nuxt 3.7 uses Vite 4; the modern Sass API requires Vite >= 5.4.
          silenceDeprecations: ['legacy-js-api'],
        },
      },
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['~/assets/css/main.scss'],
  modules: ['@nuxt/image', 'nuxt-simple-sitemap', '@vueuse/nuxt'],
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
    url: 'https://ysumc.net',
  },
})
