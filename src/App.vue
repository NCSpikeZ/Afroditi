<template>
  <router-view />
</template>

<script>
import { RouterView } from "vue-router"
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
name: 'App',
components: {
  RouterView
},
mounted() {
  AOS.init();
  this.$router.afterEach(() => {
    window.scrollTo(0, 0);
  });
}
}
</script>
