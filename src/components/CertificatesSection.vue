<script setup lang="ts">
import { ref } from 'vue'

type CertificateTab = 'awards' | 'organization' | 'course'

interface CertificateItem {
  title: string
  image?: string
}

const activeTab = ref<CertificateTab>('awards')

const awards: CertificateItem[] = [
  {
    title: 'FINALIST GEMASTIK XVIII 2025 DIVISI VIII SOFTWARE DEVELOPMENT',
    image: '@/assets/sertifikat-gemastik.jpg',
  },
  {
    title: 'JUARA III HACKATHON (NATIONAL IT ROLL OUT) HMTI UMP 2025',
    image: '@/assets/sertifikat-hackathon.png',
  },
  {
    title: 'TOP V FINALIST NATIONAL ESSAY COMPETITION SRE ITB 2025',
    image: '@/assets/sertifikat-sre.jpg',
  },
  {
    title: 'JUARA II WEB DESIGN COMPETITION EVOLUTION INTERIUM FEST TELKOM UNIVERSITY 2024',
    image: '@/assets/sertifikat-webdesain.jpeg',
  },
  {
    title: 'JUARA II PKM REKTOR CUP XI BIDANG PKM-PI UNIVERSITAS JENDERAL SOEDIRMAN 2024',
    image: '@/assets/sertifikat-pkmpi.jpeg',
  },
  {
    title: 'FINALIST WEB DESIGN COMPETITION CARNIVAL TECHNOLOGY UNIVERSITAS JEMBER',
    image: '@/assets/sertifikat-finaliswebdesain.jpeg',
  },
  {
    title: 'JUARA III DISCOVERY IT INOVASI TERAPAN UNIVERSITAS NEGERI JAKARTA',
    image: '@/assets/sertifikat-inovasi.jpg',
  },
]

const organizations: CertificateItem[] = [
  { title: 'Ketua Divisi Medkominfo HMIF UNSOED 2025' },
  { title: 'Kadiv PDD Maskrab Informatika 2025' },
  { title: 'Staf PDD Soedirman Technophoria 2025' },
]

const courses: CertificateItem[] = [
  { title: 'Alibaba Cloud Certified Developer' },
  { title: 'Codepolitan Fullstack Web Developer' },
  { title: 'Pelatihan UI/UX Design' },
]

const tabs = [
  { key: 'awards', label: 'Penghargaan & Kejuaraan' },
  { key: 'organization', label: 'Kepanitiaan & Organisasi' },
  { key: 'course', label: 'Bootcamp & Course' },
] as const
</script>

<template>
  <section id="certificates" class="section-shell scroll-mt-24 rounded-2xl p-7 sm:p-10">
    <div class="mb-7 space-y-3">
      <p class="text-xs font-semibold uppercase tracking-[0.26em] text-sky-300">Awards</p>
      <h2 class="text-2xl font-bold text-white sm:text-3xl">Sertifikat & Prestasi</h2>
    </div>

    <div class="mb-6 flex flex-wrap gap-2">
      <button
        v-for="tab in tabs"
        :key="tab.key"
        type="button"
        class="rounded-full border px-4 py-2 text-xs font-semibold transition"
        :class="
          activeTab === tab.key
            ? 'border-sky-400/60 bg-sky-500/18 text-sky-200'
            : 'border-white/15 bg-white/5 text-slate-300 hover:border-sky-400/40 hover:text-sky-200'
        "
        @click="activeTab = tab.key"
      >
        {{ tab.label }}
      </button>
    </div>

    <div v-if="activeTab === 'awards'" class="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
      <article
        v-for="item in awards"
        :key="item.title"
        class="premium-card overflow-hidden rounded-xl"
      >
        <img :src="item.image" :alt="item.title" class="h-48 w-full object-cover" loading="lazy" />
        <div class="border-t border-white/10 p-4">
          <p class="text-sm text-slate-200">{{ item.title }}</p>
        </div>
      </article>
    </div>

    <div
      v-else-if="activeTab === 'organization'"
      class="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3"
    >
      <article
        v-for="item in organizations"
        :key="item.title"
        class="premium-card overflow-hidden rounded-xl"
      >
        <div
          class="w-full h-48 bg-[#070b15] flex items-center justify-center text-gray-500 text-center px-4 text-sm border-b border-white/10"
        >
          Placeholder Sertifikat (Aset Belum Ada)
        </div>
        <div class="p-4">
          <p class="text-sm text-slate-200">{{ item.title }}</p>
        </div>
      </article>
    </div>

    <div v-else class="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
      <article
        v-for="item in courses"
        :key="item.title"
        class="premium-card overflow-hidden rounded-xl"
      >
        <div
          class="w-full h-48 bg-[#070b15] flex items-center justify-center text-gray-500 text-center px-4 text-sm border-b border-white/10"
        >
          Placeholder Sertifikat (Aset Belum Ada)
        </div>
        <div class="p-4">
          <p class="text-sm text-slate-200">{{ item.title }}</p>
        </div>
      </article>
    </div>
  </section>
</template>
