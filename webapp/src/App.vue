<template>
  <div v-if="isDrizzleInitialized" id="app">
    <hello></hello>
  </div>
  <div v-else>Loading...</div>
</template>

<script>
import Hello from './components/Hello.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  components: {
    Hello
  },
  computed: mapGetters('drizzle', ['isDrizzleInitialized'])
}
</script>
