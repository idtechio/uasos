/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack5: true,
};

const { i18n } = require("./next-i18next.config");

const { withExpo } = require("@expo/next-adapter");
const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")([
  "solito",
  "dripsy",
  "@dripsy/core",
  "moti",
  "@motify/core",
  "@motify/components",
  "app",
]);
const withFonts = require("next-fonts");

module.exports = withPlugins(
  [
    withTM({
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
      i18n,
    }),
    withFonts,
    [withExpo, { projectRoot: __dirname }],
  ],
  nextConfig
);
