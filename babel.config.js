module.exports = {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
          // alias: {
          //   "^@chat/(.+)": "./src/\\2",
          //   "@components": "./src/components",
          //   "@base": "./src/base",
          //   "@navigations-stack": "./src/navigation/navigations-stack",
          //   "@screens": "./src/screen",
          //   "@services": "./src/service",
          //   "@store": "./src/store",
          //   "@themes": "./src/theme",
          //   "@types": "./src/types",
          //   "@utils": "./src/utils",
          //   "@navigations-bottom": "./src/navigation/navigations-bottom",
          //   "@constant": "./src/constant/",
          // },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };