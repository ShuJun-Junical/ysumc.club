<template>
  <div class="bg-white flex items-center py-16 px-10">
    <div>
      <h2 class="text-4xl pb-2 leading-normal">
        <strong v-html="props.title"></strong>
      </h2>
      <p class="text-lg py-2">{{ props.subtitle || ' ' }}</p>
      <p class="text-lg py-4 mb-8">{{ props.time || ' ' }}</p>
      <NuxtLink
        :to="props.state === 0 || props.state === 1 ? props.link : ''"
        class="transition-colors py-3 px-6 rounded text-center text-lg border-2"
        :class="
          [
            'border-cyan-500 hover:border-cyan-600 text-cyan-500 hover:text-cyan-600',
            'border-pink-500 text-pink-500 hover:border-pink-600 hover:text-pink-600',
            'border-gray-500 text-gray-500',
          ][props.state]
        "
        >{{ ['了解更多', 'WIP', '已写入计划'][props.state] }}</NuxtLink
      >
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
