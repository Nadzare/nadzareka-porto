<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'

/* ─────────────────────────────────────────────────────────────
   TYPES
───────────────────────────────────────────────────────────── */
type CertTab = 'awards' | 'organization' | 'course'

interface AwardItem {
  id: number
  title: string
  institution: string
  image: string
  badge: string
  badgeColor: string
}

interface OtherItem {
  id: number
  title: string
  sub: string
  icon: string
  color: string
}

/* ─────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────── */
const awards: AwardItem[] = [
  {
    id: 1,
    title: 'FINALIST GEMASTIK XVIII 2025',
    institution: 'Dikti — Divisi VIII Software Development',
    image: new URL('@/assets/sertifikat-gemastik.jpg', import.meta.url).href,
    badge: 'Finalist',
    badgeColor: '#fbbf24',
  },
  {
    id: 2,
    title: 'JUARA III Hackathon',
    institution: 'National IT Roll Out HMTI UMP 2025',
    image: new URL('@/assets/sertifikat-hackathon.png', import.meta.url).href,
    badge: 'Juara III',
    badgeColor: '#f87171',
  },
  {
    id: 3,
    title: 'TOP V FINALIST Essay Competition',
    institution: 'Society of Renewable Energy ITB 2025',
    image: new URL('@/assets/sertifikat-sre.jpg', import.meta.url).href,
    badge: 'Top 5',
    badgeColor: '#34d399',
  },
  {
    id: 4,
    title: 'JUARA II Web Design Competition',
    institution: 'Evolution Interium Fest — Telkom University 2024',
    image: new URL('@/assets/sertifikat-webdesain.jpeg', import.meta.url).href,
    badge: 'Juara II',
    badgeColor: '#c084fc',
  },
  {
    id: 5,
    title: 'JUARA II PKM Rektor Cup XI',
    institution: 'Bidang PKM-PI — Universitas Jenderal Soedirman 2024',
    image: new URL('@/assets/sertifikat-pkmpi.jpeg', import.meta.url).href,
    badge: 'Juara II',
    badgeColor: '#c084fc',
  },
  {
    id: 6,
    title: 'FINALIST Web Design Competition',
    institution: 'Carnival Technology — Universitas Jember',
    image: new URL('@/assets/sertifikat-finaliswebdesain.jpeg', import.meta.url).href,
    badge: 'Finalist',
    badgeColor: '#fbbf24',
  },
  {
    id: 7,
    title: 'JUARA III Discovery IT',
    institution: 'Inovasi Terapan — Universitas Negeri Jakarta',
    image: new URL('@/assets/sertifikat-inovasi.jpg', import.meta.url).href,
    badge: 'Juara III',
    badgeColor: '#f87171',
  },
]

const organizations: OtherItem[] = [
  { id: 1, title: 'Ketua Divisi Medkominfo', sub: 'HMIF UNSOED 2025', icon: '📢', color: '#38bdf8' },
  { id: 2, title: 'Kadiv PDD Maskrab Informatika', sub: 'Maskrab Informatika 2025', icon: '🎨', color: '#818cf8' },
  { id: 3, title: 'Staf PDD Soedirman Technophoria', sub: 'Soedirman Technophoria 2025', icon: '⚙️', color: '#34d399' },
  { id: 4, title: 'Panitia Webinar Nasional', sub: 'Divisi Publikasi & Dokumentasi', icon: '🖥️', color: '#fb923c' },
  { id: 5, title: 'Koordinator Acara Informatika Fest', sub: 'HMIF UNSOED 2024', icon: '🎉', color: '#f472b6' },
]

const courses: OtherItem[] = [
  { id: 1, title: 'Alibaba Cloud Certified Developer', sub: 'Alibaba Cloud Academy', icon: '☁️', color: '#fb923c' },
  { id: 2, title: 'Fullstack Web Developer Bootcamp', sub: 'Codepolitan', icon: '💻', color: '#38bdf8' },
  { id: 3, title: 'Pelatihan UI/UX Design', sub: 'Program Intensif', icon: '🎨', color: '#c084fc' },
  { id: 4, title: 'Belajar Membuat Aplikasi Back-End', sub: 'Dicoding Indonesia', icon: '🔧', color: '#34d399' },
  { id: 5, title: 'Flutter Mobile Development', sub: 'Google x Dicoding', icon: '📱', color: '#818cf8' },
]

