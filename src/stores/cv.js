import { defineStore } from 'pinia'

export const useCVStore = defineStore('cv', {
  state: () => ({
    personalInfo: {
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+62 812-3456-7890',
      address: 'Jakarta, Indonesia',
      photo: null, // Set null untuk menggunakan fallback
    },
    education: [
      {
        degree: 'Bachelor of Computer Science',
        school: 'University of Indonesia',
        year: '2020-2024',
        description: 'GPA: 3.8/4.0',
      },
    ],
    experience: [
      {
        position: 'Frontend Developer',
        company: 'Tech Company',
        duration: '2023-Present',
        description: 'Developing responsive web applications using Vue.js',
      },
    ],
    skills: [
      { name: 'Vue.js', level: 'Advanced' },
      { name: 'TypeScript', level: 'Intermediate' },
      { name: 'CSS/Tailwind', level: 'Advanced' },
    ],
    languages: ['Indonesian (Native)', 'English (Fluent)'],
    projects: ['E-commerce Platform', 'Portfolio Website', 'Mobile App'],
    certifications: ['Vue.js Certification', 'AWS Cloud Practitioner'],
    interests: ['Web Development', 'UI/UX Design', 'Photography'],
    references: ['Available upon request'],
  }),

  actions: {
    updatePersonalInfo(info) {
      this.personalInfo = { ...this.personalInfo, ...info }
    },

    addEducation(education) {
      this.education.push(education)
    },

    addExperience(experience) {
      this.experience.push(experience)
    },

    addSkill(skill) {
      this.skills.push(skill)
    },
  },
})
