<template>
  <div class="w-full bg-white py-14">
    <div class="max-w-7xl mx-auto flex items-center">
      <div class="mr-auto max-w-2xl">
        <div class="flex mb-4 items-center">
          <h1 class="text-7xl"><strong>我们联合</strong></h1>
          <NuxtImg src="/img/logo/mua.svg" class="h-10 ml-auto"></NuxtImg>
        </div>
        <p class="text-xl leading-normal font-normal">
          我们并不孤独：不仅是我们，国内其他的著名高校也拥有着自己Minecraft同好群体甚至是Minecraft游戏社团。我们彼此联谊，精诚合作，联合高校Minecraft同好群体的力量，共同面对未来的挑战。
        </p>
      </div>
      <div class="flex ml-auto gap-4">
        <a
          v-for="i in link"
          class="w-14 h-14 rounded-full flex items-center justify-center border-2 border-[#f0008a]"
          :href="i.link"
          target="_blank"
        >
          <span
            :class="i.icon"
            class="text-3xl"
            style="color: rgb(240, 0, 138); fill: rgb(240, 0, 138)"
          ></span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const link = [
  {
    name: 'website',
    link: 'https://www.mualliance.ltd/',
    icon: 'mobi-mbri-globe-2',
  },
  {
    name: 'bili',
    link: 'https://space.bilibili.com/2011929607',
    icon: 'socicon-niconico',
  },
]
</script>
