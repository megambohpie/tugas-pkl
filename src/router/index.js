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
      path: '/cv/professional',
      name: 'cv-professional',
      component: () => import('../views/cv/ProfessionalCV.vue'),
    },
    {
      path: '/cv/creative2',
      name: 'cv-creative2',
      component: () => import('../views/cv/CreativeCV2.vue'),
    },
    {
      path: '/cv/minimal2',
      name: 'cv-minimal2',
      component: () => import('../views/cv/MinimalCV2.vue'),
    },
    {
      path: '/cv/tech',
      name: 'cv-tech',
      component: () => import('../views/cv/TechCVFixed.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
