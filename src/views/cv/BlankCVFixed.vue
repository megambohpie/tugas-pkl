<template>
  <div class="blank-cv">
    <!-- Navigation -->
    <nav class="blank-nav">
      <button @click="goBack" class="back-btn">
        <span class="btn-icon">←</span>
        <span>HOME</span>
      </button>
      <LanguageSwitcher />
    </nav>

    <!-- Main Content Area -->
    <main class="blank-main">
      <div class="blank-container">
        <div class="blank-header">
          <h1 class="blank-title">Blank CV Template</h1>
          <p class="blank-subtitle">Area untuk belajar dan bereksperimen dengan CV</p>
          <p class="demo-text">Demo data: {{ cvStore.personalInfo?.name || 'Loading...' }}</p>
        </div>

        <div class="blank-content">
          <div class="blank-section">
            <h2>📝 Area Pembelajaran</h2>
            <p>Template kosong ini dirancang untuk:</p>
            <ul class="feature-list">
              <li>✨ Mempelajari struktur dasar CV</li>
              <li>🎨 Bereksperimen dengan layout</li>
              <li>💡 Mencoba ide desain baru</li>
              <li>🔧 Testing komponen Vue</li>
              <li>📱 Responsive design practice</li>
            </ul>
          </div>

          <div class="blank-section">
            <h2>🛠️ Fitur Tersedia</h2>
            <div class="feature-grid">
              <div class="feature-card">
                <h3>Navigation</h3>
                <p>Tombol HOME dan Language Switcher</p>
              </div>
              <div class="feature-card">
                <h3>Store Integration</h3>
                <p>Pinia store untuk data CV</p>
              </div>
              <div class="feature-card">
                <h3>Responsive</h3>
                <p>Mobile-first design approach</p>
              </div>
              <div class="feature-card">
                <h3>CSS Styling</h3>
                <p>Pure CSS atau Tailwind</p>
              </div>
            </div>
          </div>

          <div class="blank-section">
            <h2>🎯 Cara Menggunakan</h2>
            <div class="steps-container">
              <div class="step">
                <span class="step-number">1</span>
                <p>Edit file <code>src/views/cv/MyNewCV.vue</code></p>
              </div>
              <div class="step">
                <span class="step-number">2</span>
                <p>Tambahkan komponen yang diinginkan</p>
              </div>
              <div class="step">
                <span class="step-number">3</span>
                <p>Styling dengan CSS atau Tailwind</p>
              </div>
              <div class="step">
                <span class="step-number">4</span>
                <p>Test responsive design</p>
              </div>
            </div>
          </div>

          <div class="blank-section tutorial-section">
            <h2>🛠️ Tutorial: Membuat CV Baru</h2>
            <div class="tutorial-content">
              <!-- Step 1: Buat File CV -->
              <div class="tutorial-step">
                <h3>📁 Step 1: Buat File CV Baru</h3>
                <div class="code-block">
                  <p><strong>Lokasi:</strong> <code>src/views/cv/</code></p>
                  <p><strong>Contoh nama file:</strong> <code>MyNewCV.vue</code></p>
                  <div class="code-example">
                    <h4>Template Vue Basic:</h4>
                    <textarea readonly class="code-textarea">
&lt;template&gt;
  &lt;div class="my-cv"&gt;
    &lt;nav class="cv-nav"&gt;
      &lt;button @click="goBack"&gt;← HOME&lt;/button&gt;
      &lt;LanguageSwitcher /&gt;
    &lt;/nav&gt;
    &lt;main class="cv-main"&gt;
      &lt;h1&gt;ewewe&lt;/h1&gt;
      &lt;p&gt;wewewe&lt;/p&gt;
    &lt;/main&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { useRouter } from 'vue-router'
import { useCVStore } from '@/stores/cv'
import LanguageSwitcher from '@/components/LanguageSwitcherFixed.vue'

const router = useRouter()
const cvStore = useCVStore()

const goBack = () =&gt; router.push('/')
&lt;/script&gt;

