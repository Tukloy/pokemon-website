<script setup>
import { RouterLink } from 'vue-router';
import Wallpaper from '/wallpaper.jpg';
</script>

<template>
    <div class="relative h-screen"
        :style="{ backgroundImage: `url(${Wallpaper})`, backgroundSize: 'cover', backgroundPosition: 'center' }">
        <div class="absolute inset-0 bg-black/30"></div>
        <div class="flex justify-center flex-col items-center h-full relative">
            <p class="text-4xl text-yellow-300 font-bold">Discover the World of Pokémon!</p>
            <p class="text-gray-50 font-semibold text-xl mb-4">Gonna catch them all!</p>
            <p class="text-gray-200 font-semibold text-base w-[40%] text-center">Unleash your inner Trainer and explore
                everything
                about
                Pokémon—where to find them, how to catch them, and much more!</p>
            <div class="flex gap-x-4 mt-8">
                <RouterLink to="/pokemons"
                    class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">
                    Catch
                    them!</RouterLink>
                <button
                    class="focus:outline-none text-white bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-gray-900">Get
                    Started</button>
            </div>
        </div>
    </div>
</template>