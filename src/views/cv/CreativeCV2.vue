<template>
  <div class="creative-cv2">
    <!-- Navigation -->
    <nav class="navbar">
      <button @click="goBack" class="nav-btn">
        <svg class="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          ></path>
        </svg>
        <span>Home</span>
      </button>
      <LanguageSwitcher />
    </nav>

    <!-- Hero Section with Countdown -->
    <section class="hero">
      <div class="hero-bg"></div>
      <div class="hero-content">
        <div class="profile-card">
          <div class="profile-image">
            <Avatar
              :name="cvStore.personalInfo.name"
              :photo="cvStore.personalInfo.photo"
              size="lg"
            />
          </div>
          <div class="profile-text">
            <h1 class="hero-name">{{ cvStore.personalInfo.name }}</h1>
            <p class="hero-title">{{ cvStore.personalInfo.title }}</p>
            <div class="hero-meta">
              <span class="age-badge">Age: {{ calculateAge }}</span>
              <span class="location-badge">{{ cvStore.personalInfo.location }}</span>
            </div>
          </div>
        </div>

        <!-- Live Experience Counter -->
        <div class="live-counter">
          <h3>Live Experience Counter</h3>
          <div class="counter-display">
            <div class="counter-item">
              <span class="counter-value">{{ liveCounter.years }}</span>
              <span class="counter-label">YEARS</span>
            </div>
            <div class="counter-item">
              <span class="counter-value">{{ liveCounter.days }}</span>
              <span class="counter-label">DAYS</span>
            </div>
            <div class="counter-item">
              <span class="counter-value">{{ liveCounter.hours }}</span>
              <span class="counter-label">HOURS</span>
            </div>
            <div class="counter-item">
              <span class="counter-value">{{ liveCounter.minutes }}</span>
              <span class="counter-label">MINUTES</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="about">
      <div class="container">
        <h2 class="section-title creative-title">About Me</h2>
        <div class="about-content">
          <div class="about-text">
            <p>{{ cvStore.personalInfo.about }}</p>
            <div class="quick-facts">
              <div class="fact-item">
                <span class="fact-icon">🎂</span>
                <span>Born: {{ formatDate(cvStore.personalInfo.birthDate) }}</span>
              </div>
              <div class="fact-item">
                <span class="fact-icon">📧</span>
                <span>{{ cvStore.personalInfo.email }}</span>
              </div>
              <div class="fact-item">
                <span class="fact-icon">📱</span>
                <span>{{ cvStore.personalInfo.phone }}</span>
              </div>
            </div>
          </div>
          <div class="about-stats">
            <div class="stat-card">
              <div class="stat-number">{{ cvStore.stats.projectsCompleted }}</div>
              <div class="stat-label">Projects Completed</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">{{ cvStore.stats.clientsServed }}</div>
              <div class="stat-label">Happy Clients</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">{{ cvStore.stats.coffeeConsumed }}</div>
              <div class="stat-label">Coffee Cups</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="skills">
      <div class="container">
        <h2 class="section-title creative-title">Skills & Expertise</h2>
        <div class="skills-grid">
          <div v-for="skill in cvStore.skills" :key="skill.name" class="skill-card">
            <div class="skill-icon">{{ getSkillIcon(skill.name) }}</div>
            <h4 class="skill-name">{{ skill.name }}</h4>
            <div class="skill-level">
              <div class="level-bar">
                <div class="level-fill" :style="getSkillWidth(skill.level)"></div>
              </div>
              <span class="level-text">{{ skill.level }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Timeline -->
    <section class="timeline">
      <div class="container">
        <h2 class="section-title creative-title">Professional Journey</h2>
        <div class="timeline-container">
          <div v-for="(exp, index) in cvStore.experience" :key="exp.company" class="timeline-item">
            <div class="timeline-dot" :class="getTimelineColor(index)"></div>
            <div class="timeline-content">
              <div class="timeline-header">
                <h3 class="timeline-title">{{ exp.position }}</h3>
                <span class="timeline-company">{{ exp.company }}</span>
                <span class="timeline-duration">{{ exp.duration }}</span>
              </div>
              <p class="timeline-description">{{ exp.description }}</p>
              <div class="timeline-achievements">
                <span
                  v-for="achievement in exp.achievements"
                  :key="achievement"
                  class="achievement-tag"
                >
                  {{ achievement }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Organizations Section -->
    <section class="organizations">
      <div class="container">
        <h2 class="section-title creative-title">Community Involvement</h2>
        <div class="org-grid">
          <div v-for="org in cvStore.organizations" :key="org.name" class="org-card">
            <div class="org-header">
              <h3 class="org-name">{{ org.name }}</h3>
              <span class="org-role">{{ org.position }}</span>
            </div>
            <p class="org-description">{{ org.description }}</p>
            <div class="org-period">{{ org.duration }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Education Section -->
    <section class="education">
      <div class="container">
        <h2 class="section-title creative-title">Education Background</h2>
        <div class="edu-cards">
          <div v-for="edu in cvStore.education" :key="edu.institution" class="edu-card">
            <div class="edu-icon">🎓</div>
            <div class="edu-content">
              <h3 class="edu-degree">{{ edu.degree }}</h3>
              <h4 class="edu-institution">{{ edu.institution }}</h4>
              <p class="edu-details">{{ edu.details }}</p>
              <span class="edu-year">{{ edu.year }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted } from 'vue'
import { useProfessionalCVStore } from '@/stores/professionalCV'
import { useRouter } from 'vue-router'
import LanguageSwitcher from '@/components/LanguageSwitcherFixed.vue'
import Avatar from '@/components/Avatar.vue'

const cvStore = useProfessionalCVStore()
const router = useRouter()

let liveCounterInterval = null

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

const liveCounter = computed(() => {
  const careerStart = new Date('2016-06-01')
  const now = new Date()
  const diff = now - careerStart

  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365))
  const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))

  return { years, days, hours, minutes }
})

