export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      isOutlink: function (link: string | undefined) {
        // 使用正则表达式判断是否为外链
        const reg = /^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/
        return link ? reg.test(link) : false
      },
    },
  }
})
