<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

// 1. ASSET IMPORTS
import larasenaThumb from '@/assets/projects/larasena.png'
import menasproThumb from '@/assets/projects/menaspro.png'
import warungOrangeThumb from '@/assets/projects/nasikebuliumkm-web.png'
import facetendThumb from '@/assets/projects/facetend.png'
import warunginThumb from '@/assets/projects/warungin-web.png'
import tiketingThumb from '@/assets/projects/tiketing-web.png'
import poscafeThumb from '@/assets/projects/poscafe-web.png'

interface Project {
  id: number
  title: string
  categories: string[]
  description: string
  techStack: string[]
  thumbnail: string
}

// 1. DATA CLEANUP & UNIQUE PROJECTS
const projects: Project[] = [
  {
    id: 1,
    title: "Larasena",
    categories: ["Web Development"],
    description: "Aplikasi Terintegrasi Peta Leaflet JS dan Fitur Generate AI Batik.",
    techStack: ["Laravel", "Vue 3", "Tailwind CSS", "MySQL"],
    thumbnail: larasenaThumb
  },
  {
    id: 2,
    title: "Menaspro",
    categories: ["Web Development"],
    description: "Aplikasi Analisis Data Mahasiswa menggunakan algoritma K-Means Clustering.",
    techStack: ["Laravel", "Vue 3", "Leaflet JS", "Tailwind CSS"],
    thumbnail: menasproThumb
  },
  {
    id: 3,
    title: "Warung Orange",
    categories: ["Web Development"],
    description: "Marketplace Interaktif UMKM dengan Sistem Pembayaran Midtrans.",
    techStack: ["Laravel", "Livewire", "Filament", "MySQL"],
    thumbnail: warungOrangeThumb
  },
  {
    id: 4,
    title: "Facetend",
    categories: ["Web Development", "Mobile Development"],
    description: "Sistem Absensi Karyawan menggunakan Face Recognition API dan Validasi Geolokasi.",
    techStack: ["Flutter", "Firebase", "Face Recognition"],
    thumbnail: facetendThumb
  },
  {
    id: 5,
    title: "Warungin",
    categories: ["Web Development", "Mobile Development"],
    description: "Digitalisasi UMKM dengan Integrasi Pembayaran Midtrans dan Aplikasi Flutter.",
    techStack: ["Flutter", "Laravel", "Midtrans"],
    thumbnail: warunginThumb
  },
  {
    id: 6,
    title: "Tiketing System",
    categories: ["Web Development", "Mobile Development"],
    description: "Platform Manajemen Tiket dan Reservasi Event Terintegrasi.",
    techStack: ["Laravel", "Vue 3", "MySQL", "Tailwind CSS"],
    thumbnail: tiketingThumb
  },
  {
    id: 7,
    title: "Poscafe",
    categories: ["Web Development", "Mobile Development"],
    description: "Sistem Kasir Digital Terintegrasi untuk Manajemen Bisnis Kuliner.",
    techStack: ["Laravel", "Vue 3", "Midtrans", "Tailwind CSS"],
    thumbnail: poscafeThumb
  },
  {
    id: 8,
    title: "UI/UX & Graphic Design",
    categories: ["UI/UX Design", "Graphic Design"],
    description: "Portofolio desain sedang dalam proses kurasi dan akan segera hadir.",
    techStack: ["Figma", "Photoshop", "Illustrator"],
    thumbnail: ""
  }
]

/* ─────────────────────────────────────────────────────────────
   FILTER SYSTEM
───────────────────────────────────────────────────────────── */
// 4. TAB FUNCTIONALITY INTACT
const categories = [
  'All',
  'Web Development',
  'Mobile Development',
  'UI/UX Design',
  'Graphic Design',
]
const activeCategory = ref('All')

const filteredProjects = computed(() => {
  if (activeCategory.value === 'All') return projects;
  return projects.filter(p => p.categories.includes(activeCategory.value));
})

function setCategory(cat: string) {
  activeCategory.value = cat
}

