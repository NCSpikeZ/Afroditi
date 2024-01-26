<template>
  <Header />
  <QueenSection />
  <FooterSection />
  <router-view />
</template>

<script>
import Header from '@/components/Header.vue';
import QueenSection from '@/components/QueenSection.vue';
import FooterSection from '@/components/FooterSection.vue';

export default {
name: 'App',
components: {
  Header,
  FooterSection,
  QueenSection,
},
};
</script>