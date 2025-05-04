/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from "@/plugins";

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

// Styles
import "unfonts.css";

import { createI18n } from "vue-i18n";
import mk from "./locales/mk.json";
import en from "./locales/en.json";

const i18n = createI18n({
  locale: "mk", // or use navigator.language for dynamic detection
  fallbackLocale: "en",
  messages: { mk, en },
});

const app = createApp(App);
app.use(i18n);

registerPlugins(app);

app.mount("#app");
