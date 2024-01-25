<template lang="pug">
div.full-width-sectionWho
  div.welcome-txt.who
    h1 Pour qui ?
    p  Lorem ipsum <span>dolor</span> sit amet, consectetur
    p.basic-txt  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
    button.launchpad-a.large
      span.button-text More infos
      <svg class="button-icon" width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_103_723)"><path d="M16.9042 10.8846C13.2666 8.96697 10.6113 5.04346 9.8632 0.30957C9.11505 5.04346 6.46179 8.96697 2.82225 10.8846C2.11379 11.2577 0.351562 11.8314 0.351562 11.8314C0.351562 11.8314 2.11379 12.4051 2.82225 12.7782C6.45981 14.6978 9.11505 18.6213 9.8632 23.3532C10.6113 18.6193 13.2646 14.6958 16.9022 12.7782C17.6106 12.4051 19.3728 11.8314 19.3728 11.8314C19.3728 11.8314 17.6106 11.2577 16.9022 10.8846H16.9042ZM16.9042 10.8846C13.2666 8.96697 10.6113 5.04346 9.8632 0.30957C9.11505 5.04346 6.46179 8.96697 2.82225 10.8846C2.11379 11.2577 0.351562 11.8314 0.351562 11.8314C0.351562 11.8314 2.11379 12.4051 2.82225 12.7782C6.45981 14.6978 9.11505 18.6213 9.8632 23.3532C10.6113 18.6193 13.2646 14.6958 16.9022 12.7782C17.6106 12.4051 19.3728 11.8314 19.3728 11.8314C19.3728 11.8314 17.6106 11.2577 16.9022 10.8846H16.9042ZM21.5819 3.62329C20.4428 3.02153 19.6113 1.79393 19.3771 0.30957C19.143 1.79192 18.3115 3.02153 17.1724 3.62329C16.9501 3.73963 16.3984 3.92016 16.3984 3.92016C16.3984 3.92016 16.9501 4.10069 17.1724 4.21703C18.3115 4.8188 19.143 6.0464 19.3771 7.53076C19.6113 6.04841 20.4428 4.8188 21.5819 4.21703C21.8042 4.10069 22.3559 3.92016 22.3559 3.92016C22.3559 3.92016 21.8042 3.73963 21.5819 3.62329Z" fill="white"></path></g><defs><clipPath id="clip0_103_723"><rect width="22" height="23.0476" fill="white" transform="translate(0.355469 0.30957)"></rect></clipPath></defs></svg>
  section.nymphes
</template>

<style>
.full-width-sectionWho {
  width: 100vw;
  height: 100vh;
  background-image: url('../assets/images/fond3.png');
  background-size: cover;
  background-position: center;
  display: flex;
}

.welcome-txt.who {
  margin-top: 360px;
}

.welcome-txt p {
  margin-bottom: 18px;
}

.welcome-txt p.basic-txt {
  font-size: 18px;
  margin-bottom: 36px;
}

button.launchpad-a.large {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 20px 20px 20px;
}

.button-text {
  margin-right: 60px;
}

.button-icon {
  fill: white;
  vertical-align: middle;
}

.nymphes {
  position: absolute;
  top: 227.2vh;
  right: 0px;
  width: 961px;
  height: 785px;
  background-image: url('../assets/images/nymphes.png');
  background-size: cover;
  background-position: center;
}
</style>
