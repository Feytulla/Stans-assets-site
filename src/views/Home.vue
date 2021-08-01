<template>
  <header-menu />
  <header-carousel />
  <social-bar />
  <home-technologies />
  <rating-block />
  <home-service />
  <partner-block />
  <home-achievements />
  <home-partners />
  <contacts-block />
  <Footer />
</template>

<script>
// @ is an alias to /src
import HeaderMenu from "..//components/all/HeaderMenu.vue";
import HeaderCarousel from "../components/home/HeaderCarousel.vue";
import HomeTechnologies from "../components/home/HomeTechnologies.vue";
import RatingBlock from "../components/all/RatingBlock.vue";
import HomeService from "../components/home/HomeService.vue";
import PartnerBlock from "../components/all/PartnerBlock.vue";
import HomeAchievements from "../components/home/HomeAchievements.vue";
import HomePartners from "../components/home/HomePartners.vue";
import ContactsBlock from "../components/all/ContactsBlock.vue";
import Footer from "../components/all/Footer.vue";
import SocialBar from "../components/all/SocialBar.vue";



export default {
  name: "Home",
  components: {
    HeaderMenu,
    HeaderCarousel,
    HomeTechnologies,
    RatingBlock,
    HomeService,
    PartnerBlock,
    HomeAchievements,
    HomePartners,
    ContactsBlock,
    Footer,
    SocialBar
  },
};
</script>
