module.exports = {
  preset: '@testing-library/react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  setupFilesAfterEnv: ['./jest-setup.ts'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|react-native-iphone-x-helper|react-native-gifted-charts|gifted-charts-core|react-native-phone-number-input|react-native-shimmer-placeholder|react-native-responsive-screen|react-native-keyboard-aware-scroll-view|react-native-swiper|react-redux|react-native-linear-gradient|@react-navigation|@react-native|@react-native/assets|react-native-calendars|react-native-image-crop-picker|react-native-indicators)/)',
  ],  
  
  
  testRegex: '(/_tests_/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  testPathIgnorePatterns: ['/node_modules/', '/android/', '/ios/'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(png|jpg|jpeg|gif|svg)$': '<rootDir>/_mocks_/fileMock.tsx',
    'react-native-size-matters': '<rootDir>/_mocks_/react-native-size-matters.tsx',
    'react-native-country-picker-modal': '<rootDir>/_mocks_/react-native-country-picker-modal.tsx',
    '@react-native-async-storage/async-storage': '<rootDir>/_mocks_/@react-native-async-storage/async-storage.js',
    'react-native-gifted-charts': '<rootDir>/_mocks_/react-native-gifted-charts.tsx',
    '@react-native-community/netinfo': '<rootDir>/_mocks_/@react-native-community/netinfo.js',
    '^react-native-calendars$': '<rootDir>/_mocks_/react-native-calendars.js',
    '^react-native-image-crop-picker$': '<rootDir>/_mocks_/react-native-image-crop-picker.js',
    '^react-native-indicators$': '<rootDir>/_mocks_/react-native-indicators.js',
  },
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
};