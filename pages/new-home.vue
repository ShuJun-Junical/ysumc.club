<template>
  <PublicHero image="FirstAnni/Hero.png" class="mb-14">
    <div class="absolute bottom-36 md:top-[23%] left-4 md:left-8">
      <div class="w-full">
        <NuxtImg src="logo/ysumc-text.svg" class="h-20 md:h-32" />
      </div>
      <div
        class="mt-6 md:mt-16 ml-3 text-[3.2rem] md:text-[5.5rem] text-white font-normal leading-tight font-ysumc"
      >
        方块虽小，<br />
        亦是精彩之源。
      </div>
    </div>
  </PublicHero>
  <PublicHero
    image="VP9:/media/myuniversity/vp9.webm,mp4:/media/myuniversity/265.mp4"
    is-video
    >12</PublicHero
  >
</template>
<script setup lang="ts">
definePageMeta({
  layout: 'dark',
})
</script>
