<template>
  <div class="w-full bg-white py-16">
    <div class="grid grid-cols-12 max-w-7xl mx-auto items-center">
      <NuxtImg :src="props.image" class="col-span-7" />
      <div class="col-span-4 col-start-9">
        <p class="text-4xl font-ysumc">{{ props.time }}</p>
        <h1 class="text-3xl font-ysumc pt-4">{{ props.title }}</h1>
        <div class="text-lg mt-12 mb-6"><slot /></div>
        <div class="flex">
          <PublicButton
            v-for="i in props.buttons"
            :key="i.text"
            :text="i.text"
            :color="i.color || 'blue'"
            :link="i.link"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  image: string
  title: string
  time: string
  buttons: {
    text: string
    color?: 'blue' | 'pink' | 'gray'
    link?: string
  }
}>()
</script>
