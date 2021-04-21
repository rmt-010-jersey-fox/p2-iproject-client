import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Landing",
    component: () => import("@/views/Landing"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("@/views/Register"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("@/views/Dashboard"),
  },
  {
    path: "/explore",
    name: "Explore",
    component: () => import("@/views/Explore"),
  },
  {
    path: "/users",
    name: "Users",
    component: () => import("@/views/Users"),
  },
  {
    path: "/chat",
    name: "Chat",
    component: () => import("@/views/Chat"),
  },
  {
    path: "/user/:id",
    name: "UserDashboard",
    component: () => import("@/views/FriendDashboard"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
