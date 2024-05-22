import './assets/style/main.css'
import './assets/style/footer.css'
import './assets/style/header.css'
import './assets/style/homesection.css'
import './assets/style/HIW.css'
import './assets/style/gameplay.css'
import './assets/style/token.css'
import './assets/style/table.css'
import './assets/style/video.css'
import './assets/style/histoire.css'
import './assets/style/who.css'

import 'normalize.css'

import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

import gameplay from '../src/pages/gameplay.vue'
import histoire from '../src/pages/histoire.vue'
import Home from '../src/pages/index.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/histoire', component: histoire },
  { path: '/gameplay', component: gameplay },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);

app.use(router);

app.mount('#app');