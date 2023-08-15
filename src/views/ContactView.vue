<script setup>
import { counter } from '../stores/counterStore';
</script>
<template>
  <div class="contact">
    <h1>This is an contact page</h1>
    <p>
      The current Count is: {{ counter.count }}
    </p>
  </div>
</template>



