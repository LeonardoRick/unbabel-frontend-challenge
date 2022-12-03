import { useTranscriptionsStore } from '@/stores/transcription';
import { createPinia, setActivePinia } from 'pinia';
describe('Transcription Store', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it('should init transcriptinos list', () => {
        const transcription = { id: 1, voice: 'voice1', text: 'text 1' };
        const store$ = useTranscriptionsStore();
        store$.init([transcription]);
        expect(store$.transcriptions[0]).toEqual(transcription);
    });

    it('should add empty transcription at the list when calling addEmptyTranscription', () => {
        const store$ = useTranscriptionsStore();
        store$.addEmptyTranscription();
        expect(store$.transcriptions[0].voice).toEqual('');
        expect(store$.transcriptions[0].text).toEqual('');
    });

    it('should remove transcription when calling deleteTranscription', () => {
        const store$ = useTranscriptionsStore();
        store$.init([{ id: 321, voice: 'test voice', text: 'test text' }]);
        expect(store$.transcriptions.length).toEqual(1);
        store$.deleteTranscription(321);
        expect(store$.transcriptions).toEqual([]);
    });

    it('should update single transcription when sending a transcription that already exists to updateSingleTranscription', () => {
        const store$ = useTranscriptionsStore();
        store$.init([{ id: 456, voice: 'test voice', text: 'test text' }]);
        expect(store$.transcriptions[0].voice).toEqual('test voice');
        expect(store$.transcriptions[0].text).toEqual('test text');
        store$.updateSingleTranscription({ id: 456, voice: 'this is the new voice', text: 'this is the new text' });
        expect(store$.transcriptions[0].voice).toEqual('this is the new voice');
        expect(store$.transcriptions[0].text).toEqual('this is the new text');
    });
});
