<template>
  <div class="w-full bg-white py-16">
    <div class="lg:mx-10 items-center lg:flex lg:justify-start">
      <NuxtPicture :src="props.image" class="lg:w-2/3" />
      <div class="w-0 xl:w-[5%]" />
      <div class="mt-8 lg:mt-0 ml-8 xl:ml-0">
        <p class="text-3xl xl:text-4xl font-ysumc">{{ props.time }}</p>
        <h1 class="text-2xl xl:text-3xl font-ysumc pt-4 -ml-2">
          {{ props.title }}
        </h1>
        <div class="text-base xl:text-lg mt-12 mb-6" v-html="props.text"></div>
        <div class="flex gap-4">
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
  text: string
  buttons: {
    text: string
    color?: 'blue' | 'pink' | 'gray'
    link?: string
  }
}>()
</script>
