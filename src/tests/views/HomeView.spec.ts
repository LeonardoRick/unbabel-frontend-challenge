import HomeViewVue from '@/views/HomeView.vue';
import { mount } from '@vue/test-utils';

test('HomeView', () => {
    it('should mount', () => {
        expect(mount(HomeViewVue).html()).toMatchSnapshot();
    });
});
