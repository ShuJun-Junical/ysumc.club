<template>
  <div class="flex flex-col min-h-screen overflow-hidden heti">
    <PublicHeader />
    <main class="grow">
      <PublicHero image="404.jpeg">
        <div class="absolute bottom-36 left-10 text-white">
          <h1 class="text-4xl font-ysumc">404 Error!</h1>
          <p class="text-2xl pb-12 pt-6">这个页面被秋田同学叼走了。</p>
          <PublicButton text="去首页" link="/" color="white" />
        </div>
      </PublicHero>
    </main>
    <PublicFooter />
  </div>
</template>
<script setup lang="ts">
provide('isOutlink', isOutlink)
function isOutlink(link: string | undefined) {
  // 使用正则表达式判断是否为外链
  const reg = /^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/
  return link ? reg.test(link) : false
}

const props = defineProps({
  error: Object,
})
</script>
