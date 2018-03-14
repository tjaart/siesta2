import Vue from 'vue'
import Router from 'vue-router'

import Navbar from './components/Navbar'
import SubNavbar from './components/SubNavbar'

import History from './views/History'
import Dashboard from './views/Dashboard'
import Login from './views/Login'
import TeamCalendar from './views/TeamCalendar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        main: Login
      }
    },
    {
      path: '/dashboard',
      components: {

        subnavbar: SubNavbar,
        main: Dashboard
      }
    },
    {
      path: '/history',
      components: {

        subnavbar: SubNavbar,
        main: History
      }
    },
          {
      path: '/team-calendar',
      components: {

        subnavbar: SubNavbar,
        main: TeamCalendar
      }
    }
  ]
})
