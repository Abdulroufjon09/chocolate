<script setup>
import top_1 from "@/assets/images/top_1.png";
import top_2 from "@/assets/images/top_2.png";
import top_3 from "@/assets/images/top_3.png";

let images = [top_1, top_2, top_3];
</script>

<template>
  <div class="flex flex-col items-center gap-8" id="top_products">
    <div class="">
      <p class="text-2xl font-semibold">
        <span class="text-[#FD9222]">TOP</span> SELLERS
      </p>
    </div>
    <div class="flex justify-center gap-12">
      <div class="" v-for="(img, index) in images" :key="index">
        <img :src="img" alt="" class="w-64 h-4/5 rounded-2xl shadow-2xl shadow-black" />
      </div>
    </div>
    <div class="flex justify-center items-center gap-28">
      <p class="w-3/6">
        Crazy enough chocolate originates from a bean just like the coffee bean
        called Cacao. Cacao has been around for thousands of years and was first
        discovered by the Native American tribe called the Mayans.
      </p>
      <RouterLink to="/buy">
        <button
          class="py-2 px-4 rounded-full bg-[#FD9222] text-white cursor-pointer"
        >
          Buy now
        </button></RouterLink
      >
    </div>
  </div>
</template>

<style scoped>
</style>