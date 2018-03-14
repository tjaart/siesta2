<template>
  <nav class="ui top inverted menu">
    <div class="ui container">
      <a class="item">
        <i class="cube icon"></i>
      </a>

      <router-link class="item" :active-class="'active'" tag="a" :to="{ path: 'dashboard'}"><i class="home icon"></i>Dashboard
      </router-link>
      <router-link class="item" :active-class="'active'" tag="a" :to="{ path: 'history'}"><i class="history icon"></i>History
      </router-link>
      <router-link class="item" :active-class="'active'" tag="a" :to="{ path: 'team-calendar'}"><i
          class="calendar icon"></i>Team Calendar
      </router-link>
      <router-link class="item right" :active-class="'active'" tag="a" :to="{ path: 'one'}"><i
          class="sign out icon"></i>Log Out
      </router-link>

    </div>

  </nav>
</template>

<script>
  export default {
    name: 'SubNavbar'
  }
</script>

<style lang="css" scoped>

</style>
