<template>
  <div class="w-full bg-neutral-50 pb-14">
    <div class="max-w-7xl mx-auto flex items-center">
      <p class="mr-auto text-xl leading-normal font-normal">
        您可以前往QQ群与我们交流，进入我们的bilibili页面了解更多……<br />
        或在皮肤站注册一个账号，直接开玩！
      </p>
      <div class="flex ml-auto gap-4">
        <a
          v-for="i in link"
          class="w-14 h-14 rounded-full flex items-center justify-center border-2 border-[#817f7f]"
          :href="i.link"
          target="_blank"
        >
          <span
            :class="i.icon"
            class="text-3xl"
            style="color: rgb(129, 127, 127); fill: rgb(129, 127, 127)"
          ></span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const link = [
  {
    name: 'qq',
    link: 'https://jq.qq.com/?_wv=1027&k=5BZ5Z8D',
    icon: 'socicon-qq',
  },
  {
    name: 'bili',
    link: 'https://space.bilibili.com/353195087',
    icon: 'socicon-niconico',
  },
  {
    name: 'skin',
    link: 'http://skin.ysumc.club/',
    icon: 'mobi-mbri-website-theme ',
  },
]
</script>
