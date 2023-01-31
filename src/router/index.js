import VueRouter from "vue-router";

const routes = [
  {
    path: "/admin-page/register/cafe",
    name: "registerCafe",
    component: () => import("@/pages/RegisterCafePage.vue"),
  },
  {
    path: "/admin-page/register/theme",
    name: "registerTheme",
    component: () => import("@/pages/RegisterTheme.vue"),
  },
  {
    path: "/admin",
    name: "main",
    component: () => import("@/pages/MainPage.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
