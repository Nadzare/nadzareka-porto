<script setup lang="ts">
interface TechItem {
  name: string
  icon: string
}

interface TechCategory {
  title: string
  items: TechItem[]
}

const stackCategories: TechCategory[] = [
  {
    title: 'Programming Languages',
    items: [
      {
        name: 'PHP',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
      },
      {
        name: 'TypeScript',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      },
      {
        name: 'JavaScript',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      },
      {
        name: 'Dart',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg',
      },
      {
        name: 'Python',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      },
    ],
  },
  {
    title: 'Web & Frameworks',
    items: [
      {
        name: 'Vue 3',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
      },
      {
        name: 'Laravel',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg',
      },
      {
        name: 'Tailwind CSS',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
      },
      {
        name: 'Vite',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg',
      },
      {
        name: 'Node.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      },
    ],
  },
  {
    title: 'Mobile Frameworks',
    items: [
      {
        name: 'Flutter',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
      },
      {
        name: 'Android Studio',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg',
      },
      {
        name: 'Firebase',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
      },
    ],
  },
  {
    title: 'Databases & Backend',
    items: [
      {
        name: 'MySQL',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      },
      {
        name: 'PostgreSQL',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      },
      {
        name: 'Supabase',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg',
      },
      {
        name: 'Express',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      },
    ],
  },
  {
    title: 'Design & Creative',
    items: [
      {
        name: 'Figma',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
      },
      {
        name: 'Photoshop',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg',
      },
      {
        name: 'Illustrator',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg',
      },
      {
        name: 'Canva',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg',
      },
    ],
  },
  {
    title: 'Tools & Platforms',
    items: [
      {
        name: 'Git',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      },
      {
        name: 'GitHub',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      },
      {
        name: 'Postman',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
      },
      {
        name: 'Linux',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
      },
    ],
  },
]
</script>

<template>
  <section id="stack" class="section-shell rounded-2xl p-7 sm:p-10">
    <div class="mb-7 space-y-3">
      <p class="text-xs font-semibold uppercase tracking-[0.26em] text-sky-300">Tech Stack</p>
      <h2 class="text-2xl font-bold text-white sm:text-3xl">Keahlian & Tools</h2>
    </div>

    <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <div
        v-for="category in stackCategories"
        :key="category.title"
        class="premium-card rounded-xl p-5"
      >
        <h3 class="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-sky-300">
          {{ category.title }}
        </h3>
        <div class="grid grid-cols-2 gap-3 sm:grid-cols-3">
          <div
            v-for="tech in category.items"
            :key="tech.name"
            class="rounded-lg border border-white/10 bg-[#0B1120]/80 p-3 transition hover:border-sky-300/40"
          >
            <div class="mb-2 flex items-center gap-2">
              <img
                :src="tech.icon"
                :alt="tech.name"
                class="h-5 w-5 object-contain"
                loading="lazy"
              />
              <span class="text-xs font-medium text-slate-100">{{ tech.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
