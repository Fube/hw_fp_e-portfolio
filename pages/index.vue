<template>
  <div class="text-center h-full font-body pt-6">
    <header class="">
      <h1 class="inline text-6xl text-quinary">Nariman</h1>
      &nbsp;
      <h1 class="inline text-6xl text-senary">Abrari</h1>
      <h2 class="mt-4 text-4xl font-sub text-ternary">PetClinic</h2>
    </header>
    <main>
      <section
        class="text-left ml-12 w-11/12"
        v-for="sprint of sprints"
        :key="sprint.slug"
      >
        <nuxt-content :document="sprint" />
      </section>
    </main>
  </div>
</template>

<script lang="ts">
'use strict'
import Vue from 'vue'

export default Vue.extend({
  asyncData: async function ({ $content }) {
    const sprints = await $content('sprints').sortBy('slug').fetch()
    return { sprints }
  },
})
</script>
