import { createApp } from 'vue'
import { loadSlim } from '@tsparticles/slim';
import VueParticles from '@tsparticles/vue3';

import App from './App.vue'
import router from './router.js'

createApp(App).use(router).use(VueParticles, {
    init: async engine => { await loadSlim(engine); },
}).mount('#app');
