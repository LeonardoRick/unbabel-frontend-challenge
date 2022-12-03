import HomeViewVue from '@/views/HomeView.vue';
import { mount } from '@vue/test-utils';
import { setActivePinia, createPinia } from 'pinia';

describe('HomeView', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it('should mount', () => {
        expect(mount(HomeViewVue).html()).toMatchSnapshot();
    });
});
