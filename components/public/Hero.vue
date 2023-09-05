<template>
  <div class="w-full relative overflow-hidden">
    <div class="relative h-screen jarallax">
      <NuxtImg
        :src="props.image"
        class="absolute m-auto inset-0 -z-10 jarallax-img"
      />
      <div class="absolute w-full h-full">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { $jarallax } = useNuxtApp()

const props = defineProps<{
  image: string
}>()

onMounted(() => {
  $jarallax(document.querySelectorAll('.jarallax'), {
    speed: 0.2,
    // imgPosition: '50% 50%',
  })
})
</script>
