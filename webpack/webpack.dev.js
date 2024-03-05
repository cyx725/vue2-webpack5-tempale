const { merge } = require("webpack-merge");
const { readEnv, getConditionalLoader } = require("./utils");
const config = readEnv("./.env.development");
const ESLintPlugin = require("eslint-webpack-plugin");
const { DefinePlugin } = require("webpack");
const webpackCommonConfig = require("./webpack.common.js");

//读取环境变量
module.exports = merge(webpackCommonConfig, {
  mode: "development",
  devtool: "eval-cheap-module-source-map",
  // devtool:false,
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader", getConditionalLoader()],
      },
    ],
  },
  plugins: [
    new DefinePlugin({
      BASE_URL: JSON.stringify("/"),
      "process.env": config,
    }),
    new ESLintPlugin({
      fix: true /* 自动帮助修复 */,
      extensions: ["js", "json", "vue"],
      files: "src",
    }),
  ],
  devServer: {
    port: "5000",
    hot: true,
    host: "localhost",
    historyApiFallback: true, //history路由错误问题
    client: {
      logging: "warn",
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    https: false,
    open: true, // 配置自动启动浏览器
    proxy: {
      "/api": {
        target: process.env.VUE_APP_URL_API_DEV,
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    },
  },
  stats: "errors-warnings",
});
