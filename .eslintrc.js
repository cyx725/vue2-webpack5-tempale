const { resolve } = require("./webpack/utils");

module.exports = {
  env: {
    browser: true,
    node: true,
    es2022: true,
  },
  globals: {
    process: true,
    require: true,
  },
  extends: ["plugin:vue/essential", "eslint-config-airbnb-base", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["vue", "prettier"],
  rules: {
    //强制数组元素间出现换行
    "array-element-newline": ["error", { multiline: true }],
    //在数组开括号后和闭括号前强制换行
    "array-bracket-newline": ["error", { multiline: true }],
    "import/extensions": [
      "error",
      "always",
      {
        js: "never",
        vue: "never",
        json: "never",
      },
    ],
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    // Vue - https://github.com/vuejs/eslint-plugin-vue
    "vue/html-indent": [2, 2],
    "vue/max-attributes-per-line": 0,
    "vue/require-default-prop": 0,
    "vue/singleline-html-element-content-newline": 0,
    "vue/attributes-order": 2,
    "vue/order-in-components": 2,
    "vue/this-in-template": 2,
    "vue/multi-word-component-names": 0,
    "declaration-block-trailing-semicolon": 0,
    "vue/script-indent": [
      2,
      2,
      {
        switchCase: 1,
      },
    ],
    "import/prefer-default-export": "off",
    "no-bitwise": 0, //禁止使用按位运算符
    "no-unused-vars": "off",
    "no-param-reassign": [
      "error",
      {
        props: true,
        ignorePropertyModificationsFor: [
          "e", // for e.returnvalue
          "ctx", // for Koa routing
          "req", // for Express requests
          "request", // for Express requests
          "res", // for Express responses
          "response", // for Express responses
          "state", // for vuex state
        ],
      },
    ],
  },
  settings: {
    "import/resolver": {
      webpack: {
        config: resolve("webpack/webpack.dev.js"),
      },
    },
  },
};
