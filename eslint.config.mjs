import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

const eslintConfig = defineConfig([
	...nextVitals,
	...nextTs,
	// Override default ignores of eslint-config-next.
	globalIgnores([
		// Default ignores of eslint-config-next:
		'.next/**',
		'coverage/**',
		'out/**',
		'playwright-report/**',
		'build/**',
		'next-env.d.ts',
	]),
	{
		languageOptions: {
			parserOptions: {
				projectService: {
					allowDefaultProject: ['*.js', '*.mjs'],
				},
				tsconfigRootDir: import.meta.dirname,
			},
		},
		rules: {
			'@typescript-eslint/no-floating-promises': ['error'],
			'@typescript-eslint/no-unused-vars': ['warn'],
			'brace-style': ['error', 'stroustrup'],
			curly: ['error', 'all'],
			eqeqeq: ['error', 'always'],
			'max-len': ['warn', { code: 88 }],
			'no-console': ['warn'],
			quotes: ['warn', 'single', { avoidEscape: true }],
			semi: ['error', 'always'],
		},
	},
]);

export default eslintConfig;
