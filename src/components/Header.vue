<script setup lang="ts">
defineEmits(['upload-clicked', 'add-clicked']);

const changeTheme = () => {
    console.log(window.matchMedia('(prefers-color-scheme: dark)'));
    console.log('changeTheme');
};
</script>
<template>
    <header>
        <div class="inner-container">
            <h1><RouterLink to="/home">Transcriptions</RouterLink></h1>
            <nav>
                <RouterLink to="/another-page">About</RouterLink>
                <button @click="$emit('upload-clicked')" class="reset-button-style">
                    <img src="@/assets/images/upload.svg" alt="upload" />
                </button>
                <button @click="$emit('add-clicked')" class="reset-button-style">
                    <img src="@/assets/images/fetch-document.svg" alt="fetch document" />
                </button>
            </nav>
        </div>
    </header>
    <div class="header"></div>
</template>

<style>
header {
    box-shadow: 0px 5px 5px var(--color-border);
}

header .inner-container {
    display: flex;
    height: 100px;
    padding: 2rem;
    max-width: 1280px;
    margin: 0 auto;
}

header h1 {
    flex: 1;
}

header h1 a {
    color: var(--color-text);
    text-decoration: none;
    font-family: Montserrat, sans-serif;
    font-weight: 600;
    font-size: 18px;
}

nav {
    display: flex;
    align-items: center;
    gap: 24px;
}
</style>
