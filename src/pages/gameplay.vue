<template>
  <Header />
  <gameplaySection />
  <FooterSection />
  <router-view />
</template>

<script>
import Header from '@/components/Header.vue';
import gameplaySection from '@/components/gameplaySection.vue';
import FooterSection from '@/components/FooterSection.vue';

export default {
name: 'App',
components: {
  Header,
  FooterSection,
  gameplaySection,
},
};
</script>