import { defineStore } from 'pinia';
import type { TranscriptionModel } from '../interfaces/transcriptions.model.vue';

export type RootState = {
    transcriptions: TranscriptionModel[];
};

export const useTranscriptionsStore = defineStore({
    id: 'transcriptionsStore',

    state: () =>
        ({
            transcriptions: []
        } as RootState),

    actions: {
        init(transcriptions: TranscriptionModel[]) {
            this.transcriptions = transcriptions;
        },

        addEmptyTranscription() {
            this.transcriptions.push({ id: new Date().valueOf(), text: '', voice: '' });
        },

        deleteTranscription(id: number) {
            this.transcriptions = this.transcriptions.filter(trans => trans.id !== id);
        },

        updateSingleTranscription(transcription: TranscriptionModel) {
            const trans = this.transcriptions.find(t => t.id === transcription.id);
            if (trans) {
                trans.voice = transcription.voice;
                trans.text = transcription.text;
            }
        }
    }
});
