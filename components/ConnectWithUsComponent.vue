<template>
    <div class="bg-gray-100 py-10 px-12 rounded-lg shadow-md">
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
        <div class="w-[85%]">
            <h2 class="text-6xl font-bold text-pink-600 mb-6 p-x-12">CONNECT WITH US</h2>
            <div class="bg-white">
          <div class="mb-4 pt-4 px-4">
            <input type="text" id="name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100" placeholder="NAME">
          </div>
          <div class="mb-4 px-4">
            <input type="text" id="name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100" placeholder="WHATSAPP NUMBER">
          </div>
          <div class="px-4 pb-2">
            <textarea id="query" rows="3" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100" placeholder="QUERY"></textarea>
          </div>
          <div class="flex justify-end px-4 py-4">

          <button class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            SUBMIT

        </button>
    </div>

        </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="mb-6">
            <div class="flex items-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-pink-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 class="text-lg font-semibold text-gray-700">Email</h3>
            </div>
            <p class="text-gray-600 text-sm mb-1">Our friendly team is here to help.</p>
            <p class="text-pink-600 text-sm">hello@pawsnplay.com</p>
          </div>
          <div class="mb-6">
            <div class="flex items-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-pink-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              <h3 class="text-lg font-semibold text-gray-700">Live chat</h3>
            </div>
            <p class="text-gray-600 text-sm mb-1">Our friendly team is here to help.</p>
            <p class="text-pink-600 text-sm">Start new chat</p>
          </div>
          <div class="mb-6">
            <div class="flex items-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-pink-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0l-2-2m2 2l7-7 7 7" />
              </svg>
              <h3 class="text-lg font-semibold text-gray-700">Office</h3>
            </div>
            <p class="text-gray-600 text-sm mb-1">Come say hello at our office HQ.</p>
            <p class="text-gray-700 text-sm">123, Yaya Abatan st, Ogba Lagos.</p>
          </div>
          <div>
            <div class="flex items-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-pink-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1c-1.666 0-3.168-.98-4.54-2.6A11.062 11.062 0 015.46 6.6A11.042 11.042 0 003 9.21v-1a2 2 0 012-2z" />
              </svg>
              <h3 class="text-lg font-semibold text-gray-700">Phone</h3>
            </div>
            <p class="text-gray-600 text-sm mb-1">Mon-Fri from 8am to 5pm.</p>
            <p class="text-pink-600 text-sm">+234 901234 384</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ConnectWithUs'
  }
  </script>