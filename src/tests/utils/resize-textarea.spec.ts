import { ref } from 'vue';
import resizeTextarea from '../../utils/resize-textarea';
it('should do something', () => {
    const textarea = new HTMLTextAreaElement();
    const tref = ref(textarea);
    resizeTextarea(tref);
});
