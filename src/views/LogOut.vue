<template>
  <div class="logout">
    <h2> AUTH {{ getAuth }}</h2>
    <hr>
    <button type="submit" @click="submit">Log out</button>
  </div>
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
  methods: {
    ...mapActions(['logOut']),
    submit() {
      this.logOut()
    }
  }
}
</script>
