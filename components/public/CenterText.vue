<template>
  <div class="w-full text-center py-14 px-6">
    <h1 class="text-3xl md:text-4xl mb-10 font-ysumc" v-if="props.title">
      {{ props.title }}
    </h1>
    <p class="text-base md:text-lg"><slot></slot></p>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  title?: string
}>()
</script>
