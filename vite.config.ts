// Vendor
import { defineConfig } from 'vite';
import path from 'path';

// Plugins
import eslint from 'vite-plugin-eslint';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), eslint()],
});
