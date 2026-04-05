<template>
  <div class="modern-cv bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen p-8">
    <!-- Back Button and Language Switcher -->
    <div class="max-w-4xl mx-auto mb-6 flex justify-between items-center">
      <button
        @click="goBack"
        class="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          ></path>
        </svg>
        <span class="font-medium">{{ $t('nav.home') }}</span>
      </button>
      <LanguageSwitcher />
    </div>

    <div class="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
      <!-- Header -->
      <header class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-6">
            <!-- Profile Photo -->
            <div class="border-4 border-white/30">
              <Avatar
                :name="cvStore.personalInfo.name"
                :photo="cvStore.personalInfo.photo"
                size="md"
              />
            </div>
            <div>
              <h1 class="text-4xl font-bold mb-2">{{ cvStore.personalInfo.name }}</h1>
              <p class="text-xl opacity-90">{{ $t('cv.personal_info') }}</p>
            </div>
          </div>
          <div class="text-right">
            <p class="mb-2">📧 {{ cvStore.personalInfo.email }}</p>
            <p class="mb-2">📱 {{ cvStore.personalInfo.phone }}</p>
            <p>📍 {{ cvStore.personalInfo.address }}</p>
          </div>
        </div>
      </header>

      <div class="p-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Left Column -->
          <div class="md:col-span-1 space-y-6">
            <!-- Skills -->
            <section class="bg-gray-50 rounded-lg p-6">
              <h2 class="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span class="mr-2">💼</span> {{ $t('cv.skills') }}
              </h2>
              <div class="space-y-3">
                <div v-for="skill in cvStore.skills" :key="skill.name" class="skill-item">
                  <div class="flex justify-between mb-1">
                    <span class="text-sm font-medium">{{ skill.name }}</span>
                    <span class="text-sm text-gray-600">{{ skill.level }}</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2">
                    <div
                      class="bg-blue-600 h-2 rounded-full"
                      :style="getSkillWidth(skill.level)"
                    ></div>
                  </div>
                </div>
              </div>
            </section>

            <!-- Languages -->
            <section class="bg-gray-50 rounded-lg p-6">
              <h2 class="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span class="mr-2">🌍</span> {{ $t('cv.languages') }}
              </h2>
              <ul class="space-y-2">
                <li v-for="language in cvStore.languages" :key="language" class="text-gray-700">
                  • {{ language }}
                </li>
              </ul>
            </section>

            <!-- Interests -->
            <section class="bg-gray-50 rounded-lg p-6">
              <h2 class="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span class="mr-2">🎯</span> {{ $t('cv.interests') }}
              </h2>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="interest in cvStore.interests"
                  :key="interest"
                  class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {{ interest }}
                </span>
              </div>
            </section>
          </div>

          <!-- Right Column -->
          <div class="md:col-span-2 space-y-6">
            <!-- Experience -->
            <section>
              <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span class="mr-2">🚀</span> {{ $t('cv.experience') }}
              </h2>
              <div class="space-y-4">
                <div
                  v-for="exp in cvStore.experience"
                  :key="exp.company"
                  class="border-l-4 border-blue-600 pl-6 py-2"
                >
                  <h3 class="text-lg font-semibold text-gray-800">{{ exp.position }}</h3>
                  <p class="text-blue-600 font-medium">{{ exp.company }}</p>
                  <p class="text-sm text-gray-600 mb-2">{{ exp.duration }}</p>
                  <p class="text-gray-700">{{ exp.description }}</p>
                </div>
              </div>
            </section>

            <!-- Education -->
            <section>
              <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span class="mr-2">🎓</span> {{ $t('cv.education') }}
              </h2>
              <div class="space-y-4">
                <div
                  v-for="edu in cvStore.education"
                  :key="edu.school"
                  class="border-l-4 border-indigo-600 pl-6 py-2"
                >
                  <h3 class="text-lg font-semibold text-gray-800">{{ edu.degree }}</h3>
                  <p class="text-indigo-600 font-medium">{{ edu.school }}</p>
                  <p class="text-sm text-gray-600">{{ edu.year }}</p>
                  <p class="text-gray-700">{{ edu.description }}</p>
                </div>
              </div>
            </section>

            <!-- Projects -->
            <section>
              <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span class="mr-2">🔧</span> {{ $t('cv.projects') }}
              </h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div
                  v-for="project in cvStore.projects"
                  :key="project"
                  class="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200"
                >
                  <p class="text-gray-800 font-medium">{{ project }}</p>
                </div>
              </div>
            </section>
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

const getSkillWidth = (level) => {
  const widths = {
    Beginner: '25%',
    Intermediate: '60%',
    Advanced: '85%',
    Expert: '100%',
  }
  return `width: ${widths[level] || '50%'}`
}
</script>
