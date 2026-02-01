<script setup>
import { UserRound } from "lucide-vue-next";

let comments = [
  {
    icon: UserRound,
    name: "Victoria Dobrzhanska",
    comment:
      "I love this chocolate bar. Perfect combination of light crispy wafer, covered in a thin layer chocolate.",
  },
  {
    icon: UserRound,
    name: "Nazar Babenko",
    comment:
      "This chocolate confection is a delight! A delight! The wafer is light and crisp, the hazelnut cream is smooth, and the chocolate is good.",
  },
  {
    icon: UserRound,
    name: "Olena Kampusch",
    comment:
      "Chocolate is a family favourite treat. Love the delicious smooth chocolate and the creaminess inside. The wafer is soft but crunchy.",
  },
];
</script>

<template>
  <div
    class="flex flex-col items-center py-16 gap-12 px-4"
    id="is_loved"
  >
    <p class="text-xl sm:text-2xl font-semibold text-center">
      <span class="text-[#FD9222]">CHOCOLATE</span> IS LOVED
    </p>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full animate-pulse"
    >
      <div
        v-for="(comment, index) in comments"
        :key="index"
        class="relative border border-[#1111111A] rounded-3xl p-10 flex flex-col gap-4 text-center items-center shadow-2xl"
      >
        <span
          class="border border-[#1111111A] rounded-full p-2 absolute -top-6 bg-white"
        >
          <component :is="comment.icon" :size="30" />
        </span>

        <p class="font-semibold mt-4">{{ comment.name }}</p>
        <p class="text-[#111111B2] text-sm sm:text-base">
          {{ comment.comment }}
        </p>
      </div>
    </div>

    <RouterLink to="/review">
      <button
        class="border border-[#FD9222] rounded-full font-semibold py-2.5 px-10
               hover:bg-[#FD9222] hover:text-white transition-colors cursor-pointer"
      >
        Leave a review
      </button>
    </RouterLink>
  </div>
</template>

<style scoped>
</style>
