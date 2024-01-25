<template lang="pug">
div.full-width-sectionHIW
  div.token-txt.hiw
    h1 Comment ça marche ?
    p Lorem ipsum <span class="gold">dolor</span> sit amet, consectetur
section.banner.hiw
  div.banner-background.hiw
    div.button-container(id="HIWbuttonContainer")
</template>

<script>
export default {
  name: 'HIWSection',
  mounted() {
    this.createButtons();
  },
  methods: {
    createButtons() {
      const hiwButtons = [
        { logo: 'logo.png', name: 'GESTION DU PORTEFEUILLE' },
        { logo: 'logo.png', name: 'ACHETER ET VENDRE' },
        { logo: 'logo.png', name: 'AGRICULTURE' },
        { logo: 'logo.png', name: 'AUTHENTIFICATION' },
      ];

      const buttonContainer = document.getElementById('HIWbuttonContainer');

      hiwButtons.forEach(tech => {
        const button = document.createElement('button');
        button.classList.add('tech-button', 'hiw');
        button.innerHTML = `
          <img src="../assets/images/${tech.logo}">
          <span>${tech.name}</span>
          <span class="arrow"></span>
        `;
        buttonContainer.appendChild(button);
      });
    },
  },
};
</script>

<style>
.full-width-sectionHIW {
  width: 100vw;
  height: 70vh;
  background-image: url('../assets/images/fond4.png');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.token-txt.hiw p{
  max-width: 20ch;
}

.token-txt span.gold{
  color: rgba(116, 166, 255, 1);
  text-transform: initial;
}

.banner-background.hiw {
  height: 13vh;
}

.banner.hiw {
  position: absolute;
  top: 350vh;
  width: 100vw;
  height: 13vh;
  background-image: url(../assets/images/bandeau.png);
  background-size: cover;
  background-position: center;
  overflow-y: hidden;
}

.tech-button.hiw {
  padding: 20px 30px;
}

.arrow {
  display: inline-block;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 6px 0 6px 10px;
  border-color: transparent transparent transparent white;;
  margin-left: 10px;
}
</style>
