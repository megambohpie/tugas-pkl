<template>
  <div class="classic-cv bg-gray-100 min-h-screen p-8">
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

    <div class="max-w-4xl mx-auto bg-white shadow-lg">
      <!-- Header -->
      <header class="border-b-4 border-gray-800 p-8">
        <div class="flex items-center gap-8">
          <!-- Profile Photo -->
          <div class="border-4 border-gray-800">
            <Avatar
              :name="cvStore.personalInfo.name"
              :photo="cvStore.personalInfo.photo"
              size="lg"
            />
          </div>
          <div class="flex-1 text-center">
            <h1 class="text-4xl font-serif text-gray-800 mb-2">{{ cvStore.personalInfo.name }}</h1>
            <div class="text-gray-600 space-y-1">
              <p>{{ cvStore.personalInfo.email }} | {{ cvStore.personalInfo.phone }}</p>
              <p>{{ cvStore.personalInfo.address }}</p>
            </div>
          </div>
        </div>
      </header>

      <div class="p-8">
        <!-- Objective -->
        <section class="mb-8">
          <h2 class="text-2xl font-serif text-gray-800 mb-4 uppercase tracking-wide">
            {{ $t('cv.personal_info') }}
          </h2>
          <p class="text-gray-700 leading-relaxed">
            Professional and dedicated individual with extensive experience in web development and
            design. Seeking to leverage technical skills and creative abilities to contribute to
            innovative projects.
          </p>
        </section>

        <!-- Experience -->
        <section class="mb-8">
          <h2 class="text-2xl font-serif text-gray-800 mb-4 uppercase tracking-wide">
            {{ $t('cv.experience') }}
          </h2>
          <div class="space-y-6">
            <div
              v-for="exp in cvStore.experience"
              :key="exp.company"
              class="border-l-2 border-gray-400 pl-4"
            >
              <div class="flex justify-between items-start mb-2">
                <div>
                  <h3 class="text-lg font-semibold text-gray-800">{{ exp.position }}</h3>
                  <p class="text-gray-600 italic">{{ exp.company }}</p>
                </div>
                <span class="text-sm text-gray-500">{{ exp.duration }}</span>
              </div>
              <p class="text-gray-700">{{ exp.description }}</p>
            </div>
          </div>
        </section>

        <!-- Education -->
        <section class="mb-8">
          <h2 class="text-2xl font-serif text-gray-800 mb-4 uppercase tracking-wide">
            {{ $t('cv.education') }}
          </h2>
          <div class="space-y-4">
            <div
              v-for="edu in cvStore.education"
              :key="edu.school"
              class="border-l-2 border-gray-400 pl-4"
            >
              <div class="flex justify-between items-start mb-2">
                <div>
                  <h3 class="text-lg font-semibold text-gray-800">{{ edu.degree }}</h3>
                  <p class="text-gray-600 italic">{{ edu.school }}</p>
                </div>
                <span class="text-sm text-gray-500">{{ edu.year }}</span>
              </div>
              <p class="text-gray-700">{{ edu.description }}</p>
            </div>
          </div>
        </section>

        <!-- Skills -->
        <section class="mb-8">
          <h2 class="text-2xl font-serif text-gray-800 mb-4 uppercase tracking-wide">
            {{ $t('cv.skills') }}
          </h2>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div v-for="skill in cvStore.skills" :key="skill.name" class="flex items-center">
              <span class="w-2 h-2 bg-gray-800 rounded-full mr-2"></span>
              <span class="text-gray-700">{{ skill.name }} ({{ skill.level }})</span>
            </div>
          </div>
        </section>

        <!-- Additional Sections -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Languages -->
          <section>
            <h2 class="text-xl font-serif text-gray-800 mb-3 uppercase tracking-wide">
              {{ $t('cv.languages') }}
            </h2>
            <ul class="space-y-2">
              <li v-for="language in cvStore.languages" :key="language" class="text-gray-700">
                • {{ language }}
              </li>
            </ul>
          </section>

          <!-- Projects -->
          <section>
            <h2 class="text-xl font-serif text-gray-800 mb-3 uppercase tracking-wide">
              {{ $t('cv.projects') }}
            </h2>
            <ul class="space-y-2">
              <li v-for="project in cvStore.projects" :key="project" class="text-gray-700">
                • {{ project }}
              </li>
            </ul>
          </section>
        </div>

        <!-- References -->
        <section class="mt-8 pt-8 border-t border-gray-300">
          <h2 class="text-xl font-serif text-gray-800 mb-3 uppercase tracking-wide">
            {{ $t('cv.references') }}
          </h2>
          <p class="text-gray-700 italic">{{ cvStore.references[0] }}</p>
        </section>
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
</script>
