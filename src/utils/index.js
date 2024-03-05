/*
 * @Author: LYM
 * @Date: 2023-02-02 13:46:26
 * @LastEditors: LYM
 * @LastEditTime: 2023-02-03 18:40:01
 * @Description: 常用工具
 */
// 生成guid
export const guid = () => {
  // eslint-disable-next-line func-names
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

// 存储Storage
export const setStorage = (key, value) => {
  localStorage.setItem(key, value);
};

// 获取Storage
export const getStorage = (key) => {
  return localStorage.getItem(key);
};

// 删除Storage
export const removeStorage = (key) => {
  localStorage.removeItem(key);
};

// 获取cookie
export const getCookie = (name) => {
  const reg = new RegExp(`(^| )${name}=([^;]*)(;|$)`);
  const arr = document.cookie.match(reg);
  if (arr) {
    return +unescape(arr[2]);
  }
  return null;
};

// 移除所有
export const removeAll = () => {
  localStorage.clear();
};

/**
 * @description 检测一个变量是否是数组并且不为空
 * @param arr
 * @returns {boolean}
 */
export const isArrayEmpty = (arr) => {
  return Array.isArray(arr) && arr.length > 0;
};

/**
 * @description 检测一个变量是否是数组
 * @param arr
 * @returns {boolean}
 */
export const isArray = (arr) => {
  return Array.isArray(arr);
};
