<template>
  <div class="landing-cv">
    <!-- Back Button and Language Switcher -->
    <div class="top-bar">
      <button @click="goBack" class="back-button">
        <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
        </svg>
        <span>{{ $t('nav.home') }}</span>
      </button>
      <LanguageSwitcher />
    </div>

    <!-- Hero Section -->
    <section class="hero-section">
      <!-- Animated Background -->
      <div class="animated-bg">
        <div class="bubble bubble-1"></div>
        <div class="bubble bubble-2"></div>
        <div class="bubble bubble-3"></div>
      </div>

      <div class="hero-content">
        <!-- Profile Avatar -->
        <div class="avatar-container">
          <div class="avatar-glow"></div>
          <Avatar 
            :name="cvStore.personalInfo.name"
            :photo="cvStore.personalInfo.photo"
            size="lg"
            class="avatar-main"
          />
        </div>

        <!-- Name and Title -->
        <div class="hero-text">
          <h1 class="hero-name">{{ cvStore.personalInfo.name }}</h1>
          <p class="hero-title">Full Stack Developer & UI/UX Designer</p>
        </div>

        <!-- Contact Info -->
        <div class="contact-info">
          <div class="contact-item">
            <svg class="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            <span>{{ cvStore.personalInfo.email }}</span>
          </div>
          <div class="contact-item">
            <svg class="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
            <span>{{ cvStore.personalInfo.phone }}</span>
          </div>
          <div class="contact-item">
            <svg class="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            <span>{{ cvStore.personalInfo.address }}</span>
          </div>
        </div>

        <!-- CTA Buttons -->
        <div class="cta-buttons">
          <button class="cta-button primary">{{ $t('cv.download_cv') }}</button>
          <button class="cta-button secondary">{{ $t('cv.contact_me') }}</button>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="scroll-indicator">
        <svg class="scroll-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>

    <!-- About Section -->
    <section class="about-section">
      <div class="container">
        <h2 class="section-title">{{ $t('cv.about') }}</h2>
        <div class="about-content">
          <div class="about-text">
            <p class="about-description">{{ $t('cv.about_description') }}</p>
            <div class="stats-grid">
              <div class="stat-card">
                <h3 class="stat-number">5+</h3>
                <p class="stat-label">{{ $t('cv.years_experience') }}</p>
              </div>
              <div class="stat-card">
                <h3 class="stat-number">50+</h3>
                <p class="stat-label">{{ $t('cv.projects_completed') }}</p>
              </div>
            </div>
          </div>
          <div class="about-visual">
            <div class="visual-card">
              <div class="visual-glow"></div>
              <div class="skills-preview">
                <div v-for="skill in cvStore.skills.slice(0, 4)" :key="skill.name" class="skill-preview-item">
                  <div class="skill-icon">💻</div>
                  <p class="skill-name">{{ skill.name }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section class="experience-section">
      <div class="container">
        <h2 class="section-title">{{ $t('cv.experience') }}</h2>
        <div class="experience-timeline">
          <div v-for="exp in cvStore.experience" :key="exp.company" class="experience-card">
            <div class="experience-date">{{ exp.duration }}</div>
            <div class="experience-content">
              <h3 class="experience-position">{{ exp.position }}</h3>
              <p class="experience-company">{{ exp.company }}</p>
              <p class="experience-description">{{ exp.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="skills-section">
      <div class="container">
        <h2 class="section-title">{{ $t('cv.skills') }}</h2>
        <div class="skills-grid">
          <div v-for="skill in cvStore.skills" :key="skill.name" class="skill-card">
            <div class="skill-header">
              <h3 class="skill-name">{{ skill.name }}</h3>
              <span class="skill-level">{{ skill.level }}</span>
            </div>
            <div class="skill-progress">
              <div class="progress-bar">
                <div class="progress-fill" :style="getSkillWidth(skill.level)"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="contact-section">
      <div class="container">
        <h2 class="section-title">{{ $t('cv.get_in_touch') }}</h2>
        <p class="contact-subtitle">{{ $t('cv.lets_work_together') }}</p>
        <div class="contact-buttons">
          <button class="contact-button primary">{{ $t('cv.send_message') }}</button>
          <button class="contact-button secondary">{{ $t('cv.download_cv') }}</button>
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
    'Beginner': '25%',
    'Intermediate': '60%',
    'Advanced': '85%',
    'Expert': '100%'
  }
  return `width: ${widths[level] || '50%'}`
}
</script>

<style scoped>
/* ===== Base Styles ===== */
.landing-cv {
  min-height: 100vh;
  background: linear-gradient(135deg, #1e293b 0%, #581c87 50%, #1e293b 100%);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: #ffffff;
  overflow-x: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* ===== Top Bar ===== */
.top-bar {
  position: fixed;
  top: 20px;
  left: 20px;
  right: 20px;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.back-button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.back-button:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.icon {
  width: 20px;
  height: 20px;
}

/* ===== Hero Section ===== */
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.animated-bg {
  position: absolute;
  inset: 0;
}

.bubble {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.2;
  animation: pulse 4s ease-in-out infinite;
}

.bubble-1 {
  top: 80px;
  left: 80px;
  width: 288px;
  height: 288px;
  background: #8b5cf6;
}

.bubble-2 {
  top: 160px;
  right: 80px;
  width: 288px;
  height: 288px;
  background: #eab308;
  animation-delay: 2s;
}

.bubble-3 {
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  width: 288px;
  height: 288px;
  background: #ec4899;
  animation-delay: 4s;
}

@keyframes pulse {
  0%, 100% { opacity: 0.2; }
  50% { opacity: 0.3; }
}

.hero-content {
  position: relative;
  z-index: 10;
  text-align: center;
  padding: 0 20px;
  max-width: 800px;
}

.avatar-container {
  margin-bottom: 32px;
  display: flex;
  justify-content: center;
  position: relative;
}

.avatar-glow {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #9333ea, #ec4899);
  border-radius: 50%;
  filter: blur(20px);
  opacity: 0.5;
  transform: scale(1.1);
}

.avatar-main {
  position: relative;
  border: 4px solid rgba(255, 255, 255, 0.2);
}

.hero-text {
  margin-bottom: 32px;
}

.hero-name {
  font-size: clamp(2.5rem, 7vw, 4.5rem);
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 16px;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.hero-title {
  font-size: clamp(1.25rem, 3vw, 1.5rem);
  color: #e9d5ff;
  font-weight: 300;
  margin-bottom: 0;
}

.contact-info {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  margin-bottom: 48px;
  color: rgba(255, 255, 255, 0.8);
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.contact-icon {
  width: 20px;
  height: 20px;
}

.cta-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
}

.cta-button {
  padding: 16px 32px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.cta-button.primary {
  background: linear-gradient(135deg, #9333ea, #ec4899);
  color: #ffffff;
}

.cta-button.primary:hover {
  background: linear-gradient(135deg, #7c3aed, #db2777);
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(147, 51, 234, 0.3);
}

.cta-button.secondary {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.cta-button.secondary:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.scroll-indicator {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 2s infinite;
}

.scroll-icon {
  width: 24px;
  height: 24px;
  color: rgba(255, 255, 255, 0.6);
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
}

/* ===== Section Styles ===== */
.about-section,
.experience-section,
.skills-section {
  padding: 80px 0;
}

.experience-section {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
}

.contact-section {
  background: linear-gradient(135deg, #581c87, #9333ea);
  padding: 80px 0;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
  margin-bottom: 48px;
}

/* ===== About Section ===== */
.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
}

.about-description {
  font-size: 1.125rem;
  line-height: 1.7;
  color: #d1d5db;
  margin-bottom: 32px;
}

.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.stat-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 24px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: #a78bfa;
  margin-bottom: 8px;
}

.stat-label {
  color: #d1d5db;
  font-size: 0.875rem;
}

.about-visual {
  display: flex;
  justify-content: center;
}

.visual-card {
  position: relative;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 32px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.visual-glow {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #9333ea, #ec4899);
  border-radius: 16px;
  filter: blur(20px);
  opacity: 0.3;
  transform: scale(1.1);
}

.skills-preview {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.skill-preview-item {
  text-align: center;
}

.skill-icon {
  font-size: 2rem;
  margin-bottom: 8px;
}

.skill-name {
  color: #ffffff;
  font-weight: 500;
}

/* ===== Experience Section ===== */
.experience-timeline {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.experience-card {
  position: relative;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 32px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.experience-card:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-4px);
}

.experience-date {
  position: absolute;
  top: 16px;
  left: 16px;
  color: #a78bfa;
  font-size: 0.875rem;
  font-weight: 500;
}

.experience-content {
  margin-left: 96px;
}

.experience-position {
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 8px;
}

.experience-company {
  color: #c084fc;
  font-weight: 500;
  margin-bottom: 16px;
}

.experience-description {
  color: #d1d5db;
  line-height: 1.6;
}

/* ===== Skills Section ===== */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}

.skill-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 24px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.skill-card:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-4px);
}

.skill-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.skill-name {
  font-size: 1.25rem;
  font-weight: 700;
  color: #ffffff;
}

.skill-level {
  padding: 4px 12px;
  background: #9333ea;
  color: #ffffff;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
}

.skill-progress {
  width: 100%;
}

.progress-bar {
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(135deg, #9333ea, #ec4899);
  border-radius: 4px;
  transition: width 1s ease;
}

/* ===== Contact Section ===== */
.contact-subtitle {
  font-size: 1.25rem;
  color: #e9d5ff;
  text-align: center;
  margin-bottom: 48px;
  line-height: 1.6;
}

.contact-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
}

.contact-button {
  padding: 16px 32px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.contact-button.primary {
  background: #ffffff;
  color: #7c3aed;
}

.contact-button.primary:hover {
  background: #f3f4f6;
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(255, 255, 255, 0.2);
}

.contact-button.secondary {
  background: transparent;
  color: #ffffff;
  border: 2px solid #ffffff;
}

.contact-button.secondary:hover {
  background: #ffffff;
  color: #7c3aed;
  transform: translateY(-2px);
}

/* ===== Responsive Design ===== */
@media (max-width: 768px) {
  .container {
    padding: 0 16px;
  }
  
  .top-bar {
    flex-direction: column;
    gap: 12px;
    top: 16px;
    left: 16px;
    right: 16px;
  }
  
  .about-content {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
  }
  
  .skills-preview {
    grid-template-columns: 1fr;
  }
  
  .experience-content {
    margin-left: 0;
    margin-top: 60px;
  }
  
  .experience-date {
    position: static;
    margin-bottom: 12px;
  }
  
  .skills-grid {
    grid-template-columns: 1fr;
  }
  
  .hero-name {
    font-size: 2.5rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .contact-info {
    flex-direction: column;
    gap: 16px;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .contact-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .cta-button,
  .contact-button {
    width: 100%;
    max-width: 280px;
  }
}
</style>
