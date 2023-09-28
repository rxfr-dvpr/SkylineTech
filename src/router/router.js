import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      alias: ['/ru/about', '/uz/about'],
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/services',
      name: 'services',
      alias: ['/ru/services', '/uz/services'],
      component: () => import('@/views/ServicesView.vue')
    },
    {
      path: '/portfolios',
      name: 'portfolios',
      alias: ['/ru/portfolios', '/uz/portfolios'],
      component: () => import('@/views/PortfoliosView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      alias: ['/ru/contact', '/uz/contact'],
      component: () => import('@/views/ContactView.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      alias: ['/ru/blog', '/uz/blog'],
      component: () => import('@/views/BlogView.vue')
    }
  ]
})

export default router
