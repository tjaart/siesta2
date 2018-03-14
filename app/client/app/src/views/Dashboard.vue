<template>
  <section>

    <h3 >Welcome to Siesta!</h3>

<p>You can use this system to apply for leave and shit</p>
<div class="ui two column grid">
<div class="row">
    <section id="leave-balance" class="column">
        <div class="ui segment">
            <h4>Leave Balance</h4>
            <h5>Annual Leave</h5>
            <h3>12 Days</h3>
            <hr/>

            <h5>Sick Leave</h5>
            <h3>23 Days</h3>
        </div>
    </section>

    <section id="upcoming-leave" class="column">
        <div class="ui segment">
            <h4>Upcoming Leave</h4>
            <p>You have no upcoming leave</p>
            <div class="ui vertical buttons center aligned">
                <button class="ui blue button small">Take a break</button>
                <button class="ui green button small">I'm feeling sick</button>
                <button class="ui button small" >More options</button>
            </div>
        </div>
    </section>

</div>
</div>

  </section>
</template>

<script>

export default {
  name: 'Dashboard',
  data () {
    return {
      title: 'Overview page'
    }
  },
  computed: {
    fancyTitle () {
      return this.title.toUpperCase()
    }
  },
  methods: {
    someMethod () {
      // Do Something
    }
  },
  mounted () {
    // Do something
  }
}
</script>

<style lang="css" scoped>

</style>
