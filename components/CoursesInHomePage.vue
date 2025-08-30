<template>
  <section class="bg-gray-100 py-12">
    <!-- Heading -->
    <div class="text-center mb-10 px-4">
      <h2
        class="text-[#D61C75] font-bold uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-snug"
      >
        Courses
      </h2>
    </div>

    <!-- Card -->
    <div
      class="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden mx-auto w-[90%] sm:w-[85%] lg:w-[80%] transition-all"
    >
      <!-- Left Image -->
      <div
        class="relative w-full md:w-2/5 p-6 flex items-center justify-center bg-gradient-to-br from-purple-300 to-orange-200"
      >
        <img
          src="/4064 1-Photoroom.png"
          alt="Success illustration"
          class="max-w-full h-auto object-contain"
        />
      </div>

      <!-- Right Content -->
      <div class="w-full md:w-3/5 p-6 sm:p-8">
        <h2
          class="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-700 mb-2"
        >
          SUCCESS SUTRAS
        </h2>
        <p
          class="text-gray-700 text-base sm:text-lg md:text-xl mb-4 border-b-2 border-gray-300 pb-2"
        >
          SUTRAS FOR YOUTH FROM SRIMAD BHAGAVAD GITA
        </p>

        <h3
          class="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-4"
        >
          SUB TOPICS COVERED
        </h3>

        <!-- Topics Grid -->
        <div
          class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-gray-700 text-sm sm:text-base md:text-lg"
        >
          <ul>
            <li class="mb-1">&bull; SUTRA 1: True Success</li>
            <li class="mb-1">&bull; SUTRA 2: Real "I"</li>
            <li class="mb-1">&bull; SUTRA 3: The Ultimate Genius</li>
            <li class="mb-1">&bull; SUTRA 4: Manual of Life</li>
            <li class="mb-1">&bull; SUTRA 5: Decode Your Struggles</li>
          </ul>
          <ul>
            <li class="mb-1">&bull; SUTRA 6: Success Mantra</li>
            <li class="mb-1">&bull; SUTRA 7: Love That Heals</li>
            <li class="mb-1">&bull; SUTRA 8: The Better World</li>
            <li class="mb-1">&bull; SUTRA 9: Unity and Happiness</li>
          </ul>
        </div>

        <!-- Buttons -->
        <div
          class="flex items-center justify-start mt-8 flex-wrap gap-4 sm:gap-6"
        >
          <a href="#" @click="$emit('goToCourse')">
            <button
              class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-lg shadow-md transition duration-300 ease-in-out text-base sm:text-lg"
            >
              ENROLL NOW !!
            </button>
          </a>

          <a href="#" class="text-red-600 hover:text-red-700">
            <svg
              class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 1.5a8.5 8.5 0 0 0-8.5 8.5c0 4.694 3.806 8.5 8.5 8.5s8.5-3.806 8.5-8.5c0-4.694-3.806-8.5-8.5-8.5zM9.5 16.5l7-4.5-7-4.5v9z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineEmits(["goToCourse"]);
</script>
