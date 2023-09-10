import Heti from '@/assets/external/heti/js/heti-addon'
export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      Heti,
    },
  }
})
