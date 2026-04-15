import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
import './style.css'

import id from './locales/id.json'
import en from './locales/en.json'

const savedLocale = localStorage.getItem('locale') || 'id'

const i18n = createI18n({
  legacy: false,
  locale: savedLocale,
  fallbackLocale: 'en',
  messages: { id, en }
})

const app = createApp(App)

app.use(router)
app.use(i18n)

app.mount('#app')

