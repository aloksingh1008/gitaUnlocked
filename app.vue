<template>
  <Navbar />
  <div class="bg-gradient-to-r from-blue-100 to-purple-200">
    <NavLinks v-model="toShowComponent" @toShowComponentChanged="updateComponent" />
  </div>
  <div class="h-28">

  </div>

  <HomePageComponents v-if="toShowComponent.currentPage === 'home'" />

  <div v-if="toShowComponent.currentPage === 'findSolutionFor'" class="mx-16 px-4">
  <component :is="dynamicComponent" />
</div>

  <AboutUs v-if="toShowComponent.currentPage === 'aboutus'" />
  <FooterInHomePage />
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import AboutUs from "./components/AboutUs.vue";
import VideoPlayer from "./components/VideoPlayer.vue";
import { getFirestore, doc, getDoc, collection, getDocs } from "firebase/firestore";
import db from './src/firebase/init.js'; // Ensure this file properly initializes Firebase
import NavLinks from "./components/NavLinks.vue";
import HomePageComponents from "./components/HomePageComponents.vue";
import FooterInHomePage from "./components/FooterInHomePage.vue";


import { ref } from 'vue';

import { shallowRef, h } from 'vue';

const dynamicComponent = shallowRef(null);

const updateComponent = async (newData) => {
  toShowComponent.value = newData;

  if (newData.currentPage === "findSolutionFor") {
    const selected = newData.selectedSolutionFor;

    try {
      const module = await import(`./components/${selected}.vue`);
      dynamicComponent.value = module.default;
    } catch (error) {
      console.warn(`Component '${selected}.vue' not found. Loading fallback.`, error);

      const fallbackModule = await import('./components/DefaultFallback.vue');

      // Use h() to dynamically pass props
      dynamicComponent.value = h(fallbackModule.default, { missingPage: selected });
    }
  } else {
    dynamicComponent.value = null;
  }
};


const toShowComponent = ref({
  currentPage: 'home',
  selectedSolutionFor: ''
});

// for each subgroup in findsolutionfor -- it will store html for each subgroup and render if by updating the  valuye from the firebase
let findSolutionForItemPage = ref("");

const fallbackComponent = () => import('./components/DefaultFallback.vue');


// it get triggered whenever there is change on click on any heading in the navlink.vue
// const updateComponent = async(newData) => {
//   console.log(newData);
//   if (newData.currentPage === "findSolutionFor") {
//     // show component dynamically based on newData.selectedSolutionFor
    
//   }
//   else {
//     // findSolutionForItemPage.value = "";
//   }
// };

// fetches the html for each subgroup in the FindSolutionFor
// const fetchData = async (title) => {
//   try {
//     const imageData = ref({});

//     const colRef = collection(db, "gitaUnlocked", "home", "findSolutionFor");

//     const querySnapshot = await getDocs(colRef);

//     for (const doc of querySnapshot.docs) {
//       const data = doc.data();
//       if (data.title === title) {
//         console.log("matched");
//         console.log(data);
//         return data.content;
//       }
//     }
//     return `<h2 class="text-3xl font-extrabold text-[#FF7A00] uppercase">No data for selected item : ${title}</h2>`
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }

// };

// onMounted(fetchData);
</script>



<style scoped>
nav a {
  transition: color 0.3s;
}
</style>
