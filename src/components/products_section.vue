<script setup>
import milk_chocolate from "@/assets/images/milk CHOCOLATE.svg";
import milk from "@/assets/images/milk.svg";
import nuts from "@/assets/images/nuts.svg";
import coffee from "@/assets/images/sEMI-SWEETCHOCOLATE.svg";

let abouts = [
  {
    img: milk_chocolate,
    title: "MILK CHOCOLATE",
    bg_color: "#FD9222",
  },
  {
    img: milk,
    title: "MILK",
    border_color: "#FD9222",
  },
  {
    img: nuts,
    title: "NUTS",
    bg_color: "#1E1823",
  },
  {
    img: coffee,
    title: "SEMI - SWEET CHOCOLATE",
    border_color: "#FD9222",
  },
];
</script>

<template>
  <section class="py-20 px-4">
    <div class="flex flex-col items-center gap-7 max-w-4xl mx-auto text-center">
      <p class="text-xl sm:text-2xl lg:text-3xl font-semibold">
        IT ALL ADDS UP TO ONE EXCEPTIONAL
        <span class="text-orange-500">TASTE</span> SENSATION
      </p>
      <p class="text-sm sm:text-base">
        At Simply Chocolate, we believe that the secret to exceptional chocolate
        is in the details. From the sourcing of the finest ingredients to the
        careful crafting of each individual piece, every step of our process
        adds up to one exceptional taste sensation.
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-6xl mx-auto">
      <div
        v-for="(about, index) in abouts"
        :key="index"
        :style="{
          backgroundColor: about.bg_color || 'transparent',
          borderColor: about.border_color || 'transparent',
        }"
        class="flex flex-col items-center justify-center p-6 rounded-md border hover:shadow-2xl transition-shadow"
      >
        <img :src="about.img" alt="" class="mb-4" />
        <p class="font-bold text-white text-center text-sm sm:text-base">{{ about.title }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
