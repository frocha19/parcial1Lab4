<template>
  <div id="app">
    <div id="nav">
      <MenuDeOpciones></MenuDeOpciones>
    </div>
    <router-view />
  </div>
</template>

<script>
import MenuDeOpciones from "./components/MenuDeOpciones.vue";
export default {
  name: "App",
  components: {
    MenuDeOpciones
  }
};
</script>
