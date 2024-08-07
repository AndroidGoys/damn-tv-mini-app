import { createRouter, createWebHistory } from 'vue-router'
import ChannelsPage from '@/pages/ChannelsPage.vue'
 
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ChannelsPage
    }
  ]
})

export { router }
