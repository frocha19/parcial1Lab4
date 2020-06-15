import Vue from "vue";
import VueRouter from "vue-router";
import NuestrosAutos from "../views/NuestrosAutos.vue";
import Home from "../views/Home.vue";
import DetalleAuto from "../views/DetalleAuto.vue";
import Contacto from "../views/Contacto.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/nuestrosAutos/:texto",
    name: "NuestrosAutos",
    component: NuestrosAutos
  },
  {
    path: "/detalleAuto/:id",
    name: "DetalleAuto",
    component: DetalleAuto
  },
  {
    path: "/contacto",
    name: "Contacto",
    component: Contacto
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
