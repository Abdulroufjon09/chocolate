<script setup>
import chocolate from "@/assets/images/chocolate.svg";
import coin from "@/assets/images/Coin.svg";
import spoon from "@/assets/images/spoon.svg";

const abouts = [
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
  <section
    class="relative overflow-hidden bg-[#1E1823] text-white px-4 sm:px-10 py-20"
    id="main"
  >
    <!-- dekorativ gradient blob'lar -->
    <div
      class="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#FD9222]/20 blur-3xl"
    ></div>
    <div
      class="pointer-events-none absolute -bottom-32 -right-16 w-80 h-80 rounded-full bg-[#FD9222]/10 blur-3xl"
    ></div>

    <div class="relative grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      <div
        v-for="(about, index) in abouts"
        :key="index"
        v-reveal="index * 150"
        class="group glass-dark flex flex-col items-center text-center gap-4 rounded-3xl p-8 transition-all duration-[900ms] hover:-translate-y-2 hover:border-[#FD9222]/60 hover:bg-white/10"
      >
        <button
          class="border border-white/25 rounded-full p-4 flex items-center justify-center transition-all duration-[900ms] group-hover:border-[#FD9222] group-hover:bg-[#FD9222] group-hover:rotate-12 group-hover:scale-110"
        >
          <img :src="about.icon" alt="" class="w-8 h-8" />
        </button>
        <p class="text-lg sm:text-xl font-semibold mt-2">{{ about.title }}</p>
        <p class="text-sm sm:text-base text-white/70 leading-relaxed">
          {{ about.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
