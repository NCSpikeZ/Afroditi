import './assets/style/main.css'
import './assets/style/footer.css'
import './assets/style/header.css'
import './assets/style/homesection.css'
import './assets/style/HIW.css'
import './assets/style/queen.css'
import './assets/style/token.css'
import './assets/style/table.css'
import './assets/style/video.css'
import './assets/style/wallet.css'
import './assets/style/who.css'

import 'normalize.css'

import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

import Queen from '../src/pages/queen.vue'
import Wallet from '../src/pages/wallet.vue'
import Home from '../src/pages/index.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/wallet', component: Wallet },
  { path: '/queen', component: Queen },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);

app.use(router);

app.mount('#app');