<script setup>
import milk_chocolate from "@/assets/images/milk CHOCOLATE.svg";
import milk from "@/assets/images/milk.svg";
import nuts from "@/assets/images/nuts.svg";
import coffee from "@/assets/images/sEMI-SWEETCHOCOLATE.svg";

const abouts = [
  {
    img: milk_chocolate,
    title: "MILK CHOCOLATE",
    bg_color: "#FD9222",
    light: true,
  },
  {
    img: milk,
    title: "MILK",
    border_color: "#FD9222",
    light: false,
  },
  {
    img: nuts,
    title: "NUTS",
    bg_color: "#1E1823",
    light: true,
  },
  {
    img: coffee,
    title: "SEMI - SWEET CHOCOLATE",
    border_color: "#FD9222",
    light: false,
  },
];
</script>

<template>
  <section class="py-20 px-4 sm:px-10">
    <div class="flex flex-col items-center gap-7 max-w-4xl mx-auto text-center">
      <p v-reveal class="section-title">
        IT ALL ADDS UP TO ONE EXCEPTIONAL
        <span class="accent">TASTE</span> SENSATION
      </p>
      <p
        v-reveal="120"
        class="text-sm sm:text-base text-[#111111]/70 leading-relaxed"
      >
        At Simply Chocolate, we believe that the secret to exceptional chocolate
        is in the details. From the sourcing of the finest ingredients to the
        careful crafting of each individual piece, every step of our process
        adds up to one exceptional taste sensation.
      </p>
    </div>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12 max-w-6xl mx-auto"
    >
      <div
        v-for="(about, index) in abouts"
        :key="index"
        v-reveal="index * 120"
        :style="{
          backgroundColor: about.bg_color || 'transparent',
          borderColor: about.border_color || 'transparent',
        }"
        class="group flex flex-col items-center justify-center gap-4 p-7 rounded-3xl border transition-all duration-[900ms] hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/20"
      >
        <img
          :src="about.img"
          alt=""
          class="mb-1 transition-transform duration-[900ms] group-hover:scale-110 group-hover:-rotate-6"
        />
        <p
          class="font-bold text-center text-sm sm:text-base tracking-wide transition-colors"
          :class="about.light ? 'text-white' : 'text-[#1E1823]'"
        >
          {{ about.title }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
