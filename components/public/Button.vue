<template>
  <NuxtLink
    :to="props.link"
    :target="$isOutlink(props.link) ? '_blank' : ''"
    :class="$attrs.class"
  >
    <button
      class="transition-colors py-2 px-3 xl:px-4 rounded-md text-center text-base xl:text-lg border-[2.5px] font-bold tracking-tight whitespace-nowrap"
      :class="color ? colorList[color] : colorList.blue"
      :style="color === 'gray' ? 'cursor:default' : ''"
      @click="color === 'gray' ? (原神启动 = true) : ''"
    >
      {{ props.text }}
    </button>
  </NuxtLink>
  <EggGenshin v-if="color === 'gray' && 原神启动" @click="原神启动 = false" />
</template>
<script setup lang="ts">
const $isOutlink = inject('isOutlink')
const props = defineProps<{
  text: string
  color?: 'blue' | 'pink' | 'gray' | 'black'
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
  gray: ['text-gray', 'border-gray'],
  white: [
    'text-white',
    'border-white',
    'hover:text-base-white',
    'hover:border-base-white',
  ],
  black: [
    'text-black',
    'border-black',
    'hover:text-black-dark',
    'hover:border-black-dark',
  ],
}

const 原神启动 = ref(false)
</script>
