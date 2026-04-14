<script setup lang="ts">
const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Awards', href: '#certificates' },
]
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-white/10 bg-[#0B1120]/65 backdrop-blur-xl">
    <nav
      class="mx-auto flex h-18 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
    >
      <a href="#" class="text-base font-semibold tracking-wide text-white sm:text-lg">
        NADZARE KAFAH
      </a>

      <div class="hidden items-center gap-7 md:flex">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="text-sm font-medium text-slate-300 transition hover:text-sky-300"
        >
          {{ link.label }}
        </a>
        <a
          href="mailto:nadzarekafah@example.com"
          class="rounded-full border border-sky-400/40 bg-sky-500/10 px-4 py-2 text-sm font-semibold text-sky-300 transition hover:border-sky-300 hover:bg-sky-400/15"
        >
          Contact Me
        </a>
      </div>

      <a
        href="mailto:nadzarekafah@example.com"
        class="rounded-full border border-sky-400/40 bg-sky-500/10 px-3 py-1.5 text-xs font-semibold text-sky-300 md:hidden"
      >
        Contact
      </a>
    </nav>
  </header>
</template>
