/*
 * @Author: LYM
 * @Date: 2023-02-03 19:28:56
 * @LastEditors: LYM
 * @LastEditTime: 2023-02-03 20:13:27
 * @Description: 登录store
 */

export default {
  state: {
    userInfo: "",
  },
  getters: {
    userInfo: (state) => state.userInfo,
  },
  mutations: {
    UPDATE_USER_INFO(state, data) {
      state.userInfo = data;
    },
  },
  actions: {
    // 获取用户信息
    getUserInfo(context, data) {
      context.commit("UPDATE_USER_INFO", data);
    },
  },
};
