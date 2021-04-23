import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Readlists from "../views/Readlists.vue";
import Signin from "../views/Signin.vue";
import Signup from "../views/Signup.vue";
import SearchPage from "../views/SearchPage.vue";
import CategoryPage from "../views/NewsCategory.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/news",
    name: "Home",
    component: Home,
  },
  {
    path: "/news/:category",
    name: "CategoryPage",
    component: CategoryPage,
  },
  {
    path: "/search",
    name: "SearchPage",
    component: SearchPage,
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
    next({ path: "/news" });
  } else if (to.name === "Signup" && localStorage.access_token) {
    next({ path: "/news" });
  } else if (to.name === "Readlists" && !localStorage.access_token) {
    next({ path: "/news" });
  } else if (to.path === "/") {
    next({ path: "/news" });
  } else {
    next();
  }
});
export default router;
