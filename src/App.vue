<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TeamView from "@/views/TeamView.vue"
</script>

<template>
<!--  <header>-->
<!--    <div class="wrapper">-->
<!--      <nav>-->
<!--        <RouterLink to="/">Home</RouterLink>-->
<!--        <RouterLink to="/about">About</RouterLink>-->
<!--        <RouterLink to="/counter">Counter</RouterLink>-->
<!--        <RouterLink to="/contact">Contact</RouterLink>-->
<!--      </nav>-->
<!--    </div>-->
<!--  </header>-->

<!--  <div class="center">-->
<!--    <RouterView />-->
<!--  </div>-->
  <div class="grid m-2 p-2">
    <div class="place-self-center">
<!--      <TeamView />-->
      <RouterView />
    </div>
  </div>

</template>

<!--<style>-->
<!--  @import "@/assets/base.css";-->
<!--</style>-->



