<script setup>
import LoadingSpinner from '../components/LoadingSpinner.vue';
import { RouterLink } from 'vue-router'
import { useGetData } from '../composables/getData';

const {data, getData, loading, errorMsg} = useGetData();

getData('https://pokeapi.co/api/v2/pokemon');

</script>

<template>
    <h1>Pokemons</h1>

    <LoadingSpinner v-if="loading"/>

    <div class="alert alert-danger text-center" v-show="errorMsg">{{ errorMsg }}</div>

    <div v-if="data">
        <ul class="list-group">
            <li class="list-group-item" v-for="(poke, index) in data.results" :key="index">
                <RouterLink :to="`/pokemons/${poke.name}`">{{ poke.name }}</RouterLink>
            </li>
        </ul>
        <div class="d-flex gap-2 my-3">
            <button class="btn btn-dark" @click="getData(data.previous)" :disabled="!data.previous">Previous</button>
            <button class="btn btn-dark" @click="getData(data.next)" :disabled="!data.next">Next</button>
        </div>
    </div>
</template>