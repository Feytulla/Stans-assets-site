<template>
  <header-menu />
  <social-bar />
  <vr-header />
  <rating-block />
  <services-block />
  <partner-block />
  <services-text />
  <contacts-block />
  <Footer />
</template>




<script>
import HeaderMenu from "..//components/all/HeaderMenu.vue";
import VrHeader from "..//components/services/VrHeader.vue";
import RatingBlock from "..//components/all/RatingBlock.vue";
import ServicesBlock from "..//components/services/ServicesBlock.vue";
import PartnerBlock from "..//components/all/PartnerBlock.vue";
import ServicesText from "..//components/services/ServicesText.vue";
import ContactsBlock from "..//components/all/ContactsBlock.vue";
import Footer from "..//components/all/Footer.vue";
import SocialBar from "..//components/all/SocialBar.vue";
import "..//assets/layouts/MobilStyle.scss";







export default {
  name: "ServicesGame",
  components: {
    HeaderMenu,
    VrHeader,
    RatingBlock,
    ServicesBlock,
    PartnerBlock,
    ServicesText,
    ContactsBlock,
    Footer,
    SocialBar,
  },
  data() {
    return {
      loadingImg: require("../assets/images/vr_head.png"),
    };
  },
};
</script>