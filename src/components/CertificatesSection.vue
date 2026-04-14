<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

type CertTab = 'awards' | 'organization' | 'course'

interface AwardItem {
  title: string
  image: string
  badge: string
  badgeColor: string
}

interface OtherItem {
  title: string
  icon: string
  color: string
}

const activeTab = ref<CertTab>('awards')

const modules = [Navigation, Pagination, Autoplay]

const awards: AwardItem[] = [
  {
    title: 'FINALIST GEMASTIK XVIII 2025 — Divisi VIII Software Development',
    image: new URL('@/assets/sertifikat-gemastik.jpg', import.meta.url).href,
    badge: 'Finalist',
    badgeColor: '#fbbf24',
  },
  {
    title: 'JUARA III Hackathon — National IT Roll Out HMTI UMP 2025',
    image: new URL('@/assets/sertifikat-hackathon.png', import.meta.url).href,
    badge: 'Juara III',
    badgeColor: '#f87171',
  },
  {
    title: 'TOP V FINALIST — National Essay Competition SRE ITB 2025',
    image: new URL('@/assets/sertifikat-sre.jpg', import.meta.url).href,
    badge: 'Top 5',
    badgeColor: '#34d399',
  },
  {
    title: 'JUARA II Web Design Competition — Evolution Interium Fest Telkom University 2024',
    image: new URL('@/assets/sertifikat-webdesain.jpeg', import.meta.url).href,
    badge: 'Juara II',
    badgeColor: '#c084fc',
  },
  {
    title: 'JUARA II PKM Rektor Cup XI — Bidang PKM-PI Universitas Jenderal Soedirman 2024',
    image: new URL('@/assets/sertifikat-pkmpi.jpeg', import.meta.url).href,
    badge: 'Juara II',
    badgeColor: '#c084fc',
  },
  {
    title: 'FINALIST Web Design Competition — Carnival Technology Universitas Jember',
    image: new URL('@/assets/sertifikat-finaliswebdesain.jpeg', import.meta.url).href,
    badge: 'Finalist',
    badgeColor: '#fbbf24',
  },
  {
    title: 'JUARA III Discovery IT — Inovasi Terapan Universitas Negeri Jakarta',
    image: new URL('@/assets/sertifikat-inovasi.jpg', import.meta.url).href,
    badge: 'Juara III',
    badgeColor: '#f87171',
  },
]

const organizations: OtherItem[] = [
  { title: 'Ketua Divisi Medkominfo HMIF UNSOED 2025', icon: '📢', color: '#38bdf8' },
  { title: 'Kadiv PDD Maskrab Informatika 2025', icon: '🎨', color: '#818cf8' },
  { title: 'Staf PDD Soedirman Technophoria 2025', icon: '⚙️', color: '#34d399' },
]

const courses: OtherItem[] = [
  { title: 'Alibaba Cloud Certified Developer', icon: '☁️', color: '#fb923c' },
  { title: 'Codepolitan Fullstack Web Developer', icon: '💻', color: '#38bdf8' },
  { title: 'Pelatihan UI/UX Design', icon: '🎨', color: '#c084fc' },
]

const tabs = [
  { key: 'awards' as CertTab, label: 'Penghargaan & Kejuaraan', icon: '🏆' },
  { key: 'organization' as CertTab, label: 'Kepanitiaan & Organisasi', icon: '🤝' },
  { key: 'course' as CertTab, label: 'Bootcamp & Course', icon: '📚' },
]

const headerRef = ref<HTMLElement | null>(null)
const bodyRef = ref<HTMLElement | null>(null)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('is-visible') }),
    { threshold: 0.1 },
  )
  if (headerRef.value) observer.observe(headerRef.value)
  if (bodyRef.value) observer.observe(bodyRef.value)
})
</script>

