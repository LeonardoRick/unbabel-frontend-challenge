import TranscriptionItemVue from '@/components/TranscriptionItem.vue';
import { mount } from '@vue/test-utils';

test('TranscriptionItem', () => {
    it('should mount', () => {
        expect(mount(TranscriptionItemVue).html()).toMatchSnapshot();
    });
});