const tabs = [
  { key: 'awards'       as CertTab, label: 'Penghargaan & Kejuaraan', icon: '🏆' },
  { key: 'organization' as CertTab, label: 'Kepanitiaan & Volunteer',  icon: '🤝' },
  { key: 'course'       as CertTab, label: 'Bootcamp & Course',        icon: '📚' },
]

/* ─────────────────────────────────────────────────────────────
   TAB + STACK STATE
───────────────────────────────────────────────────────────── */
const activeTab    = ref<CertTab>('awards')
const currentIndex = ref(0)

const activePool = computed<(AwardItem | OtherItem)[]>(() => {
  if (activeTab.value === 'awards')       return awards
  if (activeTab.value === 'organization') return organizations
  return courses
})

watch(activeTab, () => { currentIndex.value = 0 })

function next() {
  currentIndex.value = (currentIndex.value + 1) % activePool.value.length
}
function prev() {
  currentIndex.value = (currentIndex.value - 1 + activePool.value.length) % activePool.value.length
}

/* ─────────────────────────────────────────────────────────────
   STACK TRANSFORM PER CARD
   All cards are always rendered. Each card's visual position
   is determined by its "diff" from the current active index.
   diff 0 = top, diff 1 = one behind (peek right), diff 2 = two behind (peek left)
   diff >= 3 = hidden beneath the pile.
───────────────────────────────────────────────────────────── */
interface StackStyles {
  zIndex: string
  transform: string
  opacity: string
  pointerEvents: string
  cursor: string
}

function getStackStyle(index: number, total: number): StackStyles {
  const diff = (index - currentIndex.value + total) % total

  // Only show top 3; hide the rest
  if (diff === 0) {
    return {
      zIndex: '50',
      transform: 'translateX(0%) translateY(0px) rotate(0deg) scale(1)',
      opacity: '1',
      pointerEvents: 'auto',
      cursor: 'default',
    }
  }
  if (diff === 1) {
    return {
      zIndex: '40',
      transform: 'translateX(6%) translateY(14px) rotate(3deg) scale(0.95)',
      opacity: '0.75',
      pointerEvents: 'auto',
      cursor: 'pointer',
    }
  }
  if (diff === 2) {
    return {
      zIndex: '30',
      transform: 'translateX(-6%) translateY(26px) rotate(-2.5deg) scale(0.90)',
      opacity: '0.50',
      pointerEvents: 'none',
      cursor: 'default',
    }
  }
  // All other cards: stacked invisibly behind, no interaction
  return {
    zIndex: '10',
    transform: 'translateX(0%) translateY(32px) scale(0.86)',
    opacity: '0',
    pointerEvents: 'none',
    cursor: 'default',
  }
}

/* ─────────────────────────────────────────────────────────────
   SCROLL ENTRY
───────────────────────────────────────────────────────────── */
const headerRef = ref<HTMLElement | null>(null)
const bodyRef   = ref<HTMLElement | null>(null)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('is-visible') }),
    { threshold: 0.07 },
  )
  ;[headerRef.value, bodyRef.value].forEach((el) => el && observer.observe(el))
})
</script>

