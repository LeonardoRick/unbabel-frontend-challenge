<script setup lang="ts">
import TranscriptionItem from './TranscriptionItem.vue';
import { useTranscriptionsStore } from '@/stores/transcription';

import type { TranscriptionModel } from '@/interfaces/transcriptions.model';

interface EmitsModel {
    (eventName: 'delete-clicked', id: number): void;
}

const { list } = defineProps<{ list: TranscriptionModel[] }>();
const transcriptionsStore$ = useTranscriptionsStore();
defineEmits<EmitsModel>();
</script>

<template>
    <div class="wrapper">
        <ul>
            <TranscriptionItem
                v-for="item in list"
                :key="item.id"
                :item="item"
                @delete-clicked="$emit('delete-clicked', item.id)"
                @item-changed="transcription => transcriptionsStore$.updateSingleTranscription(transcription)" />
        </ul>
        <button type="button" @click="transcriptionsStore$.addEmptyTranscription" class="reset-button-style">
            <img src="@/assets/images/add-row.svg" alt="add another transcription" />
        </button>
    </div>
</template>

<style>
.wrapper {
    min-height: calc(100vh - (100px + 4rem));
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: center;
}

ul {
    width: 100%;
    display: flex;
    flex-direction: column;
}
</style>
