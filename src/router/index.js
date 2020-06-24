import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import DetalleProvincia from "../views/DetalleProvincia.vue";
import MapaArgentina from "../views/MapaArgentina.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    component: Home
  },
  {
    path: "/:texto",
    component: Home
  },
  {
    path: "/detalleProvincia/:id",
    component: DetalleProvincia
  },
  {
    path: "/mapa/Argentina",
    component: MapaArgentina
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
