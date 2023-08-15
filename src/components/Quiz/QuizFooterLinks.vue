<template>
    <div>
        <h5>{{ state.name }}</h5>
<button @click="state.name = 'A new Quiz'">Change</button>
        <ul>
            <li><a href="#"> Contact us</a></li>
        </ul>
    </div>
</template>

<script setup>
import { state } from '@/stores/quizStore';
</script>