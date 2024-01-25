<template>
  <Header />
  <WalletSection />
  <FooterSection />
  <router-view />
</template>

<script>
import Header from '@/components/Header.vue';
import WalletSection from '@/components/WalletSection.vue';
import FooterSection from '@/components/FooterSection.vue';

export default {
name: 'App',
components: {
  Header,
  FooterSection,
  WalletSection,
},
};
</script>