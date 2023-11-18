<template>
  <div class="grow bg-black text-white">
    <slot />
  </div>
</template>
<script setup>
const setNavBar = inject('setNavBar')
setNavBar(null, 'black')
</script>
