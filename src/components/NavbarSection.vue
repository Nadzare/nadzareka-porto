<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

/* ─────────────────────────────────────────────────────────────
   NAV LINKS
   href must match the id="" attribute on each section component
───────────────────────────────────────────────────────────── */
const navLinks = [
  { label: 'About',      href: '#about' },
  { label: 'Services',   href: '#services' },
  { label: 'Experience', href: '#experience' },
  { label: 'Stack',      href: '#stack' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Awards',     href: '#certificates' },
  { label: 'Contact',    href: '#contact' },
]

/* Section IDs in page order (for active-detection) */
const sectionIds = navLinks.map((l) => l.href.slice(1))

/* ─────────────────────────────────────────────────────────────
   STATE
───────────────────────────────────────────────────────────── */
const scrolled     = ref(false)
const mobileOpen   = ref(false)
const activeSection = ref('')

/* ─────────────────────────────────────────────────────────────
   SCROLL HANDLER
   Detects which section is currently in view by walking the
   list in reverse and finding the first whose top ≤ 120px
───────────────────────────────────────────────────────────── */
function onScroll() {
  scrolled.value = window.scrollY > 60

  for (const id of [...sectionIds].reverse()) {
    const el = document.getElementById(id)
    if (el && el.getBoundingClientRect().top <= 120) {
      activeSection.value = `#${id}`
      return
    }
  }
  activeSection.value = ''
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))

/* ─────────────────────────────────────────────────────────────
   SMOOTH SCROLL
   Prevents default anchor jump; scrolls with native smooth API.
   Falls back to plain assignment for older browsers.
───────────────────────────────────────────────────────────── */
function smoothScroll(e: MouseEvent, href: string) {
  e.preventDefault()
  const id = href.replace('#', '')
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  mobileOpen.value = false
}

