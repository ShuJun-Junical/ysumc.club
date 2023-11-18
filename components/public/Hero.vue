<template>
  <div class="w-full relative overflow-hidden" ref="target">
    <div
      class="relative h-screen jarallax flex items-center justify-center"
      ref="jarallax"
    >
      <NuxtPicture
        v-if="!props.isVideo || props.backupImg"
        :src="props.isVideo ? props.backupImg : props.image"
        class="absolute m-auto inset-0 -z-10 jarallax-img"
        :class="props.dark ? `brightness-[${props.dark}]` : ''"
      />
      <div v-if="title || text" class="text-white text-center">
        <h1 v-if="title" class="text-5xl font-ysumc">{{ props.title }}</h1>
        <p v-if="text" v-html="props.text" class="text-xl pt-6"></p>
      </div>
      <slot v-else></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const { $jarallax, $jarallaxVideo } = useNuxtApp()
const jarallax = ref()
const target = ref()
const setNavBar = inject('setNavBar')

const inViewport = ref(false)

const props = defineProps<{
  image: string
  dark?: number | string
  title?: string
  text?: string
  isVideo?: boolean
  backupImg?: string
}>()

onMounted(() => {
  if (props.isVideo) {
    $jarallaxVideo()
    $jarallax(jarallax.value, {
      speed: 0.6,
      videoSrc: props.image,
      videoLazyLoading: false,
      // imgPosition: '50% 50%',
    })
    return
  }
  $jarallax(jarallax.value, {
    speed: 0.6,
    // imgPosition: '50% 50%',
  })
})

const { stop } = useIntersectionObserver(
  target,
  ([{ isIntersecting }], observerElement) => {
    if (isIntersecting) {
      if (process.client) {
        window.addEventListener('scroll', handleScroll)
      }
    } else {
      if (process.client) {
        setNavBar(false)
        window.removeEventListener('scroll', handleScroll)
      }
    }
  },
)

function handleScroll() {
  if (process.client) {
    const a = target.value.getBoundingClientRect()
    if (a.top < 40 && a.bottom > 0) {
      setNavBar(true)
    }
  }
}
</script>
