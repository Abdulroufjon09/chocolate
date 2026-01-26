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
  <div class="app-scroll">
    <div class="flex flex-col items-center justify-center py-12 gap-8">
      <div class="flex items-center gap-8">
        <p class="text-2xl w-72 font-semibold">
          LEAVE A REVIEW ABOUT <span class="text-[#FD9222]">OUR CHOCOLATE</span>
        </p>
        <RouterLink to="/">
          <X class="cursor-pointer" />
        </RouterLink>
      </div>
      <div class="space-y-4" v-for="(item, index) in texts" :key="index">
        <p>{{ item.name }}</p>
        <span>
          <input
            :type="item.type"
            class="w-full border border-[#1111111A] rounded-3xl py-2 px-6 outline-none"
            :placeholder="item.name"
          />
        </span>
      </div>
      <textarea
        name=""
        id=""
        class="border border-[#1111111A] rounded-3xl py-2 px-6 outline-none"
      ></textarea>
      <button
        class="bg-[#FD9222] rounded-3xl text-white py-3 px-10 cursor-pointer"
      >
        Send
      </button>
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