function scrollToTop(e: MouseEvent) {
  e.preventDefault()
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">

    <!-- ══════════════════════════════════════════
         FLOATING PILL NAVBAR
    ══════════════════════════════════════════ -->
    <nav
      class="navbar-pill"
      :class="{ 'navbar-pill--scrolled': scrolled }"
    >
      <!-- Logo -->
      <a href="#" class="nav-logo" @click="scrollToTop">
        NK<span class="nav-logo-dot">.</span>
      </a>

      <!-- ── Desktop links (hidden on mobile) ── -->
      <div class="nav-links-desktop">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="nav-link"
          :class="{ 'nav-link--active': activeSection === link.href }"
          @click="(e) => smoothScroll(e, link.href)"
        >
          {{ link.label }}
          <!-- Active indicator dot -->
          <span
            v-if="activeSection === link.href"
            class="nav-link-indicator"
            aria-hidden="true"
          ></span>
        </a>
      </div>

      <!-- Divider -->
      <div class="nav-divider" aria-hidden="true"></div>

      <!-- Resume CTA -->
      <a
        href="/resume.pdf"
        download
        class="resume-btn"
      >
        <!-- Download icon -->
        <svg class="w-3 h-3 flex-shrink-0" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="7 10 12 15 17 10"/>
          <line x1="12" y1="15" x2="12" y2="3"/>
        </svg>
        Resume
      </a>

      <!-- ── Mobile hamburger ── -->
      <button
        class="hamburger"
        :class="{ 'hamburger--open': mobileOpen }"
        @click="mobileOpen = !mobileOpen"
        :aria-expanded="mobileOpen"
        aria-label="Toggle navigation menu"
      >
        <!-- Hamburger icon -->
        <svg v-if="!mobileOpen" class="w-4 h-4" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
          <line x1="3" y1="6" x2="21" y2="6"/>
          <line x1="3" y1="12" x2="21" y2="12"/>
          <line x1="3" y1="18" x2="21" y2="18"/>
        </svg>
        <!-- Close icon -->
        <svg v-else class="w-4 h-4" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    </nav>

    <!-- ══════════════════════════════════════════
         MOBILE DROPDOWN
    ══════════════════════════════════════════ -->
    <Transition
      enter-active-class="transition-all duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-3 scale-95"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition-all duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 -translate-y-3 scale-95"
    >
      <div v-if="mobileOpen" class="mobile-menu md:hidden">

        <!-- Nav links -->
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="mobile-link"
          :class="{ 'mobile-link--active': activeSection === link.href }"
          @click="(e) => smoothScroll(e, link.href)"
        >
          <span class="mobile-link-dot" aria-hidden="true"></span>
          {{ link.label }}
        </a>

        <!-- Divider -->
        <div class="mobile-divider"></div>

        <!-- Resume -->
        <a
          href="/resume.pdf"
          download
          class="mobile-resume"
          @click="mobileOpen = false"
        >
          <svg class="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Download Resume
        </a>

      </div>
    </Transition>

  </header>
</template>

<style scoped>
/* ──────────────────────────────────────────────
   PILL NAVBAR
   ────────────────────────────────────────────── */
.navbar-pill {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.5rem 0.875rem;
  border-radius: 9999px;
  border: 1px solid rgba(255,255,255,.10);
  background: rgba(7,11,21,.84);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  transition: padding 300ms ease, box-shadow 300ms ease;
}
.navbar-pill--scrolled {
  padding: 0.375rem 0.75rem;
  box-shadow: 0 8px 40px rgba(0,0,0,.50), 0 0 0 1px rgba(56,189,248,.07);
}

/* ── Logo ── */
.nav-logo {
  font-family: 'Outfit', sans-serif;
  font-weight: 900;
  font-size: 1.1rem;
  color: #f1f5f9;
  letter-spacing: -0.02em;
  text-decoration: none;
  flex-shrink: 0;
  margin-right: 0.25rem;
  transition: opacity 200ms ease;
}
.nav-logo:hover { opacity: 0.85; }
.nav-logo-dot { color: #38bdf8; }

/* ── Desktop links wrapper ── */
.nav-links-desktop {
  display: none;
  align-items: center;
  gap: 0.125rem;
}
@media (min-width: 768px) {
  .nav-links-desktop { display: flex; }
}

/* ── Individual desktop link ── */
.nav-link {
  position: relative;
  padding: 0.375rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.72rem;
  font-weight: 600;
  color: #64748b;
  text-decoration: none;
  white-space: nowrap;
  transition: color 200ms ease, background 200ms ease;
}
.nav-link:hover {
  color: #38bdf8;
  background: rgba(56,189,248,.07);
}
.nav-link--active {
  color: #7dd3fc;
  background: rgba(56,189,248,.12);
}

/* Active indicator dot below the link text */
.nav-link-indicator {
  position: absolute;
  bottom: 4px;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 4px;
  border-radius: 9999px;
  background: #38bdf8;
}

/* ── Divider ── */
.nav-divider {
  display: none;
  width: 1px;
  height: 1rem;
  background: rgba(255,255,255,.14);
  margin: 0 0.25rem;
  flex-shrink: 0;
}
@media (min-width: 768px) { .nav-divider { display: block; } }

/* ── Resume button ── */
.resume-btn {
  display: none;
  align-items: center;
  gap: 0.4rem;
  padding: 0.375rem 0.9rem;
  border-radius: 9999px;
  font-size: 0.70rem;
  font-weight: 700;
  color: #7dd3fc;
  text-decoration: none;
  flex-shrink: 0;
  background: linear-gradient(135deg, rgba(14,165,233,.25), rgba(56,189,248,.15));
  border: 1px solid rgba(56,189,248,.35);
  transition: box-shadow 220ms ease, transform 180ms ease;
}
.resume-btn:hover {
  box-shadow: 0 0 22px rgba(56,189,248,.32);
  transform: translateY(-1px);
}
@media (min-width: 768px) { .resume-btn { display: inline-flex; } }

/* ── Hamburger ── */
.hamburger {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 9999px;
  border: none;
  background: transparent;
  color: #64748b;
  cursor: pointer;
  transition: color 200ms ease, background 200ms ease;
}
.hamburger:hover       { color: #f1f5f9; background: rgba(255,255,255,.06); }
.hamburger--open       { color: #38bdf8; background: rgba(56,189,248,.12); }
@media (min-width: 768px) { .hamburger { display: none; } }

/* ──────────────────────────────────────────────
   MOBILE DROPDOWN
   ────────────────────────────────────────────── */
.mobile-menu {
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 1rem;
  right: 1rem;
  border-radius: 1.25rem;
  border: 1px solid rgba(255,255,255,.10);
  background: rgba(7,11,21,.96);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  box-shadow: 0 16px 48px rgba(0,0,0,.55);
  transform-origin: top center;
}

.mobile-link {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.625rem 1rem;
  border-radius: 0.75rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: #94a3b8;
  text-decoration: none;
  transition: color 200ms ease, background 200ms ease;
}
.mobile-link:hover    { color: #38bdf8; background: rgba(255,255,255,.05); }
.mobile-link--active  { color: #7dd3fc; background: rgba(56,189,248,.10); }

.mobile-link-dot {
  flex-shrink: 0;
  width: 5px;
  height: 5px;
  border-radius: 9999px;
  background: rgba(255,255,255,.18);
  transition: background 200ms ease;
}
.mobile-link--active .mobile-link-dot,
.mobile-link:hover   .mobile-link-dot { background: #38bdf8; }

.mobile-divider {
  height: 1px;
  background: rgba(255,255,255,.07);
  margin: 0.25rem 0;
}

.mobile-resume {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.625rem 1rem;
  border-radius: 0.75rem;
  font-size: 0.875rem;
  font-weight: 700;
  color: #7dd3fc;
  text-decoration: none;
  background: rgba(56,189,248,.09);
  border: 1px solid rgba(56,189,248,.20);
  transition: background 200ms ease, border-color 200ms ease;
}
.mobile-resume:hover {
  background: rgba(56,189,248,.16);
  border-color: rgba(56,189,248,.38);
}
</style>
