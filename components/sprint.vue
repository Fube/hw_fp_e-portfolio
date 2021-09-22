<template>
  <div class="collapse collapse-arrow">
    <input type="checkbox" />
    <div class="collapse-title text-xl font-medium">
      <h1 class="collapse-title text-6xl text-quaternary">{{ name }}</h1>
    </div>
    <div class="collapse-content">
      <slot />
    </div>
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
