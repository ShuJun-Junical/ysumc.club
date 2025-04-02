<template>
  <NuxtLayout>
    <PublicHero image="genshin/hero.png">
      <div class="absolute bottom-36 md:top-[23%] left-4 md:left-8">
        <div class="w-full">
          <NuxtImg src="genshin/logo_text_white.svg" class="h-20 md:h-32" />
        </div>
        <!-- <p class="font-ysumc text-3xl">一周年纪念</p> -->
        <div
          class="mt-6 md:mt-16 ml-3 text-[3.2rem] md:text-[5.5rem] text-white font-normal leading-tight font-ysumc"
        >
          提瓦特虽小，<br />
          亦是精彩之「原」。
        </div>
      </div>
    </PublicHero>
    <PublicCenterText title="“9月28日”" class="my-20">
      是这样的，我们实际上一直是喜欢原神的社团。<br />
      从一个人喊出“原神启动”开始，再到一群人也抽不出的专武。又从第一个满命角色开始，到如今我们终于凑成全角色了。<br />
      我们甚至不知该如何形容这一段时光，充实的？繁忙的？好像都可以。
    </PublicCenterText>
    <HomeFirstAnniSmallParallax image="genshin/o2.png" dark="0.5">
      <HomeFirstAnniMainBlock
        title="“我亲人呢？”"
        :button="{ link: 'https://ys.mihoyo.com/main/' }"
      >
        作为故事的主人公，你从世界之外漂流而来，降临大地。<br />
        你将在这广阔的世界中，自由旅行、结识同伴、寻找掌控尘世元素的七神，直到与分离的血亲重聚。
      </HomeFirstAnniMainBlock>
    </HomeFirstAnniSmallParallax>
    <PublicCenterText title="" class="my-20">
      …………<br /><br />
      931天了，我们夺取了主动权，米哈游也在致力于创造区位与价值并存的成果。<br />
      提瓦特大陆从来不缺少惊喜。
    </PublicCenterText>
    <PublicHero
      :image="i.image"
      v-for="i in projectList"
      :key="i.title"
      :is-video="i.isVideo"
      :backupImg="i.backupImg || ''"
    >
      <HomeFirstAnniMainBlock
        :title="i.title"
        :button="{ link: i.link }"
        :text="i.text"
        :additional-image="i.additionalImage || ''"
      />
    </PublicHero>
    <PublicCenterText title="“谁在这里激活锚点了？”" class="my-20">
      不积跬步，无以至千里；不积小流，无以成江海。<br />
      燕山大学原神学生同好者协会的斐然成就，离不开每一名社团成员的才智与努力。<br /><br />
      …………<br /><br />
      截至2023年9月，燕山大学原神学生同好者协会已有430名外部成员与26名正式成员。<br />
      我们彼此信任，互相合作，将一切做到更好。<br /><br />
      这一切，最后都会成为珍贵的回忆。
    </PublicCenterText>
    <HomeFirstAnniSmallParallax
      v-for="i in workflow"
      :image="i.image"
      :key="i.title"
      dark="0.5"
    >
      <HomeFirstAnniMainBlock
        :title="i.title"
        :button="{ link: i.link }"
        :text="i.text"
      />
    </HomeFirstAnniSmallParallax>
    <PublicCenterText title="“未来……”" class="my-20">
      未来总是不确定的。<br />
      我们毕竟刚刚篡了位，或许仍旧需要更多的历练。<br /><br />
      ……<br /><br />
      但是，米哈游仍旧脚踏实地，彼此信任，创造出一个又一个充满着趣味与价值的成果。<br />
      不要忘记，提瓦特从来不缺少惊喜。<br /><br /><br />
      燕山大学原神学生同好者协会，生日快乐！
    </PublicCenterText>
    <HomeFirstAnniBigPicture />
    <PublicJoin dark class="mt-24" />
    <HomeConactUs dark />
    <PublicMUA dark />
  </NuxtLayout>
</template>
<script setup lang="ts">
definePageMeta({
  layout: 'dark',
})
const setNavBar = inject('setNavBar')
onMounted(() => {
  setNavBar(true, 'black')
})
onBeforeRouteLeave(() => {
  setNavBar(null, 'white')
})
const projectList = [
  {
    title: '三千一百万老婆。',
    text: '从一个可选性别的角色开始，再到一整个后宫团。<br />《原神》见证着游戏成长的时光。',
    image: 'genshin/o4.jpg',
    link: 'https://ys.mihoyo.com/main/',
  },
  // {
  //   title: '直冲云霄。',
  //   text: '起初没有人在意这场计划，直到这个计划显现出恐怖的规模。<br />固体方块数达12亿，从整体到每个细节均无可挑剔，前无古人，后难见来者。<br /><br />预计2024.8完工',
  //   image: 'FirstAnni/SEV.png',
  //   link: '',
  // },
  {
    title: '彳亍提瓦特。',
    text: '一个易瓦特，七座城邦，一座废墟。<br />《原神》让你走进提瓦特大陆之中，探寻那个年代的提瓦特精神。',
    image: 'genshin/o7.jpg',
    link: 'https://ys.mihoyo.com/main/',
  },
  {
    title: '67个食材，318道料理。',
    text: '角色发起制作，与游戏里的锅碗瓢盆篝火合作，为你填饱肚子。<br />用角色所制作出的料理，共同展现好吃的（或许难吃）的力量。',
    image: 'genshin/o5.png',
    link: 'https://ys.mihoyo.com/main/',
  },
]

const workflow = [
  {
    title: '保持专业。',
    text: '单论游戏的话原神只能说是游戏。<br />但有的是化学知识和概率论知识与其挂钩。',
    image: 'genshin/o8.jpg',
    link: 'https://ys.mihoyo.com/main/',
  },
]
</script>
