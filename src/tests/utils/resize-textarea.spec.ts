import { ref } from 'vue';
import resizeTextarea from '../../utils/resize-textarea';

it('should not resize if scrollHeight is undefined', () => {
    resizeTextarea(ref(new HTMLTextAreaElement()));
});

it('should resize if scrollHeight is defined and its larger than the style.height', () => {
    const textarea = document.createElement('textarea');
    textarea.style.height = '9px';
    Object.defineProperty(textarea, 'scrollHeight', { configurable: true, value: 100 });
    resizeTextarea(ref(textarea));
    expect(textarea.style.height).toEqual('100px');
});

it('should NOT resize if scrollHeight defined and its smaller than style.height', () => {
    const textarea = document.createElement('textarea');
    textarea.style.height = '12px';
    Object.defineProperty(textarea, 'scrollHeight', { configurable: true, value: 10 });
    expect(textarea.style.height).toEqual('12px');
});
