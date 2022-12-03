import HeaderVue from '@/components/Header.vue';
import { mount } from '@vue/test-utils';

describe('Header', () => {
    it('should mount', () => {
        expect(mount(HeaderVue).html()).toMatchSnapshot();
    });
});
