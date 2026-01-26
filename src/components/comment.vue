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
      " Chocolate is a family favourite treat. Love the delicious smooth chocolate and the creaminess inside. The wafer is soft but crunchy.",
  },
];
</script>

<template>
  <div class="flex flex-col items-center py-22 gap-22" id="is_loved">
    <div class="">
      <p class="text-2xl font-semibold">
        <span class="text-[#FD9222]">CHOCOLATE</span> IS LOVED
      </p>
    </div>
    <div class="flex gap-8 px-16">
      <div
        class="relative border-[#1111111A] rounded-3xl p-12 gap-2 flex flex-col text-center items-center shadow-2xl animate-pulse"
        v-for="(comment, index) in comments"
        :key="index"
      >
        <span
          class="border border-[#1111111A] rounded-full p-2 -mt-18 absolute"
        >
          <component :key="index" :is="comment.icon" :size="30" />
        </span>
        <p class="font-semibold">{{ comment.name }}</p>
        <p class="text-[#111111B2]">{{ comment.comment }}</p>
      </div>
    </div>
    <RouterLink to="/review">
        <button
          class="border border-[#FD9222] rounded-full font-semibold py-2.5 px-10 hover:bg-[#FD9222] hover:text-white transition-colors cursor-pointer"
        >
          Leave a review
        </button>
    </RouterLink>
  </div>
</template>

<style scoped>
</style>