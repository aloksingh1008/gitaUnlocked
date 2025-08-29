<template>
   <div class="fixed flex justify-between items-center w-full top-0 left-0 bg-white z-50 px-4 py-2">
        <img src="/logo2.png" alt="Logo" class="w-36 h-14 mx-8" />
        <span class="text-lg font-medium text-gray-700">
      <ul class="flex space-x-16 text-lg font-medium items-center">
        <li><a href="#" class="text-gray-700 hover:text-blue-500 transition" @click="()=>handleClick('home')">HOME</a></li>
        <!-- <li class="text-4xl font-thin text-gray-400">|</li> -->
        <li class="relative">
    <a
      href="#"
      class="text-gray-700 hover:text-blue-500 transition relative pointer"
      @click.prevent="isOpen = !isOpen"
    >
      FIND SOLUTION FOR... &#9660;
    </a>

    <!-- Dropdown -->
    <div
      v-if="isOpen"
      class="absolute z-10 mt-6 w-60 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
    >
      <ul class="py-2 ">
        <li
          v-for="(item, index) in items"
          :key="index"
          @click="selectItem(item)"
          class="block px-4 py-2 text-center text-black hover:bg-gray-100 cursor-pointer"
          :class="{
            'underline text-blue-600 font-semibold': item === selected && index === 0,
          }"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </li>

        <!-- <li class="text-4xl font-thin text-gray-400">|</li> -->
        <li><a href="#" class="text-gray-700 hover:text-blue-500 transition" @click="()=>handleClick('course')">COURSES</a></li>
        <!-- <li class="text-4xl font-thin text-gray-400">|</li> -->
        <li><a href="#" class="text-gray-700 hover:text-blue-500 transition" @click="()=>handleClick('home')">Q&A</a></li>
        <!-- <li class="text-4xl font-thin text-gray-400">|</li> -->
        <li><a href="#" class="text-gray-700 hover:text-blue-500 transition" @click="()=>handleClick('aboutus')">ABOUT US</a></li>
        <!-- <li class="text-4xl font-thin text-gray-400">|</li> -->
      </ul>
    </span>
</div>

  </template>

  
<script setup>
import { defineProps, defineEmits } from 'vue';
import { ref } from 'vue';

// Define props
const props = defineProps({
  modelValue: Object
});

// Define emit
const emit = defineEmits(['update:modelValue', 'toShowComponentChanged']);

const handleClick = (toRoute, subItem) => {
  let internalData = { ...props.modelValue };
  internalData.currentPage=toRoute,
  internalData.selectedSolutionFor=subItem
  emit('update:modelValue', internalData); // Emit the change to parent
  emit('toShowComponentChanged', internalData);
};





const isOpen = ref(false)
const selected = ref('')
const items = ref([
  'Depression',
  'Relationships',
  'Sleep',
  'Stress',
  'Addiction',
  'Overthinking',
  'Loneliness',
  'Anger',
  'Greed',
  'Laziness'
])

const selectItem = (item) => {
  isOpen.value = false;
  handleClick('findSolutionFor', item);
}


</script>

<style scoped>

</style>