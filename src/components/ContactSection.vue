<script setup lang="ts">
import { ref, onMounted } from 'vue'

/* ── Scroll-triggered animation ── */
const sectionRef = ref<HTMLElement | null>(null)
const socialRef  = ref<HTMLElement | null>(null)
const cardRef    = ref<HTMLElement | null>(null)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('is-visible') }),
    { threshold: 0.07 },
  )
  ;[sectionRef.value, socialRef.value, cardRef.value].forEach(
    (el) => el && observer.observe(el),
  )
})

/* ── Form state ── */
const form   = ref({ name: '', email: '', message: '' })
const status = ref<'idle' | 'sending' | 'success' | 'error'>('idle')

async function handleSubmit() {
  status.value = 'sending'
  try {
    // ──────────────────────────────────────────────────────────────────
    // Web3Forms: visit https://web3forms.com → get your free Access Key
    // then replace 'YOUR_WEB3FORMS_ACCESS_KEY' below with your real key.
    // ──────────────────────────────────────────────────────────────────
    const res  = await fetch('https://api.web3forms.com/submit', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body:    JSON.stringify({ access_key: 'YOUR_WEB3FORMS_ACCESS_KEY', ...form.value }),
    })
    const data = await res.json()
    if (data.success) {
      status.value = 'success'
      form.value   = { name: '', email: '', message: '' }
    } else {
      status.value = 'error'
    }
  } catch {
    status.value = 'error'
  }
  setTimeout(() => (status.value = 'idle'), 4500)
}

