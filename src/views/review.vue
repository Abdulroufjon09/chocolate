<script setup>
import { X } from "lucide-vue-next";
import { reactive } from "vue";

let texts = reactive([
  { name: "Name", type: "text" },
  { name: "Email", type: "email" },
  { name: "Phone number", type: "tel" },
]);
</script>

<template>
  <div class="app-scroll px-4">
    <div
      class="flex flex-col items-center justify-center
             py-12 gap-8
             max-w-lg mx-auto"
    >
      <div class="flex items-start justify-between w-full gap-4">
        <p class="text-xl sm:text-2xl font-semibold">
          LEAVE A REVIEW ABOUT
          <span class="text-[#FD9222]">OUR CHOCOLATE</span>
        </p>
        <RouterLink to="/">
          <X class="cursor-pointer shrink-0" />
        </RouterLink>
      </div>

      <div
        v-for="(item, index) in texts"
        :key="index"
        class="w-full space-y-2"
      >
        <p class="text-sm">{{ item.name }}</p>
        <input
          :type="item.type"
          class="w-full border border-[#1111111A]
                 rounded-3xl py-2 px-6 outline-none"
          :placeholder="item.name"
        />
      </div>
      <textarea
        placeholder="Your review"
        class="w-full h-28
               border border-[#1111111A]
               rounded-3xl py-3 px-6 outline-none resize-none"
      ></textarea>
      <button
        class="w-full sm:w-auto
               bg-[#FD9222] rounded-3xl
               text-white py-3 px-12 cursor-pointer"
      >
        Send
      </button>
    </div>
  </div>
</template>

<style scoped>
.app-scroll {
  min-height: 100vh;
  overflow-y: auto;
  scrollbar-width: none;
}

.app-scroll::-webkit-scrollbar {
  display: none;
}
</style>