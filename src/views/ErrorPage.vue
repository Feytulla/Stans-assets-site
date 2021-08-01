<template>
  <header-menu />
  <error-header />
  <contacts-block />
  <Footer />
</template>




<script>
import HeaderMenu from "..//components/all/HeaderMenu.vue";
import ErrorHeader from "..//components/error/ErrorHeader.vue";
import ContactsBlock from "..//components/all/ContactsBlock.vue";
import Footer from "..//components/all/Footer.vue";








export default {
  name: "ErrorPage",
  components: {
    HeaderMenu,
    ErrorHeader,
    ContactsBlock,
    Footer,
  },
};
</script>