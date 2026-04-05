<template>
  <div class="professional-cv">
    <!-- Top Navigation -->
    <div class="top-nav">
      <button @click="goBack" class="back-btn">
        <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          ></path>
        </svg>
        <span>{{ $t('nav.home') }}</span>
      </button>
      <LanguageSwitcher />
    </div>

    <!-- Header Section -->
    <header class="header">
      <div class="profile-section">
        <div class="avatar-wrapper">
          <Avatar
            :name="cvStore.personalInfo.name"
            :photo="cvStore.personalInfo.photo"
            size="lg"
            class="profile-avatar"
          />
        </div>
        <div class="profile-info">
          <h1 class="name">{{ cvStore.personalInfo.name }}</h1>
          <p class="title">{{ cvStore.personalInfo.title }}</p>
          <div class="personal-details">
            <p class="age">Age: {{ calculateAge }}</p>
            <p class="birth-date">Born: {{ formatDate(cvStore.personalInfo.birthDate) }}</p>
          </div>
        </div>
      </div>

      <!-- Countdown Timer -->
      <div class="countdown-section">
        <h3>Experience Countdown</h3>
        <div class="countdown">
          <div class="time-block">
            <span class="time">{{ countdown.years }}</span>
            <span class="label">Years</span>
          </div>
          <div class="time-block">
            <span class="time">{{ countdown.months }}</span>
            <span class="label">Months</span>
          </div>
          <div class="time-block">
            <span class="time">{{ countdown.days }}</span>
            <span class="label">Days</span>
          </div>
          <div class="time-block">
            <span class="time">{{ countdown.hours }}</span>
            <span class="label">Hours</span>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="main-content">
      <!-- Contact Info -->
      <section class="contact-section">
        <h2 class="section-title">Contact Information</h2>
        <div class="contact-grid">
          <div class="contact-item">
            <span class="icon">📧</span>
            <span>{{ cvStore.personalInfo.email }}</span>
          </div>
          <div class="contact-item">
            <span class="icon">📱</span>
            <span>{{ cvStore.personalInfo.phone }}</span>
          </div>
          <div class="contact-item">
            <span class="icon">📍</span>
            <span>{{ cvStore.personalInfo.address }}</span>
          </div>
          <div class="contact-item">
            <span class="icon">🌐</span>
            <span>{{ cvStore.personalInfo.website }}</span>
          </div>
        </div>
      </section>

      <!-- Professional Summary -->
      <section class="summary-section">
        <h2 class="section-title">Professional Summary</h2>
        <p class="summary-text">{{ cvStore.personalInfo.summary }}</p>
      </section>

      <!-- Work Experience -->
      <section class="experience-section">
        <h2 class="section-title">Work Experience</h2>
        <div class="experience-list">
          <div v-for="exp in cvStore.experience" :key="exp.company" class="experience-item">
            <div class="exp-header">
              <h3 class="exp-title">{{ exp.position }}</h3>
              <span class="exp-duration">{{ exp.duration }}</span>
            </div>
            <h4 class="exp-company">{{ exp.company }}</h4>
            <p class="exp-description">{{ exp.description }}</p>
            <ul class="exp-achievements">
              <li v-for="achievement in exp.achievements" :key="achievement">{{ achievement }}</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Organization Experience -->
      <section class="organization-section">
        <h2 class="section-title">Organization Experience</h2>
        <div class="organization-list">
          <div v-for="org in cvStore.organizations" :key="org.name" class="organization-item">
            <div class="org-header">
              <h3 class="org-title">{{ org.position }}</h3>
              <span class="org-duration">{{ org.duration }}</span>
            </div>
            <h4 class="org-name">{{ org.name }}</h4>
            <p class="org-description">{{ org.description }}</p>
            <ul class="org-achievements">
              <li v-for="achievement in org.achievements" :key="achievement">{{ achievement }}</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Education -->
      <section class="education-section">
        <h2 class="section-title">Education</h2>
        <div class="education-list">
          <div v-for="edu in cvStore.education" :key="edu.school" class="education-item">
            <h3 class="edu-degree">{{ edu.degree }}</h3>
            <h4 class="edu-school">{{ edu.school }}</h4>
            <p class="edu-year">{{ edu.year }}</p>
            <p class="edu-description">{{ edu.description }}</p>
          </div>
        </div>
      </section>

      <!-- Skills -->
      <section class="skills-section">
        <h2 class="section-title">Skills</h2>
        <div class="skills-grid">
          <div v-for="skill in cvStore.skills" :key="skill.name" class="skill-item">
            <div class="skill-header">
              <h4 class="skill-name">{{ skill.name }}</h4>
              <span class="skill-percentage">{{ skill.percentage }}%</span>
            </div>
            <div class="skill-bar">
              <div class="skill-progress" :style="getSkillWidth(skill.percentage)"></div>
            </div>
          </div>
        </div>
      </section>

      <!-- Languages -->
      <section class="languages-section">
        <h2 class="section-title">Languages</h2>
        <div class="languages-list">
          <div v-for="lang in cvStore.languages" :key="lang.name" class="language-item">
            <span class="language-name">{{ lang.name }}</span>
            <span class="language-level">{{ lang.level }}</span>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted } from 'vue'
