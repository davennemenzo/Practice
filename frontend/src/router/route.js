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
];



export default createRouter({
  history: createWebHistory(),
  routes,
});
