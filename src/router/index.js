import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/cv/modern',
      name: 'cv-modern',
      component: () => import('../views/cv/ModernCV.vue'),
    },
    {
      path: '/cv/classic',
      name: 'cv-classic',
      component: () => import('../views/cv/ClassicCV.vue'),
    },
    {
      path: '/cv/creative',
      name: 'cv-creative',
      component: () => import('../views/cv/CreativeCV.vue'),
    },
    {
      path: '/cv/minimal',
      name: 'cv-minimal',
      component: () => import('../views/cv/MinimalCV.vue'),
    },
    {
      path: '/cv/landing',
      name: 'cv-landing',
      component: () => import('../views/cv/LandingCV.vue'),
    },
    {
      path: '/cv/landing-fullcss',
      name: 'cv-landing-fullcss',
      component: () => import('../views/cv/LandingCVFullCSS.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
