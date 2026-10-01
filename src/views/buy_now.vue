<script setup>
import { reactive } from "vue";

import img1 from "@/assets/images/100gr.png";
import img2 from "@/assets/images/200gr.png";
import img3 from "@/assets/images/300gr.png";

const abouts = reactive([
  { img: img1, how_much: "100 g" },
  { img: img2, how_much: "200 g" },
  { img: img3, how_much: "300 g" },
]);
</script>

<template>
  <div
    class="app-scroll flex flex-col justify-center gap-5 lg:gap-7 px-4 sm:px-8 md:px-12 py-6 lg:py-8"
  >
    <p v-reveal class="section-title">
      <span class="accent">BUY</span> NOW
    </p>

    <div
      class="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-5 lg:gap-7 max-w-6xl w-full mx-auto"
    >
      <!-- mahsulot tanlash -->
      <div class="grid grid-cols-3 gap-3 lg:gap-4 content-center">
        <div
          v-for="(i, index) in abouts"
          :key="index"
          v-reveal="index * 130"
          class="card group flex flex-col items-center justify-center gap-3 p-4"
        >
          <img
            :src="i.img"
            alt=""
            class="w-full h-16 sm:h-20 object-contain transition-transform duration-[900ms] group-hover:scale-110"
          />

          <button
            class="border border-[#111111]/10 rounded-full px-4 py-1 text-xs sm:text-sm font-semibold cursor-pointer transition-all duration-700 group-hover:bg-[#FD9222] group-hover:border-[#FD9222] group-hover:text-white"
          >
            {{ i.how_much }}
          </button>
        </div>
      </div>

      <!-- buyurtma formasi (glass) -->
      <div class="glass rounded-3xl p-5 sm:p-6 flex flex-col justify-center">

      <div class="grid sm:grid-cols-2 gap-3">
        <input type="text" class="input" placeholder="Name" />
        <input type="text" class="input" placeholder="Surname" />
        <input type="email" class="input" placeholder="Enter your email" />
        <input type="tel" class="input" placeholder="Phone number" />
        <input
          type="number"
          class="input sm:col-span-2"
          placeholder="Card number"
        />
        <textarea
          class="input sm:col-span-2 py-2.5"
          rows="2"
          placeholder="Comment"
        ></textarea>

        <div class="flex flex-col sm:flex-row gap-3 sm:col-span-2 mt-1">
          <button class="btn btn-primary w-full sm:w-auto">Submit</button>
          <RouterLink to="/" class="btn btn-outline-brand w-full sm:w-auto">
            Home
          </RouterLink>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.app-scroll {
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: none;
}

.app-scroll::-webkit-scrollbar {
  display: none;
}

/* katta ekranda — bir ekran, scrollsiz */
@media (min-width: 1024px) and (min-height: 600px) {
  .app-scroll {
    overflow: hidden;
  }
}
</style>