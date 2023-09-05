<template>
  <PublicHero image="/img/Project/Hero.png" dark>
    <h1 class="text-7xl font-ysumc text-white text-center mt-32">
      <strong>距离下一次危机还有</strong>
    </h1>
    <PublicCountdown :time="new Date('2023/9/1')"
      >这里是项目页，下滑以了解更多项目。</PublicCountdown
    >
  </PublicHero>
  <PublicCenterText title="工程项目">来看看我们的本事吧。</PublicCenterText>
  <ProjectCard
    title="项目1"
    subtitle="项目1的副标题"
    time="2021/9/1"
    image="/img/Project/Hero.png"
    class="max-w-7xl mx-auto"
  />
</template>
