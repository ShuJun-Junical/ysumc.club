<template>
  <div class="w-full py-14 bg-base-white">
    <div class="max-w-7xl mx-auto text-center">
      <h1 class="text-5xl font-ysumc">加入我们！</h1>
      <p class="text-xl mt-3">我们不收取任何费用！</p>
      <div class="flex gap-8 mt-8">
        <div
          v-for="i in card"
          class="bg-white w-1/2 p-12 rounded-md text-center"
        >
          <span :class="i.icon" class="text-7xl text-gray4"></span>
          <h2 class="mt-10 text-4xl font-ysumc">
            {{ i.name }}
          </h2>
          <p class="my-4 text-lg" v-html="i.text"></p>
          <PublicButton text="了解更多" :link="i.link" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
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
