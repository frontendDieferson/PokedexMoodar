const path = require('path')

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        extensions: ['.ts', '.tsx', '.ios.tsx', '.android.tsx', '.json'],
        alias: {
          '@assets': path.join(__dirname, 'src', 'assets'),
          '@components': path.join(__dirname, 'src', 'components'),
          '@config': path.join(__dirname, 'src', 'config'),
          '@constants': path.join(__dirname, 'src', 'constants'),
          '@contexts': path.join(__dirname, 'src', 'contexts'),
          '@hooks': path.join(__dirname, 'src', 'hooks'),
          '@lang': path.join(__dirname, 'src', 'lang'),
          '@lib': path.join(__dirname, 'src', 'lib'),
          '@hoc': path.join(__dirname, 'src', 'hoc'),
          '@routes': path.join(__dirname, 'src', 'routes'),
          '@screens': path.join(__dirname, 'src', 'screens'),
          '@server': path.join(__dirname, 'src', 'server'),
          '@services': path.join(__dirname, 'src', 'services'),
          '@store': path.join(__dirname, 'src', 'store'),
          '@theme': path.join(__dirname, 'src', 'theme'),
          '@utils': path.join(__dirname, 'src', 'utils'),
        },
      },
    ],
  ],
}
