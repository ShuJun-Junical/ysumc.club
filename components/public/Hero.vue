<template>
  <div class="w-full relative overflow-hidden">
    <div class="relative h-screen jarallax flex items-center justify-center">
      <NuxtPicture
        v-if="!props.isVideo"
        :src="props.image"
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

const props = defineProps<{
  image: string
  dark?: number | string
  title?: string
  text?: string
  isVideo?: boolean
}>()

onMounted(() => {
  if (props.isVideo) {
    $jarallaxVideo()
    $jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.6,
      videoSrc: props.image,
      videoLazyLoading: false,
      // imgPosition: '50% 50%',
    })
    return
  }
  $jarallax(document.querySelectorAll('.jarallax'), {
    speed: 0.6,
    // imgPosition: '50% 50%',
  })
})
</script>
