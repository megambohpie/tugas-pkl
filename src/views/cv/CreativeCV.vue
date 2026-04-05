<template>
  <div
    class="creative-cv bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 min-h-screen p-8"
  >
    <!-- Back Button and Language Switcher -->
    <div class="max-w-5xl mx-auto mb-6 flex justify-between items-center">
      <button
        @click="goBack"
        class="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          ></path>
        </svg>
        <span class="font-medium text-gray-800">{{ $t('nav.home') }}</span>
      </button>
      <LanguageSwitcher />
    </div>

    <div class="max-w-5xl mx-auto">
      <!-- Creative Header -->
      <header class="relative mb-8">
        <div
          class="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 transform rotate-1 hover:rotate-0 transition-transform duration-300"
        >
          <div class="flex flex-col md:flex-row items-center justify-between">
            <div class="text-center md:text-left mb-6 md:mb-0">
              <h1
                class="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2"
              >
                {{ cvStore.personalInfo.name }}
              </h1>
              <div class="space-y-2 text-gray-700">
                <p class="flex items-center justify-center md:justify-start">
                  <span class="mr-2">✉️</span> {{ cvStore.personalInfo.email }}
                </p>
                <p class="flex items-center justify-center md:justify-start">
                  <span class="mr-2">📱</span> {{ cvStore.personalInfo.phone }}
                </p>
                <p class="flex items-center justify-center md:justify-start">
                  <span class="mr-2">🏠</span> {{ cvStore.personalInfo.address }}
                </p>
              </div>
            </div>
            <div class="relative">
              <div class="border-4 border-white shadow-xl">
                <Avatar
                  :name="cvStore.personalInfo.name"
                  :photo="cvStore.personalInfo.photo"
                  size="lg"
                />
              </div>
              <div
                class="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-xs font-bold"
              >
                ⭐
              </div>
            </div>
          </div>
        </div>
      </header>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Left Column - Creative Cards -->
        <div class="lg:col-span-1 space-y-6">
          <!-- Skills Card -->
          <div
            class="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 transform -rotate-2 hover:rotate-0 transition-transform duration-300"
          >
            <h2 class="text-2xl font-bold text-purple-600 mb-4 flex items-center">
              <span class="mr-2">🎨</span> {{ $t('cv.skills') }}
            </h2>
            <div class="space-y-3">
              <div
                v-for="skill in cvStore.skills"
                :key="skill.name"
                class="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-3 border-l-4 border-purple-500"
              >
                <div class="flex justify-between items-center">
                  <span class="font-medium text-gray-800">{{ skill.name }}</span>
                  <span class="text-sm px-2 py-1 bg-purple-500 text-white rounded-full">{{
                    skill.level
                  }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Languages Card -->
          <div
            class="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 transform rotate-1 hover:rotate-0 transition-transform duration-300"
          >
            <h2 class="text-2xl font-bold text-pink-600 mb-4 flex items-center">
              <span class="mr-2">🌍</span> {{ $t('cv.languages') }}
            </h2>
            <div class="space-y-2">
              <div
                v-for="language in cvStore.languages"
                :key="language"
                class="bg-gradient-to-r from-pink-100 to-red-100 rounded-lg p-3 text-center font-medium text-gray-800"
              >
                {{ language }}
              </div>
            </div>
          </div>

          <!-- Interests Card -->
          <div
            class="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 transform -rotate-1 hover:rotate-0 transition-transform duration-300"
          >
            <h2 class="text-2xl font-bold text-red-600 mb-4 flex items-center">
              <span class="mr-2">🎯</span> {{ $t('cv.interests') }}
            </h2>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="interest in cvStore.interests"
                :key="interest"
                class="px-3 py-2 bg-gradient-to-r from-red-400 to-pink-400 text-white rounded-full text-sm font-medium shadow-md"
              >
                {{ interest }}
              </span>
            </div>
          </div>
        </div>

        <!-- Right Column - Main Content -->
        <div class="lg:col-span-2 space-y-6">
          <!-- Experience -->
          <div class="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8">
            <h2 class="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <span class="mr-3 text-4xl">🚀</span> {{ $t('cv.experience') }}
            </h2>
            <div class="space-y-6">
              <div
                v-for="(exp, index) in cvStore.experience"
                :key="exp.company"
                class="relative pl-8 pb-6 border-l-4 border-gradient-to-b from-purple-500 to-pink-500"
                :class="{
                  'border-l-purple-500': index % 2 === 0,
                  'border-l-pink-500': index % 2 === 1,
                }"
              >
                <div
                  class="absolute -left-3 top-0 w-6 h-6 bg-white border-4 border-purple-500 rounded-full"
                ></div>
                <div class="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 shadow-md">
                  <h3 class="text-xl font-bold text-gray-800 mb-2">{{ exp.position }}</h3>
                  <p class="text-purple-600 font-semibold mb-2">{{ exp.company }}</p>
                  <p class="text-sm text-gray-600 mb-3">{{ exp.duration }}</p>
                  <p class="text-gray-700">{{ exp.description }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Education -->
          <div class="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8">
            <h2 class="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <span class="mr-3 text-4xl">🎓</span> {{ $t('cv.education') }}
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                v-for="edu in cvStore.education"
                :key="edu.school"
                class="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-6 border-2 border-purple-200"
              >
                <h3 class="text-lg font-bold text-gray-800 mb-2">{{ edu.degree }}</h3>
                <p class="text-purple-600 font-semibold mb-1">{{ edu.school }}</p>
                <p class="text-sm text-gray-600 mb-2">{{ edu.year }}</p>
                <p class="text-gray-700">{{ edu.description }}</p>
              </div>
            </div>
          </div>

          <!-- Projects -->
          <div class="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8">
            <h2 class="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <span class="mr-3 text-4xl">💡</span> {{ $t('cv.projects') }}
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                v-for="(project, index) in cvStore.projects"
                :key="project"
                class="relative overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                :class="getProjectColor(index)"
              >
                <div class="p-6 text-white">
                  <div class="absolute top-2 right-2 text-2xl">{{ getProjectIcon(index) }}</div>
                  <h3 class="text-lg font-bold mb-2">{{ project }}</h3>
                  <div class="w-full h-1 bg-white/30 rounded-full mt-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCVStore } from '@/stores/cv'
import { useRouter } from 'vue-router'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import Avatar from '@/components/Avatar.vue'

const cvStore = useCVStore()
const router = useRouter()

const goBack = () => {
  router.push('/')
}

const getProjectColor = (index) => {
  const colors = [
    'bg-gradient-to-br from-purple-500 to-pink-500',
    'bg-gradient-to-br from-pink-500 to-red-500',
    'bg-gradient-to-br from-red-500 to-orange-500',
    'bg-gradient-to-br from-orange-500 to-yellow-500',
  ]
  return colors[index % colors.length]
}

const getProjectIcon = (index) => {
  const icons = ['🌟', '🎨', '🚀', '💎']
  return icons[index % icons.length]
}
</script>
