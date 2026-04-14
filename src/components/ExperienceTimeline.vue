<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface ExperienceItem {
  role: string
  company: string
  period: string
  type: 'Internship' | 'Academic' | 'Full-time'
  description: string
  color: string
  initials: string
}

const experiences: ExperienceItem[] = [
  {
    role: 'Asisten Praktikum Pemrograman Website',
    company: 'Lab Informatika Unsoed',
    period: 'Agustus 2025 – Januari 2026',
    type: 'Academic',
    description:
      'Membimbing mahasiswa dalam praktikum pemrograman web, materi HTML, CSS, JavaScript, dan PHP dasar.',
    color: '#818cf8',
    initials: 'LI',
  },
  {
    role: 'Asisten Praktikum Sistem Operasi',
    company: 'Lab Informatika Unsoed',
    period: 'Februari – Juli 2025',
    type: 'Academic',
    description:
      'Mengajar konsep sistem operasi, manajemen proses, memori, dan file system kepada mahasiswa semester 2.',
    color: '#a78bfa',
    initials: 'LI',
  },
  {
    role: 'IT Support Technician',
    company: 'PT Starindo Jaya Packaging',
    period: 'Juli – Agustus 2025',
    type: 'Internship',
    description:
      'Maintenance infrastruktur IT, troubleshooting hardware & software, dan dukungan teknis operasional pabrik.',
    color: '#34d399',
    initials: 'SJ',
  },
  {
    role: 'User Interface Designer',
    company: 'PT Cazh Teknologi Inovasi',
    period: 'April – Mei 2025',
    type: 'Internship',
    description:
      'Merancang antarmuka produk fintech Cazh, membuat wireframe, prototype Figma, dan design system.',
    color: '#38bdf8',
    initials: 'CZ',
  },
  {
    role: 'Content Creator',
    company: 'PT Cazh Teknologi Inovasi',
    period: 'Maret – Mei 2024',
    type: 'Internship',
    description:
      'Produksi konten visual untuk media sosial brand Cazh, termasuk desain grafis, copywriting, dan scheduling.',
    color: '#f472b6',
    initials: 'CZ',
  },
]

const typeBadgeStyle: Record<string, string> = {
  Internship: 'background: rgba(56,189,248,0.12); border: 1px solid rgba(56,189,248,0.30); color: #7dd3fc;',
  Academic: 'background: rgba(129,140,248,0.12); border: 1px solid rgba(129,140,248,0.30); color: #a5b4fc;',
  'Full-time': 'background: rgba(52,211,153,0.12); border: 1px solid rgba(52,211,153,0.30); color: #6ee7b7;',
}

const sectionRef = ref<HTMLElement | null>(null)
const cardRefs = ref<HTMLElement[]>([])

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
        }
      })
    },
    { threshold: 0.1 },
  )
  if (sectionRef.value) observer.observe(sectionRef.value)
  cardRefs.value.forEach((el) => el && observer.observe(el))
})
</script>

<template>
  <section id="experience" class="py-24 scroll-mt-24">
    <div class="section-container">

      <!-- Header -->
      <div ref="sectionRef" class="fade-in-up mb-14 text-center">
        <p class="section-label">Experience</p>
        <h2 class="section-title">Pengalaman Profesional</h2>
        <p class="text-slate-400 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
          Perjalanan karir dari dunia akademik hingga industri nyata, membangun keahlian lintas domain teknologi.
        </p>
      </div>

      <!-- Experience Cards -->
      <div class="space-y-5">
        <article
          v-for="(item, i) in experiences"
          :key="item.role"
          :ref="(el) => { if (el) cardRefs[i] = el as HTMLElement }"
          class="fade-in-up glass-card rounded-2xl p-6 lg:p-7 flex gap-5 items-start group"
          :class="`delay-${Math.min((i + 1) * 100, 500)}`"
        >
          <!-- Company Icon -->
          <div
            class="shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center font-display font-black text-sm"
            :style="{
              background: `${item.color}1a`,
              border: `1.5px solid ${item.color}40`,
              color: item.color,
              fontFamily: 'Outfit, sans-serif',
            }"
          >
            {{ item.initials }}
          </div>

          <!-- Info -->
          <div class="flex-1 min-w-0">
            <div class="flex flex-wrap items-start justify-between gap-2 mb-2">
              <div>
                <h3 class="text-white font-semibold text-base leading-tight">{{ item.role }}</h3>
                <p class="text-slate-400 text-sm mt-0.5">{{ item.company }}</p>
              </div>
              <div class="flex items-center gap-2 shrink-0">
                <span
                  class="px-2.5 py-0.5 rounded-full text-[0.65rem] font-bold uppercase tracking-wide"
                  :style="typeBadgeStyle[item.type]"
                >{{ item.type }}</span>
                <span class="text-xs text-slate-500">{{ item.period }}</span>
              </div>
            </div>
            <p class="text-slate-300 text-sm leading-relaxed">{{ item.description }}</p>
          </div>

          <!-- Glow line on hover -->
          <div
            class="shrink-0 w-0.5 self-stretch rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            :style="{ background: `linear-gradient(to bottom, ${item.color}80, transparent)` }"
          ></div>
        </article>
      </div>

    </div>
  </section>
</template>
