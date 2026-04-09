<template>
  <div class="tech-cv">
    <nav class="tech-nav">
      <button @click="goBack" class="tech-btn">
        <span class="btn-icon">←</span>
        <span>HOME 2</span>
      </button>
      <LanguageSwitcher />
    </nav>

    <header class="terminal-header">
      <div class="terminal-window">
        <div class="terminal-bar">
          <div class="terminal-dots">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
          </div>
          <div class="terminal-title">profile.sh</div>
        </div>
        <div class="terminal-content">
          <div class="terminal-line">
            <span class="prompt">$</span>
            <span class="command">whoami</span>
          </div>
          <div class="terminal-output">
            <span class="output-name">{{ displayName }}</span>
            <span class="output-title">{{ displayTitle }}</span>
            <span class="output-age">Age: {{ displayAge }} | Born: {{ displayBirthDate }}</span>
          </div>
          <div class="terminal-line">
            <span class="prompt">$</span>
            <span class="command">uptime --human</span>
          </div>
          <div class="terminal-output">
            <span class="uptime">{{ uptime }}</span>
          </div>
        </div>
      </div>
    </header>

    <main class="tech-main">
      <section class="skills-matrix">
        <h2 class="tech-title">skills_matrix.json</h2>
        <div class="matrix-grid">
          <div v-for="skill in cvStore.skills" :key="skill.name" class="matrix-item">
            <div class="matrix-header">
              <span class="matrix-name">{{ skill.name }}</span>
              <span class="matrix-level">{{ skill.level }}%</span>
            </div>
            <div class="matrix-bar">
              <div class="matrix-fill" :style="getSkillWidth(skill.level)"></div>
            </div>
          </div>
        </div>
      </section>

      <section class="experience-log">
        <h2 class="tech-title">experience.log</h2>
        <div class="log-container">
          <div v-for="exp in cvStore.experience" :key="exp.company" class="log-entry">
            <div class="log-timestamp">{{ exp.duration }}</div>
            <div class="log-content">
              <span class="log-type">[INFO]</span>
              <span class="log-message">Started {{ exp.position }} at {{ exp.company }}</span>
            </div>
            <div class="log-details">{{ exp.description }}</div>
          </div>
        </div>
      </section>

      <section class="live-stats">
        <h2 class="tech-title">live_stats()</h2>
        <div class="stats-display">
          <div class="stat-item">
            <span class="stat-label">CODING_TIME:</span>
            <span class="stat-value">{{ liveStats.codingTime }}h</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">LINES_CODED:</span>
            <span class="stat-value">{{ liveStats.linesCoded }}</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">STATUS:</span>
            <span class="stat-value">{{
              cvStore.personalInfo?.name ? 'LOADED' : 'LOADING...'
            }}</span>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted } from 'vue'
import { useProfessionalCVStore } from '@/stores/professionalCV'
import { useRouter } from 'vue-router'
import LanguageSwitcher from '@/components/LanguageSwitcherFixed.vue'

const cvStore = useProfessionalCVStore()
const router = useRouter()

let statsInterval = null

const displayName = computed(() => cvStore.personalInfo?.name || 'Loading...')
const displayTitle = computed(() => cvStore.personalInfo?.title || 'Loading...')
const displayBirthDate = computed(() => {
  if (!cvStore.personalInfo?.birthDate) return 'Unknown'
  const date = new Date(cvStore.personalInfo.birthDate)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
})

const displayAge = computed(() => {
  if (!cvStore.personalInfo?.birthDate) return 'Loading...'
  const birthDate = new Date(cvStore.personalInfo.birthDate)
  const today = new Date()
  const age = today.getFullYear() - birthDate.getFullYear()
  const monthDiff = today.getMonth() - birthDate.getMonth()

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    return age - 1
  }
  return age
})

const uptime = computed(() => {
  const careerStart = new Date('2016-06-01')
  const now = new Date()
  const diff = now - careerStart

  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365))
  const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30))
  const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24))

  return `${years}y ${months}m ${days}d`
})

const liveStats = computed(() => {
  const careerStart = new Date('2016-06-01')
  const now = new Date()
  const days = Math.floor((now - careerStart) / (1000 * 60 * 60 * 24))

  return {
    codingTime: Math.floor(days * 6),
    linesCoded: Math.floor(days * 150),
    coffeeCups: Math.floor(days * 3),
    bugsFixed: Math.floor(days * 2),
  }
})

const getSkillWidth = (level) => {
  const skillLevel = level || 0
  return `width: ${skillLevel}%`
}

const goBack = () => {
  router.push('/')
}

onMounted(() => {
  statsInterval = setInterval(() => {
    // Force reactivity update
  }, 3600000)
})

onUnmounted(() => {
  if (statsInterval) {
    clearInterval(statsInterval)
  }
})
</script>

