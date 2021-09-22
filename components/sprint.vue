<template>
  <div>
    <h1 class="text-6xl text-ternary">{{ name }}</h1>
    <slot />
  </div>
</template>

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
