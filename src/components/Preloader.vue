<script setup lang="ts">
import { ref, onMounted } from 'vue'

// ── Reactive State ────────────────────────────────────────────────
const isLoading = ref(true)
const progress  = ref(0)

onMounted(() => {
  // Skip preloader on subsequent visits within the same session
  if (sessionStorage.getItem('hasVisited')) {
    isLoading.value = false
    return
  }

  // Eased progress ticker: small, slightly randomized increments so it
  // feels organic rather than mechanical.
  const interval = setInterval(() => {
    const remaining = 100 - progress.value
    // Ease-out: larger jumps early, smaller ones near the end
    const step = Math.max(1, Math.floor(remaining * 0.08) + Math.floor(Math.random() * 3))
    progress.value = Math.min(100, progress.value + step)

    if (progress.value >= 100) {
      clearInterval(interval)
      // Brief pause so the user sees "100%" before fading out
      setTimeout(() => {
        isLoading.value = false
        sessionStorage.setItem('hasVisited', 'true')
      }, 450)
    }
  }, 30)
})
</script>

<!--
  ┌─────────────────────────────────────────────────────────────────┐
  │  REMINDER: In App.vue, import this component and place          │
  │  <Preloader /> as the very FIRST element inside <template>.     │
  └─────────────────────────────────────────────────────────────────┘
-->

<template>
  <Transition name="fade">
    <div
      v-if="isLoading"
      class="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#0B1120] text-white"
    >
      <!-- ── Subtle grid overlay matching the rest of the site ── -->
      <div class="pointer-events-none absolute inset-0 bg-grid opacity-40" />

      <!-- ── Ambient glow blobs ── -->
      <div class="absolute -top-32 left-1/2 -translate-x-1/2 h-[400px] w-[400px] rounded-full bg-sky-500/10 blur-[100px]" />
      <div class="absolute bottom-0 right-1/4 h-[300px] w-[300px] rounded-full bg-indigo-500/8 blur-[80px]" />

      <!-- ── Center content ── -->
      <div class="relative z-10 flex flex-col items-center">

        <!-- Monogram / logo mark -->
        <div class="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_0_30px_rgba(56,189,248,0.15)]">
          <span class="text-2xl font-black tracking-tight bg-gradient-to-br from-sky-400 to-blue-600 bg-clip-text text-transparent">NK</span>
        </div>

        <!-- Name -->
        <h1 class="text-4xl font-black tracking-tight bg-gradient-to-r from-white via-sky-200 to-blue-400 bg-clip-text text-transparent">
          Nadzare Kafah
        </h1>

        <!-- Tagline -->
        <p class="mt-2 text-xs font-semibold uppercase tracking-widest text-gray-400">
          Full Stack &amp; UI/UX Developer
        </p>

        <!-- ── Progress bar track ── -->
        <div class="mt-10 w-64 h-px bg-white/10 rounded-full overflow-hidden relative">
          <div
            class="h-full bg-gradient-to-r from-sky-500 to-blue-500 rounded-full transition-all duration-75 ease-out shadow-[0_0_8px_rgba(56,189,248,0.7)]"
            :style="{ width: progress + '%' }"
          />
        </div>

        <!-- Percentage -->
        <p class="mt-3 text-xs tabular-nums text-gray-500 tracking-widest">
          {{ progress }}<span class="text-gray-600">%</span>
        </p>

        <!-- Loading dots animation -->
        <div class="mt-6 flex gap-1.5">
          <span class="h-1 w-1 rounded-full bg-sky-500/70 animate-bounce [animation-delay:0ms]" />
          <span class="h-1 w-1 rounded-full bg-sky-500/50 animate-bounce [animation-delay:150ms]" />
          <span class="h-1 w-1 rounded-full bg-sky-500/30 animate-bounce [animation-delay:300ms]" />
        </div>

      </div>
    </div>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
