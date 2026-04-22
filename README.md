# Nadzare Kafah Alfatiha - Professional Portfolio

A modern, highly interactive, and visually stunning personal portfolio built with **Vue 3**, **Vite**, and **Tailwind CSS v4**. It features a premium "dark-tech glassmorphism" aesthetic, smooth scroll-triggered animations, multi-language support (i18n), and a custom trailing cursor to deliver a highly engaging user experience.

## ✨ Features

- **Modern Tech Stack**: Built on Vue 3 (Composition API) and bundled with Vite for lightning-fast performance.
- **Premium Aesthetics**: Glassmorphism UI, a dynamic animated background (floating blobs), and subtle micro-animations.
- **Dark & Light Mode**: Seamless theming support with system preference detection and manual toggle.
- **Internationalization (i18n)**: Multi-language support out of the box, allowing users to toggle between available languages.
- **Custom Interactive Cursor**: A custom dot-and-ring trailing cursor with smooth interpolations (lerp smoothing).
- **Scroll Progress Indicator**: Dynamic progress bar pinned at the top of the viewport.
- **Fully Responsive**: Optimized for seamless viewing across all devices (Mobile, Tablet, Desktop).
- **Comprehensive Sections**:
  - **Hero**: Typewriter effect & PDF CV download.
  - **About Me**: Brief background and history.
  - **Services**: Services offered to clients.
  - **Experience Timeline**: Journey and past work experiences.
  - **Tech Stack**: Interactive Bento Grid showcasing skills.
  - **Projects Showcase**: Projects categorized and filtered dynamically.
  - **Certificates**: Interactive carousel using Swiper UI.
  - **Contact**: Reach out or connect via social platforms.

## 🛠️ Tech Stack

- **Framework**: [Vue 3](https://vuejs.org/) (Composition API)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Routing**: [Vue Router](https://router.vuejs.org/)
- **Internationalization**: [Vue I18n](https://kazupon.github.io/vue-i18n/)
- **Carousels**: [Swiper UI](https://swiperjs.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v20.19.0 or higher recommended)
- npm (or yarn / pnpm)

### Installation

1. **Clone the repository** (if applicable) or download the source code:
   ```bash
   git clone <repository-url>
   cd nadzareka-porto
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```
   *The application will typically map to `http://localhost:5173/` by default.*

## 📦 Available Scripts

In the project directory, you can run:

- `npm run dev`: Starts the Vite development server with Hot-Module Replacement (HMR).
- `npm run build`: Type-checks via `vue-tsc` and bundles the app for production in the `dist` folder.
- `npm run preview`: Bootstraps a local web server that serves the production build from `dist`.
- `npm run format`: Runs Prettier to format source files (`src/`).

## 📂 Project Structure

```text
nadzareka-porto/
├── public/                 # Static assets (favicons, etc.)
├── src/
│   ├── assets/             # Images, project thumbnails, CV pdf
│   ├── components/         # Reusable Vue components (Sections, Navbar, Footer, Preloader)
│   ├── composables/        # Vue composables (e.g., useTheme)
│   ├── locales/            # i18n translation files
│   ├── router/             # Vue Router configuration
│   ├── App.vue             # Main Application Root
│   ├── main.ts             # Application entry point
│   └── style.css           # Global CSS & Tailwind utilities
├── index.html              # HTML template
├── package.json            # Project metadata and dependencies
└── tailwind.config.ts      # Tailwind CSS v4 wrapper (if present)
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to check [issues page](#) if you want to contribute.

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).
