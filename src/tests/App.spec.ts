import AppVue from '@/App.vue';
import { mount } from '@vue/test-utils';

test('TranscriptionItem', () => {
    it('should mount', () => {
        expect(mount(AppVue).html()).toMatchSnapshot();
    });
});
