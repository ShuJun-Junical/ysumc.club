<template>
  <div class="w-full overflow-hidden" ref="target">
    <div class="jarallax" ref="jarallax">
      <NuxtPicture
        v-if="!props.isVideo"
        :src="props.image"
        class="absolute m-auto inset-0 -z-10 jarallax-img"
        :class="props.dark ? `brightness-[${props.dark}]` : ''"
      />
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const { $jarallax, $jarallaxVideo } = useNuxtApp()
const jarallax = ref()
const target = ref()
const setNavBar = inject('setNavBar')

const props = defineProps<{
  image: string
  dark?: number | string
  isVideo?: boolean
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
    } else {
      // setNavBar(false)
    }
  }
}
</script>
