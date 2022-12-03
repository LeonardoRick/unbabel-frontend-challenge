import HomeViewVue from '@/views/HomeView.vue';
import { mount } from '@vue/test-utils';
import { createPinia } from 'pinia';

describe('HomeView', () => {
    it('should mount', () => {
        expect(mount(HomeViewVue, { global: { plugins: [createPinia()] } }).html()).toMatchSnapshot();
    });
});