/* ── Social links ── */
const socials = [
  {
    id: 'linkedin', label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nadzarekafaha',
    color: '#0A66C2',
    svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
  },
  {
    id: 'github', label: 'GitHub',
    href: 'https://github.com/NadzareKA',
    color: '#E6EDF3',
    svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>`,
  },
  {
    id: 'whatsapp', label: 'WhatsApp',
    href: 'https://wa.me/628562850774',
    color: '#25D366',
    svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.174.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>`,
  },
  {
    id: 'instagram', label: 'Instagram',
    href: 'https://instagram.com/NADZAREKAFAHA',
    color: '#E1306C',
    svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>`,
  },
]
</script>

<template>
  <section id="contact" class="relative py-28 scroll-mt-24 overflow-hidden">

    <!-- ── Ambient glows ── -->
    <div class="contact-glow contact-glow--blue"   aria-hidden="true"></div>
    <div class="contact-glow contact-glow--purple" aria-hidden="true"></div>

    <div class="section-container relative z-10">

      <!-- ── Section header ── -->
      <div ref="sectionRef" class="fade-in-up mb-14 text-center">
        <p class="section-label">Get In Touch</p>
        <h2 class="section-title">
          Let's&nbsp;<span class="glow-text">Connect</span>
        </h2>
        <p class="text-slate-400 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
          Have a project in mind, a question, or just want to say hi?
          My inbox is always open.
        </p>
      </div>

      <!-- ══════════════════════════════════════════════════
           MAIN LAYOUT  —  items-stretch makes both boxes
           share the same height on desktop automatically.
      ══════════════════════════════════════════════════ -->
      <div class="contact-layout">

        <!-- ────────────────────────────────────────
             LEFT — Social Box  (boxy, not a pill)
        ──────────────────────────────────────────── -->
        <div
          ref="socialRef"
          class="social-box fade-in-up delay-200"
          aria-label="Social links"
        >
          <!-- glass shine -->
          <div class="box-shine" aria-hidden="true"></div>

          <!-- header label -->
          <span class="social-eyebrow">Find me on</span>

          <!-- divider -->
          <div class="social-divider"></div>

          <!-- vertical list of social links -->
          <div class="social-list">
            <a
              v-for="s in socials"
              :key="s.id"
              :href="s.href"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="s.label"
              class="social-row"
              :style="{ '--sc': s.color } as any"
            >
              <!-- icon wrapper -->
              <span class="social-icon-wrap" v-html="s.svg"></span>
              <!-- label -->
              <span class="social-row-label">{{ s.label }}</span>
              <!-- arrow -->
              <svg class="social-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M3 8h10M9 4l4 4-4 4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
        <!-- end social box -->

        <!-- ────────────────────────────────────────
             RIGHT — Contact Form Card
        ──────────────────────────────────────────── -->
        <div ref="cardRef" class="form-card fade-in-up delay-300">
          <!-- glass shine -->
          <div class="box-shine" aria-hidden="true"></div>

          <h3 class="form-card-title">Send a Message</h3>

          <!--
            Web3Forms:
            1. Visit https://web3forms.com → get your free Access Key
            2. Replace 'YOUR_WEB3FORMS_ACCESS_KEY' in the script with your real key
          -->
          <form class="form-body" @submit.prevent="handleSubmit" novalidate>

            <!-- Name + Email on same row on desktop -->
            <div class="field-row">
              <div class="field-group">
                <label for="contact-name" class="field-label">Name</label>
                <input
                  id="contact-name"
                  v-model="form.name"
                  type="text"
                  name="name"
                  placeholder="Your Name ..."
                  required
                  class="field-input"
                />
              </div>
              <div class="field-group">
                <label for="contact-email" class="field-label">Email</label>
                <input
                  id="contact-email"
                  v-model="form.email"
                  type="email"
                  name="email"
                  placeholder="Your Email ..."
                  required
                  class="field-input"
                />
              </div>
            </div>

            <!-- Message -->
            <div class="field-group">
              <label for="contact-message" class="field-label">Message</label>
              <textarea
                id="contact-message"
                v-model="form.message"
                name="message"
                placeholder="Your Message ..."
                rows="4"
                required
                class="field-input field-textarea"
              ></textarea>
            </div>

            <!-- ── Send button ─────────────────────────
                 Outer <button> is position+transition only.
                 Inner <div> is the flex row for icon+text
                 so alignment is always perfectly centred.
            ─────────────────────────────────────────── -->
            <button
              type="submit"
              :disabled="status === 'sending'"
              class="send-btn"
              :class="{ 'send-btn--sending': status === 'sending' }"
            >
              <!-- idle -->
              <div v-if="status === 'idle'" class="flex items-center justify-center gap-2 py-3 px-6">
                <span>Send Message</span>
                <svg class="send-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                </svg>
              </div>

              <!-- sending -->
              <div v-else-if="status === 'sending'" class="flex items-center justify-center gap-2 py-3 px-6">
                <svg class="send-spinner" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10" stroke-opacity="0.25"/>
                  <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"/>
                </svg>
                <span>Sending…</span>
              </div>

              <!-- success -->
              <div v-else-if="status === 'success'" class="flex items-center justify-center gap-2 py-3 px-6">
                <span>✅ Message sent!</span>
              </div>

              <!-- error -->
              <div v-else class="flex items-center justify-center gap-2 py-3 px-6">
                <span>❌ Something went wrong. Try again.</span>
              </div>
            </button>

          </form>
        </div>
        <!-- end form card -->

      </div>
      <!-- end contact-layout -->

    </div>
  </section>
</template>

<style scoped>
/* ──────────────────────────────────────────────
   AMBIENT GLOWS
   ────────────────────────────────────────────── */
.contact-glow {
  position: absolute;
  border-radius: 9999px;
  filter: blur(130px);
  pointer-events: none;
  z-index: 0;
}
.contact-glow--blue {
  width: 650px; height: 420px;
  top: -60px; right: -80px;
  background: radial-gradient(ellipse, rgba(56,189,248,.14) 0%, transparent 70%);
  animation: blob-drift-2 20s ease-in-out infinite;
}
.contact-glow--purple {
  width: 500px; height: 380px;
  bottom: -40px; left: -60px;
  background: radial-gradient(ellipse, rgba(129,140,248,.13) 0%, transparent 70%);
  animation: blob-drift 24s ease-in-out infinite;
}

/* ──────────────────────────────────────────────
   LAYOUT  —  items-stretch ensures equal height
   ────────────────────────────────────────────── */
.contact-layout {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1.25rem;
}
@media (min-width: 768px) {
  .contact-layout {
    flex-direction: row;
    align-items: stretch;   /* ← key: equal-height side-by-side */
    gap: 1.5rem;
  }
}

/* ──────────────────────────────────────────────
   SHARED GLASS BOX MIXIN
   Both boxes get identical glass treatment
   ────────────────────────────────────────────── */
.social-box,
.form-card {
  position: relative;
  border-radius: 1.5rem;                         /* rounded-3xl */
  border: 1px solid rgba(255,255,255,.10);
  background: rgba(30,41,59,.40);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  overflow: hidden;
  transition: border-color 300ms ease, box-shadow 300ms ease;
}
.social-box:hover,
.form-card:hover {
  border-color: rgba(56,189,248,.22);
  box-shadow: 0 0 48px rgba(56,189,248,.07), 0 24px 64px rgba(0,0,0,.35);
}

/* Inner shine overlay — shared */
.box-shine {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(135deg, rgba(255,255,255,.06) 0%, transparent 55%);
  pointer-events: none;
}

/* ──────────────────────────────────────────────
   SOCIAL BOX
   ────────────────────────────────────────────── */
.social-box {
  display: flex;
  flex-direction: column;
  padding: 2rem 1.75rem;
  flex-shrink: 0;
}
@media (min-width: 768px) {
  .social-box {
    width: 220px;          /* fixed width, height naturally stretches */
  }
}

/* ── "Find me on" eyebrow ── */
.social-eyebrow {
  display: block;
  text-align: center;
  font-size: 0.65rem;
  font-weight: 700;
  font-family: var(--font-body, 'Inter', sans-serif);
  text-transform: uppercase;
  letter-spacing: 0.22em;
  color: #38bdf8;           /* blue-400 */
  margin-bottom: 1.25rem;
}

.social-divider {
  width: 100%;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(255,255,255,.10), transparent);
  margin-bottom: 1.5rem;
}

/* ── Vertical list grows to fill remaining height ── */
.social-list {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  flex: 1;
  justify-content: center;   /* centre icons vertically within the card */
}

/* ── Each social row ── */
.social-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.65rem 0.875rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(255,255,255,.07);
  background: rgba(11,17,32,.50);
  color: #94a3b8;
  text-decoration: none;
  transition:
    color 240ms ease,
    border-color 240ms ease,
    background 240ms ease,
    transform 240ms ease,
    box-shadow 240ms ease;
}
.social-row:hover {
  color: var(--sc, #38bdf8);
  border-color: color-mix(in srgb, var(--sc, #38bdf8) 38%, transparent);
  background: color-mix(in srgb, var(--sc, #38bdf8) 10%, rgba(11,17,32,.55));
  transform: translateX(3px);
  box-shadow: 0 4px 20px color-mix(in srgb, var(--sc, #38bdf8) 18%, transparent);
}

/* ── Icon ── */
.social-icon-wrap {
  flex-shrink: 0;
  width: 1.15rem;
  height: 1.15rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.social-icon-wrap :deep(svg) {
  width: 100%;
  height: 100%;
  display: block;
}

.social-row-label {
  flex: 1;
  font-size: 0.8rem;
  font-weight: 600;
  white-space: nowrap;
}

.social-arrow {
  flex-shrink: 0;
  width: 0.9rem;
  height: 0.9rem;
  opacity: 0;
  transition: opacity 240ms ease, transform 240ms ease;
}
.social-row:hover .social-arrow {
  opacity: 1;
  transform: translateX(2px);
}

/* ──────────────────────────────────────────────
   FORM CARD
   ────────────────────────────────────────────── */
.form-card {
  flex: 1;
  padding: 2rem;
}

.form-card-title {
  font-family: var(--font-display, 'Outfit', sans-serif);
  font-size: 1.15rem;
  font-weight: 700;
  color: #f1f5f9;
  margin: 0 0 1.5rem;
}

/* ── Form fields ── */
.form-body {
  display: flex;
  flex-direction: column;
  gap: 1.125rem;
}

/* Name + Email in one row on desktop */
.field-row {
  display: flex;
  flex-direction: column;
  gap: 1.125rem;
}
@media (min-width: 640px) {
  .field-row {
    flex-direction: row;
    gap: 1rem;
  }
  .field-row .field-group {
    flex: 1;
  }
}

.field-group {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

.field-label {
  font-size: 0.68rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: rgba(148,163,184,.75);
}

/* ── Inputs & Textarea ── */
.field-input {
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(255,255,255,.08);
  background: rgba(11,17,32,.60);
  color: #e2e8f0;
  font-size: 0.875rem;
  font-family: inherit;
  outline: none;
  box-sizing: border-box;
  transition: border-color 220ms ease, box-shadow 220ms ease, background 220ms ease;
}
.field-input::placeholder { color: rgba(100,116,139,.60); }
.field-input:focus {
  border-color: rgba(56,189,248,.55);
  background: rgba(11,17,32,.75);
  box-shadow: 0 0 0 3px rgba(56,189,248,.12), 0 4px 16px rgba(0,0,0,.25);
}
.field-textarea {
  resize: vertical;
  min-height: 110px;
  line-height: 1.65;
}

/* ──────────────────────────────────────────────
   SEND BUTTON
   Outer element handles width + shape + transitions.
   Inner <div class="flex items-center ..."> ensures
   icon and text are always perfectly centred.
   ────────────────────────────────────────────── */
.send-btn {
  width: 100%;
  border-radius: 9999px;               /* pill */
  border: 1px solid rgba(255,255,255,.20);
  background: rgba(255,255,255,.04);
  color: #e2e8f0;
  font-size: 0.9rem;
  font-weight: 700;
  font-family: inherit;
  letter-spacing: 0.04em;
  cursor: pointer;
  margin-top: 0.25rem;
  padding: 0;                          /* padding lives on the inner div */
  line-height: 1;                      /* reset browser default line-height */
  transition:
    background 280ms ease,
    border-color 280ms ease,
    color 280ms ease,
    transform 220ms ease,
    box-shadow 280ms ease;
}
.send-btn:hover:not(:disabled) {
  background: #3b82f6;
  border-color: #60a5fa;
  color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(59,130,246,.40), 0 4px 12px rgba(0,0,0,.30);
}
.send-btn:disabled,
.send-btn--sending {
  opacity: .65;
  cursor: not-allowed;
}

/* ── Icons inside the button ── */
.send-icon {
  display: block;
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
}
.send-spinner {
  display: block;
  width: 1.1rem;
  height: 1.1rem;
  flex-shrink: 0;
  animation: rotate-slow 0.9s linear infinite;
}
</style>
