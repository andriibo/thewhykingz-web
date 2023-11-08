import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home.vue";
import NewsDetails from "@/components/NewsDetails.vue";

const routerHistory = createWebHistory();
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/news/:id",
      name: "News Details",
      component: NewsDetails,
    },
  ],
});
export default router;