const getSkillWidth = (level) => {
  const widths = {
    Expert: '100%',
    Advanced: '85%',
    Intermediate: '70%',
    Beginner: '55%',
  }
  return `width: ${widths[level] || '70%'}`
}

const getSkillIcon = (skillName) => {
  const icons = {
    'JavaScript/TypeScript': '⚡',
    'React/Next.js': '⚛️',
    'Node.js/Express': '🟢',
    'Python/Django': '🐍',
    'AWS/Cloud Services': '☁️',
    'Docker/Kubernetes': '🐳',
    'GraphQL/REST APIs': '🔗',
    'MongoDB/PostgreSQL': '🗄️',
    'Git/CI/CD': '🔧',
    'Agile/Scrum': '📋',
  }
  return icons[skillName] || '💻'
}

const getTimelineColor = (index) => {
  const colors = ['blue', 'green', 'purple', 'orange', 'pink']
  return colors[index % colors.length]
}

const goBack = () => {
  router.push('/')
}

onMounted(() => {
  // Update live counter every minute
  liveCounterInterval = setInterval(() => {
    // Force reactivity update
  }, 60000)
})

onUnmounted(() => {
  if (liveCounterInterval) {
    clearInterval(liveCounterInterval)
  }
})
</script>

<style scoped>
.creative-cv2 {
  font-family: 'Inter', sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  color: #333;
}

.navbar {
  position: fixed;
  top: 20px;
  left: 20px;
  right: 20px;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 25px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}

.nav-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

.nav-icon {
  width: 20px;
  height: 20px;
}

.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 100px 20px 50px;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="%23ffffff" fill-opacity="0.1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,101.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>')
    no-repeat bottom;
  background-size: cover;
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.profile-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 40px;
  margin-bottom: 40px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  transform: translateY(0);
  transition: transform 0.3s ease;
}

.profile-card:hover {
  transform: translateY(-10px);
}

.profile-image {
  margin-bottom: 20px;
}

.hero-name {
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  margin-bottom: 10px;
}

.hero-title {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 20px;
  font-weight: 500;
}

.hero-meta {
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
}

.age-badge,
.location-badge {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
}

