<template>
  <header class="fixed w-full z-30 bg-neutral-400/40 backdrop-blur-sm">
    <div
      class="mx-10 flex items-center justify-between transition-all duration-300 ease-in-out"
      :class="`${top ? 'h-20' : 'h-16'}`"
    >
      <!-- Site branding -->
      <NuxtLink
        to="/"
        class="shrink-0 mr-4 flex items-center"
        aria-label="YSUMC"
      >
        <NuxtImg
          src="/img/logo/ysumc-white.svg"
          class="transition-all duration-300 ease-in-out"
          :class="`${top ? 'h-12' : 'h-10'}`"
          fit="contain"
        />
        <span class="text-white font-bold text-xl pl-3 font-ysumc"
          >燕山大学Minecraft学生同好者协会</span
        >
      </NuxtLink>

      <!-- Desktop navigation -->
      <nav class="hidden md:flex md:grow">
        <!-- Desktop menu links -->
        <ul class="flex grow justify-end flex-wrap items-center">
          <li v-for="i in NavBarList" :key="i.name" class="nav-button">
            <NuxtLink
              :to="i.isMenu ? '' : i.link"
              :target="isOutLink(i.link) ? '_blank' : ''"
              class="text-lg font-medium text-white hover:text-gray-300 px-3 lg:px-5 py-2 flex items-center transition ease-in-out"
            >
              {{ i.name }}{{ i.isMenu ? ' ▾' : '' }}
            </NuxtLink>
            <div
              v-if="i.isMenu"
              class="absolute bg-gray-500 rounded-md transition-all ease-in-out hidden dropdown-menu"
            >
              <NuxtLink
                v-for="j in i.contents"
                :key="j.name"
                :to="j.link"
                :target="isOutLink(j.link) ? '_blank' : ''"
                class="text-lg font-base text-white hover:text-gray-300 px-6 py-3 flex items-center transition ease-in-out"
                :class="
                  i.contents?.indexOf(j) === i.contents?.length - 1
                    ? ''
                    : 'border-b border-slate-300'
                "
              >
                {{ j.name }}
              </NuxtLink>
            </div>
          </li>
        </ul>
      </nav>

      <!-- Mobile menu -->
      <div class="flex md:hidden">
        <!-- Hamburger button -->
        <button
          ref="{trigger}"
          :class="`hamburger ${mobileNavOpen ? 'active' : ''}`"
          aria-controls="mobile-nav"
          :aria-expanded="mobileNavOpen"
          @click="mobileNavOpen = !mobileNavOpen"
        >
          <span class="sr-only">Menu</span>
          <svg
            class="w-6 h-6 fill-current text-gray-900"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="4" width="24" height="2" />
            <rect y="11" width="24" height="2" />
            <rect y="18" width="24" height="2" />
          </svg>
        </button>

        <!-- Mobile navigation -->

        <Transition
          tag="nav"
          id="mobile-nav"
          enter-active-class="transition ease-out duration-200 transform"
          enter-from-class="opacity-0 -translate-y-2"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition ease-out duration-200"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <div
            v-show="mobileNavOpen"
            class="absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-scroll bg-white"
          >
            <ul class="px-5 py-2">
              <!-- <li>
                  <h2 class="h2 flex text-gray-600 py-2">和瑛社</h2>
                </li> -->
              <li v-for="i in NavBarList" :key="i.name">
                <NuxtLink
                  :to="i.path"
                  class="flex text-gray-600 hover:text-gray-900 py-2"
                >
                  {{ i.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </Transition>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const top = ref(true)
const mobileNavOpen = ref(false)

const NavBarList = [
  {
    name: '皮肤站',
    isMenu: false,
    link: 'https://skin.ysumc.club',
  },
  {
    name: '项目',
    isMenu: false,
    link: '/project',
  },
  {
    name: '资料',
    isMenu: true,
    contents: [
      {
        name: '皮肤站设置',
        link: 'https://blog.ysumc.club/index.php/%E6%95%99%E7%A8%8B/54.html',
      },
      { name: '我社报道', link: '/document' },
      { name: 'MC社网盘', link: 'http://cloud.ysumc.club' },
    ],
  },
  {
    name: '画廊',
    isMenu: false,
    link: '/gallery',
  },
  {
    name: '联系我们',
    isMenu: true,
    contents: [
      { name: 'QQ群', link: 'https://jq.qq.com/?_wv=1027&k=ob12TKWY' },
      { name: 'B站', link: 'https://www.bilibili.com/' },
      { name: '爱发电', link: 'https://afdian.net/a/yusmc/' },
    ],
  },
]

onMounted(() => {
  window.addEventListener('scroll', scrollHandler)
  document.addEventListener('keydown', keyHandler)
})
onUnmounted(() => {
  window.removeEventListener('scroll', scrollHandler)
  document.removeEventListener('keydown', keyHandler)
})

function scrollHandler() {
  window.pageYOffset > 10 ? (top.value = false) : (top.value = true)
}

function keyHandler(e: any) {
  if (e.keyCode === 27) {
    mobileNavOpen.value = false
  }
}

function isOutLink(link: string | undefined) {
  // 使用正则表达式判断是否为外链
  const reg = /^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/
  return link ? reg.test(link) : false
}
</script>

<style scoped>
.angle {
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid #000;
}

.nav-button:hover > .dropdown-menu {
  display: block;
}
</style>
