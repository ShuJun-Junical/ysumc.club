<template>
  <div class="bg-white flex items-center py-16 px-10">
    <div>
      <h2
        class="text-3xl pb-2 leading-normal font-ysumc"
        v-html="props.title"
      ></h2>
      <p class="text-lg py-2">{{ props.subtitle || ' ' }}</p>
      <p class="text-lg py-4 mb-8">{{ props.time || ' ' }}</p>
      <PublicButton
        :text="['了解更多', 'WIP', '已写入计划'][props.state]"
        :color="['blue', 'pink', 'gray'][props.state]"
        :link="props.link"
      />
    </div>
    <NuxtImg :src="props.image" class="aspect-video w-1/2 ml-auto" />
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  title: string
  subtitle?: string
  time?: string
  link?: string
  state: 0 | 1 | 2
  image: string
}>()
</script>
