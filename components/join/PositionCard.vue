<template>
  <div class="w-full flex justify-center gap-6 py-2">
    <div v-for="i in props.list" :key="i.title" class="w-1/5">
      <span
        :class="[i.icon, i.color || 'text-neutral-400']"
        class="block text-center text-7xl"
      ></span>
      <h4 class="text-center text-xl pt-8 pb-3">
        <b>{{ i.title }}</b>
      </h4>
      <p class="text-lg" v-html="i.text"></p>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  list: {
    title: string
    text: string
    icon: string
    color?: string
  }[]
}>()
</script>
