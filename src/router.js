import { createRouter, createWebHistory } from 'vue-router'
import Start from './pages/Start.vue';

/**
 * @type {import('vue-router').RouteRecordRaw[]} The raw route records for the website.
 */
const routes = [
    { path: "/", component: Start },
    { path: '/:catchAll(.*)', redirect: "/" },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;