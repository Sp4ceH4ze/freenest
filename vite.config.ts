import { sentrySvelteKit } from "@sentry/sveltekit";
import devtoolsJson from 'vite-plugin-devtools-json';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({ plugins: [sentrySvelteKit({
  org: "sp4c3h4z3",
  project: "freenest"
}), tailwindcss(), sveltekit(), devtoolsJson()] });