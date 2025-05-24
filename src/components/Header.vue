<template>
  <header class="sticky top-0 z-50 w-full border-b border-gray-300/40 bg-white p-4 mt-3 shadow-md">
    <div class="relative max-w-7xl px-3 mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

      <!-- Logo + Location + Profile -->
      <div class="flex items-center justify-between w-full md:w-auto gap-6 border-b pb-3 lg:pb-0 border-gray-400 lg:border-0">
        <router-link to="/" class="flex-shrink-0">
          <img src="/src/assets/logo.png" alt="Logo" class="h-10 md:h-12 w-auto object-contain" />
        </router-link>

        <!-- Location -->
        <div class="flex items-center text-gray-700 cursor-pointer space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" class="lucide lucide-map-pin">
            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          <span class="text-sm md:text-base">Location</span>
        </div>

        <!-- Profile Icon -->
        <div class="flex lg:hidden items-center text-gray-700 cursor-pointer space-x-1">
          <button type="button" aria-label="Login">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-user-round-icon lucide-circle-user-round"><path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><circle cx="12" cy="12" r="10"/></svg>
          </button>
        </div>
      </div>

      <!-- Search Box -->
      <div class="w-full md:max-w-2xl relative">
        <input
          type="text"
          class="w-full h-10 pl-10 pr-4 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-100"
          placeholder="Search for your item"
        />
        <div class="absolute left-3 top-2.5 text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" class="lucide lucide-search">
            <path d="m21 21-4.34-4.34"/>
            <circle cx="11" cy="11" r="8"/>
          </svg>
        </div>
      </div>

      <!-- Login Button -->
      <div class="w-full md:w-auto text-center hidden lg:flex">
        <button
          class="bg-gray-800 text-white px-5 py-2 rounded-md hover:bg-gray-700 transition text-sm md:text-base w-full md:w-auto">
          Login
        </button>
      </div>

      <!-- Cart block -->
      <div
        class="relative hidden lg:flex items-center hover:border border-gray-300 p-3 rounded-md hover:shadow-md cursor-pointer w-full md:w-auto justify-center md:justify-start">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round" class="lucide lucide-shopping-cart mr-2">
          <circle cx="8" cy="21" r="1"/>
          <circle cx="19" cy="21" r="1"/>
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
        </svg>
        <span class="text-gray-800 font-medium text-sm md:text-base">Cart</span>
      </div>
    </div>
  </header>
</template>
