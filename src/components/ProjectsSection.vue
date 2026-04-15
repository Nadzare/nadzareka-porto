<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

/* ─────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────── */
interface Project {
  id: number
  title: string
  category: string
  description: string
  techStack: string[]
  accentColor: string
  gradient: string
  github?: string
  live?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Larasena',
    category: 'Web Development',
    description:
      'Marketplace batik online terintegrasi peta Leaflet JS dan fitur Generate AI Batik.',
    techStack: ['Laravel', 'Vue 3', 'MySQL', 'Tailwind CSS'],
    accentColor: '#38bdf8',
    gradient: 'linear-gradient(135deg, #1e3a5f 0%, #0f2847 50%, #0b1120 100%)',
    github: '#',
    live: '#',
  },
  {
    id: 2,
    title: 'Warung Orange',
    category: 'Web Development',
    description: 'Marketplace interaktif UMKM dengan sistem pembayaran terintegrasi Midtrans.',
    techStack: ['Laravel', 'Livewire', 'Filament', 'MySQL'],
    accentColor: '#fb923c',
    gradient: 'linear-gradient(135deg, #3d1a00 0%, #2a1200 50%, #0b1120 100%)',
    github: '#',
  },
  {
    id: 3,
    title: 'FaceTend',
    category: 'Mobile Development',
    description: 'Sistem absensi karyawan menggunakan Face Recognition API dan validasi geolokasi.',
    techStack: ['Flutter', 'Firebase', 'Face Recognition'],
    accentColor: '#818cf8',
    gradient: 'linear-gradient(135deg, #1a1f3d 0%, #0f1429 50%, #0b1120 100%)',
    github: '#',
  },
  {
    id: 4,
    title: 'Redesain Cek Bansos',
    category: 'UI/UX Design',
    description:
      'Challenge project redesain aplikasi Cek Bansos Kemensos berfokus pada kemudahan pengguna.',
    techStack: ['Figma', 'Prototyping', 'UX Research'],
    accentColor: '#f472b6',
    gradient: 'linear-gradient(135deg, #3d1a2e 0%, #290f1e 50%, #0b1120 100%)',
    live: '#',
  },
  {
    id: 5,
    title: 'Superadmin Dashboard',
    category: 'UI/UX Design',
    description: 'Perancangan UI/UX interaktif untuk sistem manajemen superadmin perusahaan.',
    techStack: ['Figma', 'Design System', 'Wireframing'],
    accentColor: '#a78bfa',
    gradient: 'linear-gradient(135deg, #1f1a3d 0%, #140f2e 50%, #0b1120 100%)',
    live: '#',
  },
  {
    id: 6,
    title: 'Creative Digital Invitations',
    category: 'Graphic Design',
    description:
      'Desain undangan pernikahan digital dan gift card ulang tahun kreatif berbasis website.',
    techStack: ['Photoshop', 'Illustrator', 'HTML/CSS'],
    accentColor: '#fbbf24',
    gradient: 'linear-gradient(135deg, #3d2a1a 0%, #291c0f 50%, #0b1120 100%)',
    live: '#',
  },
  {
    id: 7,
    title: 'Nasi Kebuli Ajibarang',
    category: 'Web Development',
    description: 'Digitalisasi dan sistem manajemen operasional untuk UMKM Nasi Kebuli.',
    techStack: ['Laravel', 'Filament', 'Tailwind CSS'],
    accentColor: '#f87171',
    gradient: 'linear-gradient(135deg, #3d1a1a 0%, #290f0f 50%, #0b1120 100%)',
    github: '#',
  },
  {
    id: 8,
    title: 'Menaspro',
    category: 'Web Development',
    description: 'Implementasi K-Means Clustering untuk analisis data keaktifan mahasiswa.',
    techStack: ['Python', 'Scikit-Learn', 'Data Visualization'],
    accentColor: '#34d399',
    gradient: 'linear-gradient(135deg, #1a3d2f 0%, #0f2920 50%, #0b1120 100%)',
    github: '#',
    live: '#',
  },
]

/* ─────────────────────────────────────────────────────────────
   FILTER SYSTEM
───────────────────────────────────────────────────────────── */
const categories = [
  'All',
  'Web Development',
  'Mobile Development',
  'UI/UX Design',
  'Graphic Design',
]
const activeCategory = ref('All')

const filteredProjects = computed(() =>
  activeCategory.value === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory.value),
)

function setCategory(cat: string) {
  activeCategory.value = cat
}

/* ─────────────────────────────────────────────────────────────
   SCROLL ANIMATION — only header; cards animate via CSS
───────────────────────────────────────────────────────────── */
const headerRef = ref<HTMLElement | null>(null)
const tabsRef = ref<HTMLElement | null>(null)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('is-visible')
      }),
    { threshold: 0.07 },
  )
  ;[headerRef.value, tabsRef.value].forEach((el) => el && observer.observe(el))
})
</script>

