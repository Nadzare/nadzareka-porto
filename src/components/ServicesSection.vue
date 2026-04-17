<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Service {
  title: string
  description: string
  accentColor: string
  fa: string   // FontAwesome class string e.g. 'fa-solid fa-code'
}

const services: Service[] = [
  {
    title: 'Web Development',
    accentColor: '#38bdf8',
    description:
      'Pembuatan website performa tinggi yang responsif, SEO-friendly, dan scalable menggunakan tech-stack modern terkini.',
    fa: 'fa-solid fa-code',
  },
  {
    title: 'Mobile Development',
    accentColor: '#34d399',
    description:
      'Pembangunan aplikasi mobile cross-platform yang mulus dan interaktif untuk ekosistem iOS maupun Android.',
    fa: 'fa-solid fa-mobile-screen',
  },
  {
    title: 'UI/UX Design',
    accentColor: '#f472b6',
    description:
      'Perancangan antarmuka yang intuitif, estetik, dan sangat berfokus pada kenyamanan pengalaman interaksi pengguna.',
    fa: 'fa-solid fa-pen-ruler',
  },
  {
    title: 'IT Consultant',
    accentColor: '#fbbf24',
    description:
      'Layanan konsultasi arsitektur sistem, pemilihan tech-stack, dan eskalasi efisiensi bisnis digital untuk UMKM dan rintisan.',
    fa: 'fa-solid fa-lightbulb',
  },
  {
    title: 'Graphic Design',
    accentColor: '#fb923c',
    description:
      'Pembuatan aset visual kreatif, branding identitas, dan materi pemasaran yang menarik serta profesional.',
    fa: 'fa-solid fa-palette',
  },
  {
    title: 'Social Media Management',
    accentColor: '#818cf8',
    description:
      'Perancangan strategi konten, produksi aset visual, hingga optimasi kampanye digital untuk meningkatkan engagement.',
    fa: 'fa-solid fa-share-nodes',
  },
]

/* ── Scroll entry animation ── */
const headerRef = ref<HTMLElement | null>(null)
const cardRefs  = ref<HTMLElement[]>([])

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('is-visible') }),
    { threshold: 0.08 },
  )
  if (headerRef.value) observer.observe(headerRef.value)
  cardRefs.value.forEach((el) => el && observer.observe(el))
})
</script>

<template>
  <section id="services" class="relative py-28 scroll-mt-24 overflow-hidden">

    <!-- ── Ambient background glows ── -->
    <div class="srv-glow srv-glow--teal"   aria-hidden="true"></div>
    <div class="srv-glow srv-glow--indigo" aria-hidden="true"></div>

    <div class="section-container relative z-10">

      <!-- ── Section header ── -->
      <div ref="headerRef" class="fade-in-up mb-16 text-center">
        <p class="section-label">What I Offer</p>
        <h2 class="section-title">
          My <span class="glow-text">Services</span>
        </h2>
        <p class="text-slate-500 dark:text-slate-400 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
          Solusi digital end-to-end — dari konsep hingga produk yang siap digunakan.
        </p>
      </div>

      <!-- ── Service cards grid ── -->
      <div class="srv-grid">
        <div
          v-for="(service, i) in services"
          :key="service.title"
          :ref="(el) => { if (el) cardRefs[i] = el as HTMLElement }"
          class="srv-card group fade-in-up bg-white border border-slate-200 shadow-sm dark:bg-[#1E293B]/40 dark:backdrop-blur-xl dark:border-white/10 dark:shadow-none"
          :class="`delay-${Math.min((i + 1) * 100, 600)}`"
          :style="{ '--srv-color': service.accentColor } as any"
        >
          <!-- Glass shine overlay -->
          <div class="srv-shine" aria-hidden="true"></div>

          <!-- ── Icon ── -->
          <div class="srv-icon-wrap bg-slate-100 border border-slate-200 group-hover:bg-slate-200 dark:bg-white/5 dark:border-white/10 dark:group-hover:bg-white/10">
            <i :class="service.fa" class="srv-icon" aria-hidden="true"></i>
          </div>

          <!-- ── Title ── -->
          <h3 class="srv-title text-slate-800 dark:text-white">{{ service.title }}</h3>

          <!-- ── Description ── -->
          <p class="srv-desc text-slate-600 dark:text-gray-400">{{ service.description }}</p>

          <!-- ── CTA — pushed to bottom with mt-auto ── -->
          <div class="srv-cta">
            <div class="srv-cta-divider"></div>
            <a href="#contact" class="srv-cta-link text-slate-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
              <span>Diskusikan Proyek</span>
              <svg class="srv-cta-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 8h10M9 4l4 4-4 4"/>
              </svg>
            </a>
          </div>

        </div>
      </div>
      <!-- end grid -->

    </div>
  </section>
</template>

<style scoped>
/* ──────────────────────────────────────────────
   AMBIENT GLOWS
   ────────────────────────────────────────────── */
