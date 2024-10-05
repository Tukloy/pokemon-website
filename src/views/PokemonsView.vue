<script setup>
import PokemonDetail from '@/components/PokemonDetail.vue';
import { ref, watch, reactive } from 'vue';
import axios from 'axios';
import Pokemons from '@/components/Pokemons.vue';

const showDetail = ref(false)
const searchField = ref('')
const state = reactive({
    details: []
})

const props = defineProps({
    pokemons: Array,
    pokemon: Object,
    url: String
})
const emit = defineEmits(['emit-search'])

const selectPokemon = async (pokemon) => {
    try {
        const response = await axios.get(pokemon.url)
        state.details = response.data
        state.pokemon = pokemon
        showDetail.value = true
    } catch (error) {
        console.error('Error Fetching Selected Pokemon', error)
    }
}

watch(searchField, (newValue) => {
    emit('emit-search', newValue);
});
</script>
<template>
    <div class="h-screen bg-custom-radial">
        <PokemonDetail :showDetail="showDetail" :details="state.details" :pokemon="state.pokemon" :url="url"
            @emit-close="showDetail = false" />
        <div class="flex justify-center items-center h-full pt-24 pb-10">
            <div
                class="container mx-auto border-2 rounded-xl border-blue-500  h-full shadow-[0px_0px_10px_10px_#63b3ed] py-8 overflow-hidden">
                <div class="flex justify-end relative mx-8">
                    <input v-model="searchField"
                        class="outline-none text-sm px-4 focus:shadow-[0px_0px_10px_10px_#63b3ed] duration-300 rounded-full ease-in-out"
                        placeholder="Search..." type="text">
                    <i class="pi pi-search absolute right-2 top-[25%]"></i>
                </div>
                <div class="grid grid-cols-4 gap-6 h-[88%] overflow-hidden overflow-y-auto no-scrollbar mt-8 px-8 pt-8">
                    <Pokemons v-for="(pokemon, index) in pokemons" :key="index" :url="url" :pokemon="pokemon"
                        @click="selectPokemon(pokemon)" />
                </div>
            </div>
        </div>
    </div>
</template>