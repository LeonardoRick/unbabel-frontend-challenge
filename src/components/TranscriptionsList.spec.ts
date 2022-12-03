import TranscriptionsListVue from '@/components/TranscriptionsList.vue';

import { mount } from '@vue/test-utils';
import { createPinia } from 'pinia';

describe('TranscriptionsList', () => {
    it('should mount', () => {
        expect(
            mount(TranscriptionsListVue, { props: { list: [] }, global: { plugins: [createPinia()] } }).html()
        ).toMatchSnapshot();
    });
});
