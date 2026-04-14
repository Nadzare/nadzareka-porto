<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Stack', href: '#stack' },
  { label: 'Projects', href: '#projects' },
  { label: 'Awards', href: '#certificates' },
]

const scrolled = ref(false)
const mobileOpen = ref(false)
const activeSection = ref('')

function onScroll() {
  scrolled.value = window.scrollY > 60
  // Determine active section by IntersectionObserver data stored in set
  const sections = ['about', 'experience', 'stack', 'projects', 'certificates']
  for (const id of [...sections].reverse()) {
    const el = document.getElementById(id)
    if (el) {
      const rect = el.getBoundingClientRect()
      if (rect.top <= 120) {
        activeSection.value = `#${id}`
        return
      }
    }
  }
  activeSection.value = ''
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))

function closeMobile() {
  mobileOpen.value = false
}
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 flex justify-center px-4" style="padding-top: 1rem;">
    <!-- Pill navbar -->
    <nav
      class="flex items-center gap-2 transition-all duration-300"
      :class="[
        scrolled
          ? 'px-3 py-2 rounded-full shadow-2xl'
          : 'px-4 py-2.5 rounded-full',
        'backdrop-blur-xl border border-white/10'
      ]"
      :style="{
        background: 'rgba(7, 11, 21, 0.82)',
        boxShadow: scrolled ? '0 8px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(56,189,248,0.08)' : 'none',
      }"
    >
      <!-- Logo -->
      <a
        href="#"
        class="font-display font-black text-white tracking-tight shrink-0 mr-1"
        :class="scrolled ? 'text-sm' : 'text-base'"
        style="font-family: 'Outfit', sans-serif; letter-spacing: -0.01em;"
      >
        NK<span style="color: #38bdf8;">.</span>
      </a>

      <!-- Desktop links -->
      <div class="hidden md:flex items-center gap-1">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="relative px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200"
          :class="
            activeSection === link.href
              ? 'text-sky-300 bg-sky-500/12'
              : 'text-slate-400 hover:text-sky-300 hover:bg-white/5'
          "
        >
          {{ link.label }}
          <span
            v-if="activeSection === link.href"
            class="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-sky-400"
          ></span>
        </a>
      </div>

      <!-- Divider -->
      <div class="hidden md:block w-px h-4 bg-white/15 mx-1"></div>

      <!-- Resume CTA -->
      <a
        href="/resume.pdf"
        download
        class="hidden md:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200"
        style="background: linear-gradient(135deg, rgba(14,165,233,0.25), rgba(56,189,248,0.15)); border: 1px solid rgba(56,189,248,0.35); color: #7dd3fc;"
        onmouseover="this.style.boxShadow='0 0 20px rgba(56,189,248,0.3)'"
        onmouseout="this.style.boxShadow='none'"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="7 10 12 15 17 10"/>
          <line x1="12" y1="15" x2="12" y2="3"/>
        </svg>
        Resume
      </a>

      <!-- Mobile hamburger -->
      <button
        class="md:hidden flex items-center justify-center w-8 h-8 rounded-full transition-colors"
        :class="mobileOpen ? 'bg-sky-500/20 text-sky-300' : 'text-slate-400 hover:text-white'"
        @click="mobileOpen = !mobileOpen"
        aria-label="Toggle menu"
      >
        <svg v-if="!mobileOpen" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <line x1="3" y1="6" x2="21" y2="6"/>
          <line x1="3" y1="12" x2="21" y2="12"/>
          <line x1="3" y1="18" x2="21" y2="18"/>
        </svg>
        <svg v-else class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    </nav>

    <!-- Mobile dropdown -->
    <Transition
      enter-active-class="transition-all duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="mobileOpen"
        class="absolute top-full mt-2 left-4 right-4 rounded-2xl border border-white/10 p-3 flex flex-col gap-1 md:hidden"
        style="background: rgba(7, 11, 21, 0.95); backdrop-filter: blur(20px);"
      >
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors"
          :class="activeSection === link.href ? 'bg-sky-500/15 text-sky-300' : 'text-slate-300 hover:text-sky-300 hover:bg-white/5'"
          @click="closeMobile"
        >
          {{ link.label }}
        </a>
        <div class="border-t border-white/10 mt-1 pt-2">
          <a
            href="/resume.pdf"
            download
            class="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold"
            style="color: #7dd3fc; background: rgba(56,189,248,0.08);"
            @click="closeMobile"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download Resume
          </a>
        </div>
      </div>
    </Transition>
  </header>
</template>
