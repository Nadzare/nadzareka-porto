<script setup lang="ts">
import AboutSection from './components/AboutSection.vue'
import CertificatesSection from './components/CertificatesSection.vue'
import ExperienceTimeline from './components/ExperienceTimeline.vue'
import HeroSection from './components/HeroSection.vue'
import NavbarSection from './components/NavbarSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import TechStackSection from './components/TechStackSection.vue'
</script>

<template>
  <div class="relative min-h-screen overflow-x-hidden bg-[#0B1120] text-slate-100">
    <div class="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div class="absolute -left-48 -top-40 h-112 w-md rounded-full bg-sky-500/15 blur-3xl"></div>
      <div
        class="absolute -bottom-40 -right-32 h-104 w-104 rounded-full bg-cyan-400/12 blur-3xl"
      ></div>
      <div
        class="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/8 blur-3xl"
      ></div>
    </div>

    <NavbarSection />
    <HeroSection />

    <main
      class="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 pb-24 sm:px-6 lg:gap-14 lg:px-8"
    >
      <AboutSection />
      <ExperienceTimeline />
      <TechStackSection />
      <ProjectsSection />
      <CertificatesSection />
    </main>
  </div>
</template>
