<template>
  <HeaderMenu />
  <HeaderCarousel />
  <HomeTechnologies />
  <RatingBlock />
  <HomeService />
  <PartnerBlock />
  <HomeAchievements />
  <HomePartners />
  <ContactsBlock />
  <Footer />
</template>

<script>
// @ is an alias to /src
import HeaderMenu from "..//components/HeaderMenu.vue";
import HeaderCarousel from "../components/HeaderCarousel.vue";
import HomeTechnologies from "../components/HomeTechnologies.vue";
import RatingBlock from "../components/RatingBlock.vue";
import HomeService from "../components/HomeService.vue";
import PartnerBlock from "../components/PartnerBlock.vue";
import HomeAchievements from "../components/HomeAchievements.vue";
import HomePartners from "../components/HomePartners.vue";
import ContactsBlock from "../components/ContactsBlock.vue";
import Footer from "../components/Footer.vue";



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
  },
};
</script>
