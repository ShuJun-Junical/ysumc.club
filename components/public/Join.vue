<template>
  <div class="w-full py-14">
    <div class="max-w-7xl mx-auto text-center">
      <h1 class="text-3xl md:text-4xl font-ysumc">加入我们！</h1>
      <p class="text-base md:text-xl mt-3">我们不收取任何费用！</p>
      <div class="md:flex md:gap-8 mt-8 mx-6 xl:mx-0">
        <div
          v-for="i in card"
          class="md:w-1/2 p-12 shadow-lg text-center my-4 md:my-0"
          :class="dark ? 'bg-gray' : 'bg-white'"
        >
          <span
            class="text-7xl"
            :class="[dark ? 'text-white' : 'text-gray4', i.icon]"
          ></span>
          <h2 class="mt-10 text-3xl md:text-4xl font-ysumc">
            {{ i.name }}
          </h2>
          <p class="my-4 text-base md:text-lg" v-html="i.text"></p>
          <PublicButton
            text="了解更多"
            :link="i.link"
            :color="dark ? 'white' : 'blue'"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  dark?: boolean
}>()

const card = [
  {
    name: '外部成员',
    icon: 'mobi-mbri-globe',
    text: '与朋友游玩，与大佬交流，享受燕山大学Minecraft学生同好者协会<br />为燕山大学《我的世界》玩家提供的服务器和丰富多彩的活动！',
    link: '/join/external-member',
  },
  {
    name: '正式社员',
    icon: 'mobi-mbri-users',
    text: '在享受游戏的同时获取全新的知识，提升自己的综合能力。<br />相信我们，你们将会在大学中度过最充实美好的社团时光！ ',
    link: '/join/full-member',
  },
]
</script>