import { useCVStore } from '@/stores/cv'
import { useRouter } from 'vue-router'
import LanguageSwitcher from '@/components/LanguageSwitcherFixed.vue'
import Avatar from '@/components/Avatar.vue'

const cvStore = useCVStore()
const router = useRouter()

let countdownInterval = null

const calculateAge = computed(() => {
  const birthDate = new Date(cvStore.personalInfo.birthDate)
  const today = new Date()
  const age = today.getFullYear() - birthDate.getFullYear()
  const monthDiff = today.getMonth() - birthDate.getMonth()

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    return age - 1
  }
  return age
})

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const countdown = computed(() => {
  const startDate = new Date('2020-01-01') // Start of career
  const now = new Date()
  const diff = now - startDate

  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365))
  const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30))
  const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))

  return { years, months, days, hours }
})

const goBack = () => {
  router.push('/')
}

const getSkillWidth = (percentage) => {
  return `width: ${percentage}%`
}

onMounted(() => {
  // Update countdown every hour
  countdownInterval = setInterval(() => {
    // Force reactivity update
  }, 3600000)
})

onUnmounted(() => {
  if (countdownInterval) {
    clearInterval(countdownInterval)
  }
})
</script>

<style scoped>
.professional-cv {
  font-family: 'Georgia', serif;
  line-height: 1.6;
  color: #333;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  min-height: 100vh;
}

.top-nav {
  position: fixed;
  top: 20px;
  left: 20px;
  right: 20px;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.back-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background: #2c3e50;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;
}

.back-btn:hover {
  background: #34495e;
  transform: translateY(-2px);
}

.icon {
  width: 20px;
  height: 20px;
}

.header {
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  color: white;
  padding: 60px 40px;
  margin-top: 80px;
}

.profile-section {
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 40px;
}

.profile-avatar {
  border: 4px solid #ecf0f1;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.profile-info h1.name {
  font-size: 2.5rem;
  margin-bottom: 10px;
  font-weight: 700;
}

.profile-info .title {
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: #bdc3c7;
  font-style: italic;
}

.personal-details {
  display: flex;
  gap: 20px;
  font-size: 0.9rem;
}

.age,
.birth-date {
  background: rgba(255, 255, 255, 0.1);
  padding: 5px 10px;
  border-radius: 4px;
}

.countdown-section {
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 10px;
  backdrop-filter: blur(10px);
}

.countdown-section h3 {
  margin-bottom: 15px;
  font-size: 1.2rem;
}

