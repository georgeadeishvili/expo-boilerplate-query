import '@testing-library/react-native/extend-expect'

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('react-native-reanimated').setUpTests()

require('@shopify/flash-list/jestSetup')

// eslint-disable-next-line no-undef
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter')
