// @generated: @expo/next-adapter@2.1.52
// Learn more: https://docs.expo.io/guides/using-nextjs/

module.exports = {
  presets: ["@expo/next-adapter/babel"],
  presets: ["babel-preset-expo"],
  plugins: [["styled-components", { ssr: true }]],
  plugins: ["@babel/plugin-proposal-class-properties"],
  plugins: [["import", { libraryName: "@ant-design/react-native" }]],
};
