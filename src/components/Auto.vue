<template>
  <b-card class="centrar">
    <a :href="'/detalleAuto/' + autoParams.imagen.split('.')[0]"
      ><img :src="'/img/' + autoParams.imagen" :alt="autoParams.imagen"
    /></a>
    <b-card-title>{{ autoParams.marca }}</b-card-title>
    <b-card-text>
      <p :modelo="autoParams.modelo">
        {{ autoParams.modelo }} <b>{{ autoParams.anio }}</b>
      </p>
      <p v-if="Number(autoParams.precio) > '0'" class="color">
        $ {{ autoParams.precio }}
      </p>
      <p class="color" v-else>Consultar</p>
    </b-card-text>
  </b-card>
</template>

<style>
.color {
  color: orange;
}
.centrar {
  text-align: center;
}
</style>

<script>
export default {
  name: "Auto",
  props: ["autoParams"]
};
</script>