.countdown {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.time-block {
  text-align: center;
  background: rgba(255, 255, 255, 0.2);
  padding: 15px;
  border-radius: 8px;
  min-width: 80px;
}

.time {
  display: block;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 5px;
}

.label {
  font-size: 0.8rem;
  text-transform: uppercase;
  opacity: 0.8;
}

.main-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

section {
  margin-bottom: 40px;
}

.section-title {
  font-size: 1.8rem;
  color: #2c3e50;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 3px solid #3498db;
  font-weight: 700;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.contact-item:hover {
  transform: translateY(-3px);
}

.contact-item .icon {
  font-size: 1.2rem;
}

.summary-text {
  background: white;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  font-size: 1.1rem;
  line-height: 1.7;
}

.experience-list,
.organization-list {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.experience-item,
.organization-item {
  background: white;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #3498db;
}

.exp-header,
.org-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.exp-title,
.org-title {
  font-size: 1.3rem;
  color: #2c3e50;
  font-weight: 700;
}

.exp-duration,
.org-duration {
  background: #3498db;
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 0.9rem;
}

.exp-company,
.org-name {
  font-size: 1.1rem;
  color: #3498db;
  margin-bottom: 10px;
  font-weight: 600;
}

.exp-description,
.org-description {
  margin-bottom: 15px;
  line-height: 1.6;
}

.exp-achievements,
.org-achievements {
  list-style: none;
  padding: 0;
}

.exp-achievements li,
.org-achievements li {
  padding: 5px 0;
  padding-left: 20px;
  position: relative;
}

.exp-achievements li:before,
.org-achievements li:before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #27ae60;
  font-weight: bold;
}

.education-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.education-item {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-top: 3px solid #e74c3c;
}

.edu-degree {
  font-size: 1.2rem;
  color: #2c3e50;
  margin-bottom: 5px;
  font-weight: 700;
}

.edu-school {
  font-size: 1.1rem;
  color: #e74c3c;
  margin-bottom: 5px;
  font-weight: 600;
}

.edu-year {
  color: #7f8c8d;
  margin-bottom: 10px;
  font-style: italic;
}

.edu-description {
  line-height: 1.6;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.skill-item {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.skill-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.skill-name {
  font-weight: 600;
  color: #2c3e50;
}

.skill-percentage {
  background: #3498db;
  color: white;
  padding: 3px 8px;
  border-radius: 12px;
  font-size: 0.8rem;
}

.skill-bar {
  height: 8px;
  background: #ecf0f1;
  border-radius: 4px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background: linear-gradient(90deg, #3498db 0%, #2980b9 100%);
  border-radius: 4px;
  transition: width 1s ease;
}

.languages-list {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.language-item {
  background: white;
  padding: 12px 20px;
  border-radius: 25px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 10px;
}

.language-name {
  font-weight: 600;
  color: #2c3e50;
}

.language-level {
  background: #27ae60;
  color: white;
  padding: 3px 8px;
  border-radius: 12px;
  font-size: 0.8rem;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .header {
    padding: 40px 20px;
  }

  .profile-section {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }

  .personal-details {
    justify-content: center;
  }

  .countdown {
    flex-wrap: wrap;
    gap: 10px;
  }

  .time-block {
    min-width: 60px;
    padding: 10px;
  }

  .time {
    font-size: 1.5rem;
  }
}

@media (max-width: 768px) {
  .top-nav {
    flex-direction: column;
    gap: 10px;
    top: 10px;
    left: 10px;
    right: 10px;
  }

  .header {
    padding: 30px 15px;
    margin-top: 100px;
  }

  .profile-info h1.name {
    font-size: 2rem;
  }

  .profile-info .title {
    font-size: 1.1rem;
  }

  .personal-details {
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }

  .main-content {
    padding: 20px 15px;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .contact-grid {
    grid-template-columns: 1fr;
  }

  .exp-header,
  .org-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
  }

  .education-list {
    grid-template-columns: 1fr;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .header {
    padding: 20px 10px;
  }

  .profile-info h1.name {
    font-size: 1.5rem;
  }

  .countdown {
    gap: 5px;
  }

  .time-block {
    min-width: 50px;
    padding: 8px;
  }

  .time {
    font-size: 1.2rem;
  }

  .label {
    font-size: 0.7rem;
  }

  .main-content {
    padding: 15px 10px;
  }

  .section-title {
    font-size: 1.3rem;
  }

  .experience-item,
  .organization-item,
  .education-item,
  .skill-item {
    padding: 15px;
  }
}
</style>
