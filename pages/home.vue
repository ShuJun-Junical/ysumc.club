<template>
  <PublicHero image="Index/Hero.png" class="mb-14">
    <div class="absolute bottom-36 md:top-[23%] left-4 md:left-8">
      <div class="w-full">
        <NuxtImg src="logo/ysumc-text.svg" class="h-20 md:h-32" />
      </div>
      <div
        class="mt-6 md:mt-16 ml-3 text-[3.2rem] md:text-[5.5rem] text-white font-normal leading-tight font-ysumc"
      >
        方块虽小，<br />
        亦是精彩之源。
      </div>
    </div>
  </PublicHero>
  <PublicCenterText title="我社简介">
    燕山大学Minecraft学生同好者协会（也可以叫燕山大学MC社）成立于2022年9月13日，<br />
    是以游戏《我的世界》（Minecraft）为核心开展同好活动和专业项目的学生社团，<br />
    <br />
    <strong
      >值得骄傲的是：我们是燕山大学第一个被学校官方承认的游戏社团。 </strong
    ><br />
    我们致力于为每一位来自燕山大学的Minecraft爱好者提供一个友好的交流平台，<br />
    并向外界展示Minecraft的趣味和价值。
  </PublicCenterText>
  <HomeBigPicture />
  <HomeWhatIsMC />
  <PublicCenterText title="趣味与价值">
    燕山大学Minecraft学生同好者协会虽然是游戏社团，但我们也不仅仅止于游戏的方方面面，<br />
    而是试着走出去，让Minecraft发挥更大的魅力。<br />
    <br />
    <strong
      >燕山大学Minecraft学生同好者协会的成员们精诚合作，共同创造出趣味与价值并存的成果。<br
    /></strong>
    <br />
    《像素燕大：燕山大学复原计划》用三千一百万方块详细生动地展现出了燕山大学东西校区的全貌。<br />
    每到佳节便会举办的玩家联谊会让欢笑跨越了距离的隔阂。<br />
    社团内部的三大工作流在为游戏增色的同时，也让社团具备了强大的专业素质。<br />
    <br />
    ……<br />
    <br />
    <strong
      >游戏带来趣味，项目和专业工作流带来价值，这也是燕山大学Minecraft学生同好者协会一直所坚持的事情。</strong
    >
  </PublicCenterText>
  <HomeProjects />
  <PublicJoin />
  <HomeConactUs />
  <PublicMUA />
  <PublicCountdown
    :time="new Date('2024/2/10')"
    title="距离下一次惊艳大家还剩下："
    image="Index/Countdown.png"
  >
    燕山大学MC社从来不缺惊喜。
  </PublicCountdown>
</template>
