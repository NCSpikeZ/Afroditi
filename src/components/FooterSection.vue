<template lang="pug">
footer
  .footer-content
    h1.site-title Afroditi
    .footer-columns
      .footer-column
        h4 Plus de liens
        ul
          li About
          li Reine
          li Modèle
          li White Paper
          li Mentions légales
      .footer-column
        h4 Comment ça marche
        ul
          li Portefeuille
          li Acheter
          li Vendre
          li Authentification
          li Agriculture
      .footer-column
        h4 Contact US
        ul
          li Hotel Reservation: 123-456-7890
          li Ticket Office: 123-456-789
      .footer-column
        h4 Social
        .social-icons
          a(href="lien_vers_facebook")
            img(src="../assets/images/logo.png", alt="Facebook")
          a(href="lien_vers_twitter")
            img(src="../assets/images/logo.png", alt="Twitter")
          a(href="lien_vers_instagram")
            img(src="../assets/images/logo.png", alt="Instagram")
          a(href="lien_vers_linkedin")
            img(src="../assets/images/logo.png", alt="LinkedIn")
  .copyright © 2023 Afroditi | All Rights Reserved
</template>

<style>
footer {
  background-color: rgba(7, 24, 42, 1);
  color: #fff;
  padding: 20px 0;
}

.footer-content {
  max-width: 1400px;
  height: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 100px;
}

.footer-columns {
  display: flex;
}

.footer-column {
  margin-right: 100px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  margin-bottom: 18px;
}

.social-icons {
  display: flex;
}

.social-icons img{
  width: 60px;
}

.copyright {
  text-align: center;
  margin-bottom: 72px;
}
</style>
