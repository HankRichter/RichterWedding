import { createRouter, createWebHistory } from 'vue-router'


const routes = [
    {path: '/', component: () => import('./pages/Homepage.vue')},
    {path: '/schedule', component: () => import('./pages/Schedule.vue')},
    {path: '/registry', component: () => import('./pages/Registry.vue')},
    {path: '/travel', component: () => import('./pages/HotelTravel.vue')},
    {path: '/wedding-party', component: () => import('./pages/WeddingParty.vue')},
    {path: '/gallery', component: () => import('./pages/Gallery.vue')},
    {path: '/faq', component: () => import('./pages/FAQ.vue')},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router