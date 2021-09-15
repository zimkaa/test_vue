<template>
  <div class="TestView">
    <h1>Test View</h1>
    <hr>
    AUTH {{ getAuth }}
    <hr>
    Response {{ getInfo }}
  </div>
</template>



<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapGetters([
      "getAuth",
      "getInfo",
    ]),
    ...mapActions([
      "queryTo",
    ])
  },
  mounted() {
    this.checkCookie
  },
}
</script>
