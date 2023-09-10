<template>
  <PublicHero
    image="/img/Gallery/Hero.jpg"
    title="画廊"
    text="这里展示本社团的宣传图片并提供其下载渠道，既有有趣的经历也有斐然的成就。"
    dark="0.6"
  ></PublicHero>
  <PublicCenterText title="注意事项" class="shadow-lg"
    >所有原创拍摄图片下载后均会于左下角显示本社团水印，望谅解。<br />
    尊重创作成果，请勿冒用。
  </PublicCenterText>
  <GalleryPictureItem
    v-for="i in galleryItems"
    :key="i.title"
    :title="i.title"
    :time="i.time"
    :buttons="i.buttons"
    :image="i.image"
    :text="i.text"
  ></GalleryPictureItem>
</template>
<script setup lang="ts">
const galleryItems = [
  {
    title: '《我们在》',
    time: '2023年8月14日',
    buttons: [{ text: '下载原图' }],
    image: '/img/Gallery/1-wmz/demo.png',
    text: '<b>秋田同学</b><br />Blender渲染<br />3840px*2160px<br />《像素燕大：燕山大学复原计划》与社团部分社员。',
  },
  {
    title: '《渲染气氛测试》',
    time: '2023年8月13日',
    buttons: [{ text: '下载原图' }],
    image: '/img/Gallery/2-xrqfcs/demo.png',
    text: '<b>秋田同学</b><br />Blender渲染<br />1920px*1080px<br />《太空电梯1:1复原》弹射塔区域。',
  },
  {
    title: '《模拟人生》',
    time: '2023年5月7日',
    buttons: [{ text: '下载原图' }],
    image: '/img/Gallery/3-mnrs/demo.png',
    text: '<b>LockRikard  Kerkythea</b><br />Novasikn.me壁纸预设<br />1920px*1080px<br />社团部分社员。',
  },
  {
    title: '《烟花》',
    time: '2023年1月22日 ',
    buttons: [{ text: '下载原图' }],
    image: '/img/Gallery/4-yh/demo.png',
    text: '<b>秋田同学</b><br />游戏截图<br />1920px*1080px<br />《新春联谊会》烟火秀与一名社团社员。',
  },
  {
    title: '《燕山大学复原总图》',
    time: '2022年12月15日',
    buttons: [
      { text: '不提供原图', color: 'gray' },
      { text: '下载8K', color: 'pink' },
      { text: '下载4K', color: 'pink' },
    ],
    image: '/img/Gallery/5-ysdxfyzt/demo.png',
    text: '<b>秋田同学</b><br />twinmotion渲染<br />15360px*8640px<br />《像素燕大：燕山大学复原计划》',
  },
]
</script>
