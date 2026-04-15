<script setup lang="ts">
const navLinks = [
  { label: 'About',      href: '#about' },
  { label: 'Services',   href: '#services' },
  { label: 'Experience', href: '#experience' },
  { label: 'Stack',      href: '#stack' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Awards',     href: '#certificates' },
  { label: 'Contact',    href: '#contact' },
]

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nadzarekafaha',
    svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/NadzareKA',
    svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.28-.01-1.03-.02-2.03-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.85 1.24 1.85 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.005 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22 0 1.61-.01 2.9-.01 3.29 0 .32.21.7.82.58C20.57 21.8 24 17.31 24 12c0-6.63-5.37-12-12-12z"/></svg>`,
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/628562850774',
    svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.174.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>`,
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/NADZAREKAFAHA',
    svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>`,
  },
]

const contactItems = [
  {
    label: 'kafahnadzare@gmail.com',
    href: 'mailto:kafahnadzare@gmail.com',
    isLink: true,
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  },
  {
    label: 'Banyumas, Central Java',
    href: null,
    isLink: false,
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  },
]

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const year = new Date().getFullYear()
</script>

<template>
  <footer class="relative border-t border-slate-200 dark:border-white/10 bg-slate-900 overflow-hidden">

    <!-- Subtle top glow line -->
    <div class="footer-glow-line" aria-hidden="true"></div>

    <!-- Deep dark background -->
    <div class="footer-bg" aria-hidden="true"></div>

    <div class="footer-container">

      <!-- ══════════════════════════════════════════
           MAIN GRID — 3 columns
      ══════════════════════════════════════════ -->
      <div class="footer-grid">

        <!-- ────────────────────────────────────────
             COL 1 — Branding
        ──────────────────────────────────────────── -->
        <div class="brand-col">
          <!-- Logotype -->
          <a href="#" class="brand-logo" aria-label="Back to top">
            NK<span class="brand-dot">.</span>
          </a>

          <!-- Tagline -->
          <p class="brand-desc">
            Building functional, beautiful, and impactful digital products —
            one line of code at a time.
          </p>

          <!-- Social icons -->
          <div class="social-row">
            <a
              v-for="s in socials"
              :key="s.label"
              :href="s.href"
              :aria-label="s.label"
              target="_blank"
              rel="noopener noreferrer"
              class="social-icon-btn"
            >
              <span class="social-svg" v-html="s.svg"></span>
            </a>
          </div>
        </div>

        <!-- ────────────────────────────────────────
             COL 2 — Navigation
        ──────────────────────────────────────────── -->
        <div class="footer-col">
          <p class="col-heading">Navigation</p>
          <ul class="nav-list">
            <li v-for="link in navLinks" :key="link.href">
              <a :href="link.href" class="nav-link">
                <span class="nav-link-dot" aria-hidden="true"></span>
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- ────────────────────────────────────────
             COL 3 — Get In Touch
        ──────────────────────────────────────────── -->
        <div class="footer-col">
          <p class="col-heading">Get In Touch</p>
          <div class="contact-list">
            <component
              :is="item.isLink ? 'a' : 'div'"
              v-for="item in contactItems"
              :key="item.label"
              v-bind="item.isLink ? { href: item.href } : {}"
              class="contact-row"
              :class="{ 'contact-row--link': item.isLink }"
            >
              <!-- Icon bubble -->
              <div class="contact-icon-wrap">
                <span class="contact-icon-svg" v-html="item.svg"></span>
              </div>
              <span class="contact-label">{{ item.label }}</span>
            </component>
          </div>
        </div>

      </div>
      <!-- end grid -->

      <!-- ══════════════════════════════════════════
           BOTTOM BAR
      ══════════════════════════════════════════ -->
      <div class="bottom-bar">

        <!-- Copyright -->
        <p class="bottom-copy">
          © {{ year }} Nadzare Kafah Alatiha. All rights reserved.
        </p>

        <!-- Built with -->
        <p class="bottom-built">
          Built with
          <span class="built-tech">Vue 3</span>
          +
          <span class="built-tech">Tailwind CSS</span>
        </p>

        <!-- Back to top -->
        <button class="top-btn" @click="scrollToTop" aria-label="Scroll to top">
          <svg class="top-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="12" y1="19" x2="12" y2="5"/>
            <polyline points="5 12 12 5 19 12"/>
          </svg>
          Back to Top
        </button>

      </div>

    </div>
  </footer>
</template>

<style scoped>
/* ──────────────────────────────────────────────
   FOOTER SHELL
   ────────────────────────────────────────────── */
footer {
  position: relative;
}

/* dark gradient bg */
.footer-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(7,11,21,.92) 0%, #040810 100%);
  z-index: 0;
}

/* glowing accent line along the top border */
.footer-glow-line {
  position: absolute;
  top: -1px;
  left: 50%;
  transform: translateX(-50%);
  width: 65%;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(56,189,248,.45), transparent);
  pointer-events: none;
  z-index: 1;
}

