/** @type {import('jest').Config} */
// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html
process.env.TZ = 'UTC'

const config = {
	roots: ['<rootDir>/src'],
	clearMocks: true,
	collectCoverage: true,
	coverageDirectory: 'coverage',
	collectCoverageFrom: ['src/components/**/*.{ts,tsx}', 'src/screens/**/*.{ts,tsx}', 'src/screens/**/*.ts'],
	coveragePathIgnorePatterns: [
		'/node_modules/',
		'/config/',
		'/coverage/',
		'/android/',
		'/ios/',
		'/src/constants',
		'/src/types',
		'/src/hooks',
		'/src/services',
		'/src/store',
		'/src/navigation',
		'/src/utils/localization/',
		'.constants.ts',
		'.types.tsx',
		'.types.ts',
		'index.ts',
		'.styles.ts',
		'/theme/',
	],
	coverageReporters: ['html', 'text', 'lcov', 'text-summary'],
	coverageThreshold: {
		global: {
			branches: 70,
			functions: 70,
			lines: 70,
			statements: 70,
		},
	},
	// setupFiles: ['<rootDir>jest.setup.js'],
	preset: 'jest-expo',
	transformIgnorePatterns: [
		'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@sentry/react-native|native-base|react-native-svg)',
	],
	moduleNameMapper: {
		'\\.svg': '<rootDir>/__mocks__/svgMock.js',
	},
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
}

module.exports = config
