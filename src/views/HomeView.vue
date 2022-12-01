<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import TranscriptionsList from '@/components/TranscriptionsList.vue';
import { useTranscriptionsStore } from '@/stores/transcription';

import type { TranscriptionModel } from '@/interfaces/transcriptions.model';

const transcriptionsStore$ = useTranscriptionsStore();
const { transcriptions } = storeToRefs(transcriptionsStore$);
let list = ref<TranscriptionModel[]>([]);
list = transcriptions;

const deleteTranscription = (id: number) => {
    transcriptionsStore$.deleteTranscription(id);
};
</script>

<template>
    <TranscriptionsList @delete-clicked="deleteTranscription" v-if="list && list.length" :list="list" />
</template>
