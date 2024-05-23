<template lang="pug">
.full-width-section
  .welcome-txt
    h1 histoire
    p Pourquoi notre héros parcourt-il le <span>Japon</span> ?
  .histoire-txt(data-aos="fade-left" data-aos-duration="2000")
    p Dans le Japon féodal, Takezô, un jeune Ronin banni de son village, parcourt les montagnes et forêts à la recherche de duels. 
    p Son désir de démontrer sa valeur le pousse à défier les samouraïs qu'il rencontre afin de devenir l'un des plus grands guerriers de son temps.
    p Mais derrière cette quête de <span>gloire</span> se cache une histoire de trahison et de rédemption.
  .banner-background.histoire
    h1 LES THÉMES ABORDÉES : <span>Vous trouverez plusieurs sujets dans ce récit notamment :</span>
    .button-container(id="buttonContainer")
</template>

<script>
export default {
  name: 'HomeSection',
  mounted() {
    this.createButtons();
  },
  methods: {
    createButtons() {
      const histoireButtons = [
        { logo: 'redemption.svg', name: 'Redemption' },
        { logo: 'justice.svg', name: 'Justice' },
        { logo: 'introspection.svg', name: 'Introspection' },
        { logo: 'duel.svg', name: 'Duel' },
        { logo: 'exil.svg', name: 'Exil' },
      ];

      const buttonContainer = document.getElementById('buttonContainer');

      buttonContainer.innerHTML = '';

      histoireButtons.forEach(histoire => {
        const button = document.createElement('button');
        button.classList.add('histoire-button');
        button.innerHTML = `
          <img src="../assets/images/${histoire.logo}">
          <span>${histoire.name}</span>
        `;
        buttonContainer.appendChild(button);
      });
    },
  },
};
</script>