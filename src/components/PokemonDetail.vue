<script setup>
const emit = defineEmits('emit-close')
defineProps({
    showDetail: Boolean,
    pokemon: Object,
    details: Object,
    url: String,
})
</script>
<template>
    <div v-if="showDetail" class="fixed inset-0 bg-black/70 backdrop-blur-sm z-50">
        <div class="absolute top-3 right-4">
            <button @click="emit('emit-close')"
                class="pi pi-times text-gray-50 text-2xl hover:scale-110 linear duration-300 text-opacity-70 hover:text-opacity-100"></button>
        </div>
        <div class="flex flex-col items-center justify-center h-full">
            <div>
                <img :src="url + pokemon.url.split('/')[6] + '.svg'" alt="">
            </div>
            <p class="text-gray-50">{{ pokemon.name }}</p>
        </div>
    </div>
</template>