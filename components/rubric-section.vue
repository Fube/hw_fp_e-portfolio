<template>
  <div class="rubric-section">
    <div class="m-6">
      <h1 class="text-4xl my-4 heading">{{ name }}</h1>
      <p class="text-2xl font-sub"></p>
      <slot />
    </div>
  </div>
</template>

<style>
p {
  @apply even:text-nonary odd:text-denary;
}
.rubric-content {
  @apply my-2 ml-4 font-content text-2xl;
}
</style>

<script lang="ts">
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
}
</script>
