<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-light">
    <div class="container">
      <a class="navbar-brand" href="#"
        ><img src="..//assets/images/nav_logo.png" alt=""
      /></a>

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
                <router-link class="dropdown-item" to="/mobile"
                  >Mobile Application Development</router-link
                >
              </li>
              <li>
                <a class="dropdown-item" href="#"
                  >Game Development Outsourcing</a
                >
              </li>
              <li><a class="dropdown-item" href="#">VR App Development</a></li>
              <li>
                <a class="dropdown-item" href="#">Dedicated Developers</a>
              </li>
              <li><a class="dropdown-item" href="#">SDK Development</a></li>
              <li>
                <a class="dropdown-item" href="#">3D Modeling services</a>
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
              <li><a class="dropdown-item" href="#">Android</a></li>
              <li><a class="dropdown-item" href="#">IOS</a></li>
              <li><a class="dropdown-item" href="#">Unity</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">products</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">portfolio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">blog</a>
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
              about us
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Contacts</a></li>
              <li><a class="dropdown-item" href="#">Team</a></li>
              <li><a class="dropdown-item" href="#">Join the Team</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="menu-btn d-lg-block d-none"><a href="#">contact us</a></div>
    </div>
  </nav>
</template>