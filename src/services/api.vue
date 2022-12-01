<script lang="ts">
import type { TranscriptionModel } from '@/interfaces/transcriptions.model.vue';

const url = 'http://www.mocky.io/v2/5ae1c5792d00004d009d7e5c';

export async function getTranscriptions(): Promise<TranscriptionModel[]> {
    return fetch(url).then(res => res?.json());
}

export async function postTranscriptions(transcriptions: TranscriptionModel[]) {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(transcriptions)
    });
}
</script>
