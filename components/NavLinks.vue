<template>
  <nav class="fixed flex justify-between items-center w-full top-0 left-0 bg-white z-50 px-4 py-2 shadow-md">
    <!-- Logo -->
    <img src="/public/logo2.png" alt="Logo" class="w-28 sm:w-36 h-12 sm:h-14 mx-4 sm:mx-8" />

    <!-- Desktop Menu -->
    <ul class="hidden md:flex space-x-10 lg:space-x-16 text-lg font-medium items-center">
      <li>
        <a href="#" class="text-gray-700 hover:text-blue-500 transition" @click="onTabClick('home')">HOME</a>
      </li>

      <!-- Fixed dropdown: no gap + hover safe -->
      <li class="relative group">
        <button
          class="text-gray-700 hover:text-blue-500 transition font-medium focus:outline-none flex items-center"
          type="button"
        >
          FIND SOLUTION FOR...
          <span class="ml-1">&#9660;</span>
        </button>

        <!-- Dropdown -->
        <ul
          class="absolute left-0 top-full -mt-px w-56 bg-white border rounded-md shadow-lg
                 opacity-0 invisible pointer-events-none
                 group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto
                 transition duration-150 ease-out z-20"
        >
          <li
            v-for="(item, index) in items"
            :key="index"
            @click="selectItem(item)"
            class="block px-4 py-2 text-center text-black hover:bg-gray-100 cursor-pointer"
          >
            {{ item }}
          </li>
        </ul>
      </li>

      <li>
        <a href="#" class="text-gray-700 hover:text-blue-500 transition" @click="onTabClick('course')">COURSES</a>
      </li>
      <li>
        <a href="#" class="text-gray-700 hover:text-blue-500 transition" @click="onTabClick('qa')">CONNECT WITH US</a>
      </li>
      <li>
        <a href="#" class="text-gray-700 hover:text-blue-500 transition" @click="onTabClick('aboutus')">ABOUT US</a>
      </li>
    </ul>

    <!-- Mobile Hamburger -->
    <div class="md:hidden">
      <button @click="mobileOpen = !mobileOpen" class="focus:outline-none" type="button">
        <svg
          v-if="!mobileOpen"
          class="w-7 h-7 text-gray-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg
          v-else
          class="w-7 h-7 text-gray-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu Dropdown -->
    <div
      v-if="mobileOpen"
      class="absolute top-16 left-0 w-full bg-white shadow-md rounded-b-lg md:hidden"
    >
      <ul class="flex flex-col space-y-4 px-6 py-4 text-lg font-medium">
        <li><a href="#" class="text-gray-700 hover:text-blue-500 transition" @click="onTabClick('home')">HOME</a></li>
        <li>
          <button @click="isOpenMobile = !isOpenMobile" class="w-full text-left text-gray-700 hover:text-blue-500 transition">
            FIND SOLUTION FOR... &#9660;
          </button>
          <ul v-if="isOpenMobile" class="mt-2 pl-4 space-y-2">
            <li
              v-for="(item, index) in items"
              :key="'m'+index"
              @click="selectItem(item)"
              class="block px-2 py-1 text-black hover:bg-gray-100 cursor-pointer rounded"
            >
              {{ item }}
            </li>
          </ul>
        </li>
        <li><a href="#" class="text-gray-700 hover:text-blue-500 transition" @click="onTabClick('course')">COURSES</a></li>
        <li><a href="#" class="text-gray-700 hover:text-blue-500 transition" @click="onTabClick('connect')">CONNECT WITH US</a></li>
        <li><a href="#" class="text-gray-700 hover:text-blue-500 transition" @click="onTabClick('aboutus')">ABOUT US</a></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue';

const props = defineProps({
  modelValue: Object
});

const emit = defineEmits(['update:modelValue', 'toShowComponentChanged']);

const handleClick = (toRoute, subItem) => {
  let internalData = { ...props.modelValue };
  internalData.currentPage = toRoute;
  internalData.selectedSolutionFor = subItem;
  emit('update:modelValue', internalData);
  emit('toShowComponentChanged', internalData);
};

// States
const isOpenMobile = ref(false);    // Mobile dropdown
const mobileOpen = ref(false);      // Mobile menu toggle
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
]);

// Close menus when selecting an item
const selectItem = (item) => {
  isOpenMobile.value = false;
  mobileOpen.value = false;
  handleClick('findSolutionFor', item);
};

// Close menus when clicking any tab
const onTabClick = (toRoute) => {
  isOpenMobile.value = false;
  mobileOpen.value = false;
  handleClick(toRoute);
};
</script>
