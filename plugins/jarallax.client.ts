import { jarallax } from 'jarallax'
import 'jarallax/dist/jarallax.min.css'
export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      jarallax,
    },
  }
})
