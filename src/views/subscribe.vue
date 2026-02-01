<script setup>
import bg from "@/assets/images/subscibe_bg.png";
import { X } from "lucide-vue-next";
</script>

<template>
  <div class="flex justify-center items-center min-h-screen px-4">
    <div
      class="flex flex-col md:flex-row
             w-full max-w-4xl
             rounded-3xl shadow-2xl overflow-hidden"
    >
      <div class="w-full md:w-1/2">
        <img
          :src="bg"
          alt=""
          class="w-full h-64 md:h-full object-cover"
        />
      </div>

      <div
        class="w-full md:w-1/2
               px-6 sm:px-10 py-6
               flex flex-col gap-6"
      >
        <div class="flex items-start justify-between gap-4">
          <p class="text-xl sm:text-2xl md:text-3xl font-semibold">
            Explore our new
            <span class="text-[#FD9222]">chocolate first!</span>
          </p>
          <RouterLink to="/">
            <X class="cursor-pointer shrink-0" />
          </RouterLink>
        </div>

        <div class="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            class="w-full border rounded-3xl px-6 py-2
                   border-[#1111110D] outline-none"
            placeholder="Enter your email"
          />
          <button
            class="w-full sm:w-auto
                   border rounded-3xl px-6 py-2
                   bg-[#FD9222] text-white"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  </div>
</template>