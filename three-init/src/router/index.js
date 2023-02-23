import { createRouter, createWebHistory } from 'vue-router'
import Cube from '../views/examples/aExp001.vue'
import HomeList from '../views/HomeList.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeList,
    children: [
      {
        path: '/001',
        name: '001',
        component: Cube
      }
    ]
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
