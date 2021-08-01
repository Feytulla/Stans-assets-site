<template>
  <div class="error">
    <div class="container">
      <div class="error__item title-style">
        <h1 class="error__title">it looks like you are lost</h1>
        <router-link to="/" class="error__btn">Return to homepage</router-link>
      </div>
    </div>
  </div>
</template>


<style lang="scss">
.error {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.container {
}
.error__item {
    background: url('..//..//assets/images/404.png') no-repeat center center / contain;
    height: 600px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
}
.error__title {
}
.error__btn {
    
  max-width: 258px;
  width: 100%;
  height: 42px;
  margin-top: 30px;
  font-family: Montserrat;
  font-weight: 700;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: #ffffff;
  background: #06b25f;
  border-radius: 6px;
  letter-spacing: normal;
}
.error__btn:hover {
    color: #fff;
}
</style>