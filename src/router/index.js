import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Sea from '@/pages/Sea.vue'
import Made from '@/pages/Made.vue'
import Box from '@/pages/Box.vue'
import Day from '@/pages/Day.vue'
import AboutMe from '@/pages/AboutMe.vue'
import History from '@/pages/History.vue'
import Myworks from '@/pages/Myworks.vue'
import Weather from '@/pages/Weather.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/sea',
      name: 'Sea',
      component: Sea
    },
    {
      path: '/made',
      name: 'Made',
      component: Made
    },
    {
      path: '/box',
      name: 'Box',
      component: Box
    },
    {
      path: '/day',
      name: 'Day',
      component: Day
    },
    {
      path: '/aboutme',
      name: 'AboutMe',
      component: AboutMe
    },
    {
      path: '/history',
      name: 'History',
      component: History
    },
    {
      path: '/myworks',
      name: 'Myworks',
      component: Myworks
    },
    {
      path: '/weather',
      name: 'Weather',
      component: Weather
    }
  ]
})

export default router
