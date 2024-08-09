import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/nav",
    name: "Navbar",
    component: () => import("@/layout/Navbar.vue"),
  },
  {
    path: "/footer",
    name: "Footer",
    component: () => import("@/layout/Footer.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/pages/About.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("@/pages/Contact.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/pages/Auth/Login.vue"),
  },
];



export default createRouter({
  history: createWebHistory(),
  routes,
});
