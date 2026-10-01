<script setup>
import orange from "@/assets/images/orange.png";
import apple from "@/assets/images/APPLE&CRANBERRY.png";
import lime from "@/assets/images/lime&sea salt.png";
import pineapple from "@/assets/images/pineapple.png";

const products = [
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
  <section
    class="flex flex-col justify-center items-center py-24 px-4 sm:px-10 gap-12"
    id="our_products"
  >
    <p v-reveal class="section-title">
      OUR <span class="accent">PRODUCTS</span>
    </p>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl w-full"
    >
      <div
        v-for="(product, index) in products"
        :key="index"
        v-reveal="index * 120"
        class="card group p-5 flex flex-col items-center gap-3 text-center"
      >
        <div class="overflow-hidden rounded-2xl w-full grid place-items-center">
          <img
            :src="product.img"
            :alt="product.name"
            class="w-44 sm:w-52 object-contain transition-transform duration-[900ms] group-hover:scale-110 group-hover:-rotate-3"
          />
        </div>
        <ul class="space-y-1">
          <li class="font-semibold tracking-wide">{{ product.name }}</li>
          <li class="text-sm text-[#111111]/60">{{ product.description }}</li>
        </ul>
        <button
          class="border border-[#111111]/10 px-5 py-1.5 rounded-full text-sm font-semibold cursor-pointer transition-all duration-700 group-hover:bg-[#FD9222] group-hover:border-[#FD9222] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#FD9222]/40"
        >
          {{ product.price }}
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
