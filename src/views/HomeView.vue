<script setup lang="ts">
import { storeToRefs } from 'pinia';
import type { TranscriptionModel } from '../interfaces/transcriptions.model.vue';
import TranscriptionsList from '@/components/TranscriptionsList.vue';
import { ref } from 'vue';
import { useTranscriptionsStore } from '@/stores/transcription';

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

<style></style>
