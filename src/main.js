import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import App from '@/App.vue';
import router from '@/router';
import { createHead } from '@vueuse/head';
import { defineCustomElements } from '@duetds/date-picker/custom-element';

defineCustomElements(window);

const app = createApp(App);
const head = createHead();
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(pinia);
app.use(router);
app.use(head);

app.mount('#app');
