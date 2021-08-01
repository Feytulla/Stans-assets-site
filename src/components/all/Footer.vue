<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__items row">
        <div class="footer__item col-lg-3 col-12  mb-3 mb-lg-0">
          <img
            src="..//..//assets/images/footer_logo.png"
            class="img-fluid"
            alt="logo"
          />
          <div class="footer__icons row">
            <a href="#" class="footer__icon col-4 mb-4"
              ><i class="fab fa-facebook"></i
            ></a>
            <a href="#" class="footer__icon col-4"
              ><i class="fab fa-linkedin"></i
            ></a>
            <a href="#" class="footer__icon col-4"
              ><i class="fab fa-whatsapp"></i
            ></a>
            <a href="#" class="footer__icon col-4"
              ><i class="fab fa-skype"></i
            ></a>
            <a href="#" class="footer__icon col-4"
              ><i class="fab fa-github"></i
            ></a>
          </div>
        </div>
        <div class="footer__item col-lg-3 col-12 mb-3 mb-lg-0">
          <h3 class="footer__title">services</h3>
          <ul class="footer__lists">
            <li class="footer__list">
              <router-link to="/ServicesMobil" class="footer__link">Mobile Application Development</router-link>
            </li>
            <li class="footer__list">
              <a to="/ServicesGame" class="footer__link">Game Development Outsourcing</a>
            </li>
            <li class="footer__list">
              <router-link to="/ServicesVr" class="footer__link">VR App Development</router-link>
            </li>
            <li class="footer__list">
              <router-link to="/ServicesDedi" class="footer__link">Dedicated Developers</router-link>
            </li>
            <li class="footer__list">
              <router-link to="/ServicesSdk" class="footer__link">SDK Development</router-link>
            </li>
            <li class="footer__list">
              <router-link to="/ServicesMode" class="footer__link">3D Modeling services</router-link>
            </li>
          </ul>
        </div>
        <div class="footer__item col-lg-2 col-12 mb-3 mb-lg-0">
          <h3 class="footer__title">technologies</h3>
          <ul class="footer__lists">
            <li class="footer__list">
              <router-link to="/ErrorPage" class="footer__link">Android</router-link>
            </li>
            <li class="footer__list">
              <router-link to="/ErrorPage" class="footer__link">IOS</router-link>
            </li>
            <li class="footer__list">
              <router-link to="/ErrorPage" class="footer__link">Unity</router-link>
            </li>
          </ul>
        </div>
        <div class="footer__item col-lg-2 col-12 mb-3 mb-lg-0">
          <ul class="footer__lists mt-3">
            <li class="footer__list">
              <router-link to="/ErrorPage" class="footer__title">products</router-link>
            </li>
            <li class="footer__list">
              <router-link to="/ErrorPage" class="footer__title">portfolio</router-link>
            </li>
            <li class="footer__list">
              <router-link to="/ErrorPage" class="footer__title">blog</router-link>
            </li>
          </ul>
        </div>
        <div class="footer__item col-lg-2 col-12">
          <h3 class="footer__title">About us</h3>
          <ul class="footer__lists">
            <li class="footer__list">
              <router-link to="/ErrorPage" class="footer__link">Contacts</router-link>
            </li>
            <li class="footer__list">
              <router-link to="/ErrorPage" class="footer__link">Team</router-link>
            </li>
            <li class="footer__list">
              <router-link to="/ErrorPage" class="footer__link">Join the Team</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer__protection">
          <span class="footer__copyin">© 2021 - Stan’s Assets. All Right Reserved</span>
      </div>
  </footer>
</template>
