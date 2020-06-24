<template>
  <b-container class="mt-5 center">
    <b-row>
      <p>
        <b>Provincia</b>:
        <img class="marginTop" :src="'/img/' + provinciaSelect.bandera" />
      </p>
    </b-row>
    <b-row>
      <p><b>Provincia</b>: {{ provinciaSelect.provincia }}</p>
    </b-row>
    <b-row>
      <p><b>Abreviatura</b>: {{ provinciaSelect.abreviatura }}</p>
    </b-row>
    <b-row>
      <p><b>Capital</b>: {{ provinciaSelect.capital }}</p>
    </b-row>
    <b-row>
      <p><b>Fecha Autonomia</b>: {{ provinciaSelect.fechaAutonomia }}</p>
    </b-row>
    <b-row>
      <p><b>Poblacion</b>: {{ provinciaSelect.poblacion }}</p>
    </b-row>
    <b-row>
      <p><b>Superficie</b>: {{ provinciaSelect.superficie }}</p>
    </b-row>
    <b-row>
      <p><b>N° Departamentos</b>: {{ provinciaSelect.nroDepartamentos }}</p>
    </b-row>
    <b-row>
      <p><b>Tiene Puerto</b>: {{ provinciaSelect.tienePuerto }}</p>
    </b-row>
    <b-row>
      <b-button @click="$router.go(-1)" variant="outline-danger"
        >Volver</b-button
      >
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "DetallePais",
  components: {},
  methods: {
    async getProvincia() {
      const provinciaId = this.$route.params.id;
      const res = await fetch("/lista_provincias.json");
      const json = await res.json();
      this.provinciaSelect = json.filter(
        prov => prov.provincia == provinciaId
      )[0];
      console.log(this.provinciaSelect);
    }
  },
  mounted() {
    this.getProvincia();
  },
  data() {
    return {
      provinciaSelect: []
    };
  }
};
</script>
