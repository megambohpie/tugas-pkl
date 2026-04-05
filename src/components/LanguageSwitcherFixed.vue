<template>
  <div class="language-switcher">
    <button @click="toggleLanguage" class="language-btn">
      <span class="flag-icon">{{ currentFlag }}</span>
      <span class="lang-text">{{ currentLanguage }}</span>
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

<style scoped>
.language-switcher {
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 1000;
}

.language-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 6px;
  cursor: pointer;
  font-size: 12px;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.language-btn:hover {
  background: rgba(255, 255, 255, 0.95);
  transform: translateY(-1px);
}

.flag-icon {
  font-size: 16px;
}

.lang-text {
  font-weight: 500;
  color: #ffffff;
  font-size: 11px;
}
</style>
