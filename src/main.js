import './assets/main.css'
import 'normalize.css'

import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

import Wallet from '../src/pages/wallet.vue'
import Home from '../src/pages/index.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/pages/wallet', component: Wallet },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);

app.use(router);

app.mount('#app');