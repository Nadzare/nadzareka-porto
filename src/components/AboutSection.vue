<script setup lang="ts">
import { ref, onMounted } from 'vue'

const sectionRef = ref<HTMLElement | null>(null)
const textRef = ref<HTMLElement | null>(null)
const statsRef = ref<HTMLElement | null>(null)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
        }
      })
    },
    { threshold: 0.15 },
  )
  if (sectionRef.value) observer.observe(sectionRef.value)
  if (textRef.value) observer.observe(textRef.value)
  if (statsRef.value) observer.observe(statsRef.value)
})

const highlights = [
  { fa: 'fa-solid fa-graduation-cap', color: '#60a5fa', label: 'Informatika',    sub: 'Universitas Jenderal Soedirman'   },
  { fa: 'fa-solid fa-trophy',         color: '#fbbf24', label: '7 Awards',       sub: 'National & Regional Competitions' },
  { fa: 'fa-solid fa-briefcase',      color: '#60a5fa', label: '2 Internships',  sub: 'PT Starindo & PT Cazh'            },
  { fa: 'fa-solid fa-rocket',         color: '#38bdf8', label: '8+ Projects',    sub: 'Web, Mobile & Design'             },
]
</script>

<template>
  <section id="about" class="py-24 scroll-mt-24">
    <div class="section-container">
      <div class="grid lg:grid-cols-2 gap-14 items-center">

        <!-- Left: Stat cards -->
        <div ref="sectionRef" class="fade-in-left grid grid-cols-2 gap-4">
          <div
            v-for="(item, i) in highlights"
            :key="item.label"
            class="glass-card rounded-2xl p-6 flex flex-col gap-3"
            :class="`delay-${(i + 1) * 100}`"
          >
            <!-- FontAwesome icon with per-card accent colour -->
            <i
              :class="item.fa"
              class="text-3xl mb-1"
              :style="{ color: item.color, filter: `drop-shadow(0 0 8px ${item.color}60)` }"
              aria-hidden="true"
            ></i>
            <div>
              <div class="font-display font-bold text-slate-900 dark:text-white text-lg" style="font-family: 'Outfit', sans-serif;">
                {{ item.label }}
              </div>
              <div class="text-xs text-slate-500 mt-0.5 leading-relaxed">{{ item.sub }}</div>
            </div>
          </div>
        </div>

        <!-- Right: Bio text -->
        <div ref="textRef" class="fade-in-right space-y-6">
          <div>
            <p class="section-label">About Me</p>
            <h2 class="section-title">
              Membangun Solusi Digital yang
              <span style="background: linear-gradient(135deg, #38bdf8, #34d399); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
                fungsional dan berdampak
              </span>
            </h2>
          </div>

          <p class="text-slate-600 dark:text-slate-300 leading-8 text-base">
            Mahasiswa aktif Informatika yang berfokus pada pengembangan sistem informasi, desain UI/UX,
            dan strategi digital. Memiliki pengalaman komprehensif dalam merancang solusi teknologi dari
            tahap konseptual hingga eksekusi visual, termasuk pembuatan aset grafis dan manajemen media sosial.
          </p>

          <p class="text-slate-500 dark:text-slate-400 leading-8 text-sm">
            Pribadi yang analitis, inovatif, dan siap berkolaborasi dalam tim untuk menciptakan produk
            digital yang berdampak nyata. Passionate tentang intersection of design and engineering —
            membuat hal yang indah sekaligus berfungsi dengan baik.
          </p>

          <div class="flex gap-4 flex-wrap pt-2">
            <div class="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <div class="w-2 h-2 rounded-full bg-green-500 dark:bg-green-400" style="box-shadow: 0 0 8px rgba(52,211,153,0.8);"></div>
              Open to opportunities
            </div>
            <div class="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <div class="w-2 h-2 rounded-full bg-sky-500 dark:bg-sky-400"></div>
              Based in Purwokerto, Indonesia
            </div>
          </div>

          <a href="#projects" class="btn-ghost inline-flex">
            View My Work →
          </a>
        </div>

      </div>
    </div>
  </section>
</template>
