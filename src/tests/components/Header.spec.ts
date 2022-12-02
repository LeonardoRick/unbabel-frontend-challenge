import HeaderVue from '@/components/Header.vue';
import { mount } from '@vue/test-utils';

test('Header', () => {
    it('should mount', () => {
        expect(mount(HeaderVue).html()).toMatchSnapshot();
    });
});
