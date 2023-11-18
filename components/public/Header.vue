<template>
  <header
    class="fixed w-full z-30 shadow-lg top-0 transition-all duration-300 ease-in-out"
    :class="['backdrop-blur-lg', 'bg-white', 'bg-black-dark'][resColor]"
  >
    <div class="mx-3 md:mx-10 flex items-center justify-between h-10">
      <!-- Site branding -->
      <NuxtLink
        to="/"
        class="shrink-0 mr-4 flex items-center"
        aria-label="YSUMC"
      >
        <NuxtImg
          :src="
            resColor === 1 ? 'logo/ysumc-color.svg' : 'logo/ysumc-white.svg'
          "
          class="transition-all duration-300 ease-in-out h-6"
          fit="contain"
        />
        <span
          class="text-base pl-3 font-ysumc hidden md:inline transition-all duration-300 ease-in-out"
          :class="['text-white', 'text-black', 'text-white'][resColor]"
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
              :target="$isOutlink(i.link) ? '_blank' : ''"
              class="text-base font-medium hover:text-gray-300 px-3 xl:px-5 py-2 flex items-center transition ease-in-out"
              :class="['text-white', 'text-black', 'text-white'][resColor]"
            >
              {{ i.name }}{{ i.isMenu ? ' ▾' : '' }}
            </NuxtLink>
            <div
              v-if="i.isMenu"
              class="absolute bg-gray4/90 backdrop-blur-md rounded-md transition-all ease-in-out hidden dropdown-menu"
            >
              <NuxtLink
                v-for="j in i.contents"
                :key="j.name"
                :to="j.link"
                :target="$isOutlink(j.link) ? '_blank' : ''"
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
        <button @click="mobileNavOpen = !mobileNavOpen">
          <span class="sr-only">Menu</span>
          <svg
            class="w-6 h-6 fill-white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="4" width="24" height="2" />
            <rect y="11" width="24" height="2" />
            <rect y="18" width="24" height="2" />
          </svg>
        </button>

        <!-- Mobile navigation -->
        <div
          class="bg-black/50 fixed left-0 top-0 w-screen h-screen z-10 transition-opacity duration-200 ease-in-out"
          v-show="mobileNavOpen"
          @click="mobileNavOpen = false"
        ></div>

        <Transition
          tag="nav"
          id="mobile-nav"
          enter-active-class="transition ease-out duration-200 transform"
          enter-from-class="opacity-0 translate-x-2"
          enter-to-class="opacity-100 -translate-x-0"
          leave-active-class="transition ease-out duration-200"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <div
            v-show="mobileNavOpen"
            class="fixed right-0 top-0 h-screen z-20 w-1/2 overflow-scroll bg-base-white shadow-xl"
          >
            <ul class="px-5 py-2">
              <!-- <li>
                  <h2 class="h2 flex text-gray-600 py-2">和瑛社</h2>
                </li> -->
              <li v-for="i in NavBarList" :key="i.name">
                <NuxtLink
                  @click="mobileNavOpen = false"
                  :to="i.link"
                  :target="$isOutlink(i.link) ? '_blank' : ''"
                  class="flex text-black hover:text-gray-900 py-2 hover:text-black-dark"
                >
                  {{ i.name }}
                </NuxtLink>
                <ul v-if="i.isMenu" class="ml-3">
                  <li v-for="j in i.contents">
                    <NuxtLink
                      @click="mobileNavOpen = false"
                      :to="j.link"
                      :target="$isOutlink(j.link) ? '_blank' : ''"
                      class="flex text-gray hover:text-gray-900 py-2 hover:text-gray-dark text-sm"
                      >{{ j.name }}</NuxtLink
                    >
                  </li>
                </ul>
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
const $isOutlink = inject('isOutlink')
const router = useRouter()
router.beforeEach((to, from) =>
  mobileNavOpen.value ? (mobileNavOpen.value = false) : true,
)

const props = withDefaults(
  defineProps<{
    color?: 'black' | 'white'
    isTransparent?: boolean
  }>(),
  {
    color: 'white',
    isTransparent: true,
  },
)

const resColor = computed(() => {
  return props.isTransparent ? 0 : props.color === 'white' ? 1 : 2
})

const NavBarList = [
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
    name: '皮肤站',
    isMenu: false,
    link: 'https://skin.ysumc.club',
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
</script>

<style lang="scss" scoped>
.nav-button:hover > .dropdown-menu {
  display: block;
}
</style>
