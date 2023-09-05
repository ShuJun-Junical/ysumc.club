<template>
  <div class="bg-white flex items-center">
    <div>
      <h2>{{ props.title }}</h2>
      <p>{{ props.subtitle || ' ' }}</p>
      <p>{{ props.time || ' ' }}</p>
      <NuxtLink :to="!props.state ? props.link : '/project'">{{
        ['了解更多', 'WIP', '已写入计划'][props.state]
      }}</NuxtLink>
    </div>
    <NuxtImg :src="props.image" class="w-1/2" />
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
