<template>
  <div class="w-full relative overflow-hidden">
    <div class="relative h-screen">
      <div class="absolute w-full h-full">
        <slot></slot>
      </div>
      <NuxtImg :src="props.image" class="absolute m-auto inset-0 -z-10" />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  image: string
}>()
</script>
