<template lang="pug">
div.full-width-section
  div.welcome-txt
    h1 Wallet
    p Where can I store my Afroditi tokens in a Decentralized Wallet ?
  div.wallet-txt
    p Afroditi is an ERC-20 token published on Polygon chain (Ethereum Layer 2).
    p We are using only Web3 wallet technology like MetaMask and Trust Wallet.
    p These wallets enable users to access the Web3 ecosystem of DeFi and decentralized applications (dapps).
    p These wallets are decentralized wallets that enables users to store ETH, MATIC and other ERC-20 tokens like AFRODITI.
    p To install MetaMask wallet, the available plugins
  div.banner-background.wallet
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

.wallet-txt {
  position: absolute;
  max-width: 65ch;
  top: 40vh;
  right: 15vw;
}

.banner-background.wallet {
  transform: rotate(0deg);
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
</style>
