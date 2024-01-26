<template lang="pug">
.full-width-sectionHIW
  .token-txt.hiw
    h1 Comment ça marche ?
    p Lorem ipsum <span class="gold">dolor</span> sit amet, consectetur
section.banner.hiw
  .banner-background.hiw
    .button-container(id="HIWbuttonContainer")
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
        { logo: 'gestion.png', name: 'GESTION DU PORTEFEUILLE' },
        { logo: 'coin.png', name: 'ACHETER ET VENDRE' },
        { logo: 'agriculture.png', name: 'AGRICULTURE' },
        { logo: 'key.png', name: 'AUTHENTIFICATION' },
      ];

      const buttonContainer = document.getElementById('HIWbuttonContainer');

      hiwButtons.forEach(tech => {
        const button = document.createElement('button');
        button.classList.add('tech-button', 'hiw');
        button.innerHTML = `
          <img src="../src/assets/images/${tech.logo}">
          <span>${tech.name}</span>
          <span class="arrow"></span>
        `;
        buttonContainer.appendChild(button);
      });
    },
  },
};
</script>