<template>
  <div>
    <p class="tituloHome">Provincias de la Republica Argentina</p>
    <b-container>
      <b-card-group>
        <div v-for="(provincia, index) in provinciasAll" :key="index">
          <Provincia
            class="tarjeta marginLeft"
            :provinciaParams="provincia"
          ></Provincia>
        </div>
      </b-card-group>
    </b-container>
  </div>
</template>

<style>
.tarjeta {
  max-width: 250px !important;
  min-width: 250px !important;
  margin: 1%;
}
.tituloHome {
  font-family: Verdana;
  font-size: 18px;
  font-weight: bold;
  color: green;
}
.marginLeft {
  margin-left: 1%;
}
</style>

<script>
import Provincia from "@/components/Provincia.vue";

export default {
  name: "Home",
  components: {
    Provincia
  },
  mounted() {
    this.getProvincias();
  },
  data() {
    return {
      provinciasAll: []
    };
  },
  methods: {
    async getProvincias() {
      const texto = this.$route.params.texto;
      const res = await fetch("/lista_provincias.json");
      const dataAll = await res.json();
      if (texto === "allData" || texto == null || texto == undefined) {
        this.provinciasAll = dataAll;
      } else if (texto == "proviciasConPuerto") {
        this.provinciasAll = dataAll.filter(
          provincia => provincia.tienePuerto == "Y"
        );
      } else {
        this.provinciasAll = dataAll.filter(provincia => {
          if (Number(provincia.superficie) >= Number(texto)) {
            return provincia;
          }
        });
      }
    }
  }
};
</script>
