/*
La diferencia con un composable es que los valores de un store
se guardan para todos los componentes en los que los usemos
*/
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
    const count = ref(0)
    const doubleCount = computed(() => count.value * 2)
    const increment = () => count.value++;

    return { count, doubleCount, increment }
})
