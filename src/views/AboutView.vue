<script setup>
import { useFlash } from "@/composables/useFlash";
let { flash } = useFlash();
</script>

<template>
  <div class="about">
    <p>
      <button @click="flash('test','It Works also on About Page!','info')">Click me</button>
    </p>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
