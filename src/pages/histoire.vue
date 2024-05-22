<template>
  <Header />
  <histoireSection />
  <TableSection />
  <VideoSection />
  <FooterSection />
  <router-view />
</template>

<script>
import Header from '@/components/Header.vue';
import histoireSection from '@/components/histoireSection.vue';
import FooterSection from '@/components/FooterSection.vue';
import TableSection  from '@/components/TableSection.vue';
import VideoSection from '@/components/VideoSection.vue';

export default {
name: 'App',
components: {
  Header,
  FooterSection,
  histoireSection,
  TableSection,
  VideoSection,
},
};
</script>