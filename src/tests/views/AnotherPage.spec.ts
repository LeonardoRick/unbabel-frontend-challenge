import AnotherPageVue from '@/views/AnotherPage.vue';
import { mount } from '@vue/test-utils';

test('AnotherPage', () => {
    it('should mount', () => {
        expect(mount(AnotherPageVue).html()).toMatchSnapshot();
    });
});
