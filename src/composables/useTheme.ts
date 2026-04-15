import { ref, watchEffect } from 'vue'

// ── Singleton: shared across all components ──────────────────────
const isDark = ref(false)

function init() {
  const stored = localStorage.getItem('theme')
  if (stored === 'dark') {
    isDark.value = true
  } else if (stored === 'light') {
    isDark.value = false
  } else {
    // Respect OS preference on first visit
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
}

// Sync class on <html> whenever isDark changes
watchEffect(() => {
  if (isDark.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
})

export function useTheme() {
  function toggleTheme() {
    isDark.value = !isDark.value
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  }

  return { isDark, toggleTheme, init }
}
