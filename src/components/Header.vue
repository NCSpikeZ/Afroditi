<template lang="pug">
header
  .left-content
    h1 Ronin's Ascend
    button.burger(type="button" id="sidebarBtnToggle")
      i
      i
      i
  .right-content
    .link
      <router-link :to="{ path: '/projets/tfe/' }" :class="accueilClass">Accueil</router-link>
      <router-link :to="{ path: '/projets/tfe/histoire' }" :class="histoireClass">Histoire</router-link>
      <router-link :to="{ path: '/projets/tfe/gameplay' }" :class="gameplayClass">Gameplay</router-link>
    button.launchpad-a(@click="redirectToGame") Jouer
      <svg class="button-icon posfix" width="23" height="24" viewBox="0 0 23 24" fill="none"><g clip-path="url(#clip0_103_723)"><path d="M16.9042 10.8846C13.2666 8.96697 10.6113 5.04346 9.8632 0.30957C9.11505 5.04346 6.46179 8.96697 2.82225 10.8846C2.11379 11.2577 0.351562 11.8314 0.351562 11.8314C0.351562 11.8314 2.11379 12.4051 2.82225 12.7782C6.45981 14.6978 9.11505 18.6213 9.8632 23.3532C10.6113 18.6193 13.2646 14.6958 16.9022 12.7782C17.6106 12.4051 19.3728 11.8314 19.3728 11.8314C19.3728 11.8314 17.6106 11.2577 16.9022 10.8846H16.9042ZM16.9042 10.8846C13.2666 8.96697 10.6113 5.04346 9.8632 0.30957C9.11505 5.04346 6.46179 8.96697 2.82225 10.8846C2.11379 11.2577 0.351562 11.8314 0.351562 11.8314C0.351562 11.8314 2.11379 12.4051 2.82225 12.7782C6.45981 14.6978 9.11505 18.6213 9.8632 23.3532C10.6113 18.6193 13.2646 14.6958 16.9022 12.7782C17.6106 12.4051 19.3728 11.8314 19.3728 11.8314C19.3728 11.8314 17.6106 11.2577 16.9022 10.8846H16.9042ZM21.5819 3.62329C20.4428 3.02153 19.6113 1.79393 19.3771 0.30957C19.143 1.79192 18.3115 3.02153 17.1724 3.62329C16.9501 3.73963 16.3984 3.92016 16.3984 3.92016C16.3984 3.92016 16.9501 4.10069 17.1724 4.21703C18.3115 4.8188 19.143 6.0464 19.3771 7.53076C19.6113 6.04841 20.4428 4.8188 21.5819 4.21703C21.8042 4.10069 22.3559 3.92016 22.3559 3.92016C22.3559 3.92016 21.8042 3.73963 21.5819 3.62329Z" fill="white"></path></g><defs><clipPath id="clip0_103_723"><rect width="22" height="23.0476" fill="white" transform="translate(0.355469 0.30957)"></rect></clipPath></defs></svg>
</template>

<script>
export function redirectToGame() {
  window.location.href = 'https://nicolascoopman.be/projets/tfejeu/';
}

export default {
  name: 'Header',
  data() {
    return {
      accueilClass: '',
      histoireClass: '',
      gameplayClass: ''
    };
  },
  mounted() {
    const currentPath = window.location.pathname;
    if (currentPath.startsWith('/projets/tfe/histoire')) {
      this.histoireClass = 'active';
    } else if (currentPath.startsWith('/projets/tfe/gameplay')) {
      this.gameplayClass = 'active';
    } else {
      this.accueilClass = 'active';
    }

    this.sidebarBtnToggle = document.getElementById("sidebarBtnToggle");
    this.sidebarBtnToggle.addEventListener("click", this.openSidebar);
  },
  methods: {
    openSidebar() {
      this.sidebarBtnToggle.classList.toggle('burgeropen');
    },
    redirectToGame,
  },
};
</script>

<style scoped>
.active {
  font-weight: bold;
  color: #3B71CE;
}
</style>
