import type { Ref } from 'vue';

export default function resizeTextarea(textareaRef: Ref<HTMLTextAreaElement | undefined>, threshold = 0) {
    const textarea = textareaRef.value;
    if (textarea && Number(textarea.style.height.replace('px', '')) < textarea.scrollHeight) {
        textarea.style.height = `${textarea.scrollHeight + threshold}px`;
    }
}
