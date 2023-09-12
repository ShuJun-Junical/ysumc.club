<template>
  <div class="py-16 pl-10 w-full">
    <h1 class="text-5xl font-ysumc">{{ props.title }}</h1>
    <p class="text-lg mt-10 mb-6"><slot /></p>
    <PublicButton
      :text="props.button.text || '了解更多'"
      :link="props.button.link || ''"
      :color="props.button.color || 'white'"
    />
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  title: string
  button: {
    text?: string
    link?: string
    color?: string
  }
}>()
</script>
