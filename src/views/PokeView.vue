<script setup>
import LoadingSpinner from '../components/LoadingSpinner.vue';
import { useRoute, useRouter } from 'vue-router';
import { useGetData } from '@/composables/getData';
import { useFavoritosStore } from '../store/favoritos';

const route = useRoute();
const router = useRouter();

const back = () => {
    router.push('/pokemons');
}

const { data, getData, loading, errorMsg } = useGetData();

getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);

const useFavoritos = useFavoritosStore();
const { add, findPoke } = useFavoritos;

</script>

<template>
    <LoadingSpinner v-if="loading" />
    <div class="alert alert-danger text-center" v-show="errorMsg">{{ errorMsg }}</div>
    <div v-if="data" class="text-center">
        <img :src="data.sprites?.front_default" alt="">
        <h1>Pokemon: {{ $route.params.name }} </h1>
        <button class="btn btn-primary mb-5" @click="add(data)" :disabled="findPoke(data.name)">Agregar favorito</button>
    </div>

    <button class="btn btn-primary" @click="back">Volver a listado</button>
</template>