<template>
  <section id="projects" class="relative py-28 scroll-mt-24 overflow-hidden">
    <!-- ── Ambient glows ── -->
    <div class="proj-glow proj-glow--blue" aria-hidden="true"></div>
    <div class="proj-glow proj-glow--purple" aria-hidden="true"></div>

    <div class="section-container relative z-10">
      <!-- ── Section header ── -->
      <div ref="headerRef" class="fade-in-up mb-10 text-center">
        <p class="section-label">Portfolio</p>
        <h2 class="section-title">Project <span class="glow-text">Showcase</span></h2>
        <p class="text-slate-400 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
          Koleksi proyek yang dibangun dengan passion — dari hackathon hingga produk nyata.
        </p>
      </div>

      <!-- ══════════════════════════════════════════════════
           TAB FILTER BAR
      ══════════════════════════════════════════════════ -->
      <div ref="tabsRef" class="tabs-wrapper fade-in-up delay-100 mb-12">
        <div class="tabs-track">
          <button
            v-for="cat in categories"
            :key="cat"
            class="tab-pill"
            :class="{ 'tab-pill--active': activeCategory === cat }"
            @click="setCategory(cat)"
          >
            {{ cat }}
          </button>
        </div>
      </div>

      <!-- ══════════════════════════════════════════════════
           PROJECT GRID — wrapped in TransitionGroup
      ══════════════════════════════════════════════════ -->
      <TransitionGroup name="proj" tag="div" class="proj-grid">
        <article v-for="project in filteredProjects" :key="project.id" class="proj-card group">
          <!-- ── Thumbnail ── -->
          <div class="proj-thumb" :style="{ background: project.gradient }">
            <!-- Subtle pattern overlay -->
            <div class="thumb-pattern" aria-hidden="true"></div>

            <!-- Accent glow blob -->
            <div
              class="thumb-glow group-hover:opacity-70 group-hover:scale-150"
              :style="{ background: project.accentColor }"
              aria-hidden="true"
            ></div>

            <!-- Watermark title -->
            <div class="thumb-watermark">{{ project.title }}</div>

            <!-- Category badge -->
            <div
              class="thumb-badge"
              :style="{
                background: `${project.accentColor}22`,
                borderColor: `${project.accentColor}55`,
                color: project.accentColor,
              }"
            >
              {{ project.category }}
            </div>

            <!-- Hover reveal overlay -->
            <div class="thumb-overlay">
              <p class="text-slate-200 text-xs leading-relaxed mb-3">{{ project.description }}</p>
              <div class="flex gap-2 flex-wrap">
                <a
                  v-if="project.github"
                  :href="project.github"
                  target="_blank"
                  rel="noopener"
                  class="proj-link"
                  :style="`background:${project.accentColor}20; border-color:${project.accentColor}55; color:${project.accentColor};`"
                >
                  <svg class="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                    <path
                      d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.28-.01-1.03-.02-2.03-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.85 1.24 1.85 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.005 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22 0 1.61-.01 2.9-.01 3.29 0 .32.21.7.82.58C20.57 21.8 24 17.31 24 12c0-6.63-5.37-12-12-12z"
                    />
                  </svg>
                  GitHub
                </a>
                <a
                  v-if="project.live"
                  :href="project.live"
                  target="_blank"
                  rel="noopener"
                  class="proj-link proj-link--ghost"
                >
                  <svg
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  Live
                </a>
              </div>
            </div>
          </div>

          <!-- ── Card body ── -->
          <div class="proj-body">
            <h3 class="proj-title">{{ project.title }}</h3>
            <div class="proj-tags">
              <span v-for="tag in project.techStack" :key="tag" class="proj-tag">
                {{ tag }}
              </span>
            </div>
          </div>
        </article>
      </TransitionGroup>

      <!-- Empty state -->
      <div v-if="filteredProjects.length === 0" class="text-center py-20 text-slate-500 text-sm">
        No projects found in this category yet.
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ──────────────────────────────────────────────
   AMBIENT GLOWS
   ────────────────────────────────────────────── */
.proj-glow {
  position: absolute;
  border-radius: 9999px;
  filter: blur(130px);
  pointer-events: none;
  z-index: 0;
}
.proj-glow--blue {
  width: 600px;
  height: 400px;
  top: -60px;
  right: -60px;
  background: radial-gradient(ellipse, rgba(56, 189, 248, 0.13) 0%, transparent 70%);
  animation: blob-drift-2 22s ease-in-out infinite;
}
.proj-glow--purple {
  width: 500px;
  height: 380px;
  bottom: -40px;
  left: -60px;
  background: radial-gradient(ellipse, rgba(129, 140, 248, 0.12) 0%, transparent 70%);
  animation: blob-drift 26s ease-in-out infinite;
}

/* ──────────────────────────────────────────────
   TABS
   ────────────────────────────────────────────── */
.tabs-wrapper {
  display: flex;
  justify-content: center;
}

/* Horizontal scroll on narrow screens */
.tabs-track {
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  padding-bottom: 4px; /* space for scrollbar on edge */
  scrollbar-width: none; /* hide scrollbar Firefox */
}
.tabs-track::-webkit-scrollbar {
  display: none;
}

