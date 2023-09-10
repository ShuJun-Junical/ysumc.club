<template>
  <div class="w-full" :class="props.image ? 'jarallax py-14' : 'py-0'">
    <NuxtPicture
      :src="props.image"
      class="jarallax-img brightness-50"
      v-if="props.image"
    />
    <div class="text-center text-white max-w-4xl mx-auto">
      <h1 class="text-2xl md:text-5xl font-ysumc" v-if="props.title">
        {{ props.title }}
      </h1>
      <div class="flex items-end mt-14 mb-8">
        <div class="w-1/4" v-for="(i, index) in countDown" :key="index">
          <span class="text-4xl md:text-6xl font-ysumc">{{ i }}</span>
          <p class="text-xl md:text-2xl">{{ units[index] }}</p>
        </div>
      </div>
      <div class="text-sm md:text-xl text-white text-center">
        <slot />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const { $jarallax } = useNuxtApp()

const currentTime = ref(new Date())
const countDown = ref(['00', '00', '00', '00'])
let timer: any = null

const units = ['天', '时', '分', '秒']

updateTime()

watchEffect(() => {
  // 每隔一秒更新一次当前时间
  timer = setInterval(updateTime, 1000)
})
// 清除定时器
onUnmounted(() => {
  clearInterval(timer)
})

const props = defineProps<{
  title?: string
  image?: string
  time: Date
}>()

if (props.image)
  onMounted(() => {
    $jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.6,
      // imgPosition: '50% 50%',
    })
  })

function numProcess(num: number) {
  return num < 0 ? '00' : num.toString().padStart(2, '0')
}

function updateTime() {
  currentTime.value = new Date()
  const nowTime = currentTime.value.getTime()
  const dateTime = props.time.getTime()
  const diff = dateTime - nowTime
  const day = Math.floor(diff / (24 * 3600 * 1000))
  const hour = Math.floor((diff / (3600 * 1000)) % 24)
  const minute = Math.floor((diff / (60 * 1000)) % 60)
  const second = Math.floor((diff / 1000) % 60)
  countDown.value = [
    numProcess(day),
    numProcess(hour),
    numProcess(minute),
    numProcess(second),
  ]
}
</script>
