<script setup>
import made from "@/assets/images/how_it's_made.svg";

let abouts = [
  "Heat the milk in a saucepan without bringing it to a boil. Add sugar and cocoa powder.",
  "At the same time, prepare a water bath. Melt the butter on it.",
  "'Mix' the milk mixture and already liquid butter. Mix thoroughly with a silicone spatula so that the mass becomes uniform and silky.",
  "Heat the mixture over low heat, letting it barely boil.",
  "Pour the chocolate into special containers (can be replaced with ice molds). Allow to cool and harden.",
];
</script>

<template>
  <div class="flex flex-col items-center gap-12" id="made_section">
    <div>
      <p class="text-2xl font-semibold">
        HOW IT’S <span class="text-orange-500">MADE?</span>
      </p>
    </div>
    <div class="flex flex-col md:flex-row justify-between items-center gap-8 px-14">
      <div class="md:w-1/2">
        <img :src="made" alt="" class="rounded-3xl w-full shadow-2xl shadow-black" />
      </div>
      <div class="md:w-1/2 flex flex-col gap-4">
        <p class="text-lg">
          Try our chocolates today and discover the perfect balance of flavor
        </p>
        <ul class="flex flex-col gap-2">
          <li
            v-for="(about, index) in abouts"
            :key="index"
            class="text-gray-700 list-disc"
          >
            {{ about }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>