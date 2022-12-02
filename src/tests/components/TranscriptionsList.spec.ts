import TranscriptionsListVue from '@/components/TranscriptionsList.vue';
import { mount } from '@vue/test-utils';

test('TranscriptionsList', () => {
    it('should mount', () => {
        expect(mount(TranscriptionsListVue).html()).toMatchSnapshot();
    });
});
