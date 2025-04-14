<template>
   <div class="fixed flex justify-between items-center w-full top-11 left-0 bg-white z-50 px-4 py-2">
        <img src="/logo2.png" alt="Logo" class="w-36 h-14 mx-8" />
        <span class="text-lg font-medium text-gray-700">
      <ul class="flex space-x-16 text-lg font-medium items-center">
        <li><a href="#" class="text-gray-700 hover:text-blue-500 transition" @click="()=>handleClick('home')">HOME</a></li>
        <!-- <li class="text-4xl font-thin text-gray-400">|</li> -->
        <li><a href="#" class="text-gray-700 hover:text-blue-500 transition" @click="()=>handleClick('home')">FIND SOLUTION FOR...</a></li>
        <!-- <li class="text-4xl font-thin text-gray-400">|</li> -->
        <li><a href="#" class="text-gray-700 hover:text-blue-500 transition" @click="()=>handleClick('home')">COURSES</a></li>
        <!-- <li class="text-4xl font-thin text-gray-400">|</li> -->
        <li><a href="#" class="text-gray-700 hover:text-blue-500 transition" @click="()=>handleClick('home')">Q&A</a></li>
        <!-- <li class="text-4xl font-thin text-gray-400">|</li> -->
        <li><a href="#" class="text-gray-700 hover:text-blue-500 transition" @click="()=>handleClick('aboutus')">ABOUT US</a></li>
        <!-- <li class="text-4xl font-thin text-gray-400">|</li> -->
        <li>
          <button class="bg-[#FF7A00] text-white px-5 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition">JOIN LIVE FREE!</button>
        </li>
      </ul>
    </span>
    </div>
  </template>

  
<script setup>
import { defineProps, defineEmits } from 'vue';

// Define props
const props = defineProps(['modelValue']);

// Define emit
const emit = defineEmits(['update:modelValue']);

const handleClick = (toRoute) => {
  emit('update:modelValue', toRoute); // Emit the change to parent
};
</script>
  