<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Experience {
  id: number
  role: string
  company: string
  date: string
  type: 'ACADEMIC' | 'INTERNSHIP' | 'ORGANIZATION'
  description: string
}

const experiences: Experience[] = [
  {
    id: 1,
    role: 'Asisten Praktikum Pemrograman Website',
    company: 'Laboratorium Informatika Unsoed',
    date: 'Agustus 2025 – Januari 2026',
    type: 'ACADEMIC',
    description:
      'Membimbing mahasiswa dalam praktik pengembangan website, membantu troubleshooting kode, dan menilai tugas.',
  },
  {
    id: 2,
    role: 'Asisten Praktikum Sistem Operasi',
    company: 'Laboratorium Informatika Unsoed',
    date: 'Februari – Juli 2025',
    type: 'ACADEMIC',
    description:
      'Memandu jalannya praktikum, menjelaskan konsep dasar sistem operasi, dan mengevaluasi hasil praktik mahasiswa.',
  },
  {
    id: 3,
    role: 'IT Support Technician (Internship)',
    company: 'PT Starindo Jaya Packaging',
    date: 'Juli – Agustus 2025',
    type: 'INTERNSHIP',
    description:
      'Memberikan dukungan teknis untuk optimalisasi dan pemeliharaan perangkat keras serta lunak perusahaan.',
  },
  {
    id: 4,
    role: 'User Interface Designer (Internship)',
    company: 'PT Cazh Teknologi Inovasi',
    date: 'April – Mei 2025',
    type: 'INTERNSHIP',
    description:
      'Merancang antarmuka (UI) dan prototipe aplikasi mobile secara kolaboratif menggunakan perangkat lunak Figma.',
  },
  {
    id: 5,
    role: 'Content Creator (Internship)',
    company: 'PT Cazh Teknologi Inovasi',
    date: 'Maret – Mei 2024',
    type: 'INTERNSHIP',
    description:
      'Merancang strategi, memproduksi konten, serta mengelola dan menganalisis kinerja publikasi media sosial.',
  },
  {
    id: 6,
    role: 'Ketua Divisi Medkominfo',
    company: 'Pengurus HMIF UNSOED',
    date: 'Maret – Desember 2025',
    type: 'ORGANIZATION',
    description:
      'Memimpin dan mengelola seluruh agenda kerja divisi Medkominfo, termasuk pengelolaan dan optimasi media sosial.',
  },
]

// ── Scroll fill logic ──────────────────────────────────────────────
const sectionRef = ref<HTMLElement | null>(null)
const scrollProgress = ref(0)

function updateProgress() {
  if (!sectionRef.value) return
  const rect = sectionRef.value.getBoundingClientRect()
  const sh = sectionRef.value.offsetHeight
  const wh = window.innerHeight
  // 0% when section top hits viewport bottom; 100% when section bottom hits viewport top
  const raw = ((wh - rect.top) / (sh + wh)) * 100
  scrollProgress.value = Math.min(100, Math.max(0, raw))
}

// Dot i lights up when scrollProgress exceeds its mapped threshold (15%–85% spread)
function isDotActive(i: number): boolean {
  const n = experiences.length
  const threshold = n <= 1 ? 15 : 15 + (i / (n - 1)) * 70
  return scrollProgress.value >= threshold
}

onMounted(() => {
  window.addEventListener('scroll', updateProgress, { passive: true })
  updateProgress()
})
onUnmounted(() => window.removeEventListener('scroll', updateProgress))

// ── Badge styles ──────────────────────────────────────────
const badge: Record<Experience['type'], { bg: string; border: string; color: string; label: string }> = {
  ACADEMIC:     { bg: 'rgba(129,140,248,0.12)', border: 'rgba(129,140,248,0.30)', color: '#a5b4fc', label: 'Academic'     },
  INTERNSHIP:   { bg: 'rgba(56,189,248,0.12)',  border: 'rgba(56,189,248,0.30)',  color: '#7dd3fc', label: 'Internship'   },
  ORGANIZATION: { bg: 'rgba(52,211,153,0.12)',  border: 'rgba(52,211,153,0.30)',  color: '#6ee7b7', label: 'Organization' },
}

// ── Icon map (FontAwesome class strings) ──────────────────────────
const typeIcon: Record<string, string> = {
  ACADEMIC:     'fa-solid fa-building-columns',
  INTERNSHIP:   'fa-solid fa-briefcase',
  ORGANIZATION: 'fa-solid fa-users',
}
</script>

