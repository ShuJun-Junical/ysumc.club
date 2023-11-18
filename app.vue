<template>
  <PublicHeader :is-transparent="navBar.isTransparent" :color="navBar.color" />
  <main class="grow bg-base-white">
    <NuxtPage />
  </main>
  <PublicBackTop />
  <PublicFooter />
</template>
<script setup lang="ts">
const navBar = ref({
  isTransparent: undefined,
  color: undefined,
})
const { $Heti } = useNuxtApp()
onMounted(() => {
  // 中文排版美化
  const heti = new $Heti('.heti')
  heti.autoSpacing() // 自动进行中西文混排美化和标点挤压

  // 百度统计代码
  var _hmt = _hmt || []
  ;(function () {
    var hm = document.createElement('script')
    hm.src = 'https://hm.baidu.com/hm.js?fa3da49c5f4c868bc9a8ae469ba4051f'
    var s = document.getElementsByTagName('script')[0]
    s.parentNode.insertBefore(hm, s)
  })()
})
function isOutlink(link: string | undefined) {
  // 使用正则表达式判断是否为外链
  const reg = /^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/
  return link ? reg.test(link) : false
}
function setNavBar(
  isTransparent?: boolean,
  color?: 'white' | 'black' | 'gray',
) {
  if (isTransparent === true || isTransparent === false)
    navBar.value.isTransparent = isTransparent
  if (color === 'white' || color === 'black' || color === 'gray')
    navBar.value.color = color
}
provide('isOutlink', isOutlink)
provide('setNavBar', setNavBar)
</script>
