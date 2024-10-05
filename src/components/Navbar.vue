<script setup>
import { RouterLink } from 'vue-router';
defineProps({
    logo: String
})
</script>
<template>
    <nav class="bg-white border-gray-200  dark:bg-gray-900 fixed right-0 left-0 bg-opacity-30 backdrop-blur-sm z-40">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <RouterLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img :src="logo" class="h-8" alt="Flowbite Logo" />
            </RouterLink>
            <button data-collapse-toggle="navbar-default" type="button"
                class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-default" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <i class="w-5 h-5 pi pi-bars"></i>
            </button>
            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul
                    class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <RouterLink to="/" activeClass="bg-yellow-300 text-gray-50"
                            class="block py-2 px-3 text-gray-950 rounded hover:bg-yellow-300 linear duration-300"
                            aria-current="page">
                            Home</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/pokemons" activeClass="bg-yellow-300 text-gray-50"
                            class="block py-2 px-3 text-gray-950 rounded hover:bg-yellow-300 linear duration-300">
                            Pokemons</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/pokemons-attack" activeClass="bg-yellow-300 text-gray-50"
                            class="block py-2 px-3 text-gray-950 rounded hover:bg-yellow-300 linear duration-300">
                            Attack</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/about" activeClass="bg-yellow-300 text-gray-50"
                            class="block py-2 px-3 text-gray-950 rounded hover:bg-yellow-300 linear duration-300">
                            About</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>