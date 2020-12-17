<template>
  <div v-if="isDrizzleInitialized" id="app">
      <h2>Yokkyū fuman Apartment</h2>
  </div>

  <div v-else>Loading...</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  components: {
  },

  computed: mapGetters('drizzle', ['isDrizzleInitialized'])
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 1rem;
}
</style>
