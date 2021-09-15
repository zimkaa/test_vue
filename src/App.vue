<template>
  <div id="nav">
    <router-link to="/">Log In</router-link> |
    <router-link to="/kafka-routing">KafkaRouting</router-link> |
    <router-link to="/repositories">Repositories</router-link> |
    <router-link to="/pipelines">Pipelines</router-link> |
    <router-link to="/replica-sets">Replica Sets</router-link> |
    <router-link to="/test-view">Test View</router-link> |
    <router-link to="/log-out">Log Out</router-link>
  </div>
  <router-view/>
  <!-- <br>
  <hr>
  AUTH {{ getAuth }}
  <br> -->
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapGetters([
      "getAuth",
    ]),
    ...mapActions([
      "checkCookie",
    ])
  },
  mounted() {
    this.checkCookie
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin: 60px auto;
  width: 600px;
}
</style>
