<template>
    <header>
        <h1>{{state.name}}</h1>
        <p>Welcome to your fitst quiz!</p>

    </header>
</template>

<script setup>
import { state } from '@/stores/quizStore';
</script>