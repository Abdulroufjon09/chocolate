<script setup>
import made from "@/assets/images/how_it's_made.svg";

const abouts = [
  "Heat the milk in a saucepan without bringing it to a boil. Add sugar and cocoa powder.",
  "At the same time, prepare a water bath. Melt the butter on it.",
  "'Mix' the milk mixture and already liquid butter. Mix thoroughly with a silicone spatula so that the mass becomes uniform and silky.",
  "Heat the mixture over low heat, letting it barely boil.",
  "Pour the chocolate into special containers (can be replaced with ice molds). Allow to cool and harden.",
];
</script>

<template>
  <div
    class="bg-[#FAF6F1] px-4 sm:px-10 py-16 sm:py-20"
    id="made_section"
  >
    <div class="flex flex-col items-center gap-12 max-w-6xl mx-auto">
      <p v-reveal class="section-title">
        HOW IT’S <span class="accent">MADE?</span>
      </p>

      <div
        class="flex flex-col md:flex-row justify-between items-center gap-10 w-full"
      >
        <div v-reveal class="md:w-1/2 w-full">
          <img
            :src="made"
            alt="How it's made"
            class="rounded-3xl w-full shadow-2xl shadow-black/25 object-cover transition-transform duration-[900ms] hover:scale-[1.02]"
          />
        </div>

        <div class="md:w-1/2 flex flex-col gap-5 w-full">
          <p
            v-reveal
            class="text-base sm:text-lg font-semibold text-[#1E1823]"
          >
            Try our chocolates today and discover the perfect balance of flavor
          </p>

          <ul class="flex flex-col gap-3 text-sm sm:text-base">
            <li
              v-for="(about, index) in abouts"
              :key="index"
              v-reveal="index * 100"
              class="flex items-start gap-3"
            >
              <span
                class="shrink-0 w-7 h-7 rounded-full bg-[#FD9222] text-white text-xs font-bold grid place-items-center shadow-md shadow-[#FD9222]/40"
              >
                {{ index + 1 }}
              </span>
              <span class="text-[#111111]/70 leading-relaxed">{{
                about
              }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
