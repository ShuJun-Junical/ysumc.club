<template>
  <div class="w-full text-center py-14">
    <h1 class="text-4xl mb-10 font-ysumc">
      {{ props.title }}
    </h1>
    <p class="text-lg"><slot></slot></p>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  title: string
}>()
</script>
