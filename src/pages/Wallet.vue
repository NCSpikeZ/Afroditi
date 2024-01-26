<template>
  <Header />
  <WalletSection />
  <TableSection />
  <VideoSection />
  <FooterSection />
  <router-view />
</template>

<script>
import Header from '@/components/Header.vue';
import WalletSection from '@/components/WalletSection.vue';
import FooterSection from '@/components/FooterSection.vue';
import TableSection  from '@/components/TableSection.vue';
import VideoSection from '@/components/VideoSection.vue';

export default {
name: 'App',
components: {
  Header,
  FooterSection,
  WalletSection,
  TableSection,
  VideoSection,
},
};
</script>