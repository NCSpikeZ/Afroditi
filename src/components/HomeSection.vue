<template lang="pug">
div.full-width-section
  div.welcome-txt
    h1 Welcome to Afroditi
    p Invest in the <span>crypto</span> of the most beautiful women in the world!
    button.launchpad-a Go to Launchpad
      <svg class="button-icon posfix" width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_103_723)"><path d="M16.9042 10.8846C13.2666 8.96697 10.6113 5.04346 9.8632 0.30957C9.11505 5.04346 6.46179 8.96697 2.82225 10.8846C2.11379 11.2577 0.351562 11.8314 0.351562 11.8314C0.351562 11.8314 2.11379 12.4051 2.82225 12.7782C6.45981 14.6978 9.11505 18.6213 9.8632 23.3532C10.6113 18.6193 13.2646 14.6958 16.9022 12.7782C17.6106 12.4051 19.3728 11.8314 19.3728 11.8314C19.3728 11.8314 17.6106 11.2577 16.9022 10.8846H16.9042ZM16.9042 10.8846C13.2666 8.96697 10.6113 5.04346 9.8632 0.30957C9.11505 5.04346 6.46179 8.96697 2.82225 10.8846C2.11379 11.2577 0.351562 11.8314 0.351562 11.8314C0.351562 11.8314 2.11379 12.4051 2.82225 12.7782C6.45981 14.6978 9.11505 18.6213 9.8632 23.3532C10.6113 18.6193 13.2646 14.6958 16.9022 12.7782C17.6106 12.4051 19.3728 11.8314 19.3728 11.8314C19.3728 11.8314 17.6106 11.2577 16.9022 10.8846H16.9042ZM21.5819 3.62329C20.4428 3.02153 19.6113 1.79393 19.3771 0.30957C19.143 1.79192 18.3115 3.02153 17.1724 3.62329C16.9501 3.73963 16.3984 3.92016 16.3984 3.92016C16.3984 3.92016 16.9501 4.10069 17.1724 4.21703C18.3115 4.8188 19.143 6.0464 19.3771 7.53076C19.6113 6.04841 20.4428 4.8188 21.5819 4.21703C21.8042 4.10069 22.3559 3.92016 22.3559 3.92016C22.3559 3.92016 21.8042 3.73963 21.5819 3.62329Z" fill="white"></path></g><defs><clipPath id="clip0_103_723"><rect width="22" height="23.0476" fill="white" transform="translate(0.355469 0.30957)"></rect></clipPath></defs></svg>
    a.info En savoir plus
      <svg class="button-icon posfix" width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_103_723)"><path d="M16.9042 10.8846C13.2666 8.96697 10.6113 5.04346 9.8632 0.30957C9.11505 5.04346 6.46179 8.96697 2.82225 10.8846C2.11379 11.2577 0.351562 11.8314 0.351562 11.8314C0.351562 11.8314 2.11379 12.4051 2.82225 12.7782C6.45981 14.6978 9.11505 18.6213 9.8632 23.3532C10.6113 18.6193 13.2646 14.6958 16.9022 12.7782C17.6106 12.4051 19.3728 11.8314 19.3728 11.8314C19.3728 11.8314 17.6106 11.2577 16.9022 10.8846H16.9042ZM16.9042 10.8846C13.2666 8.96697 10.6113 5.04346 9.8632 0.30957C9.11505 5.04346 6.46179 8.96697 2.82225 10.8846C2.11379 11.2577 0.351562 11.8314 0.351562 11.8314C0.351562 11.8314 2.11379 12.4051 2.82225 12.7782C6.45981 14.6978 9.11505 18.6213 9.8632 23.3532C10.6113 18.6193 13.2646 14.6958 16.9022 12.7782C17.6106 12.4051 19.3728 11.8314 19.3728 11.8314C19.3728 11.8314 17.6106 11.2577 16.9022 10.8846H16.9042ZM21.5819 3.62329C20.4428 3.02153 19.6113 1.79393 19.3771 0.30957C19.143 1.79192 18.3115 3.02153 17.1724 3.62329C16.9501 3.73963 16.3984 3.92016 16.3984 3.92016C16.3984 3.92016 16.9501 4.10069 17.1724 4.21703C18.3115 4.8188 19.143 6.0464 19.3771 7.53076C19.6113 6.04841 20.4428 4.8188 21.5819 4.21703C21.8042 4.10069 22.3559 3.92016 22.3559 3.92016C22.3559 3.92016 21.8042 3.73963 21.5819 3.62329Z" fill="white"></path></g><defs><clipPath id="clip0_103_723"><rect width="22" height="23.0476" fill="white" transform="translate(0.355469 0.30957)"></rect></clipPath></defs></svg>
section.nymphe
section.banner
  div.banner-background
    div.button-container(id="buttonContainer")
</template>

<script>
export default {
  name: 'HomeSection',
  mounted() {
    this.createButtons();
  },
  methods: {
    createButtons() {
      const techButtons = [
        { logo: 'logo.png', name: 'METAMASK' },
        { logo: 'logo.png', name: 'TRUSTWALLET' },
        { logo: 'logo.png', name: 'UNISWAP V3' },
        { logo: 'logo.png', name: 'ETHEREUM LAYER 2' },
        { logo: 'logo.png', name: 'METAMASK' },
        { logo: 'logo.png', name: 'TRUST WALLET' },
      ];

      const buttonContainer = document.getElementById('buttonContainer');

      techButtons.forEach(tech => {
        const button = document.createElement('button');
        button.classList.add('tech-button');
        button.innerHTML = `
          <img src="../assets/images/${tech.logo}">
          <span>${tech.name}</span>
        `;
        buttonContainer.appendChild(button);
      });
    },
  },
};
</script>

<style>
.full-width-section {
  width: 100vw;
  height: 100vh;
  background-image: url('../assets/images/fond.png');
  background-size: cover;
  background-position: center;
  margin-top: 120px;
}

.welcome-txt {
  margin-top: 20vh;
  margin-left: 10vw;
  color: white;
}

.welcome-txt p {
  margin-top: 0px;
  font-size: 69px;
  max-width: 700px;
}

.welcome-txt p span {
  color: #74a6ff;
}

.launchpad-a {
  background-color: #6f96db;
  border: none;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding: 20px 20px 20px 40px;
}

.nymphe {
  position: absolute;
  top: 150px;
  right: 50px;
  width: 880px;
  height: 820px;
  background-image: url('../assets/images/nymphe.png');
  background-size: cover;
  background-position: center;
}

.banner {
  position: absolute;
  bottom: 0;
  width: 100vw;
  height: 11vh;
  background-image: url(../assets/images/bandeau.png);
  background-size: cover;
  background-position: center;
  overflow-y: hidden;
}

.banner-background {
  background-color: #0c2b4b;
  margin-top: 8px;
  height: 11vh;
  transform: rotate(-1deg);
  display: flex;
  align-items: center;
  justify-content: center;
}

.button-container {
  display: flex;
}

.tech-button {
  background-color: rgba(255, 255, 255, 0.17);
  width: 280px;
  border: none;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 50px;
  margin: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tech-button img {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}

.tech-button span {
  font-size: 18px;
}

.info {
  margin-left: 60px;
  font-size: 18px;
  cursor: pointer;
}

.posfix{
  margin-left: 10px;
}
</style>
