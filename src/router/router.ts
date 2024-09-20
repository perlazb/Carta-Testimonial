import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Login from '../components/Login.vue';
import Carta from '../components/Carta.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/carta', component: Carta },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

