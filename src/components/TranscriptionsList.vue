<script setup lang="ts">
import type { TranscriptionModel } from '../interfaces/transcriptions.model.vue';
import TranscriptionItem from './TranscriptionItem.vue';
import { useTranscriptionsStore } from '@/stores/transcription';

const { list } = defineProps<{ list: TranscriptionModel[] }>();
const transcriptionsStore$ = useTranscriptionsStore();

defineEmits(['delete-clicked']);
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
        <button @click="() => transcriptionsStore$.addEmptyTranscription()" class="reset-button-style">
            <img src="@/assets/images/add-row.svg" alt="add another item" />
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
