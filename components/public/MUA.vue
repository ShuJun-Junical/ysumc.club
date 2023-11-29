<template>
  <div class="w-full py-14" :class="dark ? 'bg-gray4' : 'bg-white'">
    <div
      class="max-w-7xl flex items-center mx-6 xl:mx-auto md:flex-row flex-col"
    >
      <div class="mr-auto max-w-2xl">
        <div class="flex mb-4 items-center md:flex-row flex-col">
          <NuxtImg
            class="h-12"
            :src="dark ? 'logo/mua_slogan_white.svg' : 'logo/mua_slogan.svg'"
          />
          <NuxtImg
            :src="dark ? 'logo/mua_white.svg' : 'logo/mua.svg'"
            class="h-10 md:ml-auto md:mr-2 md:mt-0 mt-6"
          ></NuxtImg>
        </div>
        <p class="text-base md:text-xl leading-normal font-normal md:mt-0 mt-6">
          我们并不孤独：不仅是我们，国内其他的著名高校也拥有着自己Minecraft同好群体甚至是Minecraft游戏社团。我们彼此联谊，精诚合作，联合高校Minecraft同好群体的力量，共同面对未来的挑战。
        </p>
      </div>
      <div class="flex mr-auto gap-4 md:ml-auto md:mr-0 mt-6 md:mt-0">
        <a
          v-for="i in link"
          class="w-14 h-14 rounded-full flex items-center justify-center border-2"
          :class="[dark ? 'border-white' : 'border-pink']"
          :href="i.link"
          target="_blank"
        >
          <span
            :class="[dark ? 'text-white' : 'text-pink', i.icon]"
            class="text-3xl"
          ></span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  dark?: boolean
}>()
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
