<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const user = ''
const stack = computed(() => {
    return store.state.stack
})
</script>

<template>
    <nav class="relative flex items-center justify-center capitalize text-lg pt-24">
        <router-link class="inline pr-5" to="/" active-class="active">Home</router-link>
        <router-link class="inline" to="/about" active-class="active">About</router-link>
    </nav>
    <router-view class="p-24"></router-view>
    <footer>
        <p class="text-gray-400 text-xs text-center">Vue 3.0, Vite, Tailwind CSS</p>
    </footer>
</template>

<style lang="scss">
#app {
    @apply h-screen bg-gray-50;
}

nav {
    a.active {
        &::after {
            @apply block w-full bg-green-500;
            content: '';
            height: 1.5px;
        }
    }
}
</style>
