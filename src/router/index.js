import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Dinos from "../views/Dinos.vue";
import DinoDialog from "../views/DinoDialog";
import Create from "../views/Create.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/dinos",
    name: "Dinos",
    component: Dinos,
    children: [
      {
        path: "/:id",
        name: "DinoDialog",
        component: DinoDialog,
      },
    ],
  },
  {
    path: "/create",
    name: "Create",
    component: Create,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
