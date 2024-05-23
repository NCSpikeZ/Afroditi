<template lang="pug">
footer
  .footer-content
    h1.site-title Ronin's Ascend
    .footer-columns
      .footer-column
        h4 Plus de liens
        ul
          li
            <router-link to="/projets/tfe/histoire">Histoire</router-link>
          li
            <router-link to="/projets/tfe/gameplay">Gameplay</router-link>

      .footer-column
        h4 Mes projets
        ul
          li
            a(href="https://nicolascoopman.be/projets/tfaaout/") TFA
          li
            a(href="https://nicolascoopman.be/projets/rethink-ux/") RUX
          li
            a(href="https://nicolascoopman.be/projets/iolce/") IOLCE
          li
            a(href="https://nicolascoopman.be/projets/generativedesign/") Space Shooter
      .footer-column
        h4 Me contacter
        ul
          li
            a(href="mailto:nicolas.coop@outlook.fr") nicolas.coop@outlook.fr
      .footer-column
        h4 Social
        .social-icons
          a(href="https://www.instagram.com/1.spike.z/")
            img(src="../assets/images/insta.svg", alt="Instagram")
          a(href="https://x.com/Tuntoye")
            img(src="../assets/images/twitter.svg", alt="Twitter")     
          
  .copyright © 2023 SpikeNC | All Rights Reserved
</template>