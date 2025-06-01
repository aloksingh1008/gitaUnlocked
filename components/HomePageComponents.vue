<template>
	

  
  <div class="flex justify-between w-full z-0">
    <div class=" bg-cover  w-[400px] h-[800px] z-0"></div>
    <div class="bg-[url('background_left.png')] bg-cover  w-[400px] h-[900px scale-x-[-1] z-0"></div>
    
  </div>
  <LandingPhotoInHomePage2 />

  <WhyGitaInHomePage />

  <FindSolutionsCards />
  
  <GreatPersonalitiesSayAboutGita />

  <CoursesInHomePage />

  <NavBarFooterInHomePage />


  <div class="h-[28rem] z-20">
    <ConnectWithUsComponent />

  </div>
  
  
</template>

<script setup>
import LandingPhotoInHomePage2 from "./LandingcomponentInHomePage2.vue";
import WhyGitaInHomePage from "./WhysectionInHomePage.vue";
import GreatPersonalitiesSayAboutGita from "./PersonsSayAboutGita.vue";
import CoursesInHomePage from "./CoursesInHomePage.vue";
import NavBarFooterInHomePage from "./NavBarFooterInHomePage.vue";
import FindSolutionsCards from "./FindSolutionsCards.vue";
import ConnectWithUsComponent from "./ConnectWithUsComponent.vue";

</script>