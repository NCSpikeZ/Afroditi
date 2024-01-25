<template lang="pug">
div.full-width-sectionToken
  div.token-txt
    h1 Notre jeton
    p The <span>Afroditi</span> cryptocurrency was created as a tribute to the beauty of women Aphrodite associated with love to beauty and passion.
    img.coin(src="../assets/images/coin.png")
  p.lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
div.coin
</template>

<style>
.full-width-sectionToken {
  width: 100vw;
  height: 100vh;
  background-image: url('../assets/images/fond2.png');
  background-size: cover;
  background-position: center;
  margin-top: -120px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.token-txt {
  text-align: center;
  margin-top: -15vh;
}

.token-txt span{
  color: rgba(227, 195, 124, 1);
  text-transform: uppercase;
  font-weight: 900;
}

.token-txt p {
  font-size: 53px;
  max-width: 38ch;
}

.lorem{
  position: absolute;
  right: 15vw;
  top: 170vh;
  max-width: 54ch;
}

.coin{
  position: absolute;
  left: 5vw;
  top: 150vh;
}
</style>
