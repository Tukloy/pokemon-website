<script setup>
import { reactive } from 'vue';

const state = reactive({
    image: ['/img6.png', '/img1.png', '/img2.jpg', '/img3.jpg', '/img4.jpg', '/img5.jpg'],
    currentIndex: 0,
});
const nextImage = () => {
    state.currentIndex = (state.currentIndex + 1) % state.image.length;
};
const prevImage = () => {
    state.currentIndex = (state.currentIndex - 1 + state.image.length) % state.image.length;
};
setInterval(() => {
    nextImage()
}, 3000)
</script>

<template>
    <div id="indicators-carousel" class="relative w-full">
        <div class="relative h-56 overflow-hidden md:h-[60vh]">
            <div v-for="(image, index) in state.image" :key="index"
                class="absolute inset-0 duration-700 ease-in-out transition-all" :class="{
                    'opacity-100 z-10': index === state.currentIndex,
                    'opacity-0 z-0': index !== state.currentIndex
                }">
                <img :src="image" class="block object-cover w-full h-full" alt="...">
            </div>
        </div>

        <!-- Slider controls -->
        <button type="button"
            class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            @click="prevImage">
            <span
                class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M5 1 1 5l4 4" />
                </svg>
                <span class="sr-only">Previous</span>
            </span>
        </button>
        <button type="button"
            class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            @click="nextImage">
            <span
                class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 9 4-4-4-4" />
                </svg>
                <span class="sr-only">Next</span>
            </span>
        </button>
    </div>
</template>
