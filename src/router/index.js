import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../pages/Home.vue"),
  },
  {
    path: "/lists/:province",
    component: () => import("../pages/Lists.vue"),
  },
  {
    path: "/regex",
    component: () => import("../pages/Regex.vue"),
  },
  {
    path: "/aboutus",
    component: () => import("../pages/AboutUs.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
