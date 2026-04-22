<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// ──────────────────────────────────────────────
// NOTE: Make sure you have this in your index.html <head>:
// <link rel="stylesheet" type="text/css"
//   href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
// ──────────────────────────────────────────────

interface Skill {
  name: string
  icon: string // devicon class string
}

interface TechCategory {
  titleKey: string
  spanClass: string
  accentColor: string    // used for the glow & label colour
  skills: Skill[]
}

const techCategories: TechCategory[] = [
  {
    titleKey: 'stack.categories.web',
    spanClass: 'md:col-span-2 lg:col-span-2 bento-row-2',
    accentColor: '#38bdf8',
    skills: [
      { name: 'ReactJS',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
      { name: 'VueJS',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg' },
      { name: 'AngularJS',icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg' },      
      { name: 'Next.js',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
      { name: 'Nuxt.js',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxtjs/nuxtjs-original.svg' },     
      { name: 'NestJS',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg' },      
      { name: 'Laravel',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg' },
      { name: 'Node.js',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
      { name: 'Alpine.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/alpinejs/alpinejs-original.svg' },
      { name: 'Astro',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/astro/astro-original.svg' },
      { name: 'Express',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg' },
      { name: 'AdonisJS',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/adonisjs/adonisjs-original.svg' },      
      { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg' },
      { name: 'Tailwind',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },      
      { name: 'HTML',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
      { name: 'CSS',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
    ],
  },
  {
    titleKey: 'stack.categories.languages',
    spanClass: 'md:col-span-1 lg:col-span-1 bento-row-2',
    accentColor: '#f472b6',
    skills: [
      { name: 'PHP',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
      { name: 'Python',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
      { name: 'Dart',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg' },
      { name: 'C',          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg' },
      { name: 'C++',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg' },
      { name: 'Java',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
    ],
  },
  {
    titleKey: 'stack.categories.mobile',
    spanClass: 'col-span-1',
    accentColor: '#34d399',
    skills: [
      { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg' },
      { name: 'Ionic',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ionic/ionic-original.svg' },
    ],
  },
  {
    titleKey: 'stack.categories.database',
    spanClass: 'col-span-1',
    accentColor: '#818cf8',
    skills: [
      { name: 'MySQL',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
      { name: 'Firebase',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg' },
      { name: 'MongoDB',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
      { name: 'Supabase',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg' },
    ],
  },
  {
    titleKey: 'stack.categories.design',
    spanClass: 'col-span-1 md:col-span-2',
    accentColor: '#fb923c',
    skills: [
      { name: 'Figma',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
      { name: 'Photoshop',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg' },
      { name: 'Illustrator', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-plain.svg' },
      { name: 'Canva',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg' },
    ],
  },
  {
    titleKey: 'stack.categories.tools',
    spanClass: 'col-span-1 md:col-span-2',
    accentColor: '#a3e635',
    skills: [
      { name: 'Git',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
      { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
      { name: 'Docker',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
      { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg' },
      { name: 'GitHub',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
    ],
  },
]

/* ── Scroll-triggered animation ── */
const headerRef    = ref<HTMLElement | null>(null)
const bentoRefs    = ref<HTMLElement[]>([])

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
        }
      })
    },
    { threshold: 0.07 },
  )

  if (headerRef.value) observer.observe(headerRef.value)
  bentoRefs.value.forEach((el) => el && observer.observe(el))
})

/* ── Dynamic glow on hover ── */
function onCardEnter(event: MouseEvent, color: string) {
  const el = event.currentTarget as HTMLElement
  el.style.borderColor = `${color}55`
  el.style.boxShadow   = `0 0 40px ${color}18, 0 20px 60px rgba(0,0,0,0.35), inset 0 1px 0 ${color}18`
  el.style.background  = `rgba(255,255,255,0.06)`
}
function onCardLeave(event: MouseEvent) {
  const el = event.currentTarget as HTMLElement
  el.style.borderColor = ''
  el.style.boxShadow   = ''
  el.style.background  = ''
}
</script>

<template>
  <section id="stack" class="py-28 scroll-mt-24 relative overflow-hidden">

    <!-- ── Ambient background glows ── -->
    <div class="bento-glow bento-glow--blue"  aria-hidden="true"></div>
    <div class="bento-glow bento-glow--purple" aria-hidden="true"></div>

    <div class="section-container relative z-10">

      <!-- ── Section header ── -->
      <div ref="headerRef" class="fade-in-up mb-14 text-center">
        <p class="section-label">{{ t('stack.label') }}</p>
        <h2 class="section-title">{{ t('stack.title') }}</h2>
        <p class="text-slate-500 dark:text-slate-400 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
          {{ t('stack.desc') }}
        </p>
      </div>

      <!-- ── Bento grid ── -->
      <div class="bento-grid">
        <div
          v-for="(category, ci) in techCategories"
          :key="category.titleKey"
          :ref="(el) => { if (el) bentoRefs[ci] = el as HTMLElement }"
          :class="['bento-card bento-card-hover fade-in-up bg-white border border-slate-200 shadow-sm dark:bg-[#1E293B]/40 dark:backdrop-blur-xl dark:border-white/10 dark:shadow-none', category.spanClass, `delay-${Math.min((ci + 1) * 100, 600)}`]"
          @mouseenter="onCardEnter($event, category.accentColor)"
          @mouseleave="onCardLeave($event)"
        >
          <!-- Inner glass shine line -->
          <div class="bento-shine" aria-hidden="true"></div>

          <!-- Category label -->
          <p
            class="bento-label text-slate-800 dark:text-[var(--accent-color)]"
            :style="{ '--accent-color': category.accentColor }"
          >
            {{ t(category.titleKey) }}
          </p>

          <!-- Tech skill chips -->
          <div class="bento-skills">
            <div
              v-for="(skill, si) in category.skills"
              :key="skill.name"
              class="skill-chip bg-white border border-slate-200 shadow-sm dark:bg-[rgba(7,11,21,0.55)] dark:border-[rgba(255,255,255,0.07)] dark:shadow-none"
              :style="{ transitionDelay: `${si * 40}ms` }"
            >
              <img
                :src="skill.icon"
                :alt="skill.name"
                class="skill-icon w-9 h-9 object-contain"
                loading="lazy"
                draggable="false"
              />
              <span class="skill-name">{{ skill.name }}</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* ──────────────────────────────────────────────
   AMBIENT GLOWS
   ────────────────────────────────────────────── */
.bento-glow {
  position: absolute;
  border-radius: 9999px;
  filter: blur(120px);
  pointer-events: none;
  z-index: 0;
}
.bento-glow--blue {
  width: 600px;
  height: 400px;
  top: -80px;
  left: -100px;
  background: radial-gradient(ellipse, rgba(56, 189, 248, 0.18) 0%, transparent 70%);
  animation: blob-drift 18s ease-in-out infinite;
}
.bento-glow--purple {
  width: 500px;
  height: 400px;
  bottom: -60px;
  right: -80px;
  background: radial-gradient(ellipse, rgba(129, 140, 248, 0.15) 0%, transparent 70%);
  animation: blob-drift-2 22s ease-in-out infinite;
}

/* ──────────────────────────────────────────────
   BENTO GRID CONTAINER
   ────────────────────────────────────────────── */
.bento-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 768px) {
  .bento-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;
  }
}

@media (min-width: 1024px) {
  .bento-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
  }
}

/* Row-span helper — ONLY on md+ where grid has multiple columns */
.bento-row-2 {
  grid-row: span 1; /* mobile: normal flow */
}
@media (min-width: 768px) {
  .bento-row-2 { grid-row: span 2; }
}

/* Tailwind utility pass-throughs — only active when grid has columns */
@media (min-width: 768px) {
  :deep(.md\:col-span-2) { grid-column: span 2; }
  :deep(.md\:col-span-1) { grid-column: span 1; }
}
@media (min-width: 1024px) {
  :deep(.lg\:col-span-2) { grid-column: span 2; }
  :deep(.lg\:col-span-1) { grid-column: span 1; }
}

/* ──────────────────────────────────────────────
   BENTO CARD
   ────────────────────────────────────────────── */
.bento-card {
  position: relative;
  padding: 1.5rem;
  border-radius: 1.5rem;
  overflow: hidden;
  cursor: default;
  transition:
    transform 300ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1),
    background 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.bento-card:hover {
  transform: scale(1.025);
}

/* ──────────────────────────────────────────────
   INNER SHINE LINE
   ────────────────────────────────────────────── */
.bento-shine {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.06) 0%,
    transparent 50%
  );
  pointer-events: none;
}

/* ──────────────────────────────────────────────
   CATEGORY LABEL
   ────────────────────────────────────────────── */
.bento-label {
  margin: 0 0 1rem;
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2em;
}

/* ──────────────────────────────────────────────
   SKILL CHIPS GRID
   ────────────────────────────────────────────── */
.bento-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.625rem;
}

/* ── Individual chip ── */
.skill-chip {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.375rem;
  padding: 0.75rem 0.625rem;
  min-width: 70px;
  border-radius: 0.875rem;
  backdrop-filter: blur(8px);
  transition:
    transform 220ms ease,
    border-color 220ms ease,
    background 220ms ease,
    box-shadow 220ms ease;
  cursor: default;
}

.skill-chip:hover {
  transform: translateY(-4px) scale(1.06);
  border-color: rgba(0, 0, 0, 0.1);
  background: #f8fafc;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
}

:global(.dark) .skill-chip:hover {
  border-color: rgba(255, 255, 255, 0.18);
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
}

/* ── SVG Devicon image sizing ── */
.skill-icon {
  width: 2.25rem;
  height: 2.25rem;
  display: block;
  filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.20));
}

/* ── Chip label ── */
.skill-name {
  font-size: 0.65rem;
  font-weight: 500;
  color: #475569;         /* light: slate-600 */
  text-align: center;
  line-height: 1.2;
  white-space: nowrap;
}
:global(.dark) .skill-name { color: #94a3b8; }

/* ──────────────────────────────────────────────
   RESPONSIVE COLUMN SPANNING
   Override grid-col spans because Tailwind v4
   scoped utilities need explicit definitions.
   ────────────────────────────────────────────── */
@media (min-width: 768px) {
  .md\:col-span-2 { grid-column: span 2; }
  .md\:col-span-1 { grid-column: span 1; }
}

@media (min-width: 1024px) {
  .lg\:col-span-2 { grid-column: span 2; }
  .lg\:col-span-1 { grid-column: span 1; }
}
</style>
