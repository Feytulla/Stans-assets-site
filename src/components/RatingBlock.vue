<template>
  <div class="container">
    <div
      class="rating-block row d-flex justify-content-around align-items-center"
    >
      <div class="rating-block__image col-12 col-lg-4 mt-3 mt-lg-0">
        <img src="..//assets/images/clutch.png" alt="" />
      </div>
      <div class="rating col-12 col-lg-4 mb-4 mb-lg-0 mt-2 mt-lg-0">
        <div class="rating__value">4.5</div>
        <div class="rating__body">
          <div class="rating__active"></div>
          <div class="rating__items">
            <input type="radio" class="rating__item" value="1" name="rating" />
            <input type="radio" class="rating__item" value="2" name="rating" />
            <input type="radio" class="rating__item" value="3" name="rating" />
            <input type="radio" class="rating__item" value="4" name="rating" />
            <input type="radio" class="rating__item" value="5" name="rating" />
          </div>
        </div>
        <div class="rating__reviews">2 reviews</div>
      </div>
      <div class="rating-block__btn col-12 col-lg-4 mb-5 mb-lg-0">
        <a href="#" class="rating-block__link">Check out reviews</a>
      </div>
    </div>
  </div>
</template>