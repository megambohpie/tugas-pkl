<template>
  <div class="language-switcher">
    <button
      @click="toggleLanguage"
      class="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 shadow-sm"
    >
      <span class="text-xl">{{ currentFlag }}</span>
      <span class="font-medium text-gray-700">{{ currentLanguage }}</span>
      <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        ></path>
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const currentLocale = ref(locale.value)

const languages = {
  en: { name: 'English', flag: '🇺🇸' },
  id: { name: 'Bahasa', flag: '🇮🇩' },
}

const currentLanguage = ref(languages[currentLocale.value].name)
const currentFlag = ref(languages[currentLocale.value].flag)

const toggleLanguage = () => {
  const newLocale = currentLocale.value === 'en' ? 'id' : 'en'
  currentLocale.value = newLocale
  locale.value = newLocale
  currentLanguage.value = languages[newLocale].name
  currentFlag.value = languages[newLocale].flag
  localStorage.setItem('locale', newLocale)
}

onMounted(() => {
  currentLocale.value = locale.value
  currentLanguage.value = languages[locale.value].name
  currentFlag.value = languages[locale.value].flag
})
</script>
