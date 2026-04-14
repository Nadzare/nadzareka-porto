<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Project {
  name: string
  description: string
  tags: string[]
  gradient: string
  accentColor: string
  github?: string
  live?: string
}

const projects: Project[] = [
  {
    name: 'Larasena',
    description:
      'Platform manajemen seni & budaya berbasis web. Fitur event management, galeri karya, dan sistem ticketing built with Laravel & Vue.',
    tags: ['Laravel', 'Vue 3', 'MySQL', 'Tailwind'],
    gradient: 'linear-gradient(135deg, #1e3a5f 0%, #0f2847 50%, #0b1120 100%)',
    accentColor: '#38bdf8',
    github: '#',
    live: '#',
  },
  {
    name: 'Warung Orange',
    description:
      'Sistem POS (Point of Sale) untuk warung makan dengan fitur manajemen menu, transaksi real-time, dan laporan penjualan.',
    tags: ['Laravel', 'Livewire', 'MySQL'],
    gradient: 'linear-gradient(135deg, #3d1a00 0%, #2a1200 50%, #0b1120 100%)',
    accentColor: '#fb923c',
    github: '#',
  },
  {
    name: 'FaceTend',
    description:
      'Aplikasi absensi berbasis pengenalan wajah untuk pengelolaan kehadiran karyawan dengan akurasi tinggi.',
    tags: ['Flutter', 'Firebase', 'Face Recognition'],
    gradient: 'linear-gradient(135deg, #1a1f3d 0%, #0f1429 50%, #0b1120 100%)',
    accentColor: '#818cf8',
    github: '#',
  },
  {
    name: 'Menaspro',
    description:
      'Aplikasi manajemen proyek tim dengan kanban board, task tracking, dan kolaborasi real-time antar anggota.',
    tags: ['Vue 3', 'Node.js', 'PostgreSQL', 'Socket.io'],
    gradient: 'linear-gradient(135deg, #1a3d2f 0%, #0f2920 50%, #0b1120 100%)',
    accentColor: '#34d399',
    github: '#',
    live: '#',
  },
  {
    name: 'Foodwise',
    description:
      'Aplikasi rekomendasi makanan berdasarkan kandungan gizi & preferensi diet, dengan fitur meal planning mingguan.',
    tags: ['Flutter', 'Dart', 'Firebase', 'REST API'],
    gradient: 'linear-gradient(135deg, #3d2a1a 0%, #291c0f 50%, #0b1120 100%)',
    accentColor: '#fbbf24',
    github: '#',
  },
  {
    name: 'SyncMA Dashboard',
    description:
      'Dashboard analytics & manajemen untuk platform SyncMA — visualisasi data, monitoring performa, dan insight pengguna.',
    tags: ['Vue 3', 'TypeScript', 'Chart.js', 'Tailwind'],
    gradient: 'linear-gradient(135deg, #1f1a3d 0%, #140f2e 50%, #0b1120 100%)',
    accentColor: '#a78bfa',
    github: '#',
    live: '#',
  },
  {
    name: 'Nasi Kebuli Ajibarang',
    description:
      'Website profil & pemesanan online untuk restoran lokal dengan sistem manajemen menu dan reservasi meja.',
    tags: ['Laravel', 'Blade', 'MySQL', 'Bootstrap'],
    gradient: 'linear-gradient(135deg, #3d1a1a 0%, #290f0f 50%, #0b1120 100%)',
    accentColor: '#f87171',
    github: '#',
  },
  {
    name: 'Ticketing System',
    description:
      'Sistem tiket digital event Tuk Sirah — QR code generation, verifikasi gerbang, dan dashboard panitia real-time.',
    tags: ['Laravel', 'Vue 3', 'QR Code', 'MySQL'],
    gradient: 'linear-gradient(135deg, #1a2d3d 0%, #0f1f2e 50%, #0b1120 100%)',
    accentColor: '#22d3ee',
    github: '#',
    live: '#',
  },
]

const headerRef = ref<HTMLElement | null>(null)
const cardRefs = ref<HTMLElement[]>([])

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
  cardRefs.value.forEach((el) => el && observer.observe(el))
})
</script>

