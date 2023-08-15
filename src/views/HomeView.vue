<script setup>
// import { useFlash } from "@/composables/useFlash";
import { useStorage } from "@/composables/useStorage";

// let { flash } = useFlash();
let food = useStorage('food', 'salad');
let age =  useStorage('age', 10);

</script>

<template>
  <main>
    <p>
      
      Whst is your favorite food? <br />
      <input type="text" v-model="food">
    </p>
    <p>
      
      How old are you? <br />
      <input type="text" v-model="age">
    </p>
  </main>
</template>
