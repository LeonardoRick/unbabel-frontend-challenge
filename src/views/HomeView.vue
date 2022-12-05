<script setup lang="ts">
import { storeToRefs } from 'pinia';
import apiActions$ from '@/services/api-actions';
import TranscriptionsList from '@/components/TranscriptionsList.vue';
import { useTranscriptionsStore } from '@/stores/transcription';
import { getTranscriptions, postTranscriptions } from '@/services/api';
import { onUnmounted } from 'vue';
import type { TranscriptionModel } from '@/interfaces/transcriptions.model';

const transcriptionsStore$ = useTranscriptionsStore();
const { transcriptions } = storeToRefs(transcriptionsStore$);
const functionsMap: Record<'upload' | 'add', () => void> = {
    upload: () => {
        const transcriptions: TranscriptionModel[] = transcriptionsStore$.transcriptions;
        postTranscriptions(transcriptions).catch(err => console.error(err));
    },
    add: () => {
        getTranscriptions()
            .then(res => transcriptionsStore$.init(res))
            .catch(err => {
                console.error(err);
                transcriptionsStore$.init([]);
            });
    }
};

const subscription = apiActions$.subscribe(action => {
    functionsMap[action]();
});

onUnmounted(() => {
    if (subscription && !subscription.closed) subscription.unsubscribe();
});
</script>

<template>
    <TranscriptionsList @delete-clicked="transcriptionsStore$.deleteTranscription" :list="transcriptions" />
</template>