<template>
  <section id="projects" class="py-24 scroll-mt-24">
    <div class="section-container">

      <!-- Header -->
      <div ref="headerRef" class="fade-in-up mb-14 text-center">
        <p class="section-label">Projects</p>
        <h2 class="section-title">Project Showcase</h2>
        <p class="text-slate-400 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
          Koleksi proyek yang dibangun dengan passion — dari hackathon hingga produk nyata.
        </p>
      </div>

      <!-- Project Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        <article
          v-for="(project, i) in projects"
          :key="project.name"
          :ref="(el) => { if (el) cardRefs[i] = el as HTMLElement }"
          class="fade-in-up group relative overflow-hidden rounded-2xl cursor-pointer"
          :class="`delay-${Math.min((i % 3 + 1) * 100, 400)}`"
          style="border: 1px solid rgba(255,255,255,0.08); transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;"
          @mouseover="($event.currentTarget as HTMLElement).style.borderColor = `${project.accentColor}50`; ($event.currentTarget as HTMLElement).style.boxShadow = `0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px ${project.accentColor}20`; ($event.currentTarget as HTMLElement).style.transform = 'translateY(-8px)'"
          @mouseleave="($event.currentTarget as HTMLElement).style.borderColor = ''; ($event.currentTarget as HTMLElement).style.boxShadow = ''; ($event.currentTarget as HTMLElement).style.transform = ''"
        >

          <!-- Thumbnail with gradient  -->
          <div
            class="relative h-48 overflow-hidden"
            :style="{ background: project.gradient }"
          >
            <!-- Pattern overlay -->
            <div
              class="absolute inset-0 opacity-20"
              style="background-image: radial-gradient(circle at 30% 50%, rgba(255,255,255,0.1) 0%, transparent 60%), linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.03) 100%);"
            ></div>
            <!-- Accent glow -->
            <div
              class="absolute -bottom-8 -right-8 w-32 h-32 rounded-full blur-2xl opacity-40 transition-all duration-500 group-hover:opacity-70 group-hover:scale-150"
              :style="{ background: project.accentColor }"
            ></div>
            <!-- Project name watermark -->
            <div
              class="absolute bottom-4 left-5 font-display font-black text-2xl opacity-20 select-none"
              style="font-family: 'Outfit', sans-serif;"
            >{{ project.name }}</div>

            <!-- Hover overlay -->
            <div
              class="absolute inset-0 flex flex-col justify-end p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"
              style="background: linear-gradient(to top, rgba(7,11,21,0.97) 0%, rgba(7,11,21,0.85) 60%, transparent 100%);"
            >
              <p class="text-slate-200 text-xs leading-relaxed mb-3">{{ project.description }}</p>
              <div class="flex gap-2">
                <a
                  v-if="project.github"
                  :href="project.github"
                  target="_blank"
                  rel="noopener"
                  class="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200"
                  :style="`background: ${project.accentColor}20; border: 1px solid ${project.accentColor}50; color: ${project.accentColor};`"
                >
                  <svg class="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.28-.01-1.03-.02-2.03-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.85 1.24 1.85 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.005 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22 0 1.61-.01 2.9-.01 3.29 0 .32.21.7.82.58C20.57 21.8 24 17.31 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
                <a
                  v-if="project.live"
                  :href="project.live"
                  target="_blank"
                  rel="noopener"
                  class="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-slate-300 transition-all duration-200"
                  style="background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.15);"
                >
                  <svg class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                  Live
                </a>
              </div>
            </div>
          </div>

          <!-- Card body -->
          <div class="p-5" style="background: rgba(7, 11, 21, 0.90);">
            <h3 class="text-white font-semibold text-base mb-2">{{ project.name }}</h3>
            <div class="flex flex-wrap gap-1.5">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="px-2 py-0.5 rounded-md text-[0.65rem] font-medium"
                style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.10); color: #94a3b8;"
              >{{ tag }}</span>
            </div>
          </div>

        </article>
      </div>

    </div>
  </section>
</template>
