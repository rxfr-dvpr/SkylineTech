import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      alias: ['/home'],
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
      path: '/:pathMatch(.*)*', 
      name: 'NotFound', 
      component: () => import('@/views/NotFound.vue') 
    },
  ]
})

router.beforeEach(function(to, from, next) {
  window.scrollTo(0, 0);
  next()
});

export default router
