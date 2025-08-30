<template>
  <div>
<div class="relative w-full min-h-screen overflow-hidden">
    <!-- Background Layer -->
    <div class="absolute inset-0 z-0">
      <!-- Left background -->
      <div
        class="absolute top-0 left-0 w-1/2 h-full bg-cover bg-center"
        :style="{ backgroundImage: `url(${leftBg})` }"
      ></div>
      <!-- Right background (mirrored) -->
      <div
        class="absolute top-0 right-0 w-1/2 h-full bg-cover bg-center scale-x-[-1]"
        :style="{ backgroundImage: `url(${leftBg})` }"
      ></div>
    </div>

    <!-- Foreground Content -->
    <div class="relative z-10 pt-16 sm:pt-20 md:pt-32 lg:pt-40 px-4 sm:px-6 md:px-8">
      <div class="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 max-w-7xl mx-auto">
        <!-- Book Image -->
        <div class="w-48 sm:w-56 md:w-64 lg:w-80 xl:w-96 order-1 lg:order-2 flex-shrink-0">
          <div
            class="shadow-2xl border border-gray-300 rounded-xl overflow-hidden bg-white transform rotate-3 hover:scale-105 transition duration-300"
          >
            <img
              src="/gita_as_it_is.webp"
              alt="Bhagavad Gita Cover"
              class="w-full h-auto object-cover rounded-xl"
            />
          </div>
        </div>

        <!-- Main Content -->
        <div class="flex-1 order-2 lg:order-1 text-center lg:text-left">
          <!-- SUCCESS Title -->
          <div class="mb-6 lg:mb-8">
            <div
              class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold uppercase bg-gradient-to-r from-[#FF7A00] via-[#D61C75] to-[#7A10FF] bg-clip-text text-transparent [font-family:'Kaushan_Script',cursive] tracking-wider"
            >
              SUCCESS
            </div>
          </div>

          <!-- Orange Banner -->
          <div
            class="bg-orange-500 text-white rounded-xl px-4 py-3 mb-8 [font-family:'Kaushan_Script']"
          >
            <div class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-thin">
              SUTRAS FOR YOUTH FROM
            </div>
            <div class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
              SRIMAD BHAGAVAD GITA
            </div>
          </div>

          <!-- Course Description -->
          <div class="space-y-4">
            <h3
              class="text-[#D61C75] font-bold text-xl sm:text-2xl md:text-3xl uppercase"
            >
              who is this course for?
            </h3>
            <p class="text-base sm:text-lg md:text-xl text-gray-800">
              This course is ideal for students and young professionals who are:
            </p>
            <div
              class="space-y-2 text-base sm:text-lg md:text-xl text-gray-800"
            >
              <div>🌟 Seeking inner clarity and peace</div>
              <div>🌟 Curious about the deeper meaning of life</div>
              <div>🌟 Interested in balancing spiritual wisdom with modern success</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="flex flex-col md:flex-row justify-center items-start gap-6 md:gap-8 px-4 md:px-8 lg:px-16 pt-24">

  <!-- Left Half -->
  <div class="w-full md:w-1/2 space-y-6 flex flex-col">
    <!-- Title -->
    <h2 class="text-2xl md:text-3xl font-bold text-[#D61C75]">Course Title:</h2>
    <p class="text-black text-lg md:text-xl">{{ course.title }}</p>

    <!-- Description -->
    <h2 class="text-2xl md:text-3xl font-bold text-[#D61C75]">Course Description:</h2>
    <p class="text-black text-lg md:text-xl">{{ course.description1 }}</p>
    <p class="text-black text-lg md:text-xl">{{ course.description2 }}</p>

    <!-- Timeline List -->
    <div class="flex flex-col space-y-8 relative">

      <div
        v-for="(chapter, index) in course.chapters"
        :key="index"
        class="flex items-start md:items-center"
      >
        <!-- Sutra Label -->
        <div class="w-20 text-right pr-2 text-base md:text-xl text-[#D61C75]">
          Sutra {{ index + 1 }}
        </div>

        <!-- Dot + Line Container -->
        <div class="relative flex flex-col items-center w-6">
          <!-- Vertical line -->
          <div
            v-if="index !== course.chapters.length - 1"
            class="absolute top-4 bottom-[-4.5rem] w-0.5 bg-[#D61C75]"
          ></div>

          <!-- Dot -->
          <div class="w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#D61C75] z-10"></div>
        </div>

        <!-- Chapter Box -->
        <div class="bg-[#D61C75] shadow p-3 rounded w-full md:w-80 ml-4 hover:bg-[#7A00FF] cursor-pointer text-base md:text-xl">
          <div class="flex justify-between items-center">
            <span class="text-white">{{ chapter }}</span>
            <span class="text-gray-400">&#9654;</span>
          </div>
        </div>
      </div>

    </div>
  </div>

  <!-- Right Half -->
  <div class="w-full md:w-1/2 mt-10 md:mt-12">
    <div class="bg-white shadow p-6 md:px-20 md:py-20 rounded space-y-8 text-center">

      <!-- Course Title -->
      <h2 class="text-3xl md:text-5xl font-bold">{{ course.title }}</h2>

      <!-- Course Details with Icons -->
      <div class="space-y-4 md:space-y-6 text-lg md:text-2xl">
        <div class="flex items-center space-x-3">
          <img src="/CP11.svg" alt="Clock" class="w-6 h-6 md:w-8 md:h-8" />
          <span>{{ course.totalTime }}</span>
        </div>

        <div class="flex items-center space-x-3">
          <img src="/CP22.svg" alt="Clock" class="w-6 h-6 md:w-8 md:h-8" />
          <span>{{ course.timePerWeek }}</span>
        </div>

        <div class="flex items-center space-x-3">
          <img src="/CP33.svg" alt="Level" class="w-6 h-6 md:w-8 md:h-8" />
          <span>{{ course.certificate }}</span>
        </div>

        <div class="flex items-center space-x-3">
          <img src="/CP44.svg" alt="Language" class="w-6 h-6 md:w-8 md:h-8" />
          <span>{{ course.level }}</span>
        </div>

        <div class="flex items-center space-x-3">
          <span class="w-6 md:w-8">₹</span>
          <span>{{ course.fee }}</span>
        </div>
      </div>

      <!-- Join Button -->
      <div class="pt-4">
        <a href="#" @click="$emit('goToRegister')">
          <button class="bg-[#D61C75] hover:bg-[#7A00FF] text-white font-bold text-xl md:text-3xl py-2 px-6 rounded">
            REGISTER
          </button>
        </a>
      </div>
    </div>
  </div>
</div>

</div>
</template>

<script setup>
  const leftBg = "/background_left.png"
  defineEmits(["goToRegister"])
</script>

<script>
export default {
  name: 'CoursePage',
  data() {
    return {
      course: {
        title: 'Success Sutras from Gita (Beginner – 9 Sessions)',
        description1: 'In today’s fast-paced world, students are constantly searching for meaning, peace, and success. But what if the key to true and lasting success lies hidden in an ancient text already in our hands?',
        description2: '"Success Sutras from Gita" is a beginner-level course designed specifically for youth, drawing directly from the timeless wisdom of the Bhagavad Gita. This 9-session journey is not just philosophical—it’s deeply practical, presenting spiritual principles in a way that’s scientific, logical, and completely relevant to modern life.',
        chapters: [
          'True Success',
          'Real "I"',
          'The Ultimate Genius',
          'Manual of Life',
          'Decode Your Struggles',
          'SUCCESS MANTRA',
          'Love That Heals',
          'The Better World',
          'Unity and Happiness'
        ],
        totalTime: '5 weeks',
        timePerWeek: '2 hours in weekends',
        level: 'Introductory level',
        certificate: 'Digital Certificate when eligible',
        fee: 'Rs. 500/-'
      }
    };
  }
};
</script>