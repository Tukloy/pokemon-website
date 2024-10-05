<script setup>
import { reactive, onMounted } from 'vue';
import axios from 'axios';

const state = reactive({
    pokemonDetails: {},
    typeColors: []
})

const props = defineProps({
    pokemon: Object,
    url: String
})

const getPokemonData = async () => {
    try {
        const response = await axios.get(props.pokemon.url)
        state.pokemonDetails = response.data

        state.typeColors = []

        state.pokemonDetails.types.forEach((detail) => {
            switch (detail.type.name) {
                case 'grass': state.typeColors.push('bg-green-400')
                    break;
                case 'poison': state.typeColors.push('bg-violet-400')
                    break;
                case 'fire': state.typeColors.push('bg-red-400')
                    break;
                case 'flying': state.typeColors.push('bg-sky-400')
                    break;
                case 'water': state.typeColors.push('bg-blue-500')
                    break;
                case 'bug': state.typeColors.push('bg-green-600')
                    break;
                case 'normal': state.typeColors.push('bg-gray-500')
                    break;
                case 'electric': state.typeColors.push('bg-yellow-400')
                    break;
                case 'ground': state.typeColors.push('bg-stone-500')
                    break;
                case 'fairy': state.typeColors.push('bg-pink-400')
                    break;
                case 'fighting': state.typeColors.push('bg-orange-400')
                    break;
                case 'psychic': state.typeColors.push('bg-blue-400')
                    break;
                case 'rock': state.typeColors.push('bg-stone-800')
                    break;
                case 'steel': state.typeColors.push('bg-slate-400')
                    break;
                case 'ice': state.typeColors.push('bg-cyan-500')
                    break;
                case 'dark': state.typeColors.push('bg-violet-800')
                    break;
                case 'dragon': state.typeColors.push('bg-red-600')
                    break;
                case 'ghost': state.typeColors.push('bg-gray-700')
                    break;
            }
        })
    } catch (error) {
        console.error('Error Fetching Pokemon Data', error)
    }
}

onMounted(() => {
    getPokemonData()
})
</script>
<template>
    <div
        class="border-2 border-blue-500 hover:bg-radial-custom ease-in-out duration-300 rounded-xl flex flex-col justify-center items-center group hover:shadow-[0px_0px_10px_10px_#63b3ed] cursor-pointer relative">
        <div class="w-[60%] h-[60%]">
            <img class="w-full h-full grayscale-[50%] group-hover:grayscale-0 group-hover:scale-110 duration-500 linear"
                :src="url + pokemon.url.split('/')[6] + '.svg'" alt="">
        </div>
        <p class="font-semibold text-lg text-gray-50">{{ pokemon.name }}</p>
        <div class="absolute bottom-2 text-xs font-semibold right-4 flex gap-x-2">
            <p v-for="(detail, index) in state.pokemonDetails.types" :key="index" :class="state.typeColors[index]"
                class="px-2 rounded-full text-gray-50">
                {{ detail.type.name }}
            </p>
        </div>
    </div>
</template>
