import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/Home",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/",
        name: "Welearn",
        component: () => import("../views/Welearn.vue"),
      },

      {
        path: "/Explore",
        name: "Explore",
        component: () => import("../views/Explore.vue"),
      },

      {
        path: "/Webinar",
        name: "Webinar",
        component: () => import("../views/Webinar.vue"),
      },

      {
        path: "/Discussion",
        name: "Discussion",
        component: () => import("../views/Discussion.vue"),
      },
      {
        path: "/Questions",
        name: "Qa",
        component: () => import("../views/Qa.vue"),
      },
    ],
  },
  {
    path: "/Content",
    name: "Content",
    component: () => import("../views/Content.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
