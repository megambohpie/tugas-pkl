<template>
  <div class="minimal-cv2">
    <!-- Simple Navigation -->
    <header class="minimal-header">
      <button @click="goBack" class="minimal-btn">← Back</button>
      <LanguageSwitcher />
    </header>

    <!-- Main Content -->
    <main class="minimal-main">
      <!-- Profile Section -->
      <section class="profile-section">
        <div class="profile-header">
          <Avatar
            :name="cvStore.personalInfo.name"
            :photo="cvStore.personalInfo.photo"
            size="lg"
            class="minimal-avatar"
          />
          <div class="profile-info">
            <h1 class="name">{{ cvStore.personalInfo.name }}</h1>
            <p class="title">{{ cvStore.personalInfo.title }}</p>
            <p class="age">
              Age: {{ calculateAge }} ({{ formatDate(cvStore.personalInfo.birthDate) }})
            </p>
          </div>
        </div>

        <!-- Simple Counter -->
        <div class="experience-counter">
          <span class="counter-text"
            >{{ cvStore.personalInfo.experienceYears }} years experience</span
          >
          <div class="counter-dots">
            <div
              v-for="i in 5"
              :key="i"
              class="dot"
              :class="{ active: i <= cvStore.personalInfo.experienceYears }"
            ></div>
          </div>
        </div>
      </section>

      <!-- Contact Info -->
      <section class="contact-section">
        <h2 class="minimal-title">Contact</h2>
        <div class="contact-list">
          <div class="contact-item">
            <span class="label">Email:</span>
            <span class="value">{{ cvStore.personalInfo.email }}</span>
          </div>
          <div class="contact-item">
            <span class="label">Phone:</span>
            <span class="value">{{ cvStore.personalInfo.phone }}</span>
          </div>
          <div class="contact-item">
            <span class="label">Location:</span>
            <span class="value">{{ cvStore.personalInfo.location }}</span>
          </div>
        </div>
      </section>

      <!-- About -->
      <section class="about-section">
        <h2 class="minimal-title">About</h2>
        <p class="about-text">{{ cvStore.personalInfo.about }}</p>
      </section>

      <!-- Skills -->
      <section class="skills-section">
        <h2 class="minimal-title">Skills</h2>
        <div class="skills-list">
          <div v-for="skill in cvStore.skills" :key="skill.name" class="skill-item">
            <span class="skill-name">{{ skill.name }}</span>
            <div class="skill-dots">
              <div
                v-for="i in 5"
                :key="i"
                class="skill-dot"
                :class="{ filled: i <= skill.level / 20 }"
              ></div>
            </div>
          </div>
        </div>
      </section>

      <!-- Experience -->
      <section class="experience-section">
        <h2 class="minimal-title">Experience</h2>
        <div class="experience-list">
          <div v-for="exp in cvStore.experience" :key="exp.company" class="experience-item">
            <div class="exp-header">
              <h3 class="exp-position">{{ exp.position }}</h3>
              <span class="exp-duration">{{ exp.duration }}</span>
            </div>
            <h4 class="exp-company">{{ exp.company }}</h4>
            <p class="exp-description">{{ exp.description }}</p>
          </div>
        </div>
      </section>

      <!-- Organizations -->
      <section class="organizations-section">
        <h2 class="minimal-title">Organizations</h2>
        <div class="org-list">
          <div v-for="org in cvStore.organizations" :key="org.name" class="org-item">
            <h3 class="org-name">{{ org.name }}</h3>
            <p class="org-role">{{ org.position }}</p>
            <span class="org-duration">{{ org.duration }}</span>
          </div>
        </div>
      </section>

      <!-- Education -->
      <section class="education-section">
        <h2 class="minimal-title">Education</h2>
        <div class="edu-list">
          <div v-for="edu in cvStore.education" :key="edu.institution" class="edu-item">
            <h3 class="edu-degree">{{ edu.degree }}</h3>
            <p class="edu-school">{{ edu.institution }}</p>
            <span class="edu-year">{{ edu.year }}</span>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useProfessionalCVStore } from '@/stores/professionalCV'
import { useRouter } from 'vue-router'
import LanguageSwitcher from '@/components/LanguageSwitcherFixed.vue'
import Avatar from '@/components/Avatar.vue'

