<template>
  <PublicHero image="/img/Project/Hero.png" dark="0.6">
    <div class="absolute top-1/3 w-full">
      <h1 class="text-7xl font-ysumc text-white text-center">
        距离下一次危机还有
      </h1>
      <PublicCountdown :time="new Date('2024/2/10')"
        >这里是项目页，下滑以了解更多项目。</PublicCountdown
      >
    </div>
  </PublicHero>
  <div
    v-for="(i, key) in project"
    :key="i.title"
    :class="{ 'mb-16': key === project.length - 1 }"
  >
    <PublicCenterText :title="i.title">{{ i.desc }}</PublicCenterText>
    <ProjectCard
      v-for="j in i.content"
      :key="j.title"
      :title="j.title"
      :subtitle="j.subtitle"
      :time="j.time"
      :state="j.state"
      :image="j.image"
      :link="j.link"
      class="max-w-7xl mx-auto my-8"
    />
  </div>
  <PublicCountdown
    :time="new Date('2023/9.13')"
    title="有人要过生日了。"
    image="/img/Project/Activity-2.png"
  ></PublicCountdown>
</template>
<script setup lang="ts">
const project = [
  {
    title: '工程项目',
    desc: '来看看我们的本事吧。',
    content: [
      {
        title: '《像素燕大：燕山大学复原计划》',
        subtitle: '——三千一百万方块打造的虚拟校园。',
        time: '2022.4-2022.12',
        state: 0,
        image: '/img/Project/Work-1.png',
        link: '/project/work/pixel-ysu',
      },
      {
        title: '《云游燕大》学校导览系统',
        subtitle: '——游戏中的燕大魅力丝毫不减。',
        time: '',
        state: 1,
        image: '/img/Project/Work-2.png',
        link: '/project/work/online-ysu',
      },
      {
        title: '一个大工程',
        subtitle: '',
        time: '预计于2023.9完成',
        state: 1,
        image: '/img/Project/WIP.png',
        link: '/project/work-in-progress',
      },
      {
        title: '《定格之中》虚拟校史馆',
        subtitle: '——走进照片，回首百年。',
        time: '',
        state: 2,
        image: '/img/Project/WIP.png',
        link: '',
      },
    ],
  },
  {
    title: '活动',
    desc: '用欢笑打破距离的隔阂。',
    content: [
      {
        title: '时空悖论 ：劫后启示录',
        subtitle: '——在逆境中重燃希望。',
        time: '2023.1.6  已结束',
        state: 0,
        image: '/img/Project/Activity-1.png',
        link: '/project/activity/rpg-skbl-jhqsl',
      },
      {
        title: '玩家联谊会',
        subtitle: '——每逢佳节便会到来的欢庆。',
        time: '节日期间举行',
        state: 0,
        image: '/img/Project/Activity-2.png',
        link: '/project/activity/festival-party',
      },
      {
        title: '100分钟建筑赛',
        subtitle: '——能力与智谋的较量。',
        time: '不定期举行',
        state: 0,
        image: '/img/Project/Activity-3.png',
        link: '/project/activity/100min-construct',
      },
    ],
  },
  {
    title: '工作流',
    desc: '专业能力永远很重要。',
    content: [
      {
        title: '3D打印工作流',
        subtitle: '——虚拟成真的纪念。',
        time: '',
        state: 0,
        image: '/img/Project/Workflow-1.png',
        link: '/project/workflow/3d-print',
      },
      {
        title: '视效工作流',
        subtitle: '——让一切真实与生动。',
        time: '',
        state: 0,
        image: '/img/Project/Workflow-2.png',
        link: '/project/workflow/visual-effect',
      },
      {
        title: '正式社员培训工作流',
        subtitle: '——薪火相传的意义。',
        time: '',
        state: 0,
        image: '/img/Project/Workflow-3.png',
        link: '/project/workflow/member-training',
      },
    ],
  },
  {
    title: '多人游戏与工作平台',
    desc: '你并不孤独。',
    content: [
      {
        title: '燕山大学服务器',
        subtitle: '——为燕山大学Minecraft爱好者搭建起的平台。',
        time: '',
        state: 0,
        image: '/img/Project/MCServer-1.png',
        link: '/project/mcserver/ysu-server',
      },
      {
        title: '《原初燕大服》',
        subtitle: '——这个不堪一击的服务器是一切的原点。',
        time: '2022.2  已关闭',
        state: 0,
        image: '/img/Project/MCServer-2.png',
        link: '/project/mcserver/old-server',
      },
    ],
  },
]
</script>
