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
  <div class="app-scroll flex flex-col gap-8 py-14">
    <div class="flex justify-center">
      <p class="text-2xl font-semibold">
        <span class="text-[#FD9222]">BUY</span> NOW
      </p>
    </div>
    <div class="flex justify-center gap-8">
      <div
        v-for="(i, index) in abouts"
        :key="index"
        class="border rounded-3xl border-[#1111111A] flex flex-col items-center justify-between p-6 gap-2"
      >
        <img :src="i.img" alt="" class="w-24 object-contain" />

        <button class="border border-gray-300 rounded-full px-10 py-1">
          {{ i.how_much }}
        </button>
      </div>
    </div>
    <div class="flex justify-center items-center">
      <div class="space-y-8">
        <p>Personal information:</p>
        <span class="flex justify-center items-center gap-14">
          <input
            type="text"
            class="border border-[#1111111A] rounded-3xl py-2 px-6 outline-none"
            placeholder="Name"
          />
          <input
            type="text"
            class="border border-[#1111111A] rounded-3xl py-2 px-6 outline-none"
            placeholder="Sourname"
          />
        </span>
        <div class="space-y-8">
          <p>Email:</p>
          <span>
            <input
              type="email"
              class="w-full border border-[#1111111A] rounded-3xl py-2 px-6 outline-none"
              placeholder="Enter your email"
            />
          </span>
        </div>
        <div class="space-y-8">
          <p>Phone number:</p>
          <span>
            <input
              type="tel"
              class="w-full border border-[#1111111A] rounded-3xl py-2 px-6 outline-none"
              placeholder="Phone number"
            />
          </span>
        </div>

        <div class="space-y-8">
          <p>Card number:</p>
          <span>
            <input
              type="number"
              class="w-full border border-[#1111111A] rounded-3xl py-2 px-6 outline-none"
              placeholder="Card number"
            />
          </span>
        </div>

        <div class="space-y-8">
          <p>Comment:</p>
          <span>
            <textarea
              class="w-full border border-[#1111111A] py-2 px-6 rounded-3xl outline-none"
            ></textarea>
          </span>
          <span class="flex gap-8">
            <button
              class="bg-[#FD9222] rounded-3xl text-white py-3 px-10 mt-12 cursor-pointer"
            >
              Submit
            </button>
            <RouterLink to="/">
              <button
                class="bg-[#FD9222] rounded-3xl text-white py-3 px-10 mt-12 cursor-pointer"
              >
                Home
              </button>
            </RouterLink>
          </span>
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