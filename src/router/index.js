/* eslint-disable import/no-unresolved */
import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import(/* webpackChunkName: "home" */ "@/views/Home");
const Login = () => import(/* webpackChunkName: "login" */ "@/views/Login");
const E404 = () => import(/* webpackChunkName: "e404" */ "@/views/E404");

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/home", hidden: true },
  {
    path: "/home",
    name: "主页",
    component: Home,
  },
  { path: "/login", name: "登录", component: Login, hidden: true },
  { path: "/404", name: "404报错", component: E404, hidden: true },
  { path: "/:catchAll(.*)", redirect: "/404", hidden: true },
];

const router = new VueRouter({
  routes,
});

export default router;
