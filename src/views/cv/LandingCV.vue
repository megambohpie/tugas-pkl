<template>
  <div class="landing-cv min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <!-- Back Button and Language Switcher -->
    <div class="fixed top-4 left-4 right-4 z-50 flex justify-between items-center">
      <button
        @click="goBack"
        class="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 text-white hover:bg-white/20 transition-all duration-200"
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

    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <!-- Animated Background -->
      <div class="absolute inset-0">
        <div
          class="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
        ></div>
        <div
          class="absolute top-40 right-20 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"
        ></div>
        <div
          class="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"
        ></div>
      </div>

      <div class="relative z-10 text-center px-4">
        <!-- Profile Avatar -->
        <div class="mb-8 flex justify-center">
          <div class="relative">
            <div
              class="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-lg opacity-50 scale-110"
            ></div>
            <Avatar
              :name="cvStore.personalInfo.name"
              :photo="cvStore.personalInfo.photo"
              size="lg"
              class="relative border-4 border-white/20"
            />
          </div>
        </div>

        <!-- Name and Title -->
        <div class="mb-8">
          <h1 class="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            {{ cvStore.personalInfo.name }}
          </h1>
          <p class="text-xl md:text-2xl text-purple-200 font-light">
            Full Stack Developer & UI/UX Designer
          </p>
        </div>

        <!-- Contact Info -->
        <div class="flex flex-wrap justify-center gap-6 mb-12 text-white/80">
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
            <span>{{ cvStore.personalInfo.email }}</span>
          </div>
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              ></path>
            </svg>
            <span>{{ cvStore.personalInfo.phone }}</span>
          </div>
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
            <span>{{ cvStore.personalInfo.address }}</span>
          </div>
        </div>

        <!-- CTA Buttons -->
        <div class="flex flex-wrap justify-center gap-4">
          <button
            class="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105"
          >
            {{ $t('cv.download_cv') }}
          </button>
          <button
            class="px-8 py-3 bg-white/10 backdrop-blur-md text-white rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-200"
          >
            {{ $t('cv.contact_me') }}
          </button>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          ></path>
        </svg>
      </div>
    </section>

    <!-- About Section -->
    <section class="py-20 px-4">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold text-white mb-12 text-center">{{ $t('cv.about') }}</h2>
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p class="text-lg text-gray-300 leading-relaxed mb-6">
              {{ $t('cv.about_description') }}
            </p>
            <div class="grid grid-cols-2 gap-6">
              <div class="bg-white/5 backdrop-blur-md rounded-lg p-6 border border-white/10">
                <h3 class="text-2xl font-bold text-purple-400 mb-2">5+</h3>
                <p class="text-gray-300">{{ $t('cv.years_experience') }}</p>
              </div>
              <div class="bg-white/5 backdrop-blur-md rounded-lg p-6 border border-white/10">
                <h3 class="text-2xl font-bold text-pink-400 mb-2">50+</h3>
                <p class="text-gray-300">{{ $t('cv.projects_completed') }}</p>
              </div>
            </div>
          </div>
          <div class="flex justify-center">
            <div class="relative">
              <div
                class="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-lg opacity-30 scale-110"
              ></div>
              <div
                class="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
              >
                <div class="grid grid-cols-2 gap-4">
                  <div
                    v-for="skill in cvStore.skills.slice(0, 4)"
                    :key="skill.name"
                    class="text-center"
                  >
                    <div class="text-3xl mb-2">💻</div>
                    <p class="text-white font-medium">{{ skill.name }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section class="py-20 px-4 bg-white/5 backdrop-blur-sm">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold text-white mb-12 text-center">{{ $t('cv.experience') }}</h2>
        <div class="space-y-8">
          <div
            v-for="exp in cvStore.experience"
            :key="exp.company"
            class="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
          >
            <div class="absolute top-4 left-4 text-purple-400 text-sm font-medium">
              {{ exp.duration }}
            </div>
            <div class="ml-24">
              <h3 class="text-2xl font-bold text-white mb-2">{{ exp.position }}</h3>
              <p class="text-purple-300 font-medium mb-4">{{ exp.company }}</p>
              <p class="text-gray-300">{{ exp.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="py-20 px-4">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold text-white mb-12 text-center">{{ $t('cv.skills') }}</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div
            v-for="skill in cvStore.skills"
            :key="skill.name"
            class="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
          >
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-xl font-bold text-white">{{ skill.name }}</h3>
              <span class="px-3 py-1 bg-purple-600 text-white rounded-full text-sm">{{
                skill.level
              }}</span>
            </div>
            <div class="w-full bg-white/20 rounded-full h-2">
              <div
                class="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full"
                :style="getSkillWidth(skill.level)"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-20 px-4 bg-gradient-to-r from-purple-800 to-pink-800">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-4xl font-bold text-white mb-8">{{ $t('cv.get_in_touch') }}</h2>
        <p class="text-xl text-gray-200 mb-12">{{ $t('cv.lets_work_together') }}</p>
        <div class="flex flex-wrap justify-center gap-4">
          <button
            class="px-8 py-3 bg-white text-purple-800 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
          >
            {{ $t('cv.send_message') }}
          </button>
          <button
            class="px-8 py-3 bg-transparent text-white rounded-lg font-semibold border-2 border-white hover:bg-white hover:text-purple-800 transition-all duration-200"
          >
            {{ $t('cv.download_cv') }}
          </button>
        </div>
      </div>
    </section>
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

<style scoped>
@keyframes pulse {
  0%,
  100% {
    opacity: 0.2;
  }
  50% {
    opacity: 0.3;
  }
}

.animate-pulse {
  animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>
