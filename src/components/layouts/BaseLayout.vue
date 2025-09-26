<script setup lang="ts">
import TheFooter from '../TheFooter.vue';
import TheHeader from '../TheHeader.vue';
</script>

<template>
  <!-- Full‑screen flex column -->
  <div class="flex min-h-screen flex-col">
    <!-- Header (shadcn‑vue) -->
    <TheHeader />

    <!-- Main content area -->
    <main class="flex-1">
      <!-- Centered column with a max‑width for consistency -->
      <div class="container mx-auto max-w-screen-xl px-4 py-8">
        <!-- Slot where page content lands -->
        <slot />
      </div>
    </main>

    <!-- Footer -->
    <TheFooter />
  </div>
</template>
