import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Sea from '@/pages/Sea.vue'
import Made from '@/pages/Made.vue'
import Box from '@/pages/Box.vue'
import Day from '@/pages/Day.vue'
import AboutMe from '@/pages/AboutMe.vue'
import Myworks from '@/pages/Myworks.vue'
import Contact from '@/pages/Contact.vue'
import Weather from '@/pages/Weather.vue'
import Darkmode from '@/pages/Darkmode.vue'

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
      path: '/myworks',
      name: 'Myworks',
      component: Myworks
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/weather',
      name: 'Weather',
      component: Weather
    },
    {
      path: '/darkmode',
      name: 'Darkmode',
      component: Darkmode
    }
  ]
})

export default router