.live-counter {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.live-counter h3 {
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #333;
  font-weight: 700;
}

.counter-display {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
}

.counter-item {
  text-align: center;
  padding: 15px;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  border-radius: 15px;
  color: white;
}

.counter-value {
  display: block;
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 5px;
}

.counter-label {
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 1px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

section {
  padding: 80px 0;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 50px;
  position: relative;
}

.creative-title {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

.about-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
  align-items: start;
}

.about-text {
  background: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.about-text p {
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 20px;
}

.quick-facts {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.fact-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background: #f8f9fa;
  border-radius: 10px;
}

.fact-icon {
  font-size: 1.2rem;
}

.about-stats {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.stat-card {
  background: white;
  padding: 25px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  margin-bottom: 5px;
}

.stat-label {
  font-size: 0.9rem;
  color: #666;
  font-weight: 600;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
}

.skill-card {
  background: white;
  padding: 25px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-5px);
}

.skill-icon {
  font-size: 3rem;
  margin-bottom: 15px;
}

.skill-name {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 15px;
  color: #333;
}

.skill-level {
  margin-top: 10px;
}

.level-bar {
  height: 8px;
  background: #f0f0f0;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 8px;
}

.level-fill {
  height: 100%;
  background: linear-gradient(90deg, #f093fb 0%, #f5576c 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  border-radius: 4px;
  transition: width 1s ease;
}

.level-text {
  font-size: 0.8rem;
  color: #666;
  font-weight: 600;
}

.timeline-container {
  position: relative;
  padding: 20px 0;
}

.timeline-container::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  transform: translateX(-50%);
}

.timeline-item {
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  position: relative;
}

.timeline-item:nth-child(odd) {
  flex-direction: row-reverse;
}

.timeline-dot {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}

.timeline-dot.blue {
  background: #3498db;
}
.timeline-dot.green {
  background: #27ae60;
}
.timeline-dot.purple {
  background: #9b59b6;
}
.timeline-dot.orange {
  background: #e67e22;
}
.timeline-dot.pink {
  background: #e91e63;
}

.timeline-content {
  background: white;
  padding: 25px;
  border-radius: 15px;
  width: calc(50% - 40px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.timeline-header {
  margin-bottom: 15px;
}

.timeline-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 5px;
}

.timeline-company {
  color: #f093fb;
  font-weight: 600;
  margin-bottom: 5px;
}

.timeline-duration {
  background: #f093fb;
  color: white;
  padding: 3px 10px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
}

.timeline-description {
  line-height: 1.6;
  margin-bottom: 15px;
}

.timeline-achievements {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.achievement-tag {
  background: #f8f9fa;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 0.8rem;
  color: #666;
}

.org-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
}

.org-card {
  background: white;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.org-header {
  margin-bottom: 15px;
}

.org-name {
  font-size: 1.2rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 5px;
}

.org-role {
  color: #f093fb;
  font-weight: 600;
}

.org-description {
  line-height: 1.6;
  margin-bottom: 15px;
}

.org-period {
  background: #f093fb;
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  font-weight: 600;
  display: inline-block;
}

.edu-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
}

.edu-card {
  background: white;
  padding: 25px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  gap: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.edu-icon {
  font-size: 3rem;
}

.edu-degree {
  font-size: 1.2rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 5px;
}

.edu-institution {
  color: #f093fb;
  font-weight: 600;
  margin-bottom: 10px;
}

.edu-details {
  line-height: 1.6;
  margin-bottom: 10px;
}

.edu-year {
  background: #f093fb;
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  font-weight: 600;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero-content {
    padding: 0 20px;
  }

  .about-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .counter-display {
    grid-template-columns: repeat(2, 1fr);
  }

  .timeline-item:nth-child(odd) {
    flex-direction: row;
  }

  .timeline-content {
    width: calc(100% - 60px);
    margin-left: 60px;
  }

  .timeline-container::before {
    left: 30px;
  }

  .timeline-dot {
    left: 30px;
  }
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    gap: 10px;
    top: 10px;
    left: 10px;
    right: 10px;
  }

  .hero {
    padding: 80px 15px 40px;
  }

  .profile-card {
    padding: 25px;
  }

  .hero-name {
    font-size: 2rem;
  }

  .counter-display {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  .counter-value {
    font-size: 1.5rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .timeline-content {
    width: calc(100% - 40px);
    margin-left: 40px;
    padding: 20px;
  }

  .timeline-container::before {
    left: 20px;
  }

  .timeline-dot {
    left: 20px;
    width: 15px;
    height: 15px;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 60px 10px 30px;
  }

  .profile-card {
    padding: 20px;
  }

  .hero-name {
    font-size: 1.5rem;
  }

  .hero-title {
    font-size: 1rem;
  }

  .live-counter {
    padding: 20px;
  }

  .counter-display {
    grid-template-columns: 1fr;
    gap: 8px;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .timeline-content {
    margin-left: 30px;
    padding: 15px;
  }

  .timeline-container::before {
    left: 15px;
  }

  .timeline-dot {
    left: 15px;
    width: 12px;
    height: 12px;
  }

  .edu-card {
    flex-direction: column;
    text-align: center;
    gap: 15px;
  }
}
</style>
