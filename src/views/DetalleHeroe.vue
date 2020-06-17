<template>
  <b-container class="mt-5 tarjeta">
    <b-row>
      <b-col>
        <img class="imagen marginTop" :src="'/img/' + heroeSelect.img" />
      </b-col>
      <b-col class="marginTop letras">
        <b-row>
          <p><b>Nombre</b>: {{ heroeSelect.nombre }}</p>
        </b-row>
        <b-row>
          <p><b>Aparicion</b>: {{ heroeSelect.aparicion }}</p>
        </b-row>
        <b-row>
          <p><b>Biografia</b>: {{ heroeSelect.bio }}</p>
        </b-row>
        <b-row>
          <p><b>Poderes</b></p>
          <ul>
            <li v-for="poder in heroeSelect.poderes" :key="poder">
              {{ poder }}
            </li>
          </ul>
        </b-row>
        <b-row class="color">
          <div v-if="heroeSelect.casa == 'DC'">
            <img class="imagenCasa marginTop" src="/img/dc.jpg" />
          </div>
          <div v-else>
            <img class="imagenCasa marginTop" src="/img/marvel.png" />
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
  height: 60%;
}
.imagenCasa {
  height: 90%;
  margin-bottom: 5%;
  padding-bottom: 5%;
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
  name: "DetalleHeroe",
  components: {},
  methods: {
    async getHeroe() {
      const heroeId = this.$route.params.id;
      const res = await fetch("/heroes.json");
      const json = await res.json();
      this.heroeSelect = json[heroeId - 1];
    }
  },
  mounted() {
    this.getHeroe();
  },
  data() {
    return {
      heroeSelect: []
    };
  }
};
</script>
