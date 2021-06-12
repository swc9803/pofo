import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Test from '@/pages/Test.vue'
import Made from '@/pages/Made.vue'
import Box from '@/pages/Box.vue'
import Boxx from '@/pages/Boxx.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
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
      path: '/boxx',
      name: 'Boxx',
      component: Boxx
    }
  ]
})

export default router
