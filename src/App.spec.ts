import AppVue from '@/App.vue';
import { mount } from '@vue/test-utils';
import { createPinia } from 'pinia';
import router from '@/router';

describe('TranscriptionItem', () => {
    it('should mount', () => {
        expect(
            mount(AppVue, {
                global: {
                    plugins: [createPinia(), router]
                }
            }).html()
        ).toMatchSnapshot();
    });
});
