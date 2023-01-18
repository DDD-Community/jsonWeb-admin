import RegisterCafePage from "@/pages/RegisterCafePage.vue";
import VueRouter from "vue-router";

const routes = [
  {
    path: "/register/cafe",
    name: "registerCafe",
    component: RegisterCafePage,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
