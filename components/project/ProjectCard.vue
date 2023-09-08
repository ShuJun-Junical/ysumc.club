<template>
  <div
    class="bg-white md:flex md:items-center p-2 md:py-16 md:px-10 shadow-lg"
    :class="{ 'bg-black': dark }"
  >
    <NuxtImg :src="props.image" class="aspect-videoml-auto md:hidden" />
    <div class="pb-12 md:pb-0 pl-2 md:pl-0" :class="{ 'text-white': dark }">
      <h2
        class="text-[1.4rem] md:text-3xl pb-2 leading-normal font-ysumc mt-6"
        v-html="props.title"
      ></h2>
      <p class="text-md md:text-lg pt-2">{{ props.subtitle || ' ' }}</p>
      <p class="text-md md:text-lg pb-12">{{ props.time || ' ' }}</p>
      <PublicButton
        :text="['了解更多', 'WIP', '已写入计划'][props.state]"
        :color="dark ? 'white' : ['blue', 'pink', 'gray'][props.state]"
        :link="props.link"
      />
    </div>
    <NuxtImg
      :src="props.image"
      class="aspect-video w-1/2 ml-auto hidden md:inline-block"
    />
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
  dark?: boolean
}>()
</script>
