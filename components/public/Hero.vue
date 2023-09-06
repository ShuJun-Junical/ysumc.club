<template>
  <div class="w-full relative overflow-hidden">
    <div class="relative h-screen jarallax">
      <NuxtImg
        :src="props.image"
        class="absolute m-auto inset-0 -z-10 jarallax-img"
        :class="{ 'brightness-50': props.dark }"
      />
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const { $jarallax } = useNuxtApp()

const props = defineProps<{
  image: string
  dark?: boolean
}>()

onMounted(() => {
  $jarallax(document.querySelectorAll('.jarallax'), {
    speed: 0.2,
    // imgPosition: '50% 50%',
  })
})
</script>
