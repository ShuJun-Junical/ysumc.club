<template>
  <PublicHero
    image="/img/Gallery/Hero.jpg"
    title="画廊"
    text="这里展示本社团的宣传图片并提供其下载渠道，既有有趣的经历也有斐然的成就。"
    dark="0.6"
  ></PublicHero>
  <PublicCenterText title="注意事项"
    >所有原创拍摄图片下载后均会于左下角显示本社团水印，望谅解。<br />
    尊重创作成果，请勿冒用。
  </PublicCenterText>
  <GalleryPictureItem
    title="《燕山大学复原总图》"
    time="2022年12月15日"
    :buttons="[{ text: '下载原图' }]"
    image="/img/Gallery/1-ysu/demo.png"
  >
    秋田同学<br />
    twinmotion渲染<br />
    15360px*8640px<br />
    《像素燕大：燕山大学复原计划》
  </GalleryPictureItem>
</template>
