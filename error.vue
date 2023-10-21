<template>
  <div class="flex flex-col min-h-screen overflow-hidden heti">
    <PublicHeader />
    <main class="grow">
      <DocumentDrivenNotFound />
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
