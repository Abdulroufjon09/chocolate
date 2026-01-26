<script setup>
import bg from "@/assets/images/subscibe_bg.png";
import { X } from "lucide-vue-next";
</script>

<template>
  <div class="flex justify-center items-center min-h-screen">
    <div class="flex w-2/3 rounded-3xl shadow-2xl">
      <div class="w-1/2">
        <img :src="bg" alt="" class="rounded-3xl" />
      </div>
      <div class="px-12 py-2 flex flex-col gap-4">
        <div class="flex items-center justify-between">
          <p class="text-3xl font-semibold w-56">
            Explore our new <span class="text-[#FD9222]">chocolate first!</span>
          </p>
          <RouterLink to="/">
            <X class="cursor-pointer animate-pulse" />
          </RouterLink>
        </div>
        <div class="flex gap-2">
          <input
            type="email"
            name=""
            id=""
            class="border rounded-3xl px-6 py-2 border-[#1111110D] outline-none"
            placeholder="Enter your email"
          />
          <button class="border rounded-3xl px-6 py-2 bg-[#FD9222] text-white  ">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>