<script setup>
import bg from "@/assets/images/bg-2.jpg";
</script>

<template>
  <section
    class="relative min-h-[340px] sm:min-h-[380px] lg:min-h-[440px]
           flex items-center justify-center text-white px-4 parallax-bg"
    :style="{
      backgroundImage: `url(${bg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }"
  >
    <div
      class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/35"
    ></div>

    <div
      v-reveal
      class="relative flex flex-col items-center
             max-w-xl lg:max-w-2xl
             text-center gap-5"
    >
      <p class="section-title text-white">
        Explore our new chocolate first
      </p>

      <p
        class="text-sm sm:text-base lg:text-lg
               leading-relaxed text-white/85"
      >
        From the velvety texture to the rich and complex flavor, our New
        Chocolate is a true indulgence that will leave you craving more. Made
        with only the finest ingredients and handcrafted with the utmost care,
        each piece is a work of art that is sure to please.
      </p>

      <div class="mt-2">
        <RouterLink to="/subscribe" class="btn btn-primary">
          Subscribe
        </RouterLink>
      </div>
    </div>
  </section>
</template>
