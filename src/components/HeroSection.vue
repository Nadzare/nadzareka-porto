<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// ── Typewriter setup ──
const roles = ['UI/UX Designer', 'Full Stack Developer', 'Mobile Developer', 'Graphic Designer', 'Creative Coder']
const displayText = ref('')
const roleIndex = ref(0)
const charIndex = ref(0)
const isDeleting = ref(false)
const showCursor = ref(true)
let typeTimer: ReturnType<typeof setTimeout>
let cursorTimer: ReturnType<typeof setInterval>

function type() {
  const currentRole = roles[roleIndex.value]
  if (!isDeleting.value) {
    displayText.value = currentRole.slice(0, charIndex.value + 1)
    charIndex.value++
    if (charIndex.value === currentRole.length) {
      // Pause at full word
      typeTimer = setTimeout(() => {
        isDeleting.value = true
        type()
      }, 1800)
      return
    }
  } else {
    displayText.value = currentRole.slice(0, charIndex.value - 1)
    charIndex.value--
    if (charIndex.value === 0) {
      isDeleting.value = false
      roleIndex.value = (roleIndex.value + 1) % roles.length
    }
  }
  const speed = isDeleting.value ? 55 : 90
  typeTimer = setTimeout(type, speed)
}

onMounted(() => {
  typeTimer = setTimeout(type, 600)
  cursorTimer = setInterval(() => { showCursor.value = !showCursor.value }, 530)
})
onUnmounted(() => {
  clearTimeout(typeTimer)
  clearInterval(cursorTimer)
})

// ── Stats ──
const stats = [
  { value: '8+', label: 'Projects' },
  { value: '7', label: 'Awards' },
  { value: '2', label: 'Internships' },
  { value: '3+', label: 'Years Learning' },
]
</script>

<template>
  <section
    class="relative min-h-screen flex items-center overflow-hidden"
    style="padding-top: 90px;"
  >
    <!-- Decorative blobs specific to hero -->
    <div class="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        class="absolute -right-32 top-16 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style="background: radial-gradient(circle, #38bdf8, #0ea5e9); animation: float-slow 8s ease-in-out infinite;"
      ></div>
      <div
        class="absolute right-1/4 bottom-20 h-64 w-64 rounded-full opacity-15 blur-2xl"
        style="background: radial-gradient(circle, #818cf8, #6366f1); animation: float-slow 12s ease-in-out infinite; animation-delay: -4s;"
      ></div>
    </div>

    <div class="section-container relative z-10 w-full py-16 lg:py-20">
      <div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

        <!-- LEFT: Text Content -->
        <div class="space-y-8" style="animation: hero-slide-left 0.9s cubic-bezier(0.4,0,0.2,1) both;">
          <!-- Badge -->
          <div
            class="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold"
            style="background: rgba(56,189,248,0.10); border: 1px solid rgba(56,189,248,0.25); color: #7dd3fc;"
          >
            <span class="w-1.5 h-1.5 rounded-full bg-sky-400" style="animation: pulse-glow 2s ease infinite;"></span>
            Available for Work · Portfolio 2026
          </div>

          <!-- Name -->
          <div>
            <h1
              class="font-display font-black leading-none tracking-tight"
              style="font-family: 'Outfit', sans-serif; font-size: clamp(3rem, 8vw, 6.5rem); line-height: 0.95;"
            >
              <span class="text-white">NADZARE</span><br />
              <span class="text-white">KAFAH</span>
              <span
                class="block"
                style="
                  background: linear-gradient(135deg, #38bdf8 0%, #818cf8 50%, #34d399 100%);
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
                  background-clip: text;
                "
              >ALATIHA</span>
            </h1>
          </div>

          <!-- Typewriter -->
          <div class="flex items-center gap-1 h-8">
            <span class="text-slate-400 text-lg font-medium">is a&nbsp;</span>
            <span
              class="text-lg font-bold"
              style="color: #38bdf8; min-width: 1ch;"
            >{{ displayText }}</span>
            <span
              class="inline-block w-0.5 h-6 rounded-full bg-sky-400 ml-0.5"
              :style="{ opacity: showCursor ? 1 : 0 }"
              style="transition: opacity 0.1s;"
            ></span>
          </div>

          <!-- Bio -->
          <p class="text-slate-300 leading-relaxed max-w-xl" style="font-size: clamp(0.9rem, 1.5vw, 1.05rem);">
            Mahasiswa aktif Informatika yang berfokus pada pengembangan sistem informasi, desain UI/UX,
            dan strategi digital. Memiliki pengalaman komprehensif dalam merancang solusi dari tahap
            konseptual hingga eksekusi visual.
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-wrap gap-3">
            <a href="/resume.pdf" download class="btn-primary">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download CV
            </a>
            <a href="#projects" class="btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
                <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
              </svg>
              See My Work
            </a>
            <a
              href="mailto:nadzarekafah@example.com"
              class="btn-ghost"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              Hire Me
            </a>
          </div>

          <!-- Stats row -->
          <div class="grid grid-cols-4 gap-3 pt-4 border-t border-white/8">
            <div v-for="stat in stats" :key="stat.label" class="text-center">
              <div
                class="font-display font-black text-2xl"
                style="font-family: 'Outfit', sans-serif; color: #38bdf8;"
              >{{ stat.value }}</div>
              <div class="text-xs text-slate-500 mt-0.5">{{ stat.label }}</div>
            </div>
          </div>
        </div>

        <!-- RIGHT: Photo -->
        <div
          class="relative flex items-end justify-center lg:justify-end"
          style="animation: hero-slide-right 0.9s cubic-bezier(0.4,0,0.2,1) both; animation-delay: 0.15s;"
        >
          <!-- Glow ring behind photo -->
          <div
            class="absolute inset-0 m-auto rounded-full"
            style="
              max-width: 460px; max-height: 460px;
              background: radial-gradient(circle at 60% 40%, rgba(56,189,248,0.20) 0%, rgba(14,165,233,0.10) 50%, transparent 70%);
              animation: float-slow 10s ease-in-out infinite;
            "
          ></div>
          <!-- Orbit ring -->
          <div
            class="absolute rounded-full border border-sky-400/15"
            style="width: 420px; height: 420px; left: 50%; transform: translateX(-50%); top: 10px;"
          >
            <div
              class="absolute w-3 h-3 rounded-full bg-sky-400/60 -top-1.5 left-1/2 -translate-x-1/2"
              style="box-shadow: 0 0 12px rgba(56,189,248,0.8);"
            ></div>
          </div>
          <!-- Photo -->
          <img
            src="@/assets/kafah-hero.png"
            alt="Nadzare Kafah Alatiha"
            class="relative z-10 max-h-[520px] w-auto object-contain select-none"
            style="
              animation: float 6s ease-in-out infinite;
              filter: drop-shadow(0 20px 60px rgba(14,165,233,0.25)) drop-shadow(0 0 40px rgba(56,189,248,0.12));
            "
            draggable="false"
          />
        </div>

      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600">
      <span class="text-xs tracking-widest uppercase">Scroll</span>
      <div class="w-px h-12 bg-gradient-to-b from-slate-600 to-transparent"></div>
    </div>
  </section>
</template>
