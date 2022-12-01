import { v4 as uuidv4 } from 'uuid';
import { defineStore } from 'pinia';
import type { TranscriptionModel } from '../interfaces/transcriptions.model.vue';

export type RootState = {
    transcriptions: TranscriptionModel[];
};

export const useTranscriptionsStore = defineStore({
    id: 'mainStore',

    state: () =>
        ({
            transcriptions: []
        } as RootState),

    actions: {
        init(transcriptions: TranscriptionModel[]) {
            this.transcriptions = transcriptions;
        },

        addEmptyTranscription() {
            console.log(uuidv4());
            this.transcriptions.push({ id: 4, text: '', voice: '' });
        },

        deleteTranscription(id: number) {
            this.transcriptions = this.transcriptions.filter(trans => trans.id !== id);
        }
    }
});
