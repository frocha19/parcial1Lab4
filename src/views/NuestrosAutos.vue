<template>
  <b-container>
    <b-card-group>
      <div v-for="auto in autosAll" :key="auto.id">
        <Auto class="tarjeta" :autoParams="auto"></Auto>
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
import Auto from "@/components/Auto.vue";

export default {
  name: "NuestrosAutos",
  components: {
    Auto
  },
  mounted() {
    this.getAutos();
  },
  data() {
    return {
      autosAll: []
    };
  },
  methods: {
    async getAutos() {
      const autosFilt = this.$route.params.texto;
      const res = await fetch("/autos.json");
      const dataAll = await res.json();
      if (autosFilt === "allData") {
        this.autosAll = dataAll;
      } else {
        this.autosAll = dataAll.filter(
          auto =>
            auto.marca.toLowerCase().includes(autosFilt.toLowerCase()) ||
            auto.modelo.toLowerCase().includes(autosFilt.toLowerCase()) ||
            auto.anio.toLowerCase().includes(autosFilt.toLowerCase())
        );
      }
    }
  }
};
</script>
