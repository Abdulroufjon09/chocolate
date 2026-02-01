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
  <div class="app-scroll flex flex-col gap-8 py-14 px-4 sm:px-8 md:px-16">
    <div class="flex justify-center">
      <p class="text-2xl sm:text-3xl font-semibold text-center">
        <span class="text-[#FD9222]">BUY</span> NOW
      </p>
    </div>

    <div class="flex flex-col sm:flex-row justify-center flex-wrap gap-6 sm:gap-8">
      <div
        v-for="(i, index) in abouts"
        :key="index"
        class="border rounded-3xl border-[#1111111A] flex flex-col items-center justify-between p-6 gap-4 sm:w-40 md:w-48"
      >
        <img :src="i.img" alt="" class="w-24 h-24 object-contain" />

        <button class="border border-gray-300 rounded-full px-8 py-1 text-sm sm:text-base">
          {{ i.how_much }}
        </button>
      </div>
    </div>

    <div class="flex justify-center items-center">
      <div class="w-full max-w-2xl space-y-6">
        <div class="space-y-2 sm:space-y-0 sm:flex sm:gap-4">
          <input
            type="text"
            class="w-full sm:w-1/2 border border-[#1111111A] rounded-3xl py-2 px-6 outline-none"
            placeholder="Name"
          />
          <input
            type="text"
            class="w-full sm:w-1/2 border border-[#1111111A] rounded-3xl py-2 px-6 outline-none"
            placeholder="Surname"
          />
        </div>

        <div class="space-y-2">
          <p>Email:</p>
          <input
            type="email"
            class="w-full border border-[#1111111A] rounded-3xl py-2 px-6 outline-none"
            placeholder="Enter your email"
          />
        </div>

        <div class="space-y-2">
          <p>Phone number:</p>
          <input
            type="tel"
            class="w-full border border-[#1111111A] rounded-3xl py-2 px-6 outline-none"
            placeholder="Phone number"
          />
        </div>

        <div class="space-y-2">
          <p>Card number:</p>
          <input
            type="number"
            class="w-full border border-[#1111111A] rounded-3xl py-2 px-6 outline-none"
            placeholder="Card number"
          />
        </div>

        <div class="space-y-2">
          <p>Comment:</p>
          <textarea
            class="w-full border border-[#1111111A] py-2 px-6 rounded-3xl outline-none resize-none"
            rows="4"
          ></textarea>
        </div>

        <div class="flex flex-col sm:flex-row gap-4 justify-center mt-4">
          <button
            class="bg-[#FD9222] rounded-3xl text-white py-3 px-10 cursor-pointer w-full sm:w-auto"
          >
            Submit
          </button>
          <RouterLink to="/">
            <button
              class="bg-[#FD9222] rounded-3xl text-white py-3 px-10 cursor-pointer w-full sm:w-auto"
            >
              Home
            </button>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.app-scroll {
  height: 100vh;
  overflow-y: auto;

  scrollbar-width: none;
}

.app-scroll::-webkit-scrollbar {
  display: none;
}
</style>