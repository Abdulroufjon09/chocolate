<script setup>
import bg from "@/assets/images/bg-2.jpg";
</script>

<template>
  <section
    class="relative h-[370px] flex items-center justify-center text-white"
    :style="{
      backgroundImage: `url(${bg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }"
  >
    <div class="absolute inset-0 bg-black/40"></div>

    <div
      class="flex flex-col items-center relative max-w-[700px] text-center px-4"
    >
      <p class="text-2xl font-semibold mb-4 w-48">
        Explore our new chocolate first
      </p>

      <p class="text-base leading-relaxed mb-6 opacity-90">
        From the velvety texture to the rich and complex flavor, our New
        Chocolate is a true indulgence that will leave you craving more. Made
        with only the finest ingredients and handcrafted with the utmost care,
        each piece is a work of art that is sure to please.
      </p>
      <RouterLink to="/subscribe">
        <button class="px-8 py-3 rounded-full bg-[#FD9222] cursor-pointer">
          Subscribe
        </button>
      </RouterLink>
    </div>
  </section>
</template>
