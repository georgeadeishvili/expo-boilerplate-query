// https://docs.expo.dev/guides/using-eslint/
module.exports = {
	extends: ['expo', 'eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
	plugins: ['prettier', 'react-native-globals'],
	globals: {
		NodeJS: true,
		URLSearchParams: true,
		URL: true,
	},
	rules: {
		'prettier/prettier': 'error',
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': ['error'],
		'@typescript-eslint/no-explicit-any': ['warn'],
		'@typescript-eslint/no-duplicate-enum-values': 'off',
	},
	overrides: [
		{
			files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
			extends: ['plugin:testing-library/react'],
		},
	],
	env: {
		'react-native-globals/all': true,
	},
	ignorePatterns: ['/dist/*'],
}
