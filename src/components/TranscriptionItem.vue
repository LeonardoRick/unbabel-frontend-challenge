<script setup lang="ts">
import { onMounted, ref } from 'vue';
import createDebounce from '@/utils/create-debounce';
import resizeTextarea from '@/utils/resize-textarea';

import type { TranscriptionModel } from '@/interfaces/transcriptions.model';

interface EmitsModel {
    (eventName: 'delete-clicked'): void;
    (eventName: 'item-changed', item: TranscriptionModel): void;
}

const debounce = createDebounce();
const { item } = defineProps<{ item: TranscriptionModel }>();
const voice = ref(item.voice);
const text = ref(item.text);
const textareaRef = ref<HTMLTextAreaElement>();

const emit$ = defineEmits<EmitsModel>();

const emitItemChanged = () => debounce(() => emit$('item-changed', { id: item.id, voice: voice.value, text: text.value }));
const _resizeTextarea = (threshold = 0) => resizeTextarea(textareaRef, threshold);

onMounted(() => _resizeTextarea(10));
</script>

<template>
    <li>
        <input type="checkbox" class="item-checkbox" />
        <img src="@/assets/images/person.svg" alt="" />
        <div class="text-wrapper">
            <input type="text" v-model="voice" class="voice" @input="emitItemChanged" />
            <textarea
                ref="textareaRef"
                v-model="text"
                @input="emitItemChanged"
                @focus="() => _resizeTextarea()"
                @keyup="() => _resizeTextarea()" />
        </div>
        <button class="reset-button-style delete-button" @click="$emit('delete-clicked')">
            <img src="@/assets/images/delete.svg" alt="delete" />
        </button>
    </li>
</template>

<style>
li {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    background-color: var(--color-background-soft);
    border: 1px solid var(--color-border);
    padding: 24px 16px;
    border-radius: 2px;
}

li .item-checkbox {
    margin-top: 4px;
}

li .text-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
}

li .voice {
    background-color: transparent;
    border: none;
    color: #566074;
    font-family: Montserrat, sans-serif;
    font-size: 16px;
    font-weight: 600;
    box-sizing: border-box;
    border-radius: 2px;
    width: 100%;
}

li .voice:hover {
    border: 1px solid var(--color-border);
}

li textarea {
    color: #778195;
    font-family: 'Open Sans', sans-serif;
    border: none;
    resize: vertical;
    min-height: fit-content;
    text-overflow: ellipsis;
    background-color: transparent;
    overflow-y: hidden;
    border-radius: 2px;
    width: 100%;
}

li textarea:hover {
    border: 1px solid var(--color-border);
}

li .delete-button {
    visibility: hidden;
}

li:hover > .delete-button {
    visibility: visible;
}

@media screen and (min-width: 1024px) {
    li {
        padding: 24px;
    }
}
</style>
