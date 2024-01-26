<template>
  <Header />
  <HomeSection />
  <TokenSection />
  <WhoSection />
  <HIWSection />
  <FooterSection />
  <router-view />
</template>

<script>
import Header from '@/components/Header.vue';
import HomeSection from '@/components/HomeSection.vue';
import TokenSection from '@/components/TokenSection.vue';
import WhoSection from '@/components/WhoSection.vue';
import HIWSection from '@/components/HowItWorksSection.vue';
import FooterSection from '@/components/FooterSection.vue';


export default {
name: 'App',
components: {
  Header,
  HomeSection,
  TokenSection,
  WhoSection,
  HIWSection,
  FooterSection,
},
};
</script>