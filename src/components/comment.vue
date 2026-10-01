<script setup>
import { UserRound, Star } from "lucide-vue-next";

const comments = [
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
  <div class="flex flex-col items-center py-20 gap-12 px-4 sm:px-10" id="is_loved">
    <p v-reveal class="section-title">
      <span class="accent">CHOCOLATE</span> IS LOVED
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
      <div
        v-for="(comment, index) in comments"
        :key="index"
        v-reveal="index * 150"
        class="relative card glass px-6 sm:px-10 pt-12 pb-8 flex flex-col gap-4 text-center items-center"
      >
        <span
          class="border border-[#FD9222]/40 bg-[#FFF1E0] rounded-full p-3 absolute -top-6 shadow-lg transition-transform duration-[900ms] hover:rotate-12 hover:scale-110"
        >
          <component :is="comment.icon" :size="26" class="text-[#FD9222]" />
        </span>

        <div class="flex gap-1 text-[#FD9222]">
          <Star v-for="n in 5" :key="n" :size="16" fill="currentColor" />
        </div>

        <p class="font-semibold">{{ comment.name }}</p>
        <p class="text-[#111111]/60 text-sm sm:text-base leading-relaxed">
          {{ comment.comment }}
        </p>
      </div>
    </div>

    <div v-reveal>
      <RouterLink to="/review" class="btn btn-outline-brand">
        Leave a review
      </RouterLink>
    </div>
  </div>
</template>
