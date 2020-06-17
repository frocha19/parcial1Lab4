<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="/allData">Home</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/heroesDC">Heroes DC</b-nav-item>
          <b-nav-item href="/heroesMarvel">Heroes Marvel</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-form v-on:submit.prevent="search()">
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Buscador"
              v-model="texto"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" @click.prevent="search()"
              >Buscar</b-button
            >
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "MenuDeOpciones",
  data() {
    return {
      texto: ""
    };
  },
  methods: {
    search() {
      if (this.texto.length > 0) {
        window.location.href = "/" + this.texto;
      } else {
        window.location.href = "/allData";
      }
    }
  }
};
</script>
