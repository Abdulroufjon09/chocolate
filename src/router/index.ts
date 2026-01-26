import { createRouter, createWebHistory } from 'vue-router'
import BuyNow from '@/views/buy_now.vue'
import Home from '@/views/home.vue'
import Review from '@/views/review.vue'
import Subscribe from '@/views/subscribe.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/buy',
      name: 'Buy',
      component: BuyNow,
    },
    {
      path: '/review',
      name: 'review',
      component: Review,
    },
    {
      path: '/subscribe',
      name: 'subscribe',
      component: Subscribe,
    },
  ],
})

export default router
