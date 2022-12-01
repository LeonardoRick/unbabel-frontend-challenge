/// <reference types="vitest" />

import { configDefaults, defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';

const exclude = ['e2e', 'playwright.config.ts', 'env.d.ts', 'vite.config.ts', 'vitest.config.ts'];
export default defineConfig({
    test: {
        root: 'src',
        // enable jest-like global test APIs
        globals: true,
        // simulate DOM with happy-dom
        // (requires installing happy-dom as a peer dependency)
        environment: 'happy-dom',
        coverage: {
            enabled: true,
            all: true,
            exclude: [...(configDefaults.coverage.exclude || []), ...exclude]
        },
        exclude: [...configDefaults.exclude, ...exclude]
    },
    plugins: [vue()]
});