<template>
  <section id="certificates" class="py-24 scroll-mt-24">
    <div class="section-container">

      <!-- Header -->
      <div ref="headerRef" class="fade-in-up mb-12 text-center">
        <p class="section-label">Awards</p>
        <h2 class="section-title">Sertifikat & Prestasi</h2>
        <p class="text-slate-400 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
          Pencapaian dari berbagai kompetisi nasional, organisasi, dan program pelatihan.
        </p>
      </div>

      <!-- Tabs -->
      <div class="flex flex-wrap justify-center gap-2 mb-10">
        <button
          v-for="tab in tabs"
          :key="tab.key"
          type="button"
          class="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200"
          :style="activeTab === tab.key
            ? 'background: rgba(56,189,248,0.15); border: 1px solid rgba(56,189,248,0.45); color: #7dd3fc; box-shadow: 0 0 20px rgba(56,189,248,0.20);'
            : 'background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.10); color: #94a3b8;'"
          @click="activeTab = tab.key"
        >
          <span>{{ tab.icon }}</span>
          {{ tab.label }}
        </button>
      </div>

      <!-- Content -->
      <div ref="bodyRef" class="fade-in-up delay-200">

        <!-- ── AWARDS: Swiper Carousel ── -->
        <div v-if="activeTab === 'awards'">
          <Swiper
            :modules="modules"
            :slides-per-view="1"
            :space-between="24"
            :breakpoints="{
              640: { slidesPerView: 1.4, centeredSlides: true },
              1024: { slidesPerView: 2.2, centeredSlides: true },
              1280: { slidesPerView: 2.6, centeredSlides: true },
            }"
            :navigation="true"
            :pagination="{ clickable: true }"
            :autoplay="{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }"
            :loop="true"
            class="pb-10"
          >
            <SwiperSlide v-for="award in awards" :key="award.title">
              <article
                class="overflow-hidden rounded-2xl transition-all duration-300"
                style="border: 1px solid rgba(255,255,255,0.08); background: rgba(7,11,21,0.80);"
              >
                <!-- Certificate image -->
                <div class="relative overflow-hidden" style="height: 260px;">
                  <img
                    :src="award.image"
                    :alt="award.title"
                    class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  <!-- Badge -->
                  <div
                    class="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wide"
                    :style="`background: ${award.badgeColor}25; border: 1px solid ${award.badgeColor}60; color: ${award.badgeColor};`"
                  >
                    {{ award.badge }}
                  </div>
                </div>
                <!-- Title -->
                <div class="p-5 border-t border-white/8">
                  <p class="text-slate-200 text-sm leading-relaxed font-medium">{{ award.title }}</p>
                </div>
              </article>
            </SwiperSlide>
          </Swiper>
        </div>

        <!-- ── ORGANIZATION ── -->
        <div v-else-if="activeTab === 'organization'" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <article
            v-for="item in organizations"
            :key="item.title"
            class="glass-card rounded-2xl p-6 flex items-start gap-4"
          >
            <div
              class="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
              :style="`background: ${item.color}15; border: 1px solid ${item.color}35;`"
            >
              {{ item.icon }}
            </div>
            <div>
              <p class="text-slate-200 text-sm font-semibold leading-snug">{{ item.title }}</p>
              <p class="text-slate-500 text-xs mt-1.5">Organisasi & Kepanitiaan</p>
            </div>
          </article>
        </div>

        <!-- ── BOOTCAMP / COURSE ── -->
        <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <article
            v-for="item in courses"
            :key="item.title"
            class="glass-card rounded-2xl p-6 flex items-start gap-4"
          >
            <div
              class="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
              :style="`background: ${item.color}15; border: 1px solid ${item.color}35;`"
            >
              {{ item.icon }}
            </div>
            <div>
              <p class="text-slate-200 text-sm font-semibold leading-snug">{{ item.title }}</p>
              <p class="text-slate-500 text-xs mt-1.5">Sertifikasi & Pelatihan</p>
            </div>
          </article>
        </div>

      </div>
    </div>
  </section>
</template>
