<script setup>
import Navbar from '@/components/Navbar.vue';
import Logo from '/pokelogo.png'
import { RouterView } from 'vue-router';
import { reactive, onMounted, computed } from 'vue';
import axios from 'axios';

const state = reactive({
  imageBaseUrl: ('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/'),
  pokemons: [],
  isLoading: true,
  search: ''
})

const getPokemonsData = async () => {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
    state.pokemons = response.data.results
  } catch (error) {
    console.error('Error Fetching Pokemon Data', error)
  } finally {
    state.isLoading = false
  }
}

const pokemonsFiltered = computed(() => {
  if (state.pokemons && state.search) {
    return state.pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(state.search.toLowerCase()));
  }
  return state.pokemons;
});

onMounted(() => {
  getPokemonsData()
})

</script>
<template>
  <Navbar :logo="Logo" />
  <RouterView :pokemons="pokemonsFiltered" :url="state.imageBaseUrl" @emit-search="(value) => state.search = value" />
</template>