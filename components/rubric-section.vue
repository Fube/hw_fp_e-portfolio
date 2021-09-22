<template>
  <div>
    <div class="m-6">
      <h1 class="text-4xl my-4 text-ternary">{{ name }}</h1>
      <p class="text-2xl font-sub"></p>
      <slot />
    </div>
  </div>
</template>

<style scoped>
p {
  @apply even:text-quinary odd:text-senary;
}
.rubric-content {
  @apply my-2 ml-4 font-content text-2xl;
}
</style>

<script lang="ts">
export default {
  props: ['name'],
}
</script>
