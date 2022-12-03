import TranscriptionItemVue from '@/components/TranscriptionItem.vue';
import { mount } from '@vue/test-utils';

describe('TranscriptionItem', () => {
    it('should mount', () => {
        expect(
            mount(TranscriptionItemVue, { props: { item: { id: 1, voice: 'string', text: 'string' } } }).html()
        ).toMatchSnapshot();
    });
});
