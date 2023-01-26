import VueRouter from "vue-router";

const routes = [
  {
    path: "/admin-page/register/cafe",
    name: "registerCafe",
    component: () => import("@/pages/RegisterCafePage.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
