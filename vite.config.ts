import env from '#start/env'
import adonisjs from '@adonisjs/vite/client'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [
		react(),
		adonisjs({ entrypoints: ['inertia/app.tsx'], reload: ['resources/views/**/*.edge'] }),
	],

	server: {
		allowedHosts: [env.get('VITE_HOST') || env.get('HOST')],
	},

	/**
	 * Define aliases for importing modules from
	 * your frontend code
	 */
	resolve: {
		alias: {
			'~/': `${import.meta.dirname}/inertia/`,
		},
	},
})