.tab-pill {
  flex-shrink: 0;
  padding: 0.45rem 1.1rem;
  border-radius: 9999px;
  font-size: 0.78rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  color: #64748b;
  white-space: nowrap;
  transition:
    color 220ms ease,
    background 220ms ease,
    border-color 220ms ease,
    box-shadow 220ms ease,
    transform 180ms ease;
}
.tab-pill:hover:not(.tab-pill--active) {
  color: #94a3b8;
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.18);
}
.tab-pill--active {
  background: rgba(59, 130, 246, 0.2);
  border-color: rgba(59, 130, 246, 0.55);
  color: #60a5fa;
  box-shadow: 0 0 16px rgba(59, 130, 246, 0.15);
}

/* ──────────────────────────────────────────────
   PROJECT GRID
   ────────────────────────────────────────────── */
.proj-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}
@media (min-width: 640px) {
  .proj-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1024px) {
  .proj-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* ──────────────────────────────────────────────
   TRANSITION GROUP ANIMATIONS
   ────────────────────────────────────────────── */
.proj-enter-active,
.proj-leave-active {
  transition:
    opacity 320ms ease,
    transform 320ms ease;
}
.proj-enter-from {
  opacity: 0;
  transform: translateY(16px) scale(0.97);
}
.proj-leave-to {
  opacity: 0;
  transform: translateY(-10px) scale(0.97);
}
/* Keep the grid stable during leave so cards don't jump */
.proj-leave-active {
  position: absolute;
}

/* ──────────────────────────────────────────────
   PROJECT CARD
   ────────────────────────────────────────────── */
.proj-card {
  position: relative;
  border-radius: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(30, 41, 59, 0.4);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  overflow: hidden;
  cursor: pointer;
  transition:
    transform 300ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 300ms ease,
    box-shadow 300ms ease;
}
.proj-card:hover {
  transform: translateY(-8px);
  border-color: rgba(56, 189, 248, 0.4);
  box-shadow:
    0 20px 60px rgba(0, 0, 0, 0.5),
    0 0 0 1px rgba(56, 189, 248, 0.12);
}

/* ──────────────────────────────────────────────
   THUMBNAIL AREA
   ────────────────────────────────────────────── */
.proj-thumb {
  position: relative;
  height: 11rem;
  overflow: hidden;
}

.thumb-pattern {
  position: absolute;
  inset: 0;
  opacity: 0.25;
  background-image:
    radial-gradient(circle at 30% 50%, rgba(255, 255, 255, 0.12) 0%, transparent 60%),
    linear-gradient(45deg, transparent 40%, rgba(255, 255, 255, 0.03) 100%);
}

.thumb-glow {
  position: absolute;
  bottom: -2rem;
  right: -2rem;
  width: 8rem;
  height: 8rem;
  border-radius: 9999px;
  filter: blur(2rem);
  opacity: 0.4;
  transition:
    opacity 500ms ease,
    transform 500ms ease;
}
.group:hover .thumb-glow {
  opacity: 0.7;
  transform: scale(1.5);
}

.thumb-watermark {
  position: absolute;
  bottom: 1rem;
  left: 1.25rem;
  font-family: 'Outfit', sans-serif;
  font-weight: 900;
  font-size: 1.5rem;
  opacity: 0.15;
  user-select: none;
  color: #fff;
  pointer-events: none;
  letter-spacing: -0.02em;
}

.thumb-badge {
  position: absolute;
  top: 0.875rem;
  left: 0.875rem;
  padding: 0.2rem 0.625rem;
  border-radius: 9999px;
  border: 1px solid;
  font-size: 0.6rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

/* Hover reveal overlay */
.thumb-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.25rem;
  background: linear-gradient(
    to top,
    rgba(7, 11, 21, 0.97) 0%,
    rgba(7, 11, 21, 0.88) 55%,
    transparent 100%
  );
  transform: translateY(100%);
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
}
.group:hover .thumb-overlay {
  transform: translateY(0);
}

/* ── Thumbnail action links ── */
.proj-link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.3rem 0.7rem;
  border-radius: 9999px;
  border: 1px solid;
  font-size: 0.7rem;
  font-weight: 600;
  text-decoration: none;
  transition: opacity 200ms ease;
}
.proj-link:hover {
  opacity: 0.85;
}
.proj-link--ghost {
  background: rgba(255, 255, 255, 0.07) !important;
  border-color: rgba(255, 255, 255, 0.18) !important;
  color: #cbd5e1 !important;
}

/* ──────────────────────────────────────────────
   CARD BODY
   ────────────────────────────────────────────── */
.proj-body {
  padding: 1.125rem 1.25rem;
  background: rgba(7, 11, 21, 0.85);
}

.proj-title {
  font-family: var(--font-display, 'Outfit', sans-serif);
  font-size: 0.975rem;
  font-weight: 700;
  color: #f1f5f9;
  margin: 0 0 0.625rem;
}

.proj-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
}

.proj-tag {
  padding: 0.2rem 0.55rem;
  border-radius: 0.375rem;
  font-size: 0.62rem;
  font-weight: 500;
  color: #94a3b8;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
</style>
