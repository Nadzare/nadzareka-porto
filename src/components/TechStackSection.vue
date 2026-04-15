<script setup lang="ts">
import { ref, onMounted } from 'vue'

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
  title: string
  spanClass: string
  accentColor: string    // used for the glow & label colour
  skills: Skill[]
}

const techCategories: TechCategory[] = [
  {
    title: 'Web & Frameworks',
    spanClass: 'md:col-span-2 lg:col-span-2 bento-row-2',
    accentColor: '#38bdf8',
    skills: [
      { name: 'Vue 3',     icon: 'devicon-vuejs-plain colored' },
      { name: 'Laravel',   icon: 'devicon-laravel-original colored' },
      { name: 'Tailwind',  icon: 'devicon-tailwindcss-original colored' },
      { name: 'Node.js',   icon: 'devicon-nodejs-plain colored' },
      { name: 'React',     icon: 'devicon-react-original colored' },
      { name: 'Bootstrap', icon: 'devicon-bootstrap-plain colored' },
    ],
  },
  {
    title: 'Languages',
    spanClass: 'md:col-span-1 lg:col-span-1 bento-row-2',
    accentColor: '#f472b6',
    skills: [
      { name: 'PHP',        icon: 'devicon-php-plain colored' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
      { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
      { name: 'Python',     icon: 'devicon-python-plain colored' },
      { name: 'Dart',       icon: 'devicon-dart-plain colored' },
    ],
  },
  {
    title: 'Mobile',
    spanClass: 'col-span-1',
    accentColor: '#34d399',
    skills: [
      { name: 'Flutter', icon: 'devicon-flutter-plain colored' },
      { name: 'Ionic',   icon: 'devicon-ionic-original colored' },
    ],
  },
  {
    title: 'Databases & Backend',
    spanClass: 'col-span-1',
    accentColor: '#818cf8',
    skills: [
      { name: 'MySQL',      icon: 'devicon-mysql-plain colored' },
      { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
      { name: 'Firebase',   icon: 'devicon-firebase-plain colored' },
    ],
  },
  {
    title: 'Design & Creative',
    spanClass: 'col-span-1 md:col-span-2',
    accentColor: '#fb923c',
    skills: [
      { name: 'Figma',       icon: 'devicon-figma-plain colored' },
      { name: 'Photoshop',   icon: 'devicon-photoshop-plain colored' },
      { name: 'Illustrator', icon: 'devicon-illustrator-plain colored' },
      { name: 'Canva',       icon: 'devicon-canva-original colored' },
    ],
  },
  {
    title: 'Tools & Platforms',
    spanClass: 'col-span-1 md:col-span-2',
    accentColor: '#a3e635',
    skills: [
      { name: 'Git',     icon: 'devicon-git-plain colored' },
      { name: 'VS Code', icon: 'devicon-vscode-plain colored' },
      { name: 'Docker',  icon: 'devicon-docker-plain colored' },
      { name: 'Postman', icon: 'devicon-postman-plain colored' },
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
        <p class="section-label">Tech Stack</p>
        <h2 class="section-title">Keahlian &amp; Tools</h2>
        <p class="text-slate-500 dark:text-slate-400 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
          Teknologi yang saya gunakan untuk membangun product — dari frontend hingga mobile.
        </p>
      </div>

      <!-- ── Bento grid ── -->
      <div class="bento-grid">
        <div
          v-for="(category, ci) in techCategories"
          :key="category.title"
          :ref="(el) => { if (el) bentoRefs[ci] = el as HTMLElement }"
          :class="['bento-card fade-in-up', category.spanClass, `delay-${Math.min((ci + 1) * 100, 600)}`]"
          @mouseenter="onCardEnter($event, category.accentColor)"
          @mouseleave="onCardLeave($event)"
        >
          <!-- Inner glass shine line -->
          <div class="bento-shine" aria-hidden="true"></div>

          <!-- Category label -->
          <p
            class="bento-label"
            :style="{ color: category.accentColor }"
          >
            {{ category.title }}
          </p>

          <!-- Tech skill chips -->
          <div class="bento-skills">
            <div
              v-for="(skill, si) in category.skills"
              :key="skill.name"
              class="skill-chip"
              :style="{ transitionDelay: `${si * 40}ms` }"
            >
              <i
                :class="[skill.icon, 'skill-icon']"
                :aria-label="skill.name"
              ></i>
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
  /* Light mode */
  border: 1px solid #e2e8f0;
  background: #ffffff;
  box-shadow: 0 1px 4px rgba(0,0,0,0.05), 0 4px 12px rgba(0,0,0,0.04);
  overflow: hidden;
  cursor: default;
  transition:
    transform 300ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1),
    background 300ms cubic-bezier(0.4, 0, 0.2, 1);
}
:global(.dark) .bento-card {
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: none;
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
  border: 1px solid rgba(255, 255, 255, 0.07);
  background: rgba(7, 11, 21, 0.55);
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
  border-color: rgba(255, 255, 255, 0.18);
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
}

/* ── Devicon icon sizing ── */
.skill-icon {
  font-size: 2rem;            /* 32px */
  line-height: 1;
  display: block;
  filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.40));
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
