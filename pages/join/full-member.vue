<template>
  <PublicHero image="/img/Join/FullHero.jpg">
    <JoinHeroText title="正式社员" text="愉快充实且专业性强的位置" />
  </PublicHero>
  <JoinIntroduction>
    <p>
      正式社员是被燕山大学Minecraft同好者协会正式承认的社员，由在Minecraft的某个领域有一定了解或愿意对Minecraft某个领域深造学习的学生组成。只有正式社员才能享受燕山大学社团成员的福利。
    </p>
    <p>
      <strong>
        目前，燕山大学Minecraft同好者协会正式社员构成为以下六个分部：行政部、技术部、运维部、建筑部、玩法部、外宣部。六个部门的部分部长构成运营层，于运营层中决策选出主席团成员。</strong
      >
    </p>
  </JoinIntroduction>
  <div class="bg-neutral-50 py-1">
    <div v-for="i in position" :key="i.title" class="my-20">
      <h2 class="text-4xl text-center">
        <b>{{ i.title }}</b>
      </h2>
      <div v-if="i.hasChild" v-for="j in i.child">
        <h3 class="text-2xl text-center mt-10 mb-6">
          <b>{{ j.title }}</b>
        </h3>
        <JoinPositionCard :list="j.list" />
      </div>
      <JoinPositionCard v-else :list="i.list" class="my-6" />
    </div>
  </div>
  <PublicJoin />
</template>

<script setup lang="ts">
const position = [
  {
    title: '领导层',
    hasChild: false,
    list: [
      {
        title: '运营层',
        text: '燕山大学Minecraft同好者协会的领导团队，只能由下属部门部长组成。拥有对社团的最高决策权，并管理社团旗下所有分部的工作。',
        icon: 'mobi-mbri-users',
      },
      {
        title: '主席团',
        text: '行政职位，社团对外的代表人，由运营层选举得出。其负责对外的行政工作。但对社内无绝对的领导权利，而是领导其擅长领域的分部。',
        icon: 'mobi-mbri-user-2',
      },
    ],
  },
  {
    title: '旗下部门',
    hasChild: true,
    child: [
      {
        title: '行政部门',
        list: [
          {
            title: '行政部',
            text: '行政部门，<strong>由运营层直接负责</strong>。负责社团内和社团间的事务。对内进行党政工作、财政管理、活动审核。对外则是进行社团或组织间的外联工作。',
            icon: 'mobi-mbri-contact-form',
          },
          {
            title: '宣传部',
            text: '行政部门，负责社团内项目的宣传工作，例如视频剪辑，文章撰写等。也可以与学校内负责外部宣传的组织合作进行宣传工作。',
            icon: 'mobi-mbri-video',
          },
        ],
      },
      {
        title: '技术部门',
        list: [
          {
            title: '技术部',
            text: '技术部门。负责<strong>游戏内</strong>的软件技术，包括数据包、材质包、多人游戏插件和编程技术，其工作和文化部门有很强的联系。',
            icon: 'mobi-mbri-edit',
          },
          {
            title: '运维部',
            text: '技术部门，负责<strong>游戏外</strong>的软件和硬件技术，比如服务器、官网、皮肤站的搭建和维护。部分情况下也会与事务部共同进行游戏内项目的工作。',
            icon: 'mobi-mbri-sites',
          },
        ],
      },
      {
        title: '文化部门',
        list: [
          {
            title: '建筑部',
            text: '文化部门，燕大MC社最具特色的部门。负责游戏项目内Minecraft建筑的制作，也可以仅仅只是挥洒个人想法，进行纯粹的建筑展示。',
            icon: 'mobi-mbri-delivery',
          },
          {
            title: '玩法部',
            text: '文化部门，由技术部直接负责。负责研究或发现有趣的游戏内玩法。是连接正式社员工作和外部成员需求的重要部门。',
            icon: 'mobi-mbri-magic-stick',
          },
        ],
      },
    ],
  },
  {
    title: '其他职务',
    hasChild: false,
    list: [
      {
        title: '临时团支部',
        text: '由正式社员全部团员构成，担负直接教育团员、管理团员、监督团员和组织青年、宣传青年、凝聚青年、服务青年的职责。',
        icon: 'mobi-mbri-user-2',
        color: 'text-red-800',
      },
      {
        title: '荣誉职务',
        text: '为了感谢部分<strong>正式社员</strong>的奉献而设立的职务，社团内的最高荣誉，只能由本届运营层经严肃讨论后设立，荣誉职位满后不再选举。',
        icon: 'mobi-mbri-star',
        color: 'text-red-800',
      },
    ],
  },
]
</script>
