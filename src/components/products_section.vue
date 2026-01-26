<script setup>
import milk_chocolate from "@/assets/images/milk CHOCOLATE.svg";
import milk from "@/assets/images/milk.svg";
import nuts from "@/assets/images/nuts.svg";
import coffee from "@/assets/images/sEMI-SWEETCHOCOLATE.svg";
import { Indent } from "lucide-vue-next";

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
  <div class="py-20">
    <div class="flex flex-col justify-center items-center gap-7">
      <p class="text-2xl font-semibold w-1/3 text-center">IT ALL ADDS UP TO ONE EXCEPTIONAL <span class="text-orange-500">TASTE</span> SENSATION</p>
      <p class="w-2/4 text-center">
        At Simply Chocolate, we believe that the secret to exceptional chocolate
        is in the details. From the sourcing of the finest ingredients to the
        careful crafting of each individual piece, every step of our process
        adds up to one exceptional taste sensation.
      </p>
    </div>
    <div class="flex justify-between items-center p-14">
      <div
        v-for="(about, index) in abouts"
        :key="index"
        :style="{
          backgroundColor: about.bg_color || 'transparent',
          borderColor: about.border_color || 'transparent',
        }"
        class="flex flex-col items-center justify-center p-6 rounded-md border hover:shadow-2xl transition-shadow"
      >
        <img :src="about.img" alt="" />
        <p class="font-bold text-white text-center">{{ about.title }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>