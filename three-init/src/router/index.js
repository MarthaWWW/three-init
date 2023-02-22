import { createRouter, createWebHistory } from 'vue-router'
import Cube from '../views/001-cube.vue'
import HomeList from '../views/HomeList.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeList
  },
  {
    path: '/001-cube',
    name: 'cube',
    component: Cube
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
