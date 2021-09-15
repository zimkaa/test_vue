<template>
    <form @submit.prevent="submit">
      <input type="text" placeholder="user" v-model="user">
      <input type="password" placeholder="pass" v-model="pass">
      <button type="submit">Log in</button>
      <hr>
    </form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data() {
        return {
            user: "",
            pass: ""
        }
    },
    methods: {
        ...mapActions(['logIn']),
        submit() {
            this.logIn({
                user: this.user,
                pass: this.pass
            }),
            this.user = this.pass = ""
        }
    }
}
</script>

<style scoped>
input {
    margin: 10px auto;
    display: block;
    border: 1px solid #ccc;
    border-radius: 2px;
    padding: 10px;
    margin-bottom: 10px;
}
</style>