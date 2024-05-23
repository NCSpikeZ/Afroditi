<template lang="pug">
.full-width-sectionHIW
  .token-txt.hiw
    h1 Mes autres projets
    p Vous trouverez ci-dessous mes autres <span class="gold">projets</span>, cliquez et découvrez !
section.banner.hiw(data-aos="fade-up" data-aos-duration="1500")
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
        { logo: 'tfa.svg', name: 'TFA', link: 'https://nicolascoopman.be/projets/tfaaout/'},
        { logo: 'rux.svg', name: 'RUX', link: 'https://nicolascoopman.be/projets/rethink-ux/'},
        { logo: 'iolce.svg', name: 'IOLCE', link: 'https://nicolascoopman.be/projets/iolce'},
        { logo: 'space.svg', name: 'Space Shooter', link: 'https://nicolascoopman.be/projets/generativedesign/'},
      ];

      const buttonContainer = document.getElementById('HIWbuttonContainer');

      hiwButtons.forEach(tech => {
        const button = document.createElement('a');
        button.classList.add('tech-button', 'hiw');
        button.href = tech.link;
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
