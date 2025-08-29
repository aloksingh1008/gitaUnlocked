<template>
  <div>
<div class="absolute left-1/2 -translate-x-1/2 top-[200px] bg-transparent p-6 w-full">
  <div class="flex w-full justify-center">
            <div class="w-[60%] p-4">
                <div
                    class="flex justify-around w-full text-[159px] font-[400px] uppercase bg-gradient-to-r from-[#FF7A00] via-[#D61C75] to-[#7A10FF] bg-clip-text text-transparent  p-8 -mt-20 [font-family:'Kaushan_Script',cursive] ">
                    <span>S</span>
                    <span>U</span>
                    <span>C</span>
                    <span>C</span>
                    <span>E</span>
                    <span>S</span>
                    <span>S</span>
                    
                </div>
                <div
                    class="bg-orange-500 text-white rounded-xl px-6 py-4 inline-block text-center [font-family:'Kaushan_Script'] w-full -mt-20">
                    <p>
                        <span class=" text-[3rem] font-thin block ">SUTRAS FOR YOUTH FROM</span>
                        <strong class="text-[3.8rem] font-thin block">SRIMAD BHAGAVAD GITA</strong>
                    </p>
                </div>
                <div>
                    <div class="text-center text-[#D61C75] font-bold text-4xl uppercase mt-6 mb-4">
                        who is this course for?
                    </div>
                    <div class="text-2xl text-justify">
                        This course is ideal for students and young professionals who are:
                    </div>
                    <div class="text-2xl text-justify">
                        🌟 Seeking inner clarity and peace
                    </div>
                    <div class="text-2xl text-justify">
                        🌟 Curious about the deeper meaning of life
                    </div>
                    <div class="text-2xl text-justify">
                        🌟 Interested in balancing spiritual wisdom with modern success
                    </div>
                </div>

            </div>
            <div class="w-[30%] max-w-sm shadow-2xl border border-gray-300 rounded-xl overflow-hidden bg-white transform rotate-6 hover:scale-105 transition duration-300 z-10">
            
      <img
        src="/gita_as_it_is.webp"
        alt="Bhagavad Gita Cover"
        class="w-full h-auto object-cover rounded-xl"
      />
            
            </div>
            <div class="w-[5%] p-4"></div>

        </div>
        
    </div>

  <div class="flex justify-center items-start gap-8 p-8 mt-[800px]">

    <!-- Left Half -->
    <div class="w-1/2 px-6 py-6 space-y-6 flex flex-col">
      <!-- Title -->
      <h2 class="text-3xl font-bold text-[#D61C75]">{{ "Course Title:" }}</h2>
      <p class="text-black text-xl">{{ course.title }}</p>

      <!-- Description -->
      <h2 class="text-3xl font-bold text-[#D61C75]">{{ "Course Description:" }}</h2>
      <p class="text-black text-xl">{{ course.description1 }}</p>
      <p class="text-black text-xl">{{ course.description2 }}</p>

      <!-- Timeline List -->
      <div class="flex flex-col space-y-8 relative">

        <div
          v-for="(chapter, index) in course.chapters"
          :key="index"
          class="flex items-center"
        >
          <!-- Sutra Label -->
          <div class="w-20 text-right pr-2 text-xl text-[#D61C75]">
            Sutra {{ index + 1 }}
          </div>

          <!-- Dot + Line Container -->
          <div class="relative flex flex-col items-center w-6">
            <!-- Vertical line: spans between first and last dot -->
            <div
              v-if="index !== course.chapters.length - 1"
              class="absolute top-4 bottom-[-4.5rem] w-0.5 bg-[#D61C75]"
            ></div>

            <!-- Dot -->
            <div class="w-4 h-4 rounded-full bg-[#D61C75] z-10"></div>
          </div>

          <!-- Chapter Box -->
          <div class="bg-[#D61C75] shadow p-3 rounded w-80 ml-4 hover:bg-[#7A00FF] cursor-pointer text-xl">
            <div class="flex justify-between items-center">
              <span class="text-white">{{ chapter }}</span>
              <span class="text-gray-400">&#9654;</span>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Right Half -->
    <div class="w-1/2 px-20 py-20 mt-12">
<div class="bg-white shadow p-6 rounded space-y-8 text-center">

      <!-- Course Title -->
      <h2 class="text-5xl font-bold">{{ course.title }}</h2>

      <!-- Course Details with Icons -->
      <div class="space-y-6 text-2xl">
        <div class="flex items-center space-x-3">
          <img :src="ClockIcon" alt="Clock" class="w-8 h-8" />
          <span>{{ course.totalTime }}</span>
        </div>

        <div class="flex items-center space-x-3">
          <img :src="TimePerWeekIcon" alt="Clock" class="w-8 h-8" />
          <span>{{ course.timePerWeek }}</span>
        </div>

        <div class="flex items-center space-x-3">
          <img :src="TagIcon" alt="Level" class="w-8 h-8" />
          <span> {{ course.certificate }}</span>
        </div>

        <div class="flex items-center space-x-3">
          <img :src="LevelIcon" alt="Language" class="w-8 h-8" />
          <span>{{ course.level }}</span>
        </div>

        <div class="flex items-center space-x-3">
          <!-- <img :src="LevelIcon" alt="Language" class="w-8 h-8" /> -->
          <span class="w-8">₹</span>
          <span>{{ course.fee }}</span>
        </div>
      </div>

      <!-- Join Button -->
      <div class="pt-4">
        <a href='#' @click="$emit('goToRegister')">
        <button class="bg-[#D61C75] hover:bg-[#7A00FF] text-white font-bold text-3xl py-2 px-4 rounded">
          REGISTER
        </button></a>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script setup>
// Import custom icons
import LevelIcon from '@/public/CoursePageImg44.svg'
import TimePerWeekIcon from '@/public/CoursePageImg22.svg'
import ClockIcon from '@/public/CoursePageImg11.svg'
import TagIcon from '@/public/CoursePageImg33.svg'
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