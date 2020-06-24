<template>
  <b-card class="centrar">
    <b-card-title class="color">{{ provinciaParams.provincia }}</b-card-title>
    <img
      :src="'/img/' + provinciaParams.bandera"
      :alt="provinciaParams.bandera"
    />
    <b-card-text>
      <p>
        <b>{{ provinciaParams.bandera }}</b>
      </p>
    </b-card-text>
    <b-button
      @click="$router.push('/detalleProvincia/' + provinciaParams.provincia)"
      variant="info"
      >Ver Mas</b-button
    >
  </b-card>
</template>

<style>
.centrar {
  text-align: center;
}
.color {
  color: green;
}
</style>

<script>
export default {
  name: "Provincia",
  props: ["provinciaParams"]
};
</script>
