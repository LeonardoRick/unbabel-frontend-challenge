import AppVue from '@/App.vue';
import { mount } from '@vue/test-utils';

describe('TranscriptionItem', () => {
    it('should mount', () => {
        const mockRouter = {
            push: vitest.fn()
        };
        AppVue.use;
        expect(mount(AppVue, { global: { mocks: { $router: mockRouter } } }).html()).toMatchSnapshot();
    });
});
