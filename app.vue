<template>
  <div class="min-h-screen bg-gradient-to-r from-blue-100 to-purple-200">
    <!-- Navbar -->
    <nav class="bg-white shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-50">
      <!--<div class="text-2xl font-bold text-blue-600">LOGO</div>-->
      <div>
        <img src="/logo.jpeg" alt="Logo" class="w-48 h-16" />
      </div>
      <ul class="flex space-x-6 text-lg font-medium">
        <li>Welcome to the begining of your Transformation</li>
      </ul>
    </nav>
    <nav class="py-4 px-6 flex justify-between items-center sticky top-0 z-50">
      <!--<div class="text-2xl font-bold text-blue-600">LOGO</div>-->
      <div>
        
      </div>
      <ul class="flex space-x-6 text-lg font-medium items-center">
        <li><a href="#" class="text-gray-700 hover:text-blue-500 transition">Home</a></li>
        <li class="text-4xl font-thin">|</li>
        <li><a href="#" class="text-gray-700 hover:text-blue-500 transition">Courses</a></li>
        <li class="text-4xl font-thin">|</li>
        <li><a href="#" class="text-gray-700 hover:text-blue-500 transition">Articles</a></li>
        <li class="text-4xl font-thin">|</li>
        <li><a href="#" class="text-gray-700 hover:text-blue-500 transition">About</a></li>
        <li class="text-4xl font-thin">|</li>
        <li>
          <button class="bg-blue-500 text-white px-5 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition">Donate</button>
        </li>
        <li class="text-4xl font-thin">|</li>
        <li>
          <button class="bg-blue-500 text-white px-5 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition">Login / Sign up</button>
        </li>
      </ul>
    </nav>

    <!-- Main Content -->
    <div class="container mx-auto px-6 py-10 grid grid-cols-12 gap-6">
      <!-- Sidebar -->
      <aside class="col-span-3 bg-white shadow-lg p-6 rounded-lg text-center">
        <h2 class="font-semibold text-xl text-blue-700">Krsna and Arjuna</h2>
      </aside>

      <!-- Main Section -->
      <section class="col-span-6 bg-white shadow-lg p-8 rounded-lg text-center">
        <h1 class="text-3xl font-bold text-gray-800 mb-4">Welcome to the Beginning of Your Transformation</h1>
        <p class="text-lg text-gray-600">Gita's timeless wisdom through the eyes of great minds</p>
      </section>

      <!-- Sidebar Right -->
      <aside class="col-span-3 bg-white shadow-lg p-6 rounded-lg text-center">
        <h2 class="font-semibold text-xl text-blue-700">Sanjay and Dhritrastra</h2>
      </aside>
    </div>

    <!-- Bottom Section -->
    <div class="container mx-auto px-6 py-10 flex justify-center">
      <div class="bg-white shadow-lg p-8 rounded-lg text-center w-1/2">
        <h2 class="font-semibold text-xl text-blue-700">Saying & Discussion</h2>
      </div>
    </div>
  </div>
</template>

<style scoped>
nav a {
  transition: color 0.3s;
}
</style>
