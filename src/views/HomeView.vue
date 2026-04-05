<script setup>
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'

const { t } = useI18n()

const cvModels = [
  {
    name: 'modern',
    route: '/cv/modern',
    description: 'Modern and professional design with gradients',
  },
  { name: 'classic', route: '/cv/classic', description: 'Traditional and elegant layout' },
  { name: 'creative', route: '/cv/creative', description: 'Colorful and dynamic design' },
  { name: 'minimal', route: '/cv/minimal', description: 'Clean and simple layout' },
  {
    name: 'landing',
    route: '/cv/landing',
    description: 'Interactive landing page with animations',
  },
  {
    name: 'landing-fullcss',
    route: '/cv/landing-fullcss',
    description: 'Landing page with pure CSS (no Tailwind)',
  },
  {
    name: 'professional',
    route: '/cv/professional',
    description: 'Professional CV with countdown timer & age calculator',
  },
  {
    name: 'creative2',
    route: '/cv/creative2',
    description: 'Creative CV with live experience counter',
  },
  {
    name: 'minimal2',
    route: '/cv/minimal2',
    description: 'Minimal CV with simple design & dot ratings',
  },
  {
    name: 'tech',
    route: '/cv/tech',
    description: 'Tech-themed CV with terminal interface',
  },
]

const getModelGradient = (modelName) => {
  const gradients = {
    modern: 'from-blue-400 to-indigo-600',
    classic: 'from-gray-400 to-gray-600',
    creative: 'from-purple-400 to-pink-600',
    minimal: 'from-gray-200 to-gray-400',
    landing: 'from-purple-600 to-pink-600',
    'landing-fullcss': 'from-green-400 to-blue-600',
    professional: 'from-blue-600 to-cyan-600',
    creative2: 'from-pink-500 to-orange-500',
    minimal2: 'from-gray-700 to-gray-900',
    tech: 'from-green-600 to-emerald-600',
  }
  return gradients[modelName] || 'from-blue-400 to-indigo-600'
}

const getModelIcon = (modelName) => {
  const icons = {
    modern: '💼',
    classic: '📄',
    creative: '🎨',
    minimal: '✨',
    landing: '🚀',
    'landing-fullcss': '🎯',
    professional: '👔',
    creative2: '🌟',
    minimal2: '⚪',
    tech: '💻',
  }
  return icons[modelName] || '📄'
}
</script>

<template>
  <div class="home-view bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
    <!-- Header -->
    <header class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div class="flex justify-between items-center">
          <h1 class="text-3xl font-bold text-gray-900">{{ t('home.title') }}</h1>
          <LanguageSwitcher />
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 mb-4">{{ t('home.subtitle') }}</h2>
        <p class="text-xl text-gray-600">{{ t('home.select_model') }}</p>
      </div>

      <!-- CV Models Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="model in cvModels"
          :key="model.name"
          class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <div class="p-6">
            <div
              class="w-full h-48 bg-gradient-to-br mb-4 rounded-lg flex items-center justify-center"
              :class="getModelGradient(model.name)"
            >
              <div class="text-white text-6xl">
                {{ getModelIcon(model.name) }}
              </div>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">
              {{ t(`models.${model.name}`) }}
            </h3>
            <p class="text-gray-600 mb-4">{{ model.description }}</p>
            <router-link
              :to="model.route"
              class="block w-full bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              {{ t('home.select_model') }}
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
