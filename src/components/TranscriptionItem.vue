<script setup lang="ts">
import type { TranscriptionModel } from '../interfaces/transcriptions.model.vue';
import { ref } from 'vue';

const { item } = defineProps<{ item: TranscriptionModel }>();
const voice = ref(item.voice);
const text = ref(item.text);

defineEmits(['delete-clicked']);

const todo = () => {
    console.log(todo);
};
</script>
<template>
    <li>
        <input type="checkbox" class="item-checkbox" />
        <img src="@/assets/images/person.svg" alt="" />
        <div class="text-wrapper">
            <input type="text" v-model="voice" class="voice" />
            <textarea v-model="text" @input="todo"> </textarea>
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
    gap: 12px;
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
}

li .voice:hover {
    border: 1px solid var(--color-border);
}

li textarea {
    color: #778195;
    font-family: 'Open Sans', sans-serif;
    border: none;
    /* height: 200px; */
    /* min-height: fit-content; */
    /* white-space:; */
    /* height: 200px; */
    resize: vertical;
    min-height: fit-content;
    text-overflow: ellipsis;
    background-color: transparent;
    overflow-y: hidden;
    border-radius: 2px;
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
</style>
