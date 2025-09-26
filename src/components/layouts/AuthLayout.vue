<script setup lang="ts">
import { ArrowLeft } from 'lucide-vue-next';
</script>

<template>
  <div class="flex min-h-screen">
    <!-- LEFT -->
    <section class="w-1/2 flex items-center justify-center relative border-r border-gray-300">
      <RouterLink
        to="/"
        class="absolute top-10 left-10 px-3.5 py-2.5 border border-gray-400 rounded-sm hover:bg-gray-100 transition-colors duration-150"
      >
        <ArrowLeft class="h-4 w-4 text-gray-500" />
      </RouterLink>
      <slot name="left">
        <!-- 👉 Default fallback (you can delete it if you never want a fallback) -->
        <div class="p-8 text-center">
          <h2 class="text-2xl font-semibold text-gray-800">Welcome!</h2>
          <p class="mt-2 text-gray-600">
            Put an illustration, marketing copy, or anything you like here.
          </p>
        </div>
      </slot>
    </section>
    <!-- RIGHT -->
    <section class="w-1/2 flex items-center justify-center">
      <slot name="right">
        <!-- Optional fallback – a very simple placeholder card -->
        <div class="w-full max-w-md space-y-6 text-center">
          <h1 class="text-3xl font-bold text-gray-900">Insert your form here</h1>
          <p class="text-gray-600">Example: <code>&lt;TheForm /&gt;</code></p>
        </div>
      </slot>
    </section>
  </div>
</template>
