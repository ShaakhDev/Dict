module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@/components': './src/components',
          '@/navigators': './src/navigators',
          '@/theme': './src/theme',
          '@/utils': './src/utils',
          '@/screens': './src/screens',
          '@/config': './src/config',
          '@/constants': './src/constants',
          '@/icons': './src/icons',
          '@/features': './src/features',
          '@/types': './src/store',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