<template>
  <section id="certificates" class="relative py-28 scroll-mt-24 overflow-hidden">

    <!-- ── Ambient glows ── -->
    <div class="cert-glow cert-glow--amber"  aria-hidden="true"></div>
    <div class="cert-glow cert-glow--violet" aria-hidden="true"></div>

    <div class="section-container relative z-10">

      <!-- ══════════════════════════════
           HEADER
      ══════════════════════════════ -->
      <div ref="headerRef" class="fade-in-up mb-10 text-center">
        <p class="section-label">Achievements</p>
        <h2 class="section-title">
          Sertifikat &amp; <span class="glow-text">Prestasi</span>
        </h2>
        <p class="text-slate-400 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
          Pencapaian dari berbagai kompetisi nasional, organisasi, dan program pelatihan.
        </p>
      </div>

      <!-- ══════════════════════════════
           CATEGORY TABS
      ══════════════════════════════ -->
      <div class="tabs-wrapper mb-14">
        <div class="tabs-track">
          <button
            v-for="tab in tabs"
            :key="tab.key"
            class="tab-pill"
            :class="{ 'tab-pill--active': activeTab === tab.key }"
            @click="activeTab = tab.key"
          >
            <span>{{ tab.icon }}</span>
            {{ tab.label }}
          </button>
        </div>
      </div>

      <!-- ══════════════════════════════
           STACKED DECK + NAV
      ══════════════════════════════ -->
      <div ref="bodyRef" class="fade-in-up delay-200">
        <div class="carousel-shell">

          <!-- ── Prev button ── -->
          <button
            class="nav-btn"
            :disabled="activePool.length <= 1"
            @click="prev"
            aria-label="Previous"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
              stroke-linecap="round" stroke-linejoin="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>

          <!-- ─────────────────────────────
               THE DECK
               All cards live here, positioned
               absolute. CSS transitions handle
               every position shift smoothly.
          ───────────────────────────────── -->
          <div class="deck-stage">

            <!-- Counter -->
            <div class="deck-counter">
              {{ currentIndex + 1 }} <span class="opacity-40">/</span> {{ activePool.length }}
            </div>

            <!-- ── ALL cards rendered, transforms driven by diff ── -->
            <div
              v-for="(item, i) in activePool"
              :key="`${activeTab}-${item.id}`"
              class="stack-card"
              :style="getStackStyle(i, activePool.length)"
              @click="getStackStyle(i, activePool.length).cursor === 'pointer' && next()"
            >
              <!-- Glass shine overlay -->
              <div class="card-shine" aria-hidden="true"></div>

              <!-- ═══ AWARDS — real photo ═══ -->
              <template v-if="activeTab === 'awards'">
                <div class="card-img-wrap">
                  <img
                    :src="(item as AwardItem).image"
                    :alt="item.title"
                    class="card-img"
                    loading="lazy"
                  />
                  <!-- Achievement badge -->
                  <div
                    class="card-badge"
                    :style="{
                      background: `${(item as AwardItem).badgeColor}28`,
                      borderColor: `${(item as AwardItem).badgeColor}65`,
                      color: (item as AwardItem).badgeColor,
                    }"
                  >
                    {{ (item as AwardItem).badge }}
                  </div>
                  <!-- Gradient fade into body -->
                  <div class="card-img-fade"></div>
                </div>
              </template>

              <!-- ═══ ORG / COURSE — icon placeholder ═══ -->
              <template v-else>
                <div
                  class="card-icon-area"
                  :style="{ background: `linear-gradient(135deg, ${(item as OtherItem).color}18 0%, rgba(11,17,32,0.8) 100%)` }"
                >
                  <div
                    class="card-icon-bubble"
                    :style="{
                      background: `${(item as OtherItem).color}20`,
                      boxShadow: `0 0 40px ${(item as OtherItem).color}30`,
                    }"
                  >
                    <span class="card-icon-emoji">{{ (item as OtherItem).icon }}</span>
                  </div>
                  <!-- Decorative skeleton lines (simulates doc content) -->
                  <div class="card-skeleton">
                    <div class="skel-line" style="width:60%"></div>
                    <div class="skel-line" style="width:82%"></div>
                    <div class="skel-line" style="width:70%"></div>
                  </div>
                </div>
              </template>

              <!-- ═══ TEXT BODY ═══ -->
              <div class="card-body">
                <span
                  class="card-eyebrow"
                  :style="{
                    color: activeTab === 'awards'
                      ? (item as AwardItem).badgeColor
                      : (item as OtherItem).color
                  }"
                >
                  {{
                    activeTab === 'awards'
                      ? (item as AwardItem).badge
                      : activeTab === 'organization'
                        ? 'Kepanitiaan & Volunteer'
                        : 'Bootcamp & Course'
                  }}
                </span>
                <h3 class="card-title">{{ item.title }}</h3>
                <p class="card-institution">
                  {{
                    activeTab === 'awards'
                      ? (item as AwardItem).institution
                      : (item as OtherItem).sub
                  }}
                </p>
              </div>

            </div>
            <!-- end v-for -->

          </div>
          <!-- end deck-stage -->

          <!-- ── Next button ── -->
          <button
            class="nav-btn"
            :disabled="activePool.length <= 1"
            @click="next"
            aria-label="Next"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
              stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>

        </div>
        <!-- end carousel-shell -->

        <!-- ── Dot pagination ── -->
        <div class="dot-nav" v-if="activePool.length > 1">
          <button
            v-for="(item, i) in activePool"
            :key="item.id"
            class="dot"
            :class="{ 'dot--active': i === currentIndex }"
            @click="currentIndex = i"
            :aria-label="`Go to item ${i + 1}`"
          ></button>
        </div>

      </div>

    </div>
  </section>
