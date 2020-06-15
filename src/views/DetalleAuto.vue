<template>
  <b-container class="mt-5 tarjeta">
    <b-row>
      <b-col>
        <img class="imagen marginTop" :src="'/img/' + autoSelect.imagen" />
      </b-col>
      <b-col class="marginTop letras">
        <b-row>
          <p><b>Marca</b>: {{ autoSelect.marca }}</p>
        </b-row>
        <b-row>
          <p><b>Modelo</b>: {{ autoSelect.modelo }}</p>
        </b-row>
        <b-row>
          <p><b>Año</b>: {{ autoSelect.anio }}</p>
        </b-row>
        <b-row>
          <p><b>Localidad</b>: {{ autoSelect.localidad }}</p>
        </b-row>
        <b-row class="color">
          <div v-if="Number(autoSelect.precio) > 0">
            <p>$ {{ autoSelect.precio }}</p>
          </div>
          <div v-else>
            <p>Consultar</p>
          </div>
        </b-row>
        <b-row>
          <b-button @click="$router.go(-1)" variant="outline-danger"
            >Volver</b-button
          >
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<style>
.tarjeta {
  background-color: cyan;
  border-radius: 20px;
}
.imagen {
  width: 80%;
  height: 80%;
}
.marginTop {
  margin-top: 6%;
}
.letras {
  font-size: 25px;
}
</style>

<script>
export default {
  name: "DetalleAuto",
  components: {},
  methods: {
    async getAuto() {
      const autoId = this.$route.params.id;
      const res = await fetch("/autos.json");
      const json = await res.json();
      this.autoSelect = json[autoId - 1];
    }
  },
  mounted() {
    this.getAuto();
  },
  data() {
    return {
      autoSelect: []
    };
  }
};
</script>
