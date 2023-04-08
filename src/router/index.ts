import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('../pages/PageHome.vue')
        },
        {
            path: '/test',
            component: () => import('../pages/PageTest.vue')
        }
    ]
})

export default router