<script setup lang="ts">
import apiActions$ from '@/services/api-actions';
</script>

<template>
    <header>
        <div class="inner-container">
            <h1><RouterLink to="/home">Transcriptions</RouterLink></h1>
            <nav>
                <RouterLink class="about" to="/another-page">About</RouterLink>
                <button type="button" @click="apiActions$.next('upload')" class="reset-button-style">
                    <img src="@/assets/images/upload.svg" alt="upload list of transcriptions" />
                </button>
                <button type="button" @click="apiActions$.next('add')" class="reset-button-style">
                    <img src="@/assets/images/fetch-document.svg" alt="fetch transcriptions" />
                </button>
            </nav>
        </div>
    </header>
</template>

<style>
header {
    box-shadow: 0px 5px 5px var(--color-border);
}

header .inner-container {
    display: flex;
    align-items: center;
    height: 100px;
    padding: 1rem;
    max-width: 1280px;
    margin: 0 auto;
}

header h1 {
    flex: 1;
    display: flex;
}

header h1 a {
    color: var(--color-main-title);
    text-decoration: none;
    font-family: Montserrat, sans-serif;
    font-weight: 600;
    font-size: 18px;
}

nav {
    display: flex;
    align-items: center;
    gap: 12px;
}

nav .about {
    opacity: 0;
}
nav .about:hover,
nav .about:focus {
    opacity: 1;
}

@media screen and (min-width: 1024px) {
    nav {
        gap: 24px;
    }

    header .inner-container {
        padding: 2rem;
    }
}
</style>