.srv-glow {
  position: absolute;
  border-radius: 9999px;
  filter: blur(130px);
  pointer-events: none;
  z-index: 0;
}
.srv-glow--teal {
  width: 600px; height: 400px;
  top: -40px; left: -80px;
  background: radial-gradient(ellipse, rgba(52, 211, 153, .12) 0%, transparent 70%);
  animation: blob-drift 22s ease-in-out infinite;
}
.srv-glow--indigo {
  width: 550px; height: 420px;
  bottom: -60px; right: -60px;
  background: radial-gradient(ellipse, rgba(129, 140, 248, .12) 0%, transparent 70%);
  animation: blob-drift-2 26s ease-in-out infinite;
}

/* ──────────────────────────────────────────────
   GRID
   ────────────────────────────────────────────── */
.srv-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}
@media (min-width: 768px) {
  .srv-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 1024px) {
  .srv-grid { grid-template-columns: repeat(3, 1fr); }
}

/* ──────────────────────────────────────────────
   SERVICE CARD
   ────────────────────────────────────────────── */
.srv-card {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-radius: 1.5rem;
  overflow: hidden;
  cursor: default;
  transition:
    transform 300ms cubic-bezier(.4, 0, .2, 1),
    border-color 300ms cubic-bezier(.4, 0, .2, 1),
    box-shadow 300ms cubic-bezier(.4, 0, .2, 1),
    background 300ms cubic-bezier(.4, 0, .2, 1);
}
/* Dark mode override is no longer hardcoded here */
.srv-card:hover {
  transform: translateY(-8px);
  border-color: color-mix(in srgb, var(--srv-color, #38bdf8) 45%, transparent);
  box-shadow:
    0 0 0 1px color-mix(in srgb, var(--srv-color, #38bdf8) 15%, transparent),
    0 20px 60px rgba(0, 0, 0, .12),
    0 0 40px color-mix(in srgb, var(--srv-color, #38bdf8) 10%, transparent);
}
:global(.dark) .srv-card:hover {
  background: rgba(30, 41, 59, .55);
  box-shadow:
    0 0 0 1px color-mix(in srgb, var(--srv-color, #38bdf8) 15%, transparent),
    0 20px 60px rgba(0, 0, 0, .35),
    0 0 40px color-mix(in srgb, var(--srv-color, #38bdf8) 10%, transparent);
}

/* ── Shine ── */
.srv-shine {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(135deg, rgba(255, 255, 255, .06) 0%, transparent 55%);
  pointer-events: none;
}

/* ──────────────────────────────────────────────
   ICON BOX
   ────────────────────────────────────────────── */
.srv-icon-wrap {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3.25rem;
  height: 3.25rem;
  border-radius: 0.875rem;
  flex-shrink: 0;
  transition: border-color 300ms ease, background 300ms ease, transform 300ms ease;
}
.srv-card:hover .srv-icon-wrap {
  transform: scale(1.08) rotate(-3deg);
}

/* Icon — FontAwesome i-tag, sized with font-size */
.srv-icon {
  font-size: 1.4rem;
  color: var(--srv-color, #38bdf8);
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  transition: color 300ms ease;
}

/* ──────────────────────────────────────────────
   TEXT CONTENT
   ────────────────────────────────────────────── */
.srv-title {
  font-family: var(--font-display, 'Outfit', sans-serif);
  font-size: 1.15rem;
  font-weight: 700;
  margin: 1.375rem 0 0.625rem;
  line-height: 1.25;
}

.srv-desc {
  font-size: 0.875rem;
  line-height: 1.7;
  margin: 0;
  flex: 1;
}

/* ──────────────────────────────────────────────
   BOTTOM CTA
   mt-auto is handled by .srv-cta being pushed
   down because .srv-desc has flex: 1
   ────────────────────────────────────────────── */
.srv-cta {
  margin-top: 1.5rem;
}

.srv-cta-divider {
  width: 100%;
  height: 1px;
  background: linear-gradient(
    to right,
    color-mix(in srgb, var(--srv-color, #38bdf8) 30%, transparent),
    transparent
  );
  margin-bottom: 1.125rem;
  transition: background 300ms ease;
}

.srv-cta-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.8rem;
  font-weight: 600;
  text-decoration: none;
  transition: color 220ms ease, gap 220ms ease;
}
.srv-cta-link:hover,
.srv-card:hover .srv-cta-link {
  color: #2563eb; /* text-blue-600 */
  gap: 0.6rem;
}
:global(.dark) .srv-cta-link:hover,
:global(.dark) .srv-card:hover .srv-cta-link {
  color: var(--srv-color, #38bdf8);
}

.srv-cta-arrow {
  width: 0.875rem;
  height: 0.875rem;
  flex-shrink: 0;
  transition: transform 220ms ease;
}
.srv-cta-link:hover .srv-cta-arrow,
.srv-card:hover .srv-cta-link .srv-cta-arrow {
  transform: translateX(3px);
}
</style>
