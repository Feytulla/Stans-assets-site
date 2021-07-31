<template>
  <HeaderMenu />

  <router-view />
</template>





<script>
import HeaderMenu from "./components/HeaderMenu.vue";


export default {
  component: {
    HeaderMenu,
  },
};
</script>


<style lang="scss">
#app {
  font-family: Montserrat, sans-serif;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
a {
  text-decoration: none;
}
</style>
