<template lang="pug">
.full-width-section
  .welcome-txt
    h1 Wallet
    p Where can I store my Afroditi tokens in a Decentralized Wallet ?
  .wallet-txt
    p Afroditi is an ERC-20 token published on Polygon chain (Ethereum Layer 2).
    p We are using only Web3 wallet walletnology like MetaMask and Trust Wallet.
    p These wallets enable users to access the Web3 ecosystem of DeFi and decentralized applications (dapps).
    p These wallets are decentralized wallets that enables users to store ETH, MATIC and other ERC-20 tokens like AFRODITI.
    p To install MetaMask wallet, the available plugins
  .banner-background.wallet
    h1 STEP 1 : <span>To install MetaMask wallet with the available plugins :</span>
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
      const walletButtons = [
        { logo: 'chrome.png', name: 'CHROME' },
        { logo: 'firefox.png', name: 'FIREFOX' },
        { logo: 'edge.png', name: 'EDGE' },
        { logo: 'brave.png', name: 'BRAVE' },
        { logo: 'opera.png', name: 'OPERA' },
        { logo: 'android.png', name: 'ANDROID' },
        { logo: 'apple.png', name: 'IOS APPLE' },
      ];

      const buttonContainer = document.getElementById('buttonContainer');

      walletButtons.forEach(wallet => {
        const button = document.createElement('button');
        button.classList.add('wallet-button');
        button.innerHTML = `
          <img src="../src/assets/images/${wallet.logo}">
          <span>${wallet.name}</span>
        `;
        buttonContainer.appendChild(button);
      });
    },
  },
};
</script>