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

<style>
#app {
font-family: "coolvetica", sans-serif;
color: white;
font-size: 18px;
}

h1, h2, h3 {
font-family: "restore", sans-serif;
font-weight: 900;
font-style: normal;
text-transform: uppercase;
}
</style>
