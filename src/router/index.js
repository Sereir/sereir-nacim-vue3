import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MonsterList from '../views/MonsterList.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/monsters',
      name: 'monsters',
      component: MonsterList
    },
    {
      path: '/monsters/:id',
      name: 'monster',
      component: () => import('../views/MonsterDetail.vue')
    },
  ]
})

export default router