<template>
  <footer
    class="pt-12 pb-8 bg-no-repeat bg-center bg-cover"
    :style="{ 'background-image': `url(${footerBkg})` }"
  >
    <div
      class="w-full flex flex-nowrap items-start justify-evenly text-white font-normal"
    >
      <div v-for="i in content">
        <p class="text-xl mb-2">
          <strong
            ><NuxtLink
              v-if="i.link"
              :to="i.link"
              :target="isOutLink(i.link) ? '_blank' : ''"
              class="underline underline-offset-4"
              >{{ i.title }}</NuxtLink
            >
            <span v-else>{{ i.title }}</span></strong
          >
        </p>
        <ul class="text-lg">
          <li v-for="j in i.items" class="leading-relaxed">
            <NuxtLink
              v-if="j.link"
              :to="j.link"
              :target="isOutLink(j.link) ? '_blank' : ''"
              class="underline underline-offset-4 transition hover:text-gray-400"
              >{{ j.name }}</NuxtLink
            >
            <a v-else :href="j.link" class="text-gray-400">{{ j.name }}</a>
          </li>
        </ul>
        <div v-if="content.indexOf(i) === content.length - 1" class="my-8">
          <p class="text-xl mb-2"><strong>外部链接</strong></p>
          <div class="flex gap-2">
            <a
              v-for="i in externalLink"
              class="w-10 h-10 bg-white rounded-full flex items-center justify-center"
              :href="i.link"
              target="_blank"
            >
              <span
                :class="i.icon"
                style="color: rgb(53, 53, 53); fill: rgb(53, 53, 53)"
              ></span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-4 w-full text-center text-md text-gray-400">
      “本社所有文案，图片均由燕山大学Minecraft学生同好者协会制作，未经允许，切勿盗取挪用，如若发现，将采取法律手段进行维权。”<br />
      地址：河北省秦皇岛市河北大街西段438号 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      &nbsp; 邮编：066004<br />
      &copy; Copyright
      {{ new Date().getFullYear() }} 顾梵，秋田同学拥有本网站一切解释权 - All
      Rights Reserved
    </div>
  </footer>
</template>

<script lang="ts" setup>
import footerBkg from '~/assets/image/footer-bkg.png'

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
      { name: '视觉形象规范', link: '/document/visual-identity' },
    ],
  },
  {
    title: '项目',
    link: '/project',
    items: [
      { name: '像素燕大：燕山大学复原计划', link: '/project/work/pixel-ysu' },
      { name: '时空悖论系列', link: '/project/activity/rpg-skbl-jhqsl' },
      { name: '云游燕大[WIP]', link: '/project/work/online-ysu' },
    ],
  },
  {
    title: '外联',
    items: [
      { name: 'MUA高校联盟', link: 'https://www.mualliance.ltd/' },
      { name: '上海交通大学Minecraft社', link: 'https://mc.sjtu.cn/' },
      { name: '中南大学服务器', link: 'https://csu-mc.magicalsheep.cn/' },
      {
        name: '西安建筑科技大学Minecraft服务器',
        link: 'https://www.xauatcraft.com/',
      },
    ],
  },
  {
    title: '关于我们',
    items: [
      { name: '燕山大学官方网站', link: 'http://ysu.edu.cn/' },
      {
        name: '燕山大学Minecraft同好者协会皮肤站',
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

function isOutLink(link: string | undefined) {
  // 使用正则表达式判断是否为外链
  const reg = /^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/
  return link ? reg.test(link) : false
}
</script>
