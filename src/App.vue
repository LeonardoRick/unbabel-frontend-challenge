<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from '@/components/Header.vue';
</script>

<template>
    <Header />
    <main>
        <RouterView />
    </main>
</template>

<style scoped>
main {
    padding: 1rem;
    max-width: 1280px;
    margin: 0 auto;
}

@media screen and (min-width: 1024px) {
    main {
        padding: 2rem;
    }
}
</style>
