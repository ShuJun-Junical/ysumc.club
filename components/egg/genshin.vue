<template>
  <div
    class="genshin flex items-center justify-center fixed top-0 left-0"
    ref="white"
  >
    <NuxtPicture
      :src="img.src"
      class="gi-img"
      :style="`opacity: ${img.opacity}`"
    />
    <audio src="/media/o.mp3" autoplay="autoplay" ref="audio"></audio>
  </div>
</template>
<script setup lang="ts">
import { on } from 'events'
const white = ref()
const img = ref({
  src: 'egg/o1.png',
  opacity: 0,
})
const audio = ref()

definePageMeta({
  layout: 'blank',
})
onMounted(() => {
  setTimeout(() => {
    white.value.style.opacity = '1'
    audio.value.play()
    setTimeout(() => {
      img.value.opacity = 1
      setTimeout(() => {
        img.value.opacity = 0
        setTimeout(() => {
          img.value.src = 'egg/o2.png'
          img.value.opacity = 1
        }, 2000)
      }, 2000)
    }, 1500)
  }, 500)
})
</script>
<style>
.genshin {
  background-color: white;
  opacity: 0;
  transition: opacity 1.5s;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
}
.gi-img {
  transition: opacity 2s;
}
</style>
