import { jarallax, jarallaxVideo } from '@/assets/external/jarallax'
import 'jarallax/dist/jarallax.min.css'
export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      jarallax,
      jarallaxVideo,
    },
  }
})
