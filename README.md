# Vue.js CV Portfolio Project

A multi-language CV portfolio application built with Vue.js 3, featuring multiple CV models accessible through routing.

## Features

- 🌍 **Multi-language Support**: English and Indonesian
- 🎨 **Multiple CV Models**: Modern, Classic, Creative, and Minimal designs
- 📱 **Responsive Design**: Works on all devices
- 🚀 **Vue 3 Composition API**: Modern Vue.js development
- 🗂️ **Vue Router**: Client-side routing for different CV models
- 📦 **Pinia**: State management for CV data
- 🎯 **TypeScript**: Type-safe development

## CV Models

1. **Modern CV** (`/cv/modern`) - Professional design with gradients and modern UI
2. **Classic CV** (`/cv/classic`) - Traditional and elegant layout
3. **Creative CV** (`/cv/creative`) - Colorful and dynamic design with animations
4. **Minimal CV** (`/cv/minimal`) - Clean and simple layout

## Installation

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Start development server**:

   ```bash
   npm run dev
   ```

3. **Build for production**:

   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

## Project Structure

```
src/
├── components/
│   └── LanguageSwitcher.vue    # Language selection component
├── i18n/
│   ├── index.ts                # i18n configuration
│   └── locales/
│       ├── en.json            # English translations
│       └── id.json            # Indonesian translations
├── router/
│   └── index.ts                # Vue Router configuration
├── stores/
│   └── cv.ts                   # Pinia store for CV data
├── views/
│   ├── HomeView.vue           # Home page with CV model selection
│   └── cv/                    # CV model components
│       ├── ModernCV.vue
│       ├── ClassicCV.vue
│       ├── CreativeCV.vue
│       └── MinimalCV.vue
├── App.vue                    # Main app component
└── main.ts                    # App entry point
```

## Usage

1. **Home Page**: Select your preferred CV model
2. **Language Switching**: Use the language selector in the header
3. **Navigation**: Access different CV models through the home page or direct URLs

## Customization

### Adding New CV Models

1. Create a new Vue component in `src/views/cv/`
2. Add the route in `src/router/index.ts`
3. Add the model name to the home page in `src/views/HomeView.vue`
4. Add translations in `src/i18n/locales/`

### Modifying CV Data

Edit the CV data in `src/stores/cv.ts`:

```typescript
// Update personal information
personalInfo: {
  name: 'Your Name',
  email: 'your.email@example.com',
  phone: '+62 812-3456-7890',
  address: 'Your City, Country'
}

// Add more education, experience, skills, etc.
```

### Adding New Languages

1. Create a new locale file in `src/i18n/locales/`
2. Import and add it to the i18n configuration in `src/i18n/index.ts`
3. Add the language option to `LanguageSwitcher.vue`

## Technologies Used

- **Vue 3** - Progressive JavaScript framework
- **TypeScript** - Typed JavaScript
- **Vue Router** - Official router for Vue.js
- **Pinia** - State management library
- **Vue I18n** - Internationalization plugin
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Build tool and development server

## Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run type-check` - Type checking with TypeScript

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## License

This project is open source and available under the [MIT License](LICENSE).
