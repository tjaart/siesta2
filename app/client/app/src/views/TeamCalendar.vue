<template>
  <div class="ui container grid eight column cards">
    <div v-for="day in days" class="ui card column">
      <div class="content">
        <div class="header">{{day}}</div>
      </div>
      <div class="content">

        <div class="ui small feed">
          <div class="event">
            <div class="content">
              <div class="summary">
                <a>Elliot Fu</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'TeamCalendar',
    data: () => {
      return {
        days: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
      }
    }
  }
</script>

<style scoped>

</style>