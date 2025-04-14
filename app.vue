<template>
  <Navbar />
  <div class="bg-gradient-to-r from-blue-100 to-purple-200">
    <NavLinks v-model="currentPage" />
  </div>

  <!-- <div class="min-h-screen bg-white" v-if="currentPage==='home'">
    
    <div class="relative flex justify-center items-start w-full  gap-2 pt-4 mt-28" >
      <div class="flex-none  w-[400px] bg-[url('background_left.png')] bg-cover h-[900px]">
       

      </div>
      <div class="flex-[16] w-[20px]">
        
      </div>

      <div class="flex-none  w-[400px] bg-[url('background_right.png')] bg-cover h-[900px]">
        
         sdkhfgkldzhdlsksfnd,jdalbjkldskdjshfkjhdlkhjlkjbsm,dhgfjgkdhaklfdgksjafbhds

      </div> 

    </div>
    <BottomSection /> 
  </div>-->


  <div class="absolute left-1/2 -translate-x-1/2 top-[200px] bg-transparent p-6">
    <div
      class="flex justify-between w-full text-8xl font-black uppercase bg-gradient-to-r from-[#FF7A00] via-[#D61C75] to-[#7A10FF] bg-clip-text text-transparent">
      <span>S</span>
      <span>U</span>
      <span>C</span>
      <span>C</span>
      <span>E</span>
      <span>S</span>
      <span>S</span>
    </div>
    <hr class="border-t-4 border-black my-4 w-[60%] mx-auto" />
    <div class="flex justify-between w-full text-6xl  uppercase">
      <span>S</span>
      <span>U</span>
      <span>T</span>
      <span>R</span>
      <span>A</span>
      <span>S</span>
      <span> </span>
      <span>F</span>
      <span>O</span>
      <span>R</span>
    </div>
    <div class="flex justify-between w-full text-6xl  uppercase">
      <span>Y</span>
      <span>O</span>
      <span>U</span>
      <span>T</span>
      <span>H</span>
      <span class="w-[20px]"></span>
      <span> </span>
      <span>F</span>
      <span>R</span>
      <span>O</span>
      <span>M</span>
      <span class="w-[20px]"></span>
      <span>G</span>
      <span>I</span>
      <span>T</span>
      <span>A</span>
    </div>

  </div>

  <div class="flex justify-between w-full  mt-28 bg-gray-100">
    <div class="bg-[url('background_left.png')] bg-cover  w-[400px] h-[900px]"></div>



    <div class="bg-[url('background_left.png')] bg-cover  w-[400px] h-[900px scale-x-[-1]"></div>
  </div>
  <div class="h-96 p-4">
    <div class="text-center text-[#D61C75] font-bold text-6xl uppercase">
      Why Gita Unlocked?

    </div>
  </div>
  <div class="bg-gray-100 p-4">

  <div class="text-center text-[#D61C75] font-bold text-6xl uppercase">
    find solution for...
  </div>
  <div class="flex justify-around items-center h-[32rem] bg-[#f5f5f5] relative overflow-hidden">

    <!-- Left Arrow -->
    <button @click="prevCard" class="absolute left-4 text-3xl text-gray-700 hover:text-black z-10">
      &#10094;
    </button>

    <!-- Card Wrapper -->
    <div class="flex space-x-12 transition-transform duration-500">
      <Motion v-for="(card, index) in visibleCards" :key="card.title + index" :initial="{
        opacity: 0,
        x: direction === 'right' ? 100 : -100
      }" :enter="{
    opacity: 1,
    x: 0,
    transition: { duration: 1000, ease: 'easeInOut' }
  }" :leave="{
    opacity: 0,
    x: direction === 'right' ? -100 : 100,
    transition: { duration: 1000, ease: 'easeInOut' }
  }" class="transition-transform">
        <NewCard :title="card.title" :description="card.description" />
      </Motion>
    </div>

    <!-- Right Arrow -->
    <button @click="nextCard" class="absolute right-4 text-3xl text-gray-700 hover:text-black z-10">
      &#10095;
    </button>
  </div>
