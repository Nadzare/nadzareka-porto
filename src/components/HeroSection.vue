<template>
  <section class="mx-auto mt-8 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="section-shell relative overflow-hidden rounded-3xl p-7 sm:p-10 lg:p-14">
      <div
        class="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-sky-500/15 blur-3xl"
      ></div>
      <div
        class="pointer-events-none absolute right-8 top-16 h-60 w-60 rounded-full bg-cyan-400/15 blur-3xl"
      ></div>

      <div class="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div class="max-w-3xl space-y-6">
          <p class="text-sm font-semibold uppercase tracking-[0.28em] text-sky-300">
            Portfolio 2026
          </p>

          <h1 class="text-4xl font-black leading-[0.95] text-white sm:text-6xl lg:text-7xl">
            NADZARE KAFAH
            <span class="block text-slate-100">ALATIHA</span>
          </h1>

          <p
            class="bg-linear-to-r from-sky-300 via-blue-400 to-cyan-300 bg-clip-text text-lg font-semibold text-transparent sm:text-2xl"
          >
            Designer | Coder
          </p>

          <div class="space-y-4 text-sm leading-relaxed text-slate-300 sm:text-base">
            <p>
              UI/UX & Graphic Designer yang bersemangat menciptakan antarmuka visual yang
              fungsional, bersih, dan berdampak nyata.
            </p>
            <p>
              Full Stack & Mobile Developer yang berfokus pada penulisan kode efisien, elegan, dan
              performa tinggi untuk membangun produk digital yang stabil serta siap berkembang.
            </p>
          </div>

          <div class="flex flex-wrap gap-3">
            <a
              href="#"
              class="rounded-full border border-sky-300/40 bg-sky-500/15 px-5 py-2.5 text-sm font-semibold text-sky-200 transition hover:-translate-y-0.5 hover:bg-sky-400/20"
            >
              Download CV
            </a>
            <a
              href="mailto:nadzarekafah@example.com"
              class="rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-sky-300/40 hover:text-sky-200"
            >
              Hire Me
            </a>
          </div>
        </div>

        <div
          class="relative mx-auto flex w-full max-w-xl items-center justify-center lg:justify-end"
        >
          <div
            class="absolute h-72 w-72 rounded-full bg-linear-to-br from-sky-400/20 via-blue-500/18 to-cyan-300/15 blur-2xl"
          ></div>
          <div class="absolute h-92 w-92 rounded-full border border-sky-300/20"></div>
          <img
            src="@/assets/kafah-hero.png"
            alt="Nadzare Kafah"
            class="relative z-10 max-h-136 w-auto object-contain drop-shadow-[0_14px_36px_rgba(14,165,233,0.2)]"
          />
        </div>
      </div>
    </div>
  </section>
</template>