<style scoped>
.tech-cv {
  font-family: 'Fira Code', 'Courier New', monospace;
  background: #0d1117;
  color: #c9d1d9;
  min-height: 100vh;
  line-height: 1.6;
  padding: 20px 0;
}

.tech-nav {
  position: fixed;
  top: 10px;
  left: 10px;
  right: 10px;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  background: rgba(13, 17, 23, 0.8);
  border-radius: 8px;
  backdrop-filter: blur(10px);
}

.tech-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #238636;
  color: #50fa7b;
  border: 1px solid #50fa7b;
  padding: 8px 16px;
  cursor: pointer;
  font-family: inherit;
  font-size: 12px;
  font-weight: bold;
  transition: all 0.3s ease;
}

.tech-btn:hover {
  background: #50fa7b;
  color: #0d1117;
}

.btn-icon {
  font-size: 16px;
}

.terminal-header {
  padding: 100px 20px 40px;
}

.terminal-window {
  background: #1e2124;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.terminal-bar {
  background: #282a36;
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.terminal-dots {
  display: flex;
  gap: 6px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.dot.red {
  background: #ff5555;
}
.dot.yellow {
  background: #ffb86c;
}
.dot.green {
  background: #50fa7b;
}

.terminal-title {
  color: #f8f8f2;
  font-size: 12px;
  font-weight: bold;
}

.terminal-content {
  padding: 20px;
  font-family: inherit;
}

.terminal-line {
  margin-bottom: 10px;
}

.prompt {
  color: #50fa7b;
  margin-right: 8px;
}

.command {
  color: #f8f8f2;
}

.terminal-output {
  margin-bottom: 15px;
  padding-left: 20px;
}

.output-name {
  display: block;
  color: #8be9fd;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
}

.output-title {
  display: block;
  color: #bd93f9;
  font-style: italic;
  margin-bottom: 5px;
}

.output-age {
  color: #6272a4;
  font-size: 12px;
}

.uptime {
  color: #50fa7b;
  font-weight: bold;
}

.tech-main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 20px 40px;
}

section {
  margin-bottom: 60px;
}

.tech-title {
  color: #50fa7b;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
  padding-bottom: 10px;
  border-bottom: 2px solid #50fa7b;
  display: inline-block;
}

.skills-matrix {
  background: #1e2124;
  border: 1px solid #30363d;
  border-radius: 8px;
  padding: 30px;
}

.matrix-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.matrix-item {
  background: #282a36;
  padding: 20px;
  border-radius: 6px;
  border: 1px solid #30363d;
}

.matrix-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.matrix-name {
  color: #f8f8f2;
  font-weight: bold;
}

.matrix-level {
  color: #50fa7b;
  background: #238636;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
}

.matrix-bar {
  height: 6px;
  background: #30363d;
  border-radius: 3px;
  overflow: hidden;
}

.matrix-fill {
  height: 100%;
  background: linear-gradient(90deg, #50fa7b 0%, #238636 100%);
  border-radius: 3px;
  transition: width 1s ease;
}

.experience-log {
  background: #1e2124;
  border: 1px solid #30363d;
  border-radius: 8px;
  padding: 30px;
}

.log-container {
  font-family: inherit;
}

.log-entry {
  margin-bottom: 25px;
  padding-bottom: 20px;
  border-bottom: 1px solid #30363d;
}

.log-timestamp {
  color: #6272a4;
  font-size: 12px;
  margin-bottom: 10px;
}

.log-content {
  margin-bottom: 10px;
}

.log-type {
  color: #f1fa8c;
  margin-right: 8px;
}

.log-message {
  color: #f8f8f2;
}

.log-details {
  color: #bd93f9;
  font-style: italic;
  margin-bottom: 15px;
  padding-left: 20px;
}

.live-stats {
  background: #1e2124;
  border: 1px solid #30363d;
  border-radius: 8px;
  padding: 30px;
}

.stats-display {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.stat-item {
  background: #282a36;
  padding: 20px;
  border-radius: 6px;
  border: 1px solid #30363d;
  text-align: center;
}

.stat-label {
  display: block;
  color: #6272a4;
  font-size: 12px;
  margin-bottom: 10px;
}

.stat-value {
  color: #50fa7b;
  font-size: 24px;
  font-weight: bold;
}

@media (max-width: 768px) {
  .tech-nav {
    flex-direction: column;
    gap: 10px;
    top: 10px;
    left: 10px;
    right: 10px;
  }

  .terminal-header {
    padding: 80px 15px 30px;
  }

  .tech-main {
    padding: 80px 15px 30px;
  }

  .tech-title {
    font-size: 20px;
  }

  .matrix-grid,
  .stats-display {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .terminal-header {
    padding: 60px 10px 20px;
  }

  .tech-main {
    padding: 60px 10px 20px;
  }

  .tech-title {
    font-size: 18px;
  }

  .matrix-item,
  .stat-item {
    padding: 15px;
  }
}
</style>
