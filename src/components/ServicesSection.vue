<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Service {
  title: string
  description: string
  accentColor: string
  svg: string   // inline SVG path content
}

const services: Service[] = [
  {
    title: 'Web Development',
    accentColor: '#38bdf8',
    description:
      'Pembuatan website performa tinggi yang responsif, SEO-friendly, dan scalable menggunakan tech-stack modern terkini.',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2"/>
      <path d="M8 21h8M12 17v4"/>
      <path d="M7 8l-3 3 3 3M17 8l3 3-3 3M13 6l-2 12"/>
    </svg>`,
  },
  {
    title: 'Mobile Development',
    accentColor: '#34d399',
    description:
      'Pembangunan aplikasi mobile cross-platform yang mulus dan interaktif untuk ekosistem iOS maupun Android.',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <rect x="6" y="2" width="12" height="20" rx="2"/>
      <path d="M12 18h.01"/>
      <path d="M9 6h6"/>
    </svg>`,
  },
  {
    title: 'UI/UX Design',
    accentColor: '#f472b6',
    description:
      'Perancangan antarmuka yang intuitif, estetik, dan sangat berfokus pada kenyamanan pengalaman interaksi pengguna.',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="3"/>
      <path d="M12 3c0 0 4 3 4 9s-4 9-4 9"/>
      <path d="M12 3c0 0-4 3-4 9s4 9 4 9"/>
      <path d="M3 12h18"/>
      <circle cx="12" cy="12" r="9"/>
    </svg>`,
  },
  {
    title: 'IT Consultant',
    accentColor: '#fbbf24',
    description:
      'Layanan konsultasi arsitektur sistem, pemilihan tech-stack, dan eskalasi efisiensi bisnis digital untuk UMKM dan rintisan.',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <path d="M9 18h6M10 22h4"/>
      <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/>
      <line x1="12" y1="2" x2="12" y2="4"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="2" y1="12" x2="4" y2="12"/>
      <line x1="19.78" y1="4.22" x2="18.36" y2="5.64"/>
      <line x1="22" y1="12" x2="20" y2="12"/>
    </svg>`,
  },
  {
    title: 'Graphic Design',
    accentColor: '#fb923c',
    description:
      'Pembuatan aset visual kreatif, branding identitas, dan materi pemasaran yang menarik serta profesional.',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="13.5" cy="6.5" r="1.5"/>
      <circle cx="17.5" cy="10.5" r="1.5"/>
      <circle cx="8.5" cy="7.5" r="1.5"/>
      <circle cx="6.5" cy="12.5" r="1.5"/>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c.55 0 1.08-.05 1.6-.13"/>
      <path d="M22 12a10 10 0 0 1-.33 2.57"/>
      <path d="M15 19l3 3 5-5"/>
    </svg>`,
  },
  {
    title: 'Social Media Management',
    accentColor: '#818cf8',
    description:
      'Perancangan strategi konten, produksi aset visual, hingga optimasi kampanye digital untuk meningkatkan engagement.',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="18" cy="5" r="3"/>
      <circle cx="6" cy="12" r="3"/>
      <circle cx="18" cy="19" r="3"/>
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
    </svg>`,
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
        <p class="text-slate-400 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
          Solusi digital end-to-end — dari konsep hingga produk yang siap digunakan.
        </p>
      </div>

      <!-- ── Service cards grid ── -->
      <div class="srv-grid">
        <div
          v-for="(service, i) in services"
          :key="service.title"
          :ref="(el) => { if (el) cardRefs[i] = el as HTMLElement }"
          class="srv-card fade-in-up"
          :class="`delay-${Math.min((i + 1) * 100, 600)}`"
          :style="{ '--srv-color': service.accentColor } as any"
        >
          <!-- Glass shine overlay -->
          <div class="srv-shine" aria-hidden="true"></div>

          <!-- ── Icon ── -->
          <div class="srv-icon-wrap">
            <span class="srv-icon" v-html="service.svg"></span>
          </div>

          <!-- ── Title ── -->
          <h3 class="srv-title">{{ service.title }}</h3>

          <!-- ── Description ── -->
          <p class="srv-desc">{{ service.description }}</p>

          <!-- ── CTA — pushed to bottom with mt-auto ── -->
          <div class="srv-cta">
            <div class="srv-cta-divider"></div>
            <a href="#contact" class="srv-cta-link">
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
  flex-direction: column;   /* flex column so mt-auto pushes CTA down */
  padding: 2rem;
  border-radius: 1.5rem;    /* rounded-3xl */
  border: 1px solid rgba(255, 255, 255, .10);
  background: rgba(30, 41, 59, .40);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  overflow: hidden;
  cursor: default;
  transition:
    transform 300ms cubic-bezier(.4, 0, .2, 1),
    border-color 300ms cubic-bezier(.4, 0, .2, 1),
    box-shadow 300ms cubic-bezier(.4, 0, .2, 1),
    background 300ms cubic-bezier(.4, 0, .2, 1);
}
.srv-card:hover {
  transform: translateY(-8px);
  border-color: color-mix(in srgb, var(--srv-color, #38bdf8) 45%, transparent);
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
  border: 1px solid color-mix(in srgb, var(--srv-color, #38bdf8) 30%, transparent);
  background: color-mix(in srgb, var(--srv-color, #38bdf8) 12%, rgba(11, 17, 32, .70));
  flex-shrink: 0;
  transition: border-color 300ms ease, background 300ms ease, transform 300ms ease;
}
.srv-card:hover .srv-icon-wrap {
  background: color-mix(in srgb, var(--srv-color, #38bdf8) 20%, rgba(11, 17, 32, .65));
  transform: scale(1.08) rotate(-3deg);
}

.srv-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.375rem;
  height: 1.375rem;
  color: var(--srv-color, #38bdf8);
}
.srv-icon :deep(svg) {
  width: 100%;
  height: 100%;
  display: block;
}

/* ──────────────────────────────────────────────
   TEXT CONTENT
   ────────────────────────────────────────────── */
.srv-title {
  font-family: var(--font-display, 'Outfit', sans-serif);
  font-size: 1.15rem;
  font-weight: 700;
  color: #f1f5f9;
  margin: 1.375rem 0 0.625rem;
  line-height: 1.25;
}

.srv-desc {
  font-size: 0.875rem;
  color: #94a3b8;
  line-height: 1.7;
  margin: 0;
  flex: 1;  /* fills vertical space so CTA sits at the bottom */
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
  color: #64748b;
  text-decoration: none;
  transition: color 220ms ease, gap 220ms ease;
}
.srv-cta-link:hover,
.srv-card:hover .srv-cta-link {
  color: var(--srv-color, #38bdf8);
  gap: 0.6rem;
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