&lt;style scoped&gt;
.my-cv { min-height: 100vh; background: #f5f5f5; }
.cv-nav { position: fixed; top: 20px; left: 20px; right: 20px; z-index: 1000; }
.back-btn { padding: 10px 20px; background: #007bff; color: white; border: none; border-radius: 5px; }
.cv-main { padding: 100px 20px 40px; max-width: 1200px; margin: 0 auto; }
&lt;/style&gt;</textarea
                    >
                  </div>
                </div>
              </div>

              <!-- Step 2: Data Store -->
              <div class="tutorial-step">
                <h3>🗄️ Step 2: Data Store</h3>
                <div class="code-block">
                  <p><strong>Gunakan store yang ada:</strong></p>
                  <div class="code-example">
                    <textarea readonly class="code-textarea">
import { useCVStore } from '@/stores/cv'
// atau
import { useProfessionalCVStore } from '@/stores/professionalCV'

const cvStore = useCVStore()
// atau
const cvStore = useProfessionalCVStore()</textarea
                    >
                  </div>
                  <p><strong>Buat store baru (opsional):</strong></p>
                  <p><strong>Lokasi:</strong> <code>src/stores/myNewCVStore.js</code></p>
                </div>
              </div>

              <!-- Step 3: Routing -->
              <div class="tutorial-step">
                <h3>🛣️ Step 3: Tambahkan Routing</h3>
                <div class="code-block">
                  <p><strong>Lokasi:</strong> <code>src/router/index.js</code></p>
                  <div class="code-example">
                    <textarea readonly class="code-textarea">
// Tambahkan route baru di dalam array routes
{
  path: '/cv/mynewcv',
  name: 'cv-mynewcv',
  component: () =&gt; import('../views/cv/MyNewCV.vue'),
},</textarea
                    >
                  </div>
                </div>
              </div>

              <!-- Step 4: HomeView -->
              <div class="tutorial-step">
                <h3>🏠 Step 4: Tambahkan ke HomeView</h3>
                <div class="code-block">
                  <p><strong>Lokasi:</strong> <code>src/views/HomeView.vue</code></p>
                  <div class="code-example">
                    <textarea readonly class="code-textarea">
// Tambahkan ke array cvModels
{
  name: 'mynewcv',
  route: '/cv/mynewcv',
  description: 'My New CV Template',
}

// Tambahkan ke getModelGradient
mynewcv: 'from-green-400 to-teal-600',

// Tambahkan ke getModelIcon  
mynewcv: '🚀',</textarea
                    >
                  </div>
                </div>
              </div>

              <!-- Step 5: Testing -->
              <div class="tutorial-step">
                <h3>🧪 Step 5: Testing</h3>
                <div class="code-block">
                  <p><strong>Start server:</strong> <code>npm run dev</code></p>
                  <p><strong>Akses:</strong> <code>http://localhost:5173/cv/mynewcv</code></p>
                  <p><strong>Checklist:</strong></p>
                  <ul>
                    <li>✅ Navigation HOME berfungsi</li>
                    <li>✅ Language switcher berfungsi</li>
                    <li>✅ Data dari store muncul</li>
                    <li>✅ Responsive di mobile</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="blank-section">
            <h2>📚 Resources</h2>
            <div class="resource-links">
              <a href="#" class="resource-link">Vue 3 Documentation</a>
              <a href="#" class="resource-link">Pinia Store Guide</a>
              <a href="#" class="resource-link">CSS Grid Tutorial</a>
              <a href="#" class="resource-link">Responsive Design</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useCVStore } from '@/stores/cv'
import LanguageSwitcher from '@/components/LanguageSwitcherFixed.vue'

const router = useRouter()
const cvStore = useCVStore()

const goBack = () => {
  router.push('/')
}
</script>

<style scoped>
.blank-cv {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.blank-nav {
  position: fixed;
  top: 20px;
  left: 20px;
  right: 20px;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.back-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.back-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

.btn-icon {
  font-size: 16px;
}

.blank-main {
  padding: 120px 20px 40px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.blank-container {
  max-width: 900px;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
}

.blank-header {
  text-align: center;
  margin-bottom: 40px;
}

.blank-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 10px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

.blank-subtitle {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 20px;
}

.demo-text {
  font-size: 0.9rem;
  color: #888;
  font-style: italic;
  margin-top: 10px;
}

.blank-content {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.blank-section {
  background: rgba(255, 255, 255, 0.8);
  padding: 25px;
  border-radius: 15px;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.blank-section h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 15px 0;
}

.feature-list li {
  padding: 8px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 1rem;
  color: #555;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.feature-card {
  background: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  text-align: center;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.feature-card h3 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
}

.feature-card p {
  font-size: 0.9rem;
  color: #666;
  line-height: 1.5;
}

.steps-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.step {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  background: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.step-number {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;
}

.step p {
  font-size: 0.9rem;
  color: #555;
  line-height: 1.5;
  margin: 0;
}

.resource-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-top: 20px;
}

.resource-link {
  display: block;
  background: rgba(255, 255, 255, 0.9);
  padding: 15px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: #333;
  font-weight: 500;
  text-align: center;
  transition: all 0.3s ease;
}

.resource-link:hover {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

code {
  background: rgba(0, 0, 0, 0.1);
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  font-size: 0.9em;
}

.tutorial-section {
  background: rgba(255, 255, 255, 0.9);
  border: 2px solid rgba(102, 126, 234, 0.3);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.1);
}

.tutorial-content {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.tutorial-step {
  background: rgba(255, 255, 255, 0.95);
  padding: 25px;
  border-radius: 15px;
  border: 1px solid rgba(102, 126, 234, 0.2);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.tutorial-step h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #667eea;
}

.code-block {
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 10px;
  padding: 20px;
  margin: 15px 0;
}

.code-block p {
  margin: 10px 0;
  color: #495057;
  font-size: 0.95rem;
}

.code-block ul {
  margin: 10px 0;
  padding-left: 20px;
}

.code-block li {
  margin: 5px 0;
  color: #495057;
}

.code-block h4 {
  color: #333;
  font-size: 1.1rem;
  margin: 15px 0 10px 0;
}

.code-example {
  margin: 15px 0;
}

.code-textarea {
  width: 100%;
  min-height: 200px;
  background: #ffffff;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  padding: 15px;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  line-height: 1.4;
  color: #212529;
  resize: vertical;
}

/* Responsive Design */
@media (max-width: 768px) {
  .blank-nav {
    flex-direction: column;
    gap: 10px;
    top: 10px;
    left: 10px;
    right: 10px;
  }

  .blank-main {
    padding: 100px 15px 30px;
  }

  .blank-container {
    padding: 25px;
  }

  .blank-title {
    font-size: 2rem;
  }

  .feature-grid,
  .steps-container,
  .resource-links {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .blank-nav {
    padding: 8px;
  }

  .blank-main {
    padding: 80px 10px 20px;
  }

  .blank-container {
    padding: 20px;
  }

  .blank-title {
    font-size: 1.8rem;
  }

  .blank-subtitle {
    font-size: 1rem;
  }

  .blank-section {
    padding: 20px;
  }

  .step {
    flex-direction: column;
    text-align: center;
    gap: 10px;
  }
}
</style>
