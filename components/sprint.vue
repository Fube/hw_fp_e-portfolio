<template>
  <div>
    <h1 class="text-6xl text-quaternary">{{ name }}</h1>
    <slot />
  </div>
</template>

<style>
.rubric-section:nth-child(even) .heading {
  @apply text-octonary;
}
.rubric-section:nth-child(odd) .heading {
  @apply text-septenary;
}
</style>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    name: {
      type: String,
      required: true,
    },
  },
})
</script>
