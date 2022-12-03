import HeaderVue from '@/components/Header.vue';
import router from '@/router';
import { mount } from '@vue/test-utils';
import { createPinia } from 'pinia';

describe('Header', () => {
    it('should mount', () => {
        expect(mount(HeaderVue, { global: { plugins: [createPinia(), router] } }).html()).toMatchSnapshot();
    });
});
