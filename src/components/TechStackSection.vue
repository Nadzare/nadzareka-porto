<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface TechItem {
  name: string
  icon: string
}

interface TechCategory {
  title: string
  color: string
  items: TechItem[]
}

const stackCategories: TechCategory[] = [
  {
    title: 'Languages',
    color: '#f472b6',
    items: [
      { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'Dart', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    ],
  },
  {
    title: 'Web & Frameworks',
    color: '#38bdf8',
    items: [
      { name: 'Vue 3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
      { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
      { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    ],
  },
  {
    title: 'Mobile',
    color: '#34d399',
    items: [
      { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
      { name: 'Android Studio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg' },
      { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    ],
  },
  {
    title: 'Databases & Backend',
    color: '#818cf8',
    items: [
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'Supabase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg' },
      { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    ],
  },
  {
    title: 'Design & Creative',
    color: '#fb923c',
    items: [
      { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
      { name: 'Photoshop', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg' },
      { name: 'Illustrator', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg' },
      { name: 'Canva', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg' },
    ],
  },
  {
    title: 'Tools & Platforms',
    color: '#a3e635',
    items: [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
      { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
    ],
  },
]

const headerRef = ref<HTMLElement | null>(null)
const categoryRefs = ref<HTMLElement[]>([])

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible')
      })
    },
    { threshold: 0.08 },
  )
  if (headerRef.value) observer.observe(headerRef.value)
  categoryRefs.value.forEach((el) => el && observer.observe(el))
})
</script>

<template>
  <section id="stack" class="py-24 scroll-mt-24">
    <div class="section-container">

      <!-- Header -->
      <div ref="headerRef" class="fade-in-up mb-14 text-center">
        <p class="section-label">Tech Stack</p>
        <h2 class="section-title">Keahlian & Tools</h2>
        <p class="text-slate-400 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
          Teknologi yang saya gunakan untuk membangun product — dari frontend hingga mobile.
        </p>
      </div>

      <!-- Categories -->
      <div class="space-y-10">
        <div
          v-for="(category, ci) in stackCategories"
          :key="category.title"
          :ref="(el) => { if (el) categoryRefs[ci] = el as HTMLElement }"
          class="fade-in-up"
          :class="`delay-${Math.min((ci + 1) * 100, 600)}`"
        >
          <!-- Category header -->
          <div class="flex items-center gap-3 mb-5">
            <div
              class="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest"
              :style="{
                background: `${category.color}15`,
                border: `1px solid ${category.color}40`,
                color: category.color,
              }"
            >
              {{ category.title }}
            </div>
            <div class="flex-1 h-px" :style="{ background: `linear-gradient(to right, ${category.color}30, transparent)` }"></div>
          </div>

          <!-- Tech chips -->
          <div class="flex flex-wrap gap-3">
            <div
              v-for="(tech, ti) in category.items"
              :key="tech.name"
              class="tech-chip"
              :style="{
                transitionDelay: `${ti * 60}ms`,
                '--hover-color': category.color,
              } as any"
              @mouseover="($event.currentTarget as HTMLElement).style.borderColor = `${category.color}60`; ($event.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${category.color}25, 0 8px 24px rgba(0,0,0,0.3)`"
              @mouseleave="($event.currentTarget as HTMLElement).style.borderColor = ''; ($event.currentTarget as HTMLElement).style.boxShadow = ''"
            >
              <img
                :src="tech.icon"
                :alt="tech.name"
                class="w-8 h-8 object-contain"
                loading="lazy"
                style="filter: drop-shadow(0 2px 6px rgba(0,0,0,0.4));"
              />
              <span class="text-xs font-medium text-slate-300 text-center leading-tight">{{ tech.name }}</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
