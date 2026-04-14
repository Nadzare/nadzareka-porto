<script setup lang="ts">
interface ExperienceItem {
  title: string
}

const experiences: ExperienceItem[] = [
  {
    title:
      'Asisten Praktikum Pemrograman Website Lab Informatika Unsoed (Agustus 2025 - Januari 2026).',
  },
  {
    title: 'Asisten Praktikum Sistem Operasi Lab Informatika Unsoed (Februari - Juli 2025).',
  },
  {
    title: 'IT Support Technician (Internship) PT Starindo Jaya Packaging (Juli - Agustus 2025).',
  },
  {
    title: 'User Interface Designer (Internship) PT Cazh Teknologi Inovasi (April - Mei 2025).',
  },
  {
    title: 'Content Creator (Internship) PT Cazh Teknologi Inovasi (Maret - Mei 2024).',
  },
]
</script>

<template>
  <section id="experience" class="section-shell scroll-mt-24 rounded-2xl p-7 sm:p-10">
    <div class="mb-7 space-y-3">
      <p class="text-xs font-semibold uppercase tracking-[0.26em] text-sky-300">Experience</p>
      <h2 class="text-2xl font-bold text-white sm:text-3xl">Pengalaman Profesional</h2>
    </div>

    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      <article v-for="item in experiences" :key="item.title" class="premium-card rounded-xl p-5">
        <p class="text-sm leading-relaxed text-slate-200">
          {{ item.title }}
        </p>
      </article>
    </div>
  </section>
</template>
