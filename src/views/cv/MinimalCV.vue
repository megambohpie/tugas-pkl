<template>
  <div class="minimal-cv bg-white min-h-screen p-12">
    <!-- Back Button and Language Switcher -->
    <div class="max-w-3xl mx-auto mb-8 flex justify-between items-center">
      <button
        @click="goBack"
        class="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          ></path>
        </svg>
        <span class="font-medium text-gray-700">{{ $t('nav.home') }}</span>
      </button>
      <LanguageSwitcher />
    </div>

    <div class="max-w-3xl mx-auto">
      <!-- Minimal Header -->
      <header class="mb-16">
        <div class="flex items-center gap-8 mb-8">
          <!-- Profile Photo -->
          <div class="border border-gray-300">
            <Avatar
              :name="cvStore.personalInfo.name"
              :photo="cvStore.personalInfo.photo"
              size="md"
            />
          </div>
          <div>
            <h1 class="text-6xl font-light text-gray-900 mb-4">{{ cvStore.personalInfo.name }}</h1>
            <div class="flex flex-wrap gap-8 text-sm text-gray-600">
              <span>{{ cvStore.personalInfo.email }}</span>
              <span>{{ cvStore.personalInfo.phone }}</span>
              <span>{{ cvStore.personalInfo.address }}</span>
            </div>
          </div>
        </div>
      </header>

      <!-- Experience Section -->
      <section class="mb-16">
        <h2 class="text-xs font-normal text-gray-500 uppercase tracking-widest mb-8">
          {{ $t('cv.experience') }}
        </h2>
        <div class="space-y-8">
          <div
            v-for="exp in cvStore.experience"
            :key="exp.company"
            class="border-b border-gray-200 pb-8"
          >
            <div class="flex justify-between items-start mb-2">
              <div>
                <h3 class="text-lg font-medium text-gray-900">{{ exp.position }}</h3>
                <p class="text-gray-600">{{ exp.company }}</p>
              </div>
              <span class="text-sm text-gray-500">{{ exp.duration }}</span>
            </div>
            <p class="text-gray-700 leading-relaxed">{{ exp.description }}</p>
          </div>
        </div>
      </section>

      <!-- Education Section -->
      <section class="mb-16">
        <h2 class="text-xs font-normal text-gray-500 uppercase tracking-widest mb-8">
          {{ $t('cv.education') }}
        </h2>
        <div class="space-y-6">
          <div
            v-for="edu in cvStore.education"
            :key="edu.school"
            class="border-b border-gray-200 pb-6"
          >
            <div class="flex justify-between items-start mb-2">
              <div>
                <h3 class="text-lg font-medium text-gray-900">{{ edu.degree }}</h3>
                <p class="text-gray-600">{{ edu.school }}</p>
              </div>
              <span class="text-sm text-gray-500">{{ edu.year }}</span>
            </div>
            <p class="text-gray-700">{{ edu.description }}</p>
          </div>
        </div>
      </section>

      <!-- Skills Section -->
      <section class="mb-16">
        <h2 class="text-xs font-normal text-gray-500 uppercase tracking-widest mb-8">
          {{ $t('cv.skills') }}
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div v-for="skill in cvStore.skills" :key="skill.name" class="text-gray-700">
            {{ skill.name }}
            <span class="text-gray-400 text-sm">· {{ skill.level }}</span>
          </div>
        </div>
      </section>

      <!-- Two Column Layout for Additional Info -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
        <!-- Languages -->
        <section>
          <h2 class="text-xs font-normal text-gray-500 uppercase tracking-widest mb-4">
            {{ $t('cv.languages') }}
          </h2>
          <div class="space-y-2">
            <div v-for="language in cvStore.languages" :key="language" class="text-gray-700">
              {{ language }}
            </div>
          </div>
        </section>

        <!-- Projects -->
        <section>
          <h2 class="text-xs font-normal text-gray-500 uppercase tracking-widest mb-4">
            {{ $t('cv.projects') }}
          </h2>
          <div class="space-y-2">
            <div v-for="project in cvStore.projects" :key="project" class="text-gray-700">
              {{ project }}
            </div>
          </div>
        </section>
      </div>

      <!-- Footer -->
      <footer class="mt-24 pt-8 border-t border-gray-200">
        <p class="text-xs text-gray-500 text-center">
          {{ $t('cv.references') }}: {{ cvStore.references[0] }}
        </p>
      </footer>
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
</script>
