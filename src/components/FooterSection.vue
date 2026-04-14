<script setup lang="ts">
const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Stack', href: '#stack' },
  { label: 'Projects', href: '#projects' },
  { label: 'Awards', href: '#certificates' },
]

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/',
    icon: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.28-.01-1.03-.02-2.03-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.85 1.24 1.85 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.005 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22 0 1.61-.01 2.9-.01 3.29 0 .32.21.7.82.58C20.57 21.8 24 17.31 24 12c0-6.63-5.37-12-12-12z"/></svg>`,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/',
    icon: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.23 0z"/></svg>`,
  },
  {
    label: 'Email',
    href: 'mailto:nadzarekafah@example.com',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  },
]

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const year = new Date().getFullYear()
</script>

<template>
  <footer
    class="relative mt-8 border-t"
    style="border-color: rgba(255,255,255,0.07); background: linear-gradient(180deg, rgba(7,11,21,0.90) 0%, #040810 100%);"
  >
    <!-- Subtle top glow -->
    <div
      class="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px"
      style="background: linear-gradient(to right, transparent, rgba(56,189,248,0.40), transparent);"
    ></div>

    <div class="section-container py-14">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">

        <!-- LEFT: Brand -->
        <div class="space-y-4">
          <a href="#" class="inline-block font-display font-black text-2xl text-white" style="font-family: 'Outfit', sans-serif; letter-spacing: -0.02em;">
            NK<span style="color: #38bdf8;">.</span>
          </a>
          <p class="text-slate-400 text-sm leading-relaxed max-w-xs">
            Building functional, beautiful, and impactful digital products —  
            one line of code at a time.
          </p>
          <!-- Social links -->
          <div class="flex gap-3 pt-2">
            <a
              v-for="social in socials"
              :key="social.label"
              :href="social.href"
              :aria-label="social.label"
              target="_blank"
              rel="noopener"
              class="w-9 h-9 rounded-full flex items-center justify-center text-slate-400 transition-all duration-200"
              style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.10);"
              @mouseover="($event.currentTarget as HTMLElement).style.cssText += 'color: #38bdf8; border-color: rgba(56,189,248,0.40); background: rgba(56,189,248,0.10); transform: translateY(-2px);'"
              @mouseleave="($event.currentTarget as HTMLElement).style.cssText = 'background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.10); color: rgb(148 163 184); transition: all 0.2s;'"
              v-html="social.icon"
            ></a>
          </div>
        </div>

        <!-- CENTER: Quick Nav -->
        <div>
          <p class="text-xs font-bold uppercase tracking-widest text-slate-600 mb-5">Navigation</p>
          <ul class="space-y-2.5">
            <li v-for="link in navLinks" :key="link.href">
              <a
                :href="link.href"
                class="text-sm text-slate-400 transition-colors duration-200 hover:text-sky-300 flex items-center gap-2"
              >
                <span class="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-sky-400 transition-colors"></span>
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- RIGHT: Contact -->
        <div>
          <p class="text-xs font-bold uppercase tracking-widest text-slate-600 mb-5">Get In Touch</p>
          <div class="space-y-3">
            <a
              href="mailto:nadzarekafah@example.com"
              class="flex items-center gap-3 text-sm text-slate-400 hover:text-sky-300 transition-colors duration-200 group"
            >
              <div
                class="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-200 group-hover:bg-sky-500/15"
                style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.10);"
              >
                <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              nadzarekafah@example.com
            </a>
            <div class="flex items-center gap-3 text-sm text-slate-500">
              <div
                class="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.10);"
              >
                <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              Purwokerto, Indonesia
            </div>
          </div>
        </div>

      </div>

      <!-- Bottom bar -->
      <div
        class="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
        style="border-top: 1px solid rgba(255,255,255,0.07);"
      >
        <p class="text-xs text-slate-600">
          © {{ year }} Nadzare Kafah Alatiha. All rights reserved.
        </p>
        <p class="text-xs text-slate-700">
          Built with Vue 3 + TypeScript + Tailwind CSS
        </p>
        <!-- Back to Top -->
        <button
          class="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 text-slate-400 hover:text-sky-300"
          style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.10);"
          @click="scrollToTop"
          @mouseover="($event.currentTarget as HTMLElement).style.cssText += 'border-color: rgba(56,189,248,0.35); color: #7dd3fc; background: rgba(56,189,248,0.08);'"
          @mouseleave="($event.currentTarget as HTMLElement).style.cssText = 'background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.10); color: rgb(148 163 184); transition: all 0.2s;'"
        >
          <svg class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="12" y1="19" x2="12" y2="5"/>
            <polyline points="5 12 12 5 19 12"/>
          </svg>
          Back to Top
        </button>
      </div>

    </div>
  </footer>
</template>
