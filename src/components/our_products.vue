<script setup>
import orange from "@/assets/images/orange.png";
import apple from "@/assets/images/APPLE&CRANBERRY.png";
import lime from "@/assets/images/lime&sea salt.png";
import pineapple from "@/assets/images/pineapple.png";

let products = [
  {
    img: orange,
    name: "ORANGE",
    description: "Dark chocolate",
    price: "45 UAH",
  },
  {
    img: apple,
    name: "APPLE&CRANBERRY",
    description: "Milk chocolate",
    price: "50 UAH",
  },
  {
    img: lime,
    name: "lime&sea salt",
    description: "Dark chocolate",
    price: "66 UAH",
  },
  {
    img: pineapple,
    name: "pineapple",
    description: "Dark chocolate",
    price: "54 UAH",
  },
];
</script>

<template>
  <section class="flex flex-col justify-center items-center py-28 px-4 gap-12" id="our_products">
    <p class="font-semibold text-xl sm:text-2xl lg:text-3xl text-center">
      OUR <span class="text-[#FD9222]">PRODUCTS</span>
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full">
      <div
        v-for="(product, index) in products"
        :key="index"
        class="border rounded-2xl p-4 border-[#1111111A] hover:shadow-2xl transition-shadow flex flex-col items-center gap-3 text-center"
      >
        <img :src="product.img" alt="" class="w-48 sm:w-56 object-contain" />
        <ul class="space-y-1">
          <li class="font-semibold">{{ product.name }}</li>
          <li class="text-sm text-[#111111B2]">{{ product.description }}</li>
        </ul>
        <button class="border border-[#1111111A] px-4 py-1 rounded-full cursor-pointer">
          {{ product.price }}
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
