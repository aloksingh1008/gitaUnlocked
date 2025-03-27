<template>
    <div class="flex justify-end mt-24 py-2">
      <ul class="flex space-x-6 text-lg font-medium items-center">
        <li><a href="#" class="text-gray-700 hover:text-blue-500 transition" @click="()=>handleClick('home')">Home</a></li>
        <li class="text-4xl font-thin text-gray-400">|</li>
        <li><a href="#" class="text-gray-700 hover:text-blue-500 transition" @click="()=>handleClick('home')">Courses</a></li>
        <li class="text-4xl font-thin text-gray-400">|</li>
        <li><a href="#" class="text-gray-700 hover:text-blue-500 transition" @click="()=>handleClick('home')">Articles</a></li>
        <li class="text-4xl font-thin text-gray-400">|</li>
        <li><a href="#" class="text-gray-700 hover:text-blue-500 transition" @click="()=>handleClick('aboutus')">About</a></li>
        <li class="text-4xl font-thin text-gray-400">|</li>
        <li>
          <button class="bg-blue-500 text-white px-5 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition">Donate</button>
        </li>
        <li class="text-4xl font-thin text-gray-400">|</li>
        <li>
          <button class="bg-blue-500 text-white px-5 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition">
            Login / Sign up
          </button>
        </li>
      </ul>
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
  