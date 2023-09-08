<template>
  <NuxtLink :to="props.link" :target="$isOutlink(props.link) ? '_blank' : ''">
    <button
      class="transition-colors py-2 px-4 rounded-md text-center text-lg border-[2.5px] font-bold tracking-tight"
      :class="color ? colorList[color] : colorList.blue"
    >
      {{ props.text }}
    </button>
  </NuxtLink>
</template>
<script setup lang="ts">
const $isOutlink = inject('isOutlink')
const props = defineProps<{
  text: string
  color?: 'blue' | 'pink' | 'gray'
  link?: string
}>()
const colorList = {
  blue: [
    'text-blue',
    'border-blue',
    'hover:text-blue-dark',
    'hover:border-blue-dark',
  ],
  pink: [
    'text-pink',
    'border-pink',
    'hover:text-pink-dark',
    'hover:border-pink-dark',
  ],
  gray: [
    'text-gray',
    'border-gray',
    'hover:text-gray-dark',
    'hover:border-gray-dark',
  ],
  white: [
    'text-white',
    'border-white',
    'hover:text-base-white',
    'hover:border-base-white',
  ],
}
</script>
