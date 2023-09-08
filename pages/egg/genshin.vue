<template>
  <div class="bg-white genshin flex items-center justify-center">
    <img src="/img/egg/o1.png" class="gi-img" ref="img" />
    <audio
      src="/audio/o.mp3"
      autoplay="autoplay"
      controls="controls"
      ref="audio"
    ></audio>
  </div>
</template>
<script setup lang="ts">
import { on } from 'events'
const img = ref()
const audio = ref()

definePageMeta({
  layout: 'blank',
})
onMounted(() => {
  setTimeout(() => {
    img.value.style.opacity = '1'
    audio.value.play()
  }, 1000)
  setTimeout(() => {
    img.value.style.opacity = '0'
  }, 4000)
  setTimeout(() => {
    img.value.src = '/img/egg/o2.png'
    img.value.style.opacity = '1'
  }, 6000)
})
</script>
<style>
.genshin {
  background-color: white;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
}
.gi-img {
  opacity: 0;
  transition: opacity 2s;
}
</style>
