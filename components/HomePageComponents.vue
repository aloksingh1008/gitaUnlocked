<template>
	<LandingPhotoInHomePage />

  
  <div class="flex justify-between w-full  bg-gray-100">
    <div class="bg-[url('background_left.png')] bg-cover  w-[400px] h-[900px]"></div>
    <div class="bg-[url('background_left.png')] bg-cover  w-[400px] h-[900px scale-x-[-1]"></div>
  </div>

  <WhyGitaInHomePage />

  <FindSolutionsCards />
  
  <GreatPersonalitiesSayAboutGita />

  <CoursesInHomePage />

  <NavBarFooterInHomePage />


  <div class="h-[28rem]">
    <ConnectWithUsComponent />

  </div>
  
  <FooterInHomePage />
</template>

<script setup>
import LandingPhotoInHomePage from "./LandingcomponentInHomePage.vue";
import WhyGitaInHomePage from "./WhysectionInHomePage.vue";
import GreatPersonalitiesSayAboutGita from "./PersonsSayAboutGita.vue";
import CoursesInHomePage from "./CoursesInHomePage.vue";
import NavBarFooterInHomePage from "./NavBarFooterInHomePage.vue";
import FindSolutionsCards from "./FindSolutionsCards.vue";
import ConnectWithUsComponent from "./ConnectWithUsComponent.vue";
import FooterInHomePage from "./FooterInHomePage.vue";
</script>