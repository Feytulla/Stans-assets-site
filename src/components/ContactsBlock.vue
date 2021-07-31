<template>
  <div class="contacts">
    <div class="container">
      <h2 class="contacts__title title-style">contacts</h2>
      <h6 class="contacts__subtitle">
        We are open for dialog and you are welcome to share your opinions or
        thoughts with us
      </h6>
      <p class="contacts__text">
        Hit us up any time through email with any idea and help us turn your
        great ideas into brilliant projects
      </p>
      <div class="contacts__items row">
        <div class="contacts__item-info col-12 col-md-6 mt-5 mt-md-5">
          <div class="contacts__addres d-flex">
            <span class="contacts__icon"
              ><i class="fas fa-map-marker-alt"></i
            ></span>
            <p class="contacts__info">
              Ukraine, Kyiv, Rodyny Kristeriv 20B, office 188
            </p>
          </div>
          <div class="contacts__phone d-flex">
            <span class="contacts__icon"><i class="fas fa-phone-alt"></i></span>
            <p class="contacts__info">+38 (093) 345 56 76</p>
          </div>
          <div class="contacts__whatsapp d-flex">
            <span class="contacts__icon"><i class="fab fa-whatsapp"></i></span>
            <p class="contacts__info">+38 (093) 345 56 77</p>
          </div>
          <div class="contacts__skype d-flex">
            <span class="contacts__icon"><i class="fab fa-skype"></i></span>
            <p class="contacts__info">Stanassets</p>
          </div>
          <div class="contacts__email d-flex">
            <span class="contacts__icon"><i class="fas fa-envelope"></i></span>
            <p class="contacts__info">stanAssets@gmail.com</p>
          </div>
          <div class="contacts__facebook d-flex">
            <span class="contacts__icon"><i class="fab fa-facebook"></i></span>
            <p class="contacts__info">facebook.com/Stanassets</p>
          </div>
        </div>
        <div class="contacts__item col-12 col-md-6 contacts-bg">
          <div class="contacts__forms">
            <form action="">
              <input
                type="text"
                class="contacts__input-style place-style"
                placeholder="Name"
              />
              <input
                type="email"
                class="contacts__input-style place-style"
                placeholder="Email"
              />
              <textarea
                name="message"
                class="contacts__textarea-style place-style"
                placeholder="Message"
              ></textarea>
              <button type="submit" class="contacts__btn btn">
                send request
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>