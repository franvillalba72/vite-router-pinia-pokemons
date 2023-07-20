<script setup>
import { useFavoritosStore } from '../store/favoritos';
import { storeToRefs } from 'pinia';

const useFavoritos = useFavoritosStore();
const { favoritos } = storeToRefs(useFavoritos);
const { remove } = useFavoritos;
</script>

<template>
    <div>
        <h1>Favoritos</h1>
        <p v-if="favoritos.length === 0" >Sin favoritos</p>
        <ul class="list-group" v-else >
            <li class="list-group-item d-flex align-items-center justify-content-between px-5" v-for="fav in favoritos" :key="fav.id">
                <div>
                    <img :src="fav.sprites?.front_default" alt="">
                    {{ fav.name }}
                </div>
                <div class="d-flex gap-3">
                    <RouterLink class="btn btn-sm btn-success" :to="`/pokemons/${fav.name}`">Mas información</RouterLink>
                    <button type="button" class="btn btn-sm btn-danger" @click="remove(fav.id)">Eliminar</button>
                </div>
            </li>
        </ul>
    </div>
</template>