const cvStore = useProfessionalCVStore()
const router = useRouter()

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
    month: 'short',
    day: 'numeric',
  })
}

const goBack = () => {
  router.push('/')
}
</script>

<style scoped>
.minimal-cv2 {
  font-family: 'Courier New', monospace;
  background: #ffffff;
  color: #000000;
  line-height: 1.6;
  min-height: 100vh;
}

.minimal-header {
  position: fixed;
  top: 20px;
  left: 20px;
  right: 20px;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.minimal-btn {
  background: transparent;
  border: 2px solid #000000;
  color: #000000;
  padding: 8px 16px;
  cursor: pointer;
  font-family: inherit;
  font-size: 14px;
  transition: all 0.3s ease;
}

.minimal-btn:hover {
  background: #000000;
  color: #ffffff;
}

.minimal-main {
  max-width: 800px;
  margin: 0 auto;
  padding: 100px 40px 40px;
}

section {
  margin-bottom: 60px;
}

.minimal-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-bottom: 2px solid #000000;
  padding-bottom: 5px;
  display: inline-block;
}

.profile-section {
  margin-bottom: 80px;
}

.profile-header {
  display: flex;
  align-items: center;
  gap: 40px;
  margin-bottom: 40px;
}

.minimal-avatar {
  border: 2px solid #000000;
}

.profile-info {
  flex: 1;
}

.name {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 5px;
}

.title {
  font-size: 18px;
  margin-bottom: 10px;
  font-style: italic;
}

.age {
  font-size: 14px;
  color: #666666;
}

.experience-counter {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px;
  border: 2px solid #000000;
}

.counter-text {
  font-size: 16px;
  font-weight: bold;
}

.counter-dots {
  display: flex;
  gap: 5px;
}

.dot {
  width: 12px;
  height: 12px;
  border: 2px solid #000000;
  border-radius: 50%;
  background: transparent;
}

.dot.active {
  background: #000000;
}

.contact-list,
.skills-list,
.experience-list,
.org-list,
.edu-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.contact-item {
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  border-bottom: 1px solid #e0e0e0;
}

.contact-item .label {
  font-weight: bold;
}

.contact-item .value {
  text-align: right;
}

.about-text {
  font-size: 16px;
  line-height: 1.8;
  white-space: pre-line;
}

.skill-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #e0e0e0;
}

.skill-name {
  font-weight: bold;
}

.skill-dots {
  display: flex;
  gap: 3px;
}

.skill-dot {
  width: 8px;
  height: 8px;
  border: 1px solid #000000;
  border-radius: 50%;
  background: transparent;
}

.skill-dot.filled {
  background: #000000;
}

.experience-item,
.org-item,
.edu-item {
  padding: 20px 0;
  border-bottom: 1px solid #e0e0e0;
}

.exp-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.exp-position,
.org-name,
.edu-degree {
  font-weight: bold;
  font-size: 18px;
}

.exp-duration,
.org-duration,
.edu-year {
  font-style: italic;
  color: #666666;
}

.exp-company,
.org-role,
.edu-school {
  margin-bottom: 10px;
  color: #666666;
}

.exp-description {
  line-height: 1.6;
}

/* Responsive Design */
@media (max-width: 768px) {
  .minimal-header {
    flex-direction: column;
    gap: 10px;
    top: 10px;
    left: 10px;
    right: 10px;
  }

  .minimal-main {
    padding: 80px 20px 20px;
  }

  .profile-header {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }

  .experience-counter {
    flex-direction: column;
    text-align: center;
    gap: 10px;
  }

  .contact-item {
    flex-direction: column;
    gap: 5px;
    text-align: left;
  }

  .contact-item .value {
    text-align: left;
  }

  .skill-item {
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
  }

  .exp-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
  }
}

@media (max-width: 480px) {
  .minimal-main {
    padding: 60px 15px 15px;
  }

  .minimal-title {
    font-size: 20px;
  }

  .name {
    font-size: 24px;
  }

  .title {
    font-size: 16px;
  }

  .experience-counter {
    padding: 15px;
  }

  .dot {
    width: 10px;
    height: 10px;
  }

  .skill-dot {
    width: 6px;
    height: 6px;
  }
}
</style>
