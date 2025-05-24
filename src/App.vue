<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <div class="flex-1 flex flex-col font-sans">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Header from '../src/components/Header.vue'
import Footer from '../src/components/Footer.vue'
</script>

<style>
/* Optional global styles can be included here or moved to base.css */
</style>
