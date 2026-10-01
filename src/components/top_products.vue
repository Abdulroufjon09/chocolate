<script setup>
import top_1 from "@/assets/images/top_1.png";
import top_2 from "@/assets/images/top_2.png";
import top_3 from "@/assets/images/top_3.png";

const images = [top_1, top_2, top_3];
</script>

<template>
  <section
    class="flex flex-col items-center gap-8 px-4 sm:px-10 py-20"
    id="top_products"
  >
    <p v-reveal class="section-title">
      <span class="accent">TOP</span> SELLERS
    </p>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full justify-center"
    >
      <div
        v-for="(img, index) in images"
        :key="index"
        v-reveal="index * 150"
        class="flex justify-center"
      >
        <img
          :src="img"
          alt="Top product"
          class="float w-52 sm:w-64 rounded-2xl shadow-2xl shadow-black/30 object-contain transition-transform duration-[900ms] hover:scale-105 cursor-pointer"
          :style="{ animationDelay: `${-index * 2}s` }"
        />
      </div>
    </div>

    <div
      class="flex flex-col lg:flex-row items-center gap-6 lg:gap-20 max-w-5xl w-full mt-8 text-center lg:text-left"
    >
      <p
        v-reveal
        class="text-sm sm:text-base lg:w-3/5 text-[#111111]/70 leading-relaxed"
      >
        Crazy enough chocolate originates from a bean just like the coffee bean
        called Cacao. Cacao has been around for thousands of years and was first
        discovered by the Native American tribe called the Mayans.
      </p>

      <div v-reveal="150" class="shrink-0">
        <RouterLink to="/buy" class="btn btn-primary"> Buy now </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
