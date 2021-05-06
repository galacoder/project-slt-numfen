// @generated: @expo/next-adapter@2.1.52
// Learn more: https://docs.expo.io/guides/using-nextjs/

module.exports = {
  presets: ["@expo/next-adapter/babel"],
  presets: ["babel-preset-expo"],
  plugins: ["@babel/plugin-proposal-class-properties"],
  plugins: [["import", { libraryName: "@ant-design/react-native" }]],
  plugins: [["styled-components", { ssr: true }]],
  presets: ["module:metro-react-native-babel-preset"],
  env: {
    production: {
      plugins: ["react-native-paper/babel"],
    },
  },
};
