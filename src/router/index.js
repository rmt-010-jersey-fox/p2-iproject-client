import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Patient from "../views/Patient";
import Poli from "../views/Poli";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login"),
  },
  {
    path: "/patient",
    name: "Patient",
    component: Patient,
    children: [
      {
        path: "regist",
        name: "Registration",
        component: () => import("../views/Registration"),
      },
      {
        path: "history",
        name: "History",
        component: () => import("../views/History"),
        children: [
          {
            path: ":id",
            name: "Edit",
            component: () => import("../views/History/components/Edit.vue"),
          },
        ],
      },
    ],
  },
  {
    path: "/poli",
    name: "Poli",
    component: Poli,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name === "Login" && localStorage.access_token) next("/");
  else if (to.name === "Register" && localStorage.access_token) next("/");
  else if (to.path.startsWith("/patient") && !localStorage.access_token)
    next("/login");
  else next();
});

export default router;
