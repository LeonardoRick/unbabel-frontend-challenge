import HomeViewVue from '@/views/HomeView.vue';
import { mount } from '@vue/test-utils';
import { createPinia } from 'pinia';
import apiActions$ from '@/services/api-actions';
import * as services from '@/services/api';

describe('HomeView', () => {
    it('should mount', () => {
        expect(mount(HomeViewVue, { global: { plugins: [createPinia()] } }).html()).toMatchSnapshot();
    });

    it('should call init transcriptions when calling add', () => {
        const getTranscriptions = vi.spyOn(services, 'getTranscriptions');
        apiActions$.next('add');
        expect(getTranscriptions).toHaveBeenCalled();
    });

    it('should call post transcriptions when calling upload', () => {
        const postTranscriptions = vi.spyOn(services, 'postTranscriptions');
        apiActions$.next('upload');
        expect(postTranscriptions).toHaveBeenCalled();
    });
});