</template>

<style scoped>
/* ──────────────────────────────────────────────
   AMBIENT GLOWS
   ────────────────────────────────────────────── */
.cert-glow {
  position: absolute;
  border-radius: 9999px;
  filter: blur(130px);
  pointer-events: none;
  z-index: 0;
}
.cert-glow--amber {
  width: 600px; height: 420px;
  top: -60px; left: -60px;
  background: radial-gradient(ellipse, rgba(251,191,36,.12) 0%, transparent 70%);
  animation: blob-drift 22s ease-in-out infinite;
}
.cert-glow--violet {
  width: 520px; height: 380px;
  bottom: -40px; right: -60px;
  background: radial-gradient(ellipse, rgba(192,132,252,.12) 0%, transparent 70%);
  animation: blob-drift-2 26s ease-in-out infinite;
}

/* ──────────────────────────────────────────────
   TABS
   ────────────────────────────────────────────── */
.tabs-wrapper { display: flex; justify-content: center; }
.tabs-track {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
}
.tab-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 1.25rem;
  border-radius: 9999px;
  font-size: 0.78rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  border: 1px solid rgba(255,255,255,.10);
  background: rgba(255,255,255,.04);
  color: #64748b;
  transition: color 220ms ease, background 220ms ease, border-color 220ms ease, box-shadow 220ms ease;
}
.tab-pill:hover:not(.tab-pill--active) {
  color: #94a3b8;
  background: rgba(255,255,255,.08);
  border-color: rgba(255,255,255,.18);
}
.tab-pill--active {
  background: rgba(56,189,248,.15);
  border-color: rgba(56,189,248,.45);
  color: #7dd3fc;
  box-shadow: 0 0 18px rgba(56,189,248,.18);
}

/* ──────────────────────────────────────────────
   CAROUSEL SHELL  (nav + deck side by side)
   ────────────────────────────────────────────── */
.carousel-shell {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}

/* ── Nav buttons ── */
.nav-btn {
  flex-shrink: 0;
  width: 3rem;
  height: 3rem;
  border-radius: 9999px;
  border: 1px solid rgba(255,255,255,.10);
  background: rgba(255,255,255,.05);
  color: #64748b;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    color 220ms ease,
    background 220ms ease,
    border-color 220ms ease,
    box-shadow 220ms ease,
    transform 180ms ease;
  z-index: 60;          /* always above the deck */
}
.nav-btn svg { width: 1.15rem; height: 1.15rem; }
.nav-btn:hover:not(:disabled) {
  background: rgba(56,189,248,.18);
  border-color: rgba(56,189,248,.55);
  color: #38bdf8;
  box-shadow: 0 0 22px rgba(56,189,248,.24);
  transform: scale(1.08);
}
.nav-btn:disabled { opacity: .28; cursor: not-allowed; }

/* ──────────────────────────────────────────────
   DECK STAGE
   A fixed-size relative container.
   All cards are absolute inside it, so they
   "overlap" — just their transforms differ.

   Height = tallest card content + extra bottom
   space so the peeking lower cards don't clip.
   ────────────────────────────────────────────── */
.deck-stage {
  position: relative;
  width: 100%;
  max-width: 500px;
  /* card image ratio 4:3 on 500px ≈ 375px
     + compact text body ~100px
     + peek offset ~32px bottom padding      */
  height: 530px;
}

/* Counter badge floating top-right of deck */
.deck-counter {
  position: absolute;
  top: -1.875rem;
  right: 0;
  font-size: 0.68rem;
  font-weight: 700;
  color: rgba(148,163,184,.55);
  background: rgba(255,255,255,.05);
  border: 1px solid rgba(255,255,255,.08);
  border-radius: 9999px;
  padding: 0.18rem 0.65rem;
  z-index: 70;
  letter-spacing: 0.04em;
}

/* ──────────────────────────────────────────────
   STACK CARD
   ────────────────────────────────────────────── */
