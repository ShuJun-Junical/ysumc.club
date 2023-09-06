<template>
  <div class="absolute bottom-32 left-10 text-white">
    <h1 class="text-5xl font-ysumc pb-4">{{ props.title }}</h1>
    <p class="text-3xl">{{ props.text }}</p>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  title: string
  text: string
}>()
</script>
