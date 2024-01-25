<template lang="pug">
header
  .left-content
    h1 Afroditi
  .right-content
    .link
      a Home
      a About
      a Wallet
      a Buy
      a Sell
      a Farming
      a Queens
      a Models
      a Contact
    button.launchpad-a Go to Launchpad
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
header {
  color: #112440;
  padding: 10px;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.left-content {
  font-family: "restore", sans-serif;
  font-weight: 900;
  font-style: normal;
  text-transform: uppercase;
  font-size: 24px;
  display: flex;
  align-items: center;
  margin-left: 150px;
  background: linear-gradient(90deg, rgba(43,66,111,1) 0%, rgba(102,139,206,1) 35%);
  background-size: 400% 400%;
  background-clip: text;
  color: transparent;
}
.right-content {
  display: flex;
  align-items: center;
  margin-right: 18px;
}

.link{
  margin-right: 54px;
}

.right-content a{
  font-size: 18px;
  font-weight: 400;
  font-style: normal;
  margin-left: 10px;
  padding: 8px 12px;
  color: #112440;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.launchpad-a {
  background-color: #6F96DB;
  border: none;
  color: white;
  padding: 20px 50px;
  font-weight: bold;
  margin-right: 80px;
  cursor: pointer;
}
</style>
