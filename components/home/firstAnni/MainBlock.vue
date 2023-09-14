<template>
  <div class="py-16 px-6 md:px-10 w-full">
    <h1 class="text-3xl md:text-5xl font-ysumc">{{ props.title }}</h1>
    <NuxtImg
      v-if="props.additionalImage"
      :src="props.additionalImage"
      class="block w-32 mt-4"
      fit="inside"
    />
    <p
      class="text-base md:text-lg mt-10 mb-6"
      v-html="props.text"
      v-if="props.text"
    ></p>
    <p class="text-base md:text-lg mt-10 mb-6" v-else><slot /></p>
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
  text?: string
  additionalImage?: string
  button: {
    text?: string
    link?: string
    color?: string
  }
}>()
</script>
