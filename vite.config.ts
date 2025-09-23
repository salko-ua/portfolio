import { defineConfig } from 'vite'
import { sveltekit } from '@sveltejs/kit/vite'
import tailwindcss from '@tailwindcss/vite'
import { paraglideVitePlugin } from '@inlang/paraglide-js'
import rollupNodePolyFill from 'rollup-plugin-node-polyfills'

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit(),
		paraglideVitePlugin({
			project: './project.inlang',
			outdir: './src/lib/paraglide'
		})
	],
	resolve: {
		alias: {
			crypto: 'crypto-browserify',
			stream: 'stream-browserify',
			assert: 'assert',
			buffer: 'buffer',
			process: 'process/browser'
		}
	},
	define: {
		'process.env': {}, // Prevents "process is not defined"
		global: 'globalThis' // Needed by some polyfills
	},
	optimizeDeps: {
		esbuildOptions: {
			define: {
				global: 'globalThis'
			}
		}
	},
	build: {
		rollupOptions: {
			plugins: [rollupNodePolyFill()]
		},
		commonjsOptions: {
			transformMixedEsModules: true
		}
	},
	test: {
		projects: [
			{
				extends: './vite.config.ts',
				test: {
					name: 'client',
					environment: 'browser',
					browser: {
						enabled: true,
						provider: 'playwright',
						instances: [{ browser: 'chromium' }]
					},
					include: ['src/**/*.svelte.{test,spec}.{js,ts}'],
					exclude: ['src/lib/server/**'],
					setupFiles: ['./vitest-setup-client.ts']
				}
			},
			{
				extends: './vite.config.ts',
				test: {
					name: 'server',
					environment: 'node',
					include: ['src/**/*.{test,spec}.{js,ts}'],
					exclude: ['src/**/*.svelte.{test,spec}.{js,ts}']
				}
			}
		]
	}
})
