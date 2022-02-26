module.exports = {
  presets: ['next/babel'],
  plugins: [
    ['react-native-web', { commonjs: true }],
    ["styled-components", { "ssr": true, "displayName": true, "preprocess": false } ]
  ],
}
