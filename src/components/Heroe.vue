<template>
  <b-card class="centrar">
    <img :src="'/img/' + heroeParams.img" :alt="heroeParams.imagen" />
    <b-card-title>{{ heroeParams.nombre }}</b-card-title>
    <b-card-text>
      <p><b>Poderes</b>:</p>
      <ul>
        <li v-for="poder in heroeParams.poderes" :key="poder">{{ poder }}</li>
      </ul>
    </b-card-text>
    <b-button
      @click="$router.push('/detalleHeroe/' + heroeParams.id)"
      variant="info"
      >Ver Mas</b-button
    >
  </b-card>
</template>

<style>
.centrar {
  text-align: center;
}
</style>

<script>
export default {
  name: "Heroe",
  props: ["heroeParams"],
};
</script>
