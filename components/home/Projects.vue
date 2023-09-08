<template>
  <div class="max-w-7xl mb-14 mx-6 lg:mx-auto grid grid-cols-2 gap-8">
    <HomeProjectCard
      v-for="i in list"
      :key="i.title"
      :title="i.title"
      :image="i.image"
      :link="i.link"
      class="col-span-2 md:col-span-1"
      >{{ i.text }}</HomeProjectCard
    >
  </div>
</template>
<script setup lang="ts">
const list = [
  {
    title: '《像素燕大：燕山大学复原计划》',
    image: '/img/Index/Proj-1.png',
    link: '/project/work/pixel-ysu',
    text: '《像素燕大》:该项目于2022年2月24日着手计划建设，于2022年12月4日正式竣工，历时303天。由燕山大学Minecraft学生同好者协会打造，此项目以游戏《我的世界》为载体，通过CAD图纸、GIS定高、资料查询及图像拍摄等方法，进行燕山大学东、西校区的再现还原，将现实中的燕大转化为电子模型，打造最生动形象的燕山大学。',
  },
  {
    title: '工作流',
    image: '/img/Index/Proj-2.png',
    link: '/project/workflow/visual-effect',
    text: 'Minecraft具有半开源的性质，其底层工作很考验社员们的专业能力。燕山大学Minecraft学生同好者协会正在尝试建立涉及到专业软件的工作流，以提升社员们的专业素养。',
  },
  {
    title: '《云游燕大》校园导览系统',
    image: '/img/Index/Proj-3.jpg',
    link: '/project/work/online-ysu',
    text: '云游燕大:基于游戏《我的世界》的特殊性，相较于其他艺术形式，游览者可在其中切身实际进行游览，沉浸式感受世纪楼、燕宏桥、图书馆等燕大地标性建筑的魅力。通过简单的电脑、手机输入，便可实现在虚拟中畅游燕大。云游燕大同样支持虚拟现实设备进入，若游览者拥有此类设备，便可完全沉浸式体验在燕山大学漫步的体验。 ',
  },
  {
    title: '学生联谊会',
    image: '/img/Index/Proj-4.png',
    link: '/project/activity/festival-party',
    text: '“一起玩”是高校学生社交中最重要的一环。《玩家联谊会》希望能在佳节中带来欢庆，提升燕山大学Minecraft同好群体的认同感和凝聚力。',
  },
]
</script>
