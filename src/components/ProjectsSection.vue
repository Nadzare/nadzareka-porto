<script setup lang="ts">
const projects = [
  'Larasena',
  'Warung Orange',
  'FaceTend',
  'Nasi Kebuli Ajibarang',
  'Menaspro',
  'Foodwise',
  'SyncMA Dashboard',
  'Ticketing System Tuk Sirah',
]
</script>

<template>
  <section id="projects" class="section-shell scroll-mt-24 rounded-2xl p-7 sm:p-10">
    <div class="mb-7 space-y-3">
      <p class="text-xs font-semibold uppercase tracking-[0.26em] text-sky-300">Projects</p>
      <h2 class="text-2xl font-bold text-white sm:text-3xl">Project Showcase</h2>
    </div>

    <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
      <article
        v-for="project in projects"
        :key="project"
        class="premium-card overflow-hidden rounded-xl"
      >
        <div
          class="w-full h-48 bg-[#070b15] text-gray-500 border-b border-white/10 flex items-center justify-center"
        >
          Thumbnail (Aset Belum Ada)
        </div>
        <div class="p-4">
          <h3 class="text-base font-semibold text-white">{{ project }}</h3>
          <p class="mt-1 text-xs leading-relaxed text-slate-300">
            Project showcase dengan pendekatan desain fungsional dan pengembangan yang terstruktur.
          </p>
        </div>
      </article>
    </div>
  </section>
</template>
