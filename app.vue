<template>
  <div class="flex flex-col min-h-screen overflow-hidden bg-base-white">
    <PublicHeader />

    <!-- Toast 顶部提示 -->
    <!-- <div
      class="toast toast-top toast-center fixed z-30 top-20 drop-shadow-xl"
      v-show="show"
    >
      <div class="alert" :class="`alert-${color}`">
        <div>
          <span>{{ text }}</span>
        </div>
      </div>
    </div> -->

    <main class="grow">
      <NuxtPage />
    </main>
    <PublicBackTop />
    <PublicFooter />
  </div>
</template>

<script setup lang="ts">
const show = ref(false)
const text = ref('')
const color = ref('info')

function showToast(
  content: string,
  colour: string = 'info',
  delay: number = 5000,
) {
  text.value = content
  color.value = colour
  show.value = true
  setTimeout(() => {
    show.value = false
  }, delay)
}

// provide('showToast', showToast)
</script>
