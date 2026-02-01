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
  <div class="flex flex-col items-center gap-12 px-4 sm:px-10" id="made_section">
    <p class="text-xl sm:text-2xl lg:text-3xl font-semibold text-center">
      HOW IT’S <span class="text-orange-500">MADE?</span>
    </p>

    <div class="flex flex-col md:flex-row justify-between items-center gap-8 max-w-6xl w-full">
      <div class="md:w-1/2 w-full">
        <img
          :src="made"
          alt="How it's made"
          class="rounded-3xl w-full shadow-2xl shadow-black object-cover"
        />
      </div>

      <div class="md:w-1/2 flex flex-col gap-4 w-full">
        <p class="text-base sm:text-lg">
          Try our chocolates today and discover the perfect balance of flavor
        </p>

        <ul class="flex flex-col gap-2 list-disc list-inside text-gray-700 text-sm sm:text-base">
          <li v-for="(about, index) in abouts" :key="index">
            {{ about }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
