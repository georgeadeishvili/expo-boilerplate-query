import { UnistylesRegistry } from 'react-native-unistyles'

import { breakpoints } from './breakpoints'
import { dark, light } from './theme'

type AppBreakpoints = typeof breakpoints

type AppThemes = {
	light: typeof light
	dark: typeof dark
}

declare module 'react-native-unistyles' {
	export interface UnistylesBreakpoints extends AppBreakpoints {}
	export interface UnistylesThemes extends AppThemes {}
}

UnistylesRegistry.addBreakpoints(breakpoints)
	.addThemes({
		light,
		dark,
	})
	.addConfig({
		adaptiveThemes: false,
		initialTheme: 'dark',
	})
