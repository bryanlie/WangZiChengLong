import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VueGtag from 'vue-gtag'
import { loadFonts } from './plugins/webfontloader'

// Import translations
import en from './locales/en';
import ch from './locales/ch';

// Configure i18n
const i18n = createI18n({
    locale: 'en', // set default locale
    fallbackLocale: 'en', // set fallback locale
    messages: {
      en,
      ch,
    },
  });

loadFonts()

createApp(App)
.use(VueGtag, {config: {id: "G-Z6ZFDB237H"}}, router)
.use(router)
.use(vuetify)
.use(i18n)
.mount('#app')
