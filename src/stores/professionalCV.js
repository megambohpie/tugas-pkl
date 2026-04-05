import { defineStore } from 'pinia'

export const useProfessionalCVStore = defineStore('professionalCV', {
  state: () => ({
    personalInfo: {
      name: 'Sarah Anderson',
      title: 'Senior Full Stack Developer',
      email: 'sarah.anderson@techcorp.com',
      phone: '+1 (555) 123-4567',
      address: 'San Francisco, CA, USA',
      website: 'www.sarahanderson.dev',
      birthDate: '1992-06-15',
      photo: null,
      summary:
        'Experienced Full Stack Developer with 8+ years of expertise in building scalable web applications. Specialized in React, Node.js, and cloud architecture. Passionate about mentoring junior developers and implementing best practices in software development.',
    },
    experience: [
      {
        position: 'Senior Full Stack Developer',
        company: 'TechCorp Solutions',
        duration: '2020-Present',
        description:
          'Leading development of enterprise-level applications and mentoring team members.',
        achievements: [
          'Increased application performance by 40% through optimization',
          'Led team of 5 developers on major project delivery',
          'Implemented CI/CD pipeline reducing deployment time by 60%',
          'Reduced bug reports by 35% through code review process',
        ],
      },
      {
        position: 'Full Stack Developer',
        company: 'Digital Innovations Inc',
        duration: '2018-2020',
        description: 'Developed and maintained multiple client projects using modern technologies.',
        achievements: [
          'Built 15+ responsive web applications',
          'Integrated third-party APIs improving functionality',
          'Collaborated with UX team to improve user experience',
        ],
      },
      {
        position: 'Junior Developer',
        company: 'StartUp Hub',
        duration: '2016-2018',
        description: 'Started career developing web applications and learning best practices.',
        achievements: [
          'Learned React and Node.js ecosystem',
          'Contributed to 10+ client projects',
          'Received Employee of the Year award 2017',
        ],
      },
    ],
    organizations: [
      {
        name: 'Women in Tech Association',
        position: 'Mentor & Board Member',
        duration: '2019-Present',
        description: 'Mentoring junior female developers and organizing tech events.',
        achievements: [
          'Mentored 20+ junior developers',
          'Organized quarterly tech workshops',
          'Increased membership by 150% through outreach programs',
        ],
      },
      {
        name: 'Open Source Contributors',
        position: 'Core Contributor',
        duration: '2018-Present',
        description: 'Contributing to popular open source projects.',
        achievements: [
          'Contributed to React ecosystem libraries',
          'Maintained 3 popular npm packages',
          'Speaker at 5+ tech conferences',
        ],
      },
      {
        name: 'Tech Community Builders',
        position: 'Co-founder',
        duration: '2017-2019',
        description: 'Founded local tech community for knowledge sharing.',
        achievements: [
          'Built community of 500+ members',
          'Hosted monthly meetups and workshops',
          'Partnered with local companies for sponsorships',
        ],
      },
    ],
    education: [
      {
        degree: 'Master of Computer Science',
        school: 'Stanford University',
        year: '2016',
        description: 'Specialized in Software Engineering and Machine Learning. GPA: 3.9/4.0',
      },
      {
        degree: 'Bachelor of Computer Science',
        school: 'UC Berkeley',
        year: '2014',
        description: 'Focus on Web Technologies and Algorithms. GPA: 3.8/4.0',
      },
    ],
    skills: [
      { name: 'JavaScript/TypeScript', percentage: 95 },
      { name: 'React/Next.js', percentage: 90 },
      { name: 'Node.js/Express', percentage: 88 },
      { name: 'Python/Django', percentage: 82 },
      { name: 'AWS/Cloud Services', percentage: 85 },
      { name: 'Docker/Kubernetes', percentage: 78 },
      { name: 'GraphQL/REST APIs', percentage: 92 },
      { name: 'MongoDB/PostgreSQL', percentage: 86 },
      { name: 'Git/CI/CD', percentage: 88 },
      { name: 'Agile/Scrum', percentage: 90 },
    ],
    languages: [
      { name: 'English', level: 'Native' },
      { name: 'Spanish', level: 'Fluent' },
      { name: 'French', level: 'Intermediate' },
    ],
    projects: [
      {
        name: 'E-Commerce Platform',
        tech: 'React, Node.js, MongoDB',
        status: 'COMPLETED',
        description: 'Full-stack e-commerce solution with real-time inventory management',
      },
      {
        name: 'AI Chat Assistant',
        tech: 'Python, TensorFlow, React',
        status: 'IN_PROGRESS',
        description: 'Intelligent chatbot with natural language processing capabilities',
      },
      {
        name: 'Mobile Banking App',
        tech: 'React Native, Firebase',
        status: 'COMPLETED',
        description: 'Secure mobile banking application with biometric authentication',
      },
      {
        name: 'Data Analytics Dashboard',
        tech: 'Vue.js, D3.js, PostgreSQL',
        status: 'COMPLETED',
        description: 'Real-time analytics dashboard for business intelligence',
      },
    ],
    stats: {
      projectsCompleted: 127,
      clientsServed: 89,
      coffeeConsumed: 2847,
    },
  }),

  actions: {
    updatePersonalInfo(info) {
      this.personalInfo = { ...this.personalInfo, ...info }
    },

    addExperience(experience) {
      this.experience.push(experience)
    },

    addOrganization(organization) {
      this.organizations.push(organization)
    },

    addEducation(education) {
      this.education.push(education)
    },

    updateSkill(skillName, percentage) {
      const skill = this.skills.find((s) => s.name === skillName)
      if (skill) {
        skill.percentage = percentage
      }
    },
  },
})
