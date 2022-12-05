import HomeViewVue from '@/views/HomeView.vue';
import { mount } from '@vue/test-utils';
import { createPinia } from 'pinia';
import apiActions$ from '@/services/api-actions';
import * as services from '@/services/api';

const TRANSCRIPTION_MOCK = { id: 1, voice: 'voice test', text: 'text test' };

describe('HomeView', () => {
    it('should mount', () => {
        expect(mount(HomeViewVue, { global: { plugins: [createPinia()] } }).html()).toMatchSnapshot();
    });

    it('should call init transcriptions when calling add', () => {
        const getTranscriptions = vi.spyOn(services, 'getTranscriptions');
        vi.spyOn(window, 'fetch').mockResolvedValue(new Response(JSON.stringify([TRANSCRIPTION_MOCK])));
        apiActions$.next('add');
        expect(getTranscriptions).toHaveBeenCalled();
    });

    it('should call post transcriptions when calling upload', () => {
        const postTranscriptions = vi.spyOn(services, 'postTranscriptions');
        apiActions$.next('upload');
        vi.spyOn(window, 'fetch').mockResolvedValue(new Response(JSON.stringify(TRANSCRIPTION_MOCK)));
        expect(postTranscriptions).toHaveBeenCalled();
    });

    it('should call onUnmounted', () => {
        const wrapper = mount(HomeViewVue, { global: { plugins: [createPinia()] } });
        wrapper.unmount();
        expect((wrapper.vm as any)['subscription'].closed).toEqual(true);
    });
});
