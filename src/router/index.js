import Vue from "vue";
import VueRouter from "vue-router";
import ListaHeroes from "../views/ListaHeroes.vue";
import DetalleHeroe from "../views/DetalleHeroe.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    component: ListaHeroes
  },
  {
    path: "/:texto",
    component: ListaHeroes
  },
  {
    path: "/detalleHeroe/:id",
    component: DetalleHeroe
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
