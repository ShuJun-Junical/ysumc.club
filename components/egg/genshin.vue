<template>
  <div
    class="genshin flex items-center justify-center fixed top-0 left-0"
    ref="white"
  >
    <img src="egg/o1.png" class="gi-img" ref="img" />
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
const white = ref()
const img = ref()
const audio = ref()

definePageMeta({
  layout: 'blank',
})
onMounted(() => {
  setTimeout(() => {
    white.value.style.opacity = '1'
    audio.value.play()
    setTimeout(() => {
      img.value.style.opacity = '1'
      setTimeout(() => {
        img.value.style.opacity = '0'
        setTimeout(() => {
          img.value.src = 'egg/o2.png'
          img.value.style.opacity = '1'
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
  opacity: 0;
  transition: opacity 2s;
}
</style>
