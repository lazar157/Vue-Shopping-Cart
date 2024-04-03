import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import Cart from '@/components/Cart.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    
  ]
})

export default router
