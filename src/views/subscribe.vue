<script setup>
import bg from "@/assets/images/subscibe_bg.png";
import { X } from "lucide-vue-next";
</script>

<template>
  <div
    class="relative flex justify-center items-center min-h-screen px-4 py-10 overflow-hidden"
  >
    <!-- dekorativ blur blob'lar -->
    <div
      class="pointer-events-none absolute -top-24 -left-20 w-72 h-72 rounded-full bg-[#FD9222]/25 blur-3xl"
    ></div>
    <div
      class="pointer-events-none absolute -bottom-28 -right-16 w-80 h-80 rounded-full bg-[#1E1823]/15 blur-3xl"
    ></div>

    <div
      class="relative scale-in flex flex-col md:flex-row
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
            <X
              class="cursor-pointer shrink-0 transition-transform duration-700 hover:rotate-90 hover:text-[#FD9222]"
            />
          </RouterLink>
        </div>

        <div class="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            class="input"
            placeholder="Enter your email"
          />
          <button
            class="btn btn-primary w-full sm:w-auto"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  </div>
</template>