.stack-card {
  /* position + transform come from inline :style */
  position: absolute;
  inset: 0;

  border-radius: 1.25rem;
  border: 1px solid rgba(255,255,255,.12);
  background: rgba(20,30,48,.70);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  overflow: hidden;

  display: flex;
  flex-direction: column;

  /* THE key: smooth CSS transition on all transformed props */
  transition:
    transform 500ms cubic-bezier(.4, 0, .2, 1),
    opacity   500ms cubic-bezier(.4, 0, .2, 1),
    box-shadow 300ms ease;

  /* Top card gets a premium shadow at z-index 50 */
  will-change: transform, opacity;
}

/* Top card hover glow — applied via :style zIndex comparison not possible,
   so use sibling trick: the card with opacity:1 reacts */
.stack-card:not([style*="opacity: 0"]):hover {
  box-shadow:
    0 28px 70px rgba(0,0,0,.60),
    0 0 40px rgba(56,189,248,.10),
    0 0 0 1px rgba(56,189,248,.15);
}

/* Glass shine */
.card-shine {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(145deg, rgba(255,255,255,.08) 0%, transparent 55%);
  pointer-events: none;
  z-index: 1;
}

/* ──────────────────────────────────────────────
   AWARDS — Image area
   aspect-[4/3] keeps proportions tight.
   ────────────────────────────────────────────── */
.card-img-wrap {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  flex-shrink: 0;
  overflow: hidden;
}
.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
  transition: transform 500ms ease;
}
.stack-card:hover .card-img { transform: scale(1.04); }

/* achievement badge */
.card-badge {
  position: absolute;
  top: 0.8rem;
  left: 0.8rem;
  padding: 0.22rem 0.72rem;
  border-radius: 9999px;
  border: 1px solid;
  font-size: 0.58rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  z-index: 2;
  backdrop-filter: blur(6px);
}

/* gradient that blends image into body */
.card-img-fade {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 4rem;
  background: linear-gradient(to top, rgba(11,17,32,.85) 0%, transparent 100%);
  pointer-events: none;
}

/* ──────────────────────────────────────────────
   ORG / COURSE — Icon placeholder area
   ────────────────────────────────────────────── */
.card-icon-area {
  width: 100%;
  aspect-ratio: 4 / 3;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
}

.card-icon-bubble {
  width: 5rem;
  height: 5rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255,255,255,.10);
}
.card-icon-emoji {
  font-size: 2.5rem;
  line-height: 1;
  filter: drop-shadow(0 4px 12px rgba(0,0,0,.45));
}

/* decorative skeleton lines */
.card-skeleton {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  width: 60%;
}
.skel-line {
  height: 5px;
  border-radius: 9999px;
  background: rgba(255,255,255,.10);
}

/* ──────────────────────────────────────────────
   TEXT BODY
   ────────────────────────────────────────────── */
.card-body {
  padding: 1rem 1.25rem 1.25rem;
  background: rgba(11,17,32,.82);
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  flex: 1;
}

.card-eyebrow {
  font-size: 0.58rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.2em;
}

.card-title {
  font-family: var(--font-display, 'Outfit', sans-serif);
  font-size: 1rem;
  font-weight: 800;
  color: #f1f5f9;
  line-height: 1.3;
  margin: 0;
}

.card-institution {
  font-size: 0.775rem;
  color: #64748b;
  margin: 0;
  line-height: 1.5;
}

/* ──────────────────────────────────────────────
   DOT PAGINATION
   ────────────────────────────────────────────── */
.dot-nav {
  display: flex;
  justify-content: center;
  gap: 0.45rem;
  margin-top: 2.5rem;
  flex-wrap: wrap;
}
.dot {
  width: 0.45rem;
  height: 0.45rem;
  border-radius: 9999px;
  background: rgba(255,255,255,.18);
  border: none;
  cursor: pointer;
  padding: 0;
  transition: background 220ms ease, width 220ms ease, box-shadow 220ms ease;
}
.dot--active {
  width: 1.4rem;
  background: #38bdf8;
  box-shadow: 0 0 10px rgba(56,189,248,.50);
}

/* ──────────────────────────────────────────────
   RESPONSIVE
   ────────────────────────────────────────────── */
@media (max-width: 640px) {
  .deck-stage   { height: 460px; max-width: 100%; }
  .carousel-shell { gap: 0.875rem; }
  .nav-btn      { width: 2.5rem; height: 2.5rem; }
}
</style>
