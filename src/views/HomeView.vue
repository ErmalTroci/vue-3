<script setup>
import { useFlash } from "@/composables/useFlash";

let { flash } = useFlash();
// export default {
//   setup(){
//     let { flash } = useFlash();
  
//     return { flash };
//   }
// }

</script>

<template>
  <main>
    <p>
      <button @click="flash('Error', 'It does not Work!', 'error')">Click me</button>
    </p>
  </main>
</template>
