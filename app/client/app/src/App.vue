<template>
  <div>
    <router-view name="subnavbar"></router-view>

    <section id="main-section" class="ui container segment">
      <router-view name="main"></router-view>
    </section>
  </div>
</template>

<script>
  export default {
    name: '',
    computed: {
      isLoading () {
        return this.$store.state.isLoading
      }
    }
  }
</script>

<style lang="css">


</style>
