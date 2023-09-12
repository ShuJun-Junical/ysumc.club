<template>
  <div class="w-full overflow-hidden">
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
</script>
