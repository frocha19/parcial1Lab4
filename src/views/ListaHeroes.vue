<template>
  <b-container>
    <b-card-group>
      <div v-for="heroe in heroesAll" :key="heroe.id">
        <Heroe class="tarjeta" :heroeParams="heroe"></Heroe>
      </div>
    </b-card-group>
  </b-container>
</template>

<style>
.tarjeta {
  size: 150px !important;
  margin: 1%;
}
</style>

<script>
import Heroe from "@/components/Heroe.vue";

export default {
  name: "Home",
  components: {
    Heroe
  },
  mounted() {
    this.getHeroes();
  },
  data() {
    return {
      heroesAll: []
    };
  },
  methods: {
    async getHeroes() {
      const texto = this.$route.params.texto.toLowerCase();
      const res = await fetch("/heroes.json");
      const dataAll = await res.json();
      if (texto === "alldata" || texto == null || texto == undefined) {
        this.heroesAll = dataAll;
      } else if (texto === "heroesdc") {
        this.heroesAll = dataAll.filter(heroe => heroe.casa == "DC");
      } else if (texto === "heroesmarvel") {
        this.heroesAll = dataAll.filter(heroe => heroe.casa == "Marvel");
      } else {
        this.heroesAll = dataAll.filter(
          heroe =>
            heroe.nombre.toLowerCase().includes(texto) ||
            heroe.bio.toLowerCase().includes(texto) ||
            heroe.poderes.map(poder => poder.toLowerCase()).includes(texto)
        );
      }
    }
  }
};
</script>
