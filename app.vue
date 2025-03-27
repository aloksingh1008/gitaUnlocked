<template>
  <Navbar />
  <div class="bg-gradient-to-r from-blue-100 to-purple-200">
    <NavLinks v-model="currentPage" />
  </div>
  <div class="min-h-screen bg-gradient-to-r from-blue-100 to-purple-200" v-if="currentPage==='home'">
    
    <div class="relative flex justify-center items-start w-full px-2 md:px-12 lg:px-5 gap-6 pt-4" >
      <!-- Left Sidebar -->
      <div class="flex-1 max-w-[450px]">
        <Sidebar title="Krsna and Arjuna" image="KrsnaArjun.jpg" txt="A profound and sacred moment from the great epic, the Mahabharata." />
      </div>
      

      <!-- Main Content -->
      <div class="flex-[16] w-full">
        <MainContent />
      </div>

      <!-- Right Sidebar -->
      <div class="flex-1 max-w-[450px]" >
        <Sidebar title="Sanjay and Dhritrastra" image="Dhrtarastra&Sanjay.jpg" txt="Through Sanjay’s words, the blind King Dhritarashtra envisions the Mahabharata." />
      </div>


      
    </div>





    <BottomSection />
  </div>
  <AboutUs v-if="currentPage==='aboutus'" />
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";
import MainContent from "./components/MainContent.vue";
import BottomSection from "./components/BottomSection.vue";
import AboutUs from "./components/AboutUs.vue";
import { getFirestore, doc, getDoc, collection, getDocs } from "firebase/firestore";
import db from './src/firebase/init.js'; // Ensure this file properly initializes Firebase
import NavLinks from "./components/NavLinks.vue";

import { ref, onMounted } from 'vue';

const items = ref([]);
const leftImages = ref([]);

const currentPage=ref("home");

const fetchData = async () => {
  try {
    const imageData = ref({});

    // imageData.value={};
    // const imagesCollectionRef = collection(db, "gitaUnlocked", "home", "images");
    const docRef = doc(db, "gitaUnlocked", "home", "images", "left_side_images");
    const docSnap = await getDoc(docRef);

    // console.log(docRef);
    // const querySnapshot = await getDocs(imagesCollectionRef); 
    // const docSnap = await getDoc(docRef);
    // if (querySnapshot.exists()) {
    //   //leftImages.value = ; // Store the document data
    //   console.log("Document Data:", querySnapshot.data());
    // } else {
    //   console.log("No such document!");
    // }
    if (docSnap.exists()) {
      // console.log("Files in left_side_images:", docSnap.data());  
      const data = docSnap.data();
      leftImages.value = Object.values(data);
    } else {
      console.log("No such document!");
    }

    // querySnapshot.forEach((doc) => {  

    //     console.log(`Document ID: ${doc.id}, Image URL: ${doc.data().left_side_images}`);  
    // }); 
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

onMounted(fetchData);

// async function fetchContent() {
//   try {
//     const docRef = doc(db, "gitaUnlocked", "home"); // Use "home" instead of "content"
//     const docSnap = await getDoc(docRef);

//     if (docSnap.exists()) {
//       console.log("Document data:", docSnap.data());
//       console.log("Content:", docSnap.data().content); // Access the 'content' field
//     } else {
//       console.log("No such document!");
//     }
//   } catch (error) {
//     console.error("Error fetching document:", error);
//   }
// }

// fetchContent();
</script>



<style scoped>
nav a {
  transition: color 0.3s;
}
</style>
