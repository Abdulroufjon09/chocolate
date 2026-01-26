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
  <div class="flex flex-col justify-center items-center py-28 gap-12" id="our_products">
    <div class="">
      <p class="font-semibold text-2xl">
        OUR <span class="text-[#FD9222]">PRODUCTS</span>
      </p>
    </div>
    <div class="flex text-center gap-2">
      <div class="border rounded-2xl p-2 border-[#1111111A] hover:shadow-2xl transition-shadow" v-for="(product, index) in products" :key="index">
        <span>
          <img :src="product.img" alt="" class="w-60" />
          <ul class="space-y-1 py-2">
            <li class="font-semibold">{{ product.name }}</li>
            <li class="text-[12px text-[#111111B2]">{{ product.description }}</li>
          </ul>
          <button class="border border-[#1111111A] px-4 py-1 rounded-full cursor-pointer">{{ product.price }}</button>
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>