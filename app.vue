<template>
  <div class="flex flex-col min-h-screen overflow-hidden bg-base-white heti">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
const { $Heti } = useNuxtApp()
onMounted(() => {
  const heti = new $Heti('.heti')
  heti.autoSpacing() // 自动进行中西文混排美化和标点挤压
})
function isOutlink(link: string | undefined) {
  // 使用正则表达式判断是否为外链
  const reg = /^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/
  return link ? reg.test(link) : false
}
provide('isOutlink', isOutlink)
</script>
