const withTM = require("next-transpile-modules")(["styled-components"]);
const { i18n } = require("./next-i18next.config");

module.exports = withTM({
  transpileModules: [
    "react-native",
    "styled-components",
    "styled-components/native",
  ],
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return {
      ...config,
      resolve: {
        ...config.resolve,
        extensions: [
          ".web.ts",
          ".web.tsx",
          ".ts",
          ".tsx",
          ".web.js",
          ".web.jsx",
          ".js",
          ".jsx",
          ...config.resolve.extensions,
        ],
        alias: {
          ...config.resolve.alias,
          "react-native$": "react-native-web",
        },
      },
    };
  },
  images: {
    domains: ["placehold.jp"],
  },
  i18n,
});
