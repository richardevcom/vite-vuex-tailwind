<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import GithubSVG from './assets/github.svg'

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
        <p class="text-gray-400 text-xs text-center">
            <a class="flex items-center justify-center text-base font-medium text-black" href="https://github.com/richardevcom/vite-vuex-tailwind"><GithubSVG class="w-5 mr-1" />richardev</a>
        </p>
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
