<template>
  <footer
    class="bg-no-repeat bg-center bg-cover text-white py-4"
    :style="{ 'background-image': `url(${footerBkg})` }"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="grid grid-cols-12 pb-4 pt-8">
        <!-- First block -->
        <div class="col-span-6 md:col-span-3 flex flex-col md:justify-between">
          <NuxtLink to="/" class="inline-block" aria-label="YSUMC">
            <NuxtPicture src="logo/ysumc-text.svg" class="w-96" />
          </NuxtLink>
          <div class="flex md:gap-2 mt-4 md:mt-0">
            <a
              v-for="i in externalLink"
              class="w-10 h-10 flex items-center justify-center"
              :href="i.link"
              target="_blank"
            >
              <span :class="i.icon" class="text-xl"></span>
            </a>
          </div>
        </div>
        <div class="col-span-6 md:col-span-3" />
        <div
          class="col-span-12 md:col-span-2 my-3 md:my-0"
          v-for="i in content"
          :key="i.title"
        >
          <h6 class="text-gray-800 font-bold mb-3">{{ i.title }}</h6>
          <ul class="text-sm">
            <li class="mb-2" v-for="j in i.items" :key="j.name">
              <NuxtLink
                :to="j.link"
                :target="$isOutlink(j.link) ? '_blank' : ''"
                class="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
              >
                {{ j.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom area -->
      <div
        class="md:flex md:items-center md:justify-between py-4 border-t border-gray text-gray"
      >
        <div class="text-[0.7rem] md:text-sm mr-4 content-start">
          {{ new Date().getFullYear() }}{{ ' ' }}
          &copy;
          本社所有文案，图片均由燕山大学Minecraft学生同好者协会制作，未经允许，切勿盗取挪用，如若发现，将采取法律手段进行维权。
        </div>
        <div class="text-[0.7rem] md:text-sm mr-4 content-end mt-2 md:mt-0">
          <a href="https://beian.miit.gov.cn" target="_blank"
            >黔ICP备2022009898号-1</a
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import footerBkg from '~/assets/image/footer-bkg.png'
const $isOutlink = inject('isOutlink')
const content = [
  {
    title: '资料',
    link: '/document',
    items: [
      {
        name: '皮肤站教程',
        link: 'https://blog.ysumc.club/index.php/%E6%95%99%E7%A8%8B/54.html',
      },
      { name: '游戏配置' },
      { name: '我社报道' },
      { name: '视觉形象', link: '/document/visual-identity' },
    ],
  },
  // {
  //   title: '项目',
  //   link: '/project',
  //   items: [
  //     { name: '燕山大学复原计划', link: '/project/work/pixel-ysu' },
  //     { name: '时空悖论系列', link: '/project/activity/rpg-skbl-jhqsl' },
  //     { name: '云游燕大[WIP]', link: '/project/work/online-ysu' },
  //   ],
  // },
  {
    title: '外联',
    items: [
      { name: 'MUA高校联盟', link: 'https://www.mualliance.ltd/' },
      { name: '上海交通大学', link: 'https://mc.sjtu.cn/' },
      { name: '中南大学', link: 'https://csu-mc.magicalsheep.cn/' },
      {
        name: '西安建筑科技大学',
        link: 'https://www.xauatcraft.com/',
      },
    ],
  },
  {
    title: '关于我们',
    items: [
      { name: '燕山大学官方网站', link: 'http://ysu.edu.cn/' },
      {
        name: '燕山大学MC社皮肤站',
        link: 'http://skin.ysumc.club/',
      },
    ],
  },
]
const externalLink = [
  {
    name: 'skin',
    link: 'http://skin.ysumc.club/',
    icon: 'mobi-mbri-website-theme',
  },
  {
    name: 'bili',
    link: 'https://space.bilibili.com/353195087',
    icon: 'socicon-niconico',
  },
  {
    name: 'qq',
    link: 'https://jq.qq.com/?_wv=1027&k=NLcAidqm',
    icon: 'socicon-qq',
  },
  { name: 'afd', link: 'https://afdian.net/a/yusmc/', icon: 'mobi-mbri-cash' },
]
</script>
