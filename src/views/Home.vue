<template>
  <div class="margenLeft">
    <p class="titulo">A TODO MOTOR AUTOS</p>
    <p class="subTitulo">
      Publicá sin registrarte y en un sólo paso. ¿Apurado por vender? Recibí
      ofertas en Efectivo de concesionarios registrados. ¡Súper!
    </p>
    <p class="tituloDes">Destacados</p>
    <b-container>
      <b-card-group>
        <div v-for="auto in autosAll" :key="auto.id">
          <Auto
            v-if="auto.destacado == 'Y'"
            class="tarjeta"
            :autoParams="auto"
          ></Auto>
        </div>
      </b-card-group>
    </b-container>
  </div>
</template>

<style>
.titulo {
  font-size: 25px;
  color: red;
  font-family: Verdana;
  font-weight: bold;
}
.subTitulo {
  font-size: 15px;
  font-family: Verdana;
}
.tituloDes {
  font-size: 15px;
  font-family: Verdana;
  color: white;
  background-color: orange;
}
.margenLeft {
  margin-left: 1%;
}
.tarjeta {
  size: 150px !important;
  margin: 1%;
}
</style>

<script>
import Auto from "@/components/Auto.vue";

export default {
  name: "Home",
  components: {
    Auto
  },
  methods: {
    async getAutos() {
      const res = await fetch("/autos.json");
      this.autosAll = await res.json();
    }
  },
  mounted() {
    this.getAutos();
  },
  data() {
    return {
      autosAll: []
    };
  }
};
</script>