/* ── Centered container ── */
.footer-container {
  position: relative;
  z-index: 2;
  max-width: 1280px;
  margin: 0 auto;
  padding: 4rem 1.5rem 2rem;
}
@media (min-width: 1024px) {
  .footer-container { padding: 4.5rem 3rem 2.25rem; }
}

/* ──────────────────────────────────────────────
   MAIN GRID
   ────────────────────────────────────────────── */
.footer-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.75rem;
  margin-bottom: 3rem;
}
@media (min-width: 768px) {
  .footer-grid {
    grid-template-columns: 1.6fr 1fr 1.2fr;
    gap: 3rem;
  }
}

/* ──────────────────────────────────────────────
   COL 1 — BRAND
   ────────────────────────────────────────────── */
.brand-col {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.brand-logo {
  display: inline-block;
  font-family: 'Outfit', sans-serif;
  font-size: 2rem;
  font-weight: 900;
  color: #f1f5f9;
  letter-spacing: -0.03em;
  text-decoration: none;
  line-height: 1;
  transition: opacity 200ms ease;
}
.brand-logo:hover { opacity: 0.85; }

.brand-dot {
  color: #3b82f6;   /* blue-500 */
}

.brand-desc {
  font-size: 0.85rem;
  color: #64748b;
  line-height: 1.7;
  max-width: 26ch;
  margin: 0;
}

/* Social icons row */
.social-row {
  display: flex;
  gap: 0.625rem;
  margin-top: 0.25rem;
}

.social-icon-btn {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255,255,255,.10);
  background: rgba(255,255,255,.05);
  color: #64748b;
  text-decoration: none;
  flex-shrink: 0;
  transition:
    color 240ms ease,
    background 240ms ease,
    border-color 240ms ease,
    transform 220ms ease,
    box-shadow 240ms ease;
}
.social-icon-btn:hover {
  background: #3b82f6;
  border-color: #60a5fa;
  color: #fff;
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(59,130,246,.35);
}

.social-svg {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1rem;
  height: 1rem;
}
.social-svg :deep(svg) { width: 100%; height: 100%; display: block; }

/* ──────────────────────────────────────────────
   COLS 2 & 3 — shared column style
   ────────────────────────────────────────────── */
.footer-col { display: flex; flex-direction: column; }

.col-heading {
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.22em;
  color: #475569;
  margin: 0 0 1.375rem;
}

/* ── Nav list ── */
.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
}

.nav-link {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  font-size: 0.875rem;
  color: #64748b;
  text-decoration: none;
  transition: color 220ms ease, transform 220ms ease;
}
.nav-link:hover {
  color: #60a5fa;
  transform: translateX(5px);
}

.nav-link-dot {
  display: block;
  width: 4px;
  height: 4px;
  border-radius: 9999px;
  background: rgba(255,255,255,.20);
  flex-shrink: 0;
  transition: background 220ms ease;
}
.nav-link:hover .nav-link-dot {
  background: #3b82f6;
}

/* ── Contact list ── */
.contact-list {
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
}

.contact-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  color: #64748b;
  font-size: 0.835rem;
  transition: color 220ms ease;
}
.contact-row--link:hover { color: #60a5fa; }

.contact-icon-wrap {
  flex-shrink: 0;
  width: 2rem;
  height: 2rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255,255,255,.09);
  background: rgba(255,255,255,.05);
  transition: background 220ms ease, border-color 220ms ease;
}
.contact-row--link:hover .contact-icon-wrap {
  background: rgba(59,130,246,.12);
  border-color: rgba(59,130,246,.30);
}

.contact-icon-svg {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 0.875rem;
  height: 0.875rem;
}
.contact-icon-svg :deep(svg) { width: 100%; height: 100%; display: block; }

.contact-label { line-height: 1.4; }

/* ──────────────────────────────────────────────
   BOTTOM BAR
   ────────────────────────────────────────────── */
.bottom-bar {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.875rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255,255,255,.06);
}
@media (min-width: 768px) {
  .bottom-bar {
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;
  }
}

.bottom-copy {
  font-size: 0.72rem;
  color: #475569;
  margin: 0;
  white-space: nowrap;
}

.bottom-built {
  font-size: 0.72rem;
  color: #334155;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.3rem;
}
.built-tech {
  color: #475569;
  font-weight: 600;
}

/* Back to top button */
.top-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.45rem 1.1rem;
  border-radius: 9999px;
  border: 1px solid rgba(255,255,255,.10);
  background: rgba(255,255,255,.05);
  color: #64748b;
  font-size: 0.72rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  white-space: nowrap;
  transition:
    color 220ms ease,
    background 220ms ease,
    border-color 220ms ease,
    transform 180ms ease,
    box-shadow 220ms ease;
}
.top-btn:hover {
  background: rgba(56,189,248,.12);
  border-color: rgba(56,189,248,.40);
  color: #38bdf8;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(56,189,248,.18);
}

.top-btn-icon {
  width: 0.8rem;
  height: 0.8rem;
  flex-shrink: 0;
}
</style>
