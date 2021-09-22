<template>
  <div class="rubric-section collapse collapse-arrow">
    <input type="checkbox" />
    <div class="collapse-title">
      <h1 class="text-4xl my-4 heading">{{ name }}</h1>
    </div>
    <div class="collapse-content">
      <slot />
    </div>
  </div>
</template>

<style>
p {
  @apply even:text-quinary odd:text-senary;
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
