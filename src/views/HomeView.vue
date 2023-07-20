<script setup>
import { useCounterStore } from '@/store/counter.js';
import { storeToRefs } from 'pinia';

const useCounter = useCounterStore();
const { increment } = useCounter;  // La destructuración de los métodos, así
const { count, doubleCount } = storeToRefs(useCounter); // La destructuración de variables reactivas y métodos reactivos, así
</script>

<template>
    <!-- Si pusiera esto mismo en otro componente, los valores seguirian siendo los mismos -->
    <h1>Home counter: {{ count }}</h1>
    <h2>Doble: {{ doubleCount }}</h2>
    <button @click="increment">Increment</button>
</template>