</div>

  <div class="h-96 p-4 bg-white">
    <div class="text-center text-[#D61C75] font-bold text-6xl uppercase">
      what great personalities say about GITA
      


    </div>
  </div>


  <div class="h-96 p-4 bg-gray-100">
    <div class="text-center text-[#D61C75] font-bold text-6xl uppercase">
      Courses
      


    </div>
  </div>

  <div class="w-full justify-center shadow-md pt-2 tracking-[0.4em] px-8 flex z-50 h-15 font-black text-4xl bg-gradient-to-r from-[#FF7A00] via-[#D61C75] to-[#7A10FF] text-white">
      JOIN OUR DAILY LIVE CLASS
     
      
  </div>
  <div class="w-full justify-center shadow-md pb-2 tracking-[0.4em] px-8 flex z-50 h-15 font-black text-4xl bg-gradient-to-r from-[#FF7A00] via-[#D61C75] to-[#7A10FF] text-white">
     
      - EVERY DAY AT 7 PM
     
      
  </div>
  <div class="w-full justify-center shadow-md pb-2  px-8 flex z-50 h-15 font-bold text-xl bg-gradient-to-r from-[#FF7A00] via-[#D61C75] to-[#7A10FF] text-white">
    <button class="bg-[#FF7A00] text-white px-5 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition">JOIN LIVE FREE!</button>

    
     
 </div>


  <div class="h-[28rem]">
    <ConnectWithUsComponent />

  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-2 justify-center items-center h-[28rem] p-2">
    <img src="/logo3.png" alt="Logo" class="w-[38rem] h-[16rem] mx-8" />
    <div class="bg-white py-8 px-6  flex justify-around items-start text-center">
    <div class="text-center">
      <h2 class="text-2xl font-semibold text-pink-600 mb-4">QUICK LINKS</h2>
      <ul class="list-none p-0">
        <li class="mb-2">
          <a href="#" class="text-gray-700 hover:text-pink-500">HOME</a>
        </li>
        <li class="mb-2">
          <a href="#" class="text-gray-700 hover:text-pink-500">FIND SOLUTION FOR..</a>
        </li>
        <li class="mb-2">
          <a href="#" class="text-gray-700 hover:text-pink-500">COURSES</a>
        </li>
        <li>
          <a href="#" class="text-gray-700 hover:text-pink-500">ABOUT US</a>
        </li>
      </ul>
    </div>
    <div class="text-center">
      <h2 class="text-2xl font-semibold text-pink-600 mb-4">SOCIAL MEDIA HANDLES</h2>
      <ul class="list-none p-0">
        <li class="mb-2">
          <a href="#" class="text-gray-700 hover:text-pink-500">HOME</a>
        </li>
        <li class="mb-2">
          <a href="#" class="text-gray-700 hover:text-pink-500">FIND SOLUTION FOR..</a>
        </li>
        <li class="mb-2">
          <a href="#" class="text-gray-700 hover:text-pink-500">COURSES</a>
        </li>
        <li>
          <a href="#" class="text-gray-700 hover:text-pink-500">ABOUT US</a>
        </li>
      </ul>
    </div>
  </div>
  </div>

  <div class="w-full justify-center shadow-md pb-2 tracking-[0.4em] px-8 flex z-50 h-4 font-black text-4xl bg-gradient-to-r from-[#FF7A00] via-[#D61C75] to-[#7A10FF] text-white">
    
     
 </div>
 <div class="h-8 bg-white">

 </div>

  

  









  <AboutUs v-if="currentPage === 'aboutus'" />
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";
import MainContent from "./components/MainContent.vue";
import BottomSection from "./components/BottomSection.vue";
import AboutUs from "./components/AboutUs.vue";
import VideoPlayer from "./components/VideoPlayer.vue";
import { getFirestore, doc, getDoc, collection, getDocs } from "firebase/firestore";
import db from './src/firebase/init.js'; // Ensure this file properly initializes Firebase
import NavLinks from "./components/NavLinks.vue";
import Card from "./components/Card.vue";
import NewCard from "./components/NewCard.vue";
import ConnectWithUsComponent from "./components/ConnectWithUsComponent.vue";
// import { Motion } from '@vueuse/motion'

import { ref, onMounted } from 'vue';

const items = ref([]);
const leftImages = ref([]);

const currentPage = ref("home");


const cards = ref([
  { title: 'Anxiety', description: 'We will find in more details read more..' },
  { title: 'Depression', description: 'Find helpful guidance and support.' },
  { title: 'Stress', description: 'Learn how to manage stress effectively.' },
  { title: 'Burnout', description: 'Signs and solutions for burnout.' },
  { title: 'Insomnia', description: 'Sleep better with these tips.' },
])

const currentIndex = ref(0)
const direction = ref('right')

// Show 3 cards at a time
const visibleCards = computed(() => {
  const visible = []
  for (let i = 0; i < 3; i++) {
    visible.push(cards.value[(currentIndex.value + i) % cards.value.length])
  }
  return visible
})

const nextCard = () => {
  direction.value = 'right'
  currentIndex.value = (currentIndex.value + 1) % cards.value.length
}

const prevCard = () => {
  direction.value = 'left'
  currentIndex.value =
    (currentIndex.value - 1 + cards.value.length) % cards.value.length
}

const fetchData = async () => {
  try {
    const imageData = ref({});

    // imageData.value={};
    //const imagesCollectionRef = collection(db, "gitaUnlocked", "home", "images");
    // const docRef = doc(db, "gitaUnlocked", "home", "images", "left_side_images");
    const docRef = doc(db, "user", "admin", "images", "left_side_images");

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
