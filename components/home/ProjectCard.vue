<template>
  <div class="rounded-md overflow-hidden bg-white flex flex-col">
    <NuxtImg :src="props.image" class="w-full aspect-video object-cover" />
    <div class="pt-8 px-8">
      <h2 class="text-xl leading-normal text-center">
        <strong>{{ props.title }}</strong>
      </h2>
      <p class="text-lg mb-8 mt-4 leading-normal indent-9">
        <slot />
      </p>
    </div>
    <NuxtLink
      :to="props.link"
      class="bg-cyan-500 hover:bg-cyan-600 transition-colors py-3 px-6 text-white rounded text-center text-lg shadow-md self-start mt-auto mb-8 ml-8"
      >详细信息 ></NuxtLink
    >
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  title: string
  image: string
  link: string
}>()
</script>
