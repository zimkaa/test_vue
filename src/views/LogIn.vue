<template>
  <div class="login">
    <PostForm/>
    <div class="authData">
      <h2> AUTH {{ getAuth }}</h2>
      <hr>
    </div>
  </div>
</template>

<script>
import PostForm from '../components/PostForm'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'App',
  components: { PostForm },
  computed: {
    ...mapGetters([
      "getAuth",
    ]),
    ...mapActions([
      "checkCookie",
    ])
  },
  mounted() {
    // this.$store.dispatch('checkCookie')
    this.checkCookie
  },
}
</script>