/* ─────────────────────────────────────────────────────────────
   SCROLL ANIMATION
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
  <section id="projects" class="relative py-16 md:py-28 scroll-mt-24 overflow-hidden">
    <!-- Ambient glows -->
    <div class="proj-glow proj-glow--blue" aria-hidden="true"></div>
    <div class="proj-glow proj-glow--purple" aria-hidden="true"></div>

    <div class="section-container relative z-10">
      <!-- Section header -->
      <div ref="headerRef" class="fade-in-up mb-10 text-center">
        <p class="section-label">Portfolio</p>
        <h2 class="section-title">Project <span class="glow-text">Showcase</span></h2>
        <p class="text-slate-500 dark:text-slate-400 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
          Koleksi proyek yang dibangun dengan passion — dari hackathon hingga produk nyata.
        </p>
      </div>

      <!-- TAB FILTER BAR -->
      <div ref="tabsRef" class="tabs-wrapper fade-in-up delay-100 mb-10 md:mb-12">
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

      <!-- PROJECT GRID -->
      <TransitionGroup name="proj" tag="div" class="proj-grid">
        <!-- 2. AESTHETIC RESTORATION & UNIQUE KEY -->
        <article 
          v-for="project in filteredProjects" 
          :key="project.id" 
          class="relative group bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm dark:bg-[#1E293B]/40 dark:backdrop-blur-xl dark:border-white/10 dark:shadow-none transition-all duration-300 hover:-translate-y-2 flex flex-col"
        >
          <!-- 3. THUMBNAIL INTEGRATION -->
          <div class="relative h-[14rem] overflow-hidden bg-slate-100 dark:bg-slate-800/50 flex items-center justify-center">
            <img 
              v-if="project.thumbnail"
              :src="project.thumbnail" 
              :alt="project.title" 
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            >
            <div v-else class="text-slate-400 dark:text-slate-500 font-medium tracking-widest uppercase text-sm">
              Coming Soon
            </div>
            
            <!-- Accent glow blob for aesthetics -->
            <div class="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-500 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-all duration-500 pointer-events-none"></div>
          </div>

          <!-- Card body -->
          <div class="p-6 flex flex-col flex-grow">
            <!-- Category Badge (above title) -->
            <div class="mb-3 text-[0.7rem] font-extrabold text-blue-500 dark:text-blue-400 uppercase tracking-widest bg-blue-50 dark:bg-blue-900/20 px-2.5 py-1 rounded-md border border-blue-100 dark:border-blue-800/30 line-clamp-1 truncate w-fit max-w-full">
              {{ project.categories.join(', ') }}
            </div>
            
            <h3 class="font-display font-bold text-[1.15rem] text-slate-900 dark:text-white mb-2 leading-snug">
              {{ project.title }}
            </h3>
            
            <p class="text-sm text-slate-600 dark:text-gray-400 mb-5 line-clamp-3">
              {{ project.description }}
            </p>

            <!-- Tech Stack Tags -->
            <div class="flex flex-wrap gap-2 mt-auto">
              <span 
                v-for="tech in project.techStack" 
                :key="tech" 
                class="px-3 py-1 text-xs rounded-full bg-slate-100 text-slate-600 border border-slate-200 dark:bg-white/5 dark:text-gray-300 dark:border-white/10"
              >
                {{ tech }}
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
  width: 100%;
  max-width: 100%;
  overflow: hidden;
}

.tabs-track {
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  padding-bottom: 6px;
  padding-left: 1px;
  padding-right: 1px;
  max-width: 100%;
  scrollbar-width: none;
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
:global(.dark) .tab-pill {
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  color: #94a3b8;
}

.tab-pill:hover:not(.tab-pill--active) {
  color: #475569;
  background: #f1f5f9;
  border-color: #cbd5e1;
}
:global(.dark) .tab-pill:hover:not(.tab-pill--active) {
  color: #f8fafc;
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
}

.tab-pill--active {
  background: rgba(59, 130, 246, 0.1);
  border-color: rgba(59, 130, 246, 0.4);
  color: #3b82f6;
  box-shadow: 0 0 16px rgba(59, 130, 246, 0.1);
}
:global(.dark) .tab-pill--active {
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
.proj-leave-active {
  position: absolute;
}
</style>
