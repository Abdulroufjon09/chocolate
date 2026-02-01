<script setup>
import bg from "@/assets/images/bg-2.jpg";
</script>

<template>
  <section
    class="relative min-h-[320px] sm:min-h-[370px] lg:min-h-[420px]
           flex items-center justify-center text-white px-4"
    :style="{
      backgroundImage: `url(${bg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }"
  >
    <div class="absolute inset-0 bg-black/40"></div>

    <div
      class="relative flex flex-col items-center
             max-w-xl lg:max-w-2xl
             text-center gap-4"
    >
      <p class="text-xl sm:text-2xl lg:text-3xl font-semibold">
        Explore our new chocolate first
      </p>

      <p
        class="text-sm sm:text-base lg:text-lg
               leading-relaxed opacity-90"
      >
        From the velvety texture to the rich and complex flavor, our New
        Chocolate is a true indulgence that will leave you craving more. Made
        with only the finest ingredients and handcrafted with the utmost care,
        each piece is a work of art that is sure to please.
      </p>

      <RouterLink to="/subscribe">
        <button
          class="px-6 sm:px-8 py-2.5 sm:py-3
                 rounded-full bg-[#FD9222] cursor-pointer"
        >
          Subscribe
        </button>
      </RouterLink>
    </div>
  </section>
</template>
