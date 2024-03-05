import Vue from "vue";
import Vuex from "vuex";

// modules
const files = require.context("./modules", true, /\.js$/);
const modules = {};

files.keys().forEach((key) => {
  modules[key.replace(/(\.\/|\.js)/g, "")] = files(key).default;
});

Vue.use(Vuex);
export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  // 模块相关
  modules,
});
