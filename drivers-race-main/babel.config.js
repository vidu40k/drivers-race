module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '*': '.',
          '@root': './',
          '@src': './src',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@store': './src/store',
          '@shared': './src/shared',
        }
      }
    ],
    ['dotenv-import', {
      moduleName: '@env',
      path: '.env',
    }],
  ]
};
