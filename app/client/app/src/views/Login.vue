<template>
  <section>
    <div class="level login-logo">
      <div class="level-item has-text-centered">
          <img src="../assets/img/logo.png">
      </div>
    </div>
    <div class="level">
      <div class="level-item has-text-centered">
        <router-link tag="a" :to="{ path: 'dashboard'}" class="button">Login</router-link>
      </div>
  </div>
</section>
</template>

<script>

export default {
  name: 'Login',
  data () {
    return {

    }
  },
  computed: {

  }
}
</script>

<style lang="css" scoped>

</style>
