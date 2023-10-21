<template>
  <div>
    <div></div>
    <div
      class="prose prose-base md:prose-lg prose-black mx-auto"
      :class="classes()"
    >
      <slot />
    </div>
    <div>
      <ul v-if="toc && toc.links">
        <li v-for="link in toc.links" :key="link.text">
          <a :href="`#${link.id}`">
            {{ link.text }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
const { page, toc } = useContent()
// useContentHead(page)
// console.log(toc)
const classNames = {
  headings: ['text-black'],
  p: ['text-black'],
}

function classes() {
  let a: string[] = []
  for (let i in classNames) {
    if (classNames[i].length) {
      classNames[i].forEach((j) => {
        a.push(`prose-${i}:${j}`)
      })
    }
  }
  return a
}
</script>
