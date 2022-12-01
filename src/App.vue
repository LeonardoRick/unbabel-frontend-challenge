<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from '@/components/Header.vue';
import { useTranscriptionsStore } from './stores/transcription';
import { getTranscriptions, postTranscriptions } from '@/services/api';

import type { TranscriptionModel } from '@/interfaces/transcriptions.model';

const transcriptionsStore$ = useTranscriptionsStore();

const fetchTranscriptionsList = () => {
    getTranscriptions()
        .then(res => {
            transcriptionsStore$.init(res);
        })
        .catch(err => {
            console.error(err);
            transcriptionsStore$.init([]);
        });
};

const uploadTranscriptionsList = () => {
    const transcriptions: TranscriptionModel[] = transcriptionsStore$.transcriptions;
    postTranscriptions(transcriptions).catch(err => console.error(err));
};
</script>

<template>
    <Header @upload-clicked="uploadTranscriptionsList" @add-clicked="fetchTranscriptionsList" />
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
