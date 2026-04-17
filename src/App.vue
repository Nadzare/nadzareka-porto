<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useTheme } from './composables/useTheme'
import Preloader from './components/Preloader.vue'
import FooterSection from './components/FooterSection.vue'
import CertificatesSection from './components/CertificatesSection.vue'
import ContactSection from './components/ContactSection.vue'
import ExperienceTimeline from './components/ExperienceTimeline.vue'
import HeroSection from './components/HeroSection.vue'
import NavbarSection from './components/NavbarSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import TechStackSection from './components/TechStackSection.vue'
import AboutSection from './components/AboutSection.vue'
import ServicesSection from './components/ServicesSection.vue'

// ── Scroll Progress Bar ──────────────────────────────────────────
const scrollProgress = ref(0)

function calculateScrollProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight
  scrollProgress.value = scrollable > 0
    ? (window.scrollY / scrollable) * 100
    : 0
}

// ── Custom Trailing Cursor ────────────────────────────────────────
const mouseX    = ref(0)
const mouseY    = ref(0)
const trailingX = ref(0)
const trailingY = ref(0)

// Internal state to track screen-relative mouse to update absolute coords during scroll
const clientX = ref(0)
const clientY = ref(0)

let rafId: number

function onMouseMove(e: MouseEvent) {
  clientX.value = e.clientX
  clientY.value = e.clientY
  mouseX.value = clientX.value + window.scrollX
  mouseY.value = clientY.value + window.scrollY
}

function handleScroll() {
  // Update scroll progress
  calculateScrollProgress()
  // Keep absolute cursor pinned to screen coordinates even when scrolling
  mouseX.value = clientX.value + window.scrollX
  mouseY.value = clientY.value + window.scrollY
}

function animateCursor() {
  // Linear interpolation — 0.15 = snappy but still visibly trailing
  trailingX.value += (mouseX.value - trailingX.value) * 0.15
  trailingY.value += (mouseY.value - trailingY.value) * 0.15
  rafId = requestAnimationFrame(animateCursor)
}

const { init } = useTheme()

onMounted(() => {
  init()                        // Apply theme before first paint
  window.addEventListener('scroll',    handleScroll, { passive: true })
  window.addEventListener('mousemove', onMouseMove,             { passive: true })
  
  // Set initial mouse position center screen to prevent snap from 0,0
  clientX.value = window.innerWidth / 2
  clientY.value = window.innerHeight / 2
  mouseX.value = clientX.value + window.scrollX
  mouseY.value = clientY.value + window.scrollY
  trailingX.value = mouseX.value
  trailingY.value = mouseY.value

  rafId = requestAnimationFrame(animateCursor)
})

onUnmounted(() => {
  window.removeEventListener('scroll',    handleScroll)
  window.removeEventListener('mousemove', onMouseMove)
  cancelAnimationFrame(rafId)
})
</script>

<template>
  <!-- ── Preloader (first-visit only, skipped via sessionStorage) ── -->
  <Preloader />

  <!-- Cursors moved to end of template -->

  <div class="relative min-h-screen bg-slate-50 dark:bg-[#0b1120] text-slate-900 dark:text-slate-100 transition-colors duration-300">

    <!-- ── Animated background layer ── -->
    <div class="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <!-- Subtle grid -->
      <div class="absolute inset-0 bg-grid opacity-60"></div>

      <!-- Animated blobs -->
      <div
        class="absolute -left-64 -top-48 h-[600px] w-[600px] rounded-full bg-sky-500/10 blur-[120px]"
        style="animation: blob-drift 18s ease-in-out infinite;"
      ></div>
      <div
        class="absolute -right-48 top-1/4 h-[500px] w-[500px] rounded-full bg-indigo-500/8 blur-[100px]"
        style="animation: blob-drift-2 22s ease-in-out infinite; animation-delay: -7s;"
      ></div>
      <div
        class="absolute bottom-1/4 left-1/3 h-[400px] w-[400px] rounded-full bg-cyan-400/7 blur-[90px]"
        style="animation: blob-drift 26s ease-in-out infinite; animation-delay: -13s;"
      ></div>
      <div
        class="absolute -bottom-32 right-1/4 h-[350px] w-[350px] rounded-full bg-blue-600/8 blur-[80px]"
        style="animation: blob-drift-2 20s ease-in-out infinite; animation-delay: -4s;"
      ></div>
    </div>

    <!-- ── Floating Navbar ── -->
    <NavbarSection />

    <!-- ── Hero ── -->
    <HeroSection />

    <!-- ── Sections (each is full-width, self-contained) ── -->
    <AboutSection      id="about" />
    <ServicesSection   id="services" />
    <ExperienceTimeline id="experience" />
    <TechStackSection  id="stack" />
    <ProjectsSection   id="projects" />
    <CertificatesSection id="certificates" />
    <ContactSection    id="contact" />

    <!-- ── Footer ── -->
    <FooterSection />
  </div>

  <Teleport to="body">
    <!-- ── Custom Cursor: Dot (snaps to exact mouse position) ── -->
    <div
      class="absolute w-2 h-2 bg-blue-500 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(59,130,246,0.8)] mix-blend-difference"
      :style="{ left: mouseX + 'px', top: mouseY + 'px', zIndex: 2147483647 }"
    ></div>

    <!-- ── Custom Cursor: Ring (trails behind with lerp smoothing) ── -->
    <div
      class="absolute w-10 h-10 border-2 border-blue-400/80 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out shadow-[0_0_15px_rgba(59,130,246,0.3)] mix-blend-difference"
      :style="{ left: trailingX + 'px', top: trailingY + 'px', zIndex: 2147483646 }"
    ></div>

    <!-- ── Scroll Progress Bar ── -->
    <div
      class="fixed top-0 left-0 h-1 bg-blue-500 transition-all duration-75 ease-out shadow-[0_0_10px_rgba(56,189,248,0.8)]"
      :style="{ width: scrollProgress + '%', zIndex: 2147483647 }"
    ></div>
  </Teleport>
</template>

<style>
/* Hide default cursor globally for fine pointers */
@media (pointer: fine) {
  * {
    cursor: none !important;
  }
}
</style>
