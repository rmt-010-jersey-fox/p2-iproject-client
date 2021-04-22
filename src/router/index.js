import Vue from "vue";
import VueRouter from "vue-router";
import Swal from "sweetalert2"

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

router.beforeEach((to,from,next) => {
  const notLoggedIn = ["Chat","Dashboard","UserDashboard","Users"]
  const loggedIn = ["Login","Register"]
  if(notLoggedIn.includes(to.name) && !localStorage.access_token) {
    Swal.fire({
      title: "Login dulu ya :)",
      timer:3000,
      icon:"info",
      showConfirmButton:false,
      toast:true,
      position:"bottom-end"
    })
    next({ name: "Login" })
  } else if (loggedIn.includes(to.name) && localStorage.access_token) {
    next({ name: "Dashboard" })
  } else {
    next()
  }
})

export default router;
