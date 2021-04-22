import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Readlists from "../views/Readlists.vue";
import Signin from "../views/Signin.vue";
import Signup from "../views/Signup.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/readlists",
    name: "Readlists",
    component: Readlists,
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name === "Signin" && localStorage.access_token) {
    next({ path: "/" });
  } else if (to.name === "Signup" && localStorage.access_token) {
    next({ path: "/" });
  } else if (to.name === "Readlists" && !localStorage.access_token) {
    next({ path: "/" });
  } else {
    next();
  }
});
export default router;
