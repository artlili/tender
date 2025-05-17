import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import TenderDetailsView from '@/views/TenderDetailsView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/tenders/:id', component: TenderDetailsView, name: 'tender-details' },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
