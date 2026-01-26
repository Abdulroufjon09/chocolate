<script setup>
import chocolate from "@/assets/images/chocolate.svg";
import coin from "@/assets/images/Coin.svg";
import spoon from "@/assets/images/spoon.svg";

let abouts = [
  {
    icon: chocolate,
    title: "Unsurpassed taste",
    description:
      "Crafted with the finest quality cocoa beans and a dedication to perfection, each bite is a decadent experience that simply cannot be matched. Savor the richness and complexity of our Unsurpassed Taste and discover a new level of chocolate bliss.",
  },
  {
    icon: coin,
    title: "Affordable price",
    description:
      "Indulge in high-quality chocolate without breaking the bank with Simply Chocolate's selection of affordable treats. Enjoy mouth-watering truffles and velvety chocolate bars without sacrificing taste or quality. Browse our selection and indulge in affordable luxury today.",
  },
  {
    icon: spoon,
    title: "Own production",
    description:
      "We take pride in our own production process, ensuring that every step is carefully crafted to perfection. From selecting the finest ingredients to handcrafting each piece, our attention to detail is evident in every bite.",
  },
];
</script>

<template>
  <div class="bg-[#1E1823] text-white" id="main">
    <div class="flex justify-between items-start gap-8 p-14">
      <div
        class="w-full md:w-1/3 space-y-5"
        v-for="(about, index) in abouts"
        :key="index"
      >
        <button class="border rounded-full p-4">
          <img :src="about.icon" alt="" class="w-8 h-8" />
        </button>
        <p class="text-xl font-semibold mt-2">{{ about.title }}</p>
        <p class="mt-1">{{ about.description }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>