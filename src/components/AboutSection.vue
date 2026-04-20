<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

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
            class="bg-white border border-slate-200 shadow-sm dark:bg-[#1E293B]/40 dark:backdrop-blur-xl dark:border-white/10 dark:shadow-none rounded-2xl p-6 flex flex-col gap-3"
            :class="`delay-${(i + 1) * 100}`"
          >
            <i
              :class="item.fa"
              class="text-3xl mb-1"
              :style="{ color: item.color, filter: `drop-shadow(0 0 8px ${item.color}60)` }"
              aria-hidden="true"
            ></i>
            <div>
              <div class="font-display font-bold text-slate-900 dark:text-white text-lg" style="font-family: 'Outfit', sans-serif;">
                {{ t(`about.highlights.${item.label.toLowerCase().split(' ')[1] || item.label.toLowerCase()}`) }}
              </div>
              <div class="text-xs text-slate-600 dark:text-gray-400 mt-0.5 leading-relaxed">{{ t(`about.highlights.${item.label.toLowerCase().split(' ')[1] ? item.label.toLowerCase().split(' ')[1] + '_sub' : item.label.toLowerCase() === 'informatika' ? 'unsoed' : item.label.toLowerCase() + '_sub'}`) }}</div>
            </div>
          </div>
        </div>

        <!-- Right: Bio text -->
        <div ref="textRef" class="fade-in-right space-y-6">
          <div>
            <p class="section-label">{{ t('about.label') }}</p>
            <h2 class="section-title">
              {{ t('about.title_start') }}
              <span style="background: linear-gradient(135deg, #38bdf8, #34d399); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
                {{ t('about.title_highlight') }}
              </span>
              {{ t('about.title_end') }}
            </h2>
          </div>

          <p class="text-slate-600 dark:text-slate-300 leading-8 text-base">
            {{ t('about.desc_1') }}
          </p>

          <p class="text-slate-500 dark:text-slate-400 leading-8 text-sm">
            {{ t('about.desc_2') }}
          </p>

          <div class="flex gap-4 flex-wrap pt-2">
            <div class="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <div class="w-2 h-2 rounded-full bg-green-500 dark:bg-green-400" style="box-shadow: 0 0 8px rgba(52,211,153,0.8);"></div>
              {{ t('about.status') }}
            </div>
            <div class="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <div class="w-2 h-2 rounded-full bg-sky-500 dark:bg-sky-400"></div>
              {{ t('about.location') }}
            </div>
          </div>

          <a href="#projects" class="btn-ghost inline-flex">
            {{ t('about.cta') }}
          </a>
        </div>

      </div>
    </div>
  </section>
</template>
