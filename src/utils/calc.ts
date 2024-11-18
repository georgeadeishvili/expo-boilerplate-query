import { Dimensions } from 'react-native'

import { DESIGN_WIDTH, WIDE_WIDTH } from '@constants'

export const calc = (size: number) => {
	const deviceWidth = Dimensions.get('window').width
	const multiplier = deviceWidth > WIDE_WIDTH ? 1 : deviceWidth / DESIGN_WIDTH
	return size * multiplier
}

export const isSmallDevice = Dimensions.get('window').height < 700
export const isWideDevice = Dimensions.get('window').width > WIDE_WIDTH
export const isLargeFontScale = Dimensions.get('window').fontScale > 1
