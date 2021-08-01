<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-light">
    <div class="container">
      <router-link class="navbar-brand" to="/"
        ><img src="..//..//assets/images/nav_logo.png" alt=""
      /></router-link>

      <div
        class="navbar-toggler header__burger"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span></span>
      </div>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              services
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <router-link class="dropdown-item" to="/ServicesMobil"
                  >Mobile Application Development</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item"  to="/ServicesGame"
                  >Game Development Outsourcing</router-link
                >
              </li>
              <li><router-link class="dropdown-item" to="/ServicesVr">VR App Development</router-link></li>
              <li>
                <router-link class="dropdown-item" to="/ServicesDedi">Dedicated Developers</router-link>
              </li>
              <li><router-link class="dropdown-item" to="/ServicesSdk">SDK Development</router-link></li>
              <li>
                <router-link class="dropdown-item" to="/ServicesMode">3D Modeling services</router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              technologies
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><router-link class="dropdown-item" to="/ErrorPage">Android</router-link></li>
              <li><router-link class="dropdown-item" to="/ErrorPage">IOS</router-link></li>
              <li><router-link class="dropdown-item" to="/ErrorPage">Unity</router-link></li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/ErrorPage">products</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/ErrorPage">portfolio</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/ErrorPage">blog</router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              to="/ErrorPage"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              about us
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><router-link class="dropdown-item" to="/ErrorPage">Contacts</router-link></li>
              <li><router-link class="dropdown-item" to="/ErrorPage">Team</router-link></li>
              <li><router-link class="dropdown-item" to="/ErrorPage">Join the Team</router-link></li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="menu-btn d-lg-block d-none"><router-link to="/ErrorPage">contact us</router-link></div>
    </div>
  </nav>
</template>