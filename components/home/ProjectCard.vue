<template>
  <div class="shadow-lg overflow-hidden bg-white flex flex-col">
    <NuxtPicture :src="props.image" class="w-full aspect-video object-cover" />
    <div class="pt-8 px-8">
      <h2 class="text-xl leading-normal text-center">
        <b>{{ props.title }}</b>
      </h2>
      <p class="text-md md:text-lg mb-8 mt-4 leading-normal indent-9">
        <slot />
      </p>
    </div>
    <PublicButton
      text="详细信息"
      :link="props.link"
      class="self-start mt-auto mb-8 ml-8"
    />
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  title: string
  image: string
  link: string
}>()
</script>