<template>
  <section id="experience" ref="sectionRef" class="py-12 md:py-24 scroll-mt-24">
    <div class="section-container">

      <!-- Section header -->
      <div class="text-center mb-10 md:mb-16">
        <p class="section-label">Experience</p>
        <h2 class="section-title">Pengalaman Profesional</h2>
        <p class="text-slate-500 dark:text-slate-400 mt-3 max-w-xl mx-auto text-sm leading-relaxed px-4 md:px-0">
          Perjalanan dari dunia akademik hingga industri nyata — membangun keahlian lintas domain
          teknologi dan desain.
        </p>
      </div>

      <!-- ─────────────────────────────────────────────────────────── -->
      <!--  TIMELINE WRAPPER                                           -->
      <!-- ─────────────────────────────────────────────────────────── -->
      <div class="relative">

        <!-- ── Vertical line (left-5 mobile / left-1/2 desktop) ── -->
        <div
          class="absolute left-5 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 z-0 rounded-full overflow-hidden"
        >
          <!-- Track -->
          <div class="absolute inset-0 bg-slate-200 dark:bg-white/10 rounded-full"></div>
          <!-- Animated fill -->
          <div
            class="absolute top-0 left-0 w-full rounded-full transition-[height] duration-200 ease-out"
            :style="{
              height: scrollProgress + '%',
              background: 'linear-gradient(to bottom, #38bdf8 0%, #818cf8 50%, #34d399 100%)',
            }"
          ></div>
        </div>

        <!-- ─────────────────────────────────────────────────────── -->
        <!--  TIMELINE ITEMS                                         -->
        <!-- ─────────────────────────────────────────────────────── -->
        <div
          v-for="(exp, i) in experiences"
          :key="exp.id"
          class="relative mb-12 last:mb-0
                 pl-14
                 md:pl-0 md:grid md:grid-cols-[1fr_48px_1fr]"
        >

          <!-- ── Mobile dot (absolute, hidden md+) ── -->
          <div
            class="md:hidden absolute left-5 top-7 -translate-x-1/2 z-10
                   w-3.5 h-3.5 rounded-full border-4 transition-all duration-500 bg-white border-blue-500 dark:bg-[#0B1120] dark:border-blue-400"
            :style="isDotActive(i)
              ? 'background:#38bdf8; border-color:#38bdf8; box-shadow:0 0 14px rgba(56,189,248,0.85);'
              : ''"
          ></div>

          <!-- ── Desktop LEFT column ── -->
          <!--   Even i → card on left, right-aligned inside column   -->
          <!--   Odd  i → date label on left, right-aligned            -->
          <div
            class="hidden md:flex md:items-start md:col-start-1 md:row-start-1"
            :class="i % 2 === 0 ? 'md:justify-end md:pr-10' : 'md:justify-end md:pr-10 md:pt-1'"
          >
            <!-- EVEN → Card -->
            <template v-if="i % 2 === 0">
              <article
                class="w-full max-w-sm rounded-2xl p-5 transition-all duration-300
                       hover:-translate-y-1 cursor-default
                       bg-white border border-slate-200 shadow-sm
                       dark:bg-[#1E293B]/40 dark:backdrop-blur-xl dark:border-white/10 dark:shadow-none"
                @mouseover="($event.currentTarget as HTMLElement).style.boxShadow='0 0 24px rgba(56,189,248,0.16)'"
                @mouseleave="($event.currentTarget as HTMLElement).style.boxShadow='none'"
              >
                <div class="flex items-start justify-between gap-2 mb-3">
                  <div class="flex items-center gap-2">
                    <i :class="typeIcon[exp.type]" class="text-base shrink-0" :style="{ color: badge[exp.type].color }" aria-hidden="true"></i>
                    <div>
                      <h3 class="text-slate-900 dark:text-white font-semibold text-sm leading-snug">{{ exp.role }}</h3>
                      <p class="text-slate-500 text-xs mt-0.5">{{ exp.company }}</p>
                    </div>
                  </div>
                  <span
                    class="shrink-0 px-2 py-0.5 rounded-full text-[0.6rem] font-bold uppercase tracking-wide"
                    :style="`background:${badge[exp.type].bg}; border:1px solid ${badge[exp.type].border}; color:${badge[exp.type].color};`"
                  >{{ badge[exp.type].label }}</span>
                </div>
                <p class="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">{{ exp.description }}</p>
              </article>
            </template>

            <!-- ODD → Date label (right-aligned text) -->
            <template v-else>
              <div class="text-right pt-2">
                <p class="text-xs font-semibold tracking-wide" style="color:#38bdf8;">{{ exp.date }}</p>
                <p class="text-slate-500 text-xs mt-1">{{ exp.company }}</p>
              </div>
            </template>
          </div>

          <!-- ── Desktop CENTER dot (hidden mobile) ── -->
          <div
            class="hidden md:flex md:justify-center md:items-start md:pt-6
                   md:col-start-2 md:row-start-1 z-10"
          >
            <div
              class="w-4 h-4 rounded-full border-4 transition-all duration-500 shrink-0 bg-white border-blue-500 dark:bg-[#0B1120] dark:border-blue-400"
              :style="isDotActive(i)
                ? 'background:#38bdf8; border-color:#7dd3fc; box-shadow:0 0 18px rgba(56,189,248,0.85);'
                : ''"
            ></div>
          </div>

          <!-- ── Desktop RIGHT column / Mobile main column ── -->
          <!--   Even i → date label on right                         -->
          <!--   Odd  i → card on right                               -->
          <div
            class="md:col-start-3 md:row-start-1 md:flex md:items-start"
            :class="i % 2 === 0 ? 'md:pl-10 md:pt-1' : 'md:pl-10'"
          >
          <!-- Mobile: always show the card -->
          <div class="md:hidden w-full">
            <article
              class="rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 cursor-default
                     bg-white border border-slate-200 shadow-sm
                     dark:bg-[#1E293B]/40 dark:backdrop-blur-xl dark:border-white/10 dark:shadow-none"
              @mouseover="($event.currentTarget as HTMLElement).style.boxShadow='0 0 24px rgba(56,189,248,0.16)'"
              @mouseleave="($event.currentTarget as HTMLElement).style.boxShadow=''"
            >
                <div class="flex items-start justify-between gap-2 mb-3">
                  <div class="flex items-center gap-2">
                    <i :class="typeIcon[exp.type]" class="text-base shrink-0" :style="{ color: badge[exp.type].color }" aria-hidden="true"></i>
                    <div>
                      <h3 class="text-slate-900 dark:text-white font-semibold text-sm leading-snug">{{ exp.role }}</h3>
                      <p class="text-slate-500 text-xs mt-0.5">{{ exp.company }}</p>
                    </div>
                  </div>
                  <span
                    class="shrink-0 px-2 py-0.5 rounded-full text-[0.6rem] font-bold uppercase tracking-wide"
                    :style="`background:${badge[exp.type].bg}; border:1px solid ${badge[exp.type].border}; color:${badge[exp.type].color};`"
                  >{{ badge[exp.type].label }}</span>
                </div>
                <p class="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">{{ exp.description }}</p>
                <p class="text-[0.65rem] font-semibold tracking-wide mt-3" style="color:#38bdf8;">
                  {{ exp.date }}
                </p>
              </article>
            </div>

            <!-- Desktop: EVEN → date label on right -->
            <template v-if="i % 2 === 0">
              <div class="hidden md:block pt-2">
                <p class="text-xs font-semibold tracking-wide" style="color:#38bdf8;">{{ exp.date }}</p>
                <p class="text-slate-500 text-xs mt-1">{{ exp.company }}</p>
              </div>
            </template>

            <!-- Desktop: ODD → card on right -->
            <template v-else>
              <article
                class="hidden md:block w-full max-w-sm rounded-2xl p-5 transition-all duration-300
                       hover:-translate-y-1 cursor-default
                       bg-white border border-slate-200 shadow-sm
                       dark:bg-[#1E293B]/40 dark:backdrop-blur-xl dark:border-white/10 dark:shadow-none"
                @mouseover="($event.currentTarget as HTMLElement).style.boxShadow='0 0 24px rgba(56,189,248,0.16)'"
                @mouseleave="($event.currentTarget as HTMLElement).style.boxShadow=''"
              >
                <div class="flex items-start justify-between gap-2 mb-3">
                  <div class="flex items-center gap-2">
                    <i :class="typeIcon[exp.type]" class="text-base shrink-0" :style="{ color: badge[exp.type].color }" aria-hidden="true"></i>
                    <div>
                      <h3 class="text-slate-900 dark:text-white font-semibold text-sm leading-snug">{{ exp.role }}</h3>
                      <p class="text-slate-500 text-xs mt-0.5">{{ exp.company }}</p>
                    </div>
                  </div>
                  <span
                    class="shrink-0 px-2 py-0.5 rounded-full text-[0.6rem] font-bold uppercase tracking-wide"
                    :style="`background:${badge[exp.type].bg}; border:1px solid ${badge[exp.type].border}; color:${badge[exp.type].color};`"
                  >{{ badge[exp.type].label }}</span>
                </div>
                <p class="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">{{ exp.description }}</p>
              </article>
            </template>

          </div>

        </div>
        <!-- end v-for -->

      </div>
      <!-- end timeline wrapper -->

    </div>
  </section>
</template>
