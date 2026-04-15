<script setup lang="ts">
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
</script>

<template>
  <div class="relative min-h-screen overflow-x-hidden" style="background-color: #0b1120; color: #e2e8f0;">

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
</template>
