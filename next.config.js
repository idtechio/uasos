const withTM = require('next-transpile-modules')(['styled-components']);

module.exports = withTM({
    transpileModules: [
      "react-native", "styled-components", "styled-components/native"
    ],
    webpack: config => {
      return {
        ...config,
        resolve: {
          ...config.resolve,
          extensions: [
            '.web.ts',
            '.web.tsx',
            '.ts',
            '.tsx',
            '.web.js',
            '.web.jsx',
            '.js',
            '.jsx',
            ...config.resolve.extensions
          ],
          alias: {
            ...config.resolve.alias,
            'react-native$': 'react-native-web'
          }
        }
      }
    },
    images: {
      domains: ['placehold.jp']
    },
    i18n: {
      locales: ["ua-UA", "pl-PL", "ru-RU"],
      defaultLocale: "pl-PL",
    }
  })