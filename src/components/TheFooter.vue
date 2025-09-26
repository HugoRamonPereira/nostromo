<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="w-full border-t border-black">
    <div class="w-11/12 mx-auto flex items-center justify-between h-16">
      <div class="bg-green-300 w-full">
        <h1>© {{ currentYear }} Nostromo Your Space-Travel Companion</h1>
        <p>All rights reserved</p>
      </div>
      <div class="bg-pink-300 w-full flex items-center justify-between">
        <a href="www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="www.google.com" target="_blank" rel="noopener noreferrer">Google</a>
      </div>
      <div class="bg-cyan-300 w-full flex items-center justify-center">Other info</div>
    </div>
  </footer>
</template>
