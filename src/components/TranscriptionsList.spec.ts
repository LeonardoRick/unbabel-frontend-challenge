import TranscriptionsListVue from '@/components/TranscriptionsList.vue';
import { mount } from '@vue/test-utils';
import { setActivePinia, createPinia } from 'pinia';

describe('TranscriptionsList', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it('should mount', () => {
        expect(mount(TranscriptionsListVue).html()).toMatchSnapshot();
    });
});
