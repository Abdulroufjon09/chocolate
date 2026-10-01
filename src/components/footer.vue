<script setup>
import { Instagram, TwitterIcon, Heart } from "lucide-vue-next";
import { scrollToSection } from "@/composables/scroll";

const scrollTo = (id) => scrollToSection(id);

const links = [
  { label: "Home", id: "home" },
  { label: "How it’s made?", id: "made_section" },
  { label: "Our products", id: "our_products" },
  { label: "Top sellers", id: "top_products" },
  { label: "Chocolate is loved", id: "is_loved" },
];
</script>

<template>
  <footer
    class="relative overflow-hidden bg-[#1E1823] text-white px-6 sm:px-10 lg:px-14 py-14 space-y-10"
    id="footer"
  >
    <div
      class="pointer-events-none absolute -bottom-40 -left-24 w-80 h-80 rounded-full bg-[#FD9222]/10 blur-3xl"
    ></div>

    <div
      class="relative flex flex-col md:flex-row
             md:justify-between md:items-start
             gap-10"
    >
      <div v-reveal class="md:w-1/4 sm:text-2xl font-semibold leading-snug">
        <p>
          <span class="text-[#FD9222]">Chocolate</span>
          a delicious cure for a bad day
        </p>
      </div>

      <div v-reveal="120" class="flex flex-col sm:flex-row gap-8">
        <ul class="space-y-2 text-sm sm:text-base">
          <li class="font-semibold text-[#FD9222]">Contact us</li>
          <li class="text-white/80 transition-colors hover:text-white">
            +380 (68) 443-94-26
          </li>
          <li class="text-white/80 transition-colors hover:text-white">
            simplychoc@gmail.com
          </li>
        </ul>

        <div class="flex gap-4 items-start">
          <a
            class="cursor-pointer p-2 rounded-full border border-white/15 transition-all duration-700 hover:bg-[#FD9222] hover:border-[#FD9222] hover:-translate-y-1"
          >
            <Instagram :size="18" />
          </a>
          <a
            class="cursor-pointer p-2 rounded-full border border-white/15 transition-all duration-700 hover:bg-[#FD9222] hover:border-[#FD9222] hover:-translate-y-1"
          >
            <TwitterIcon :size="18" />
          </a>
        </div>
      </div>
    </div>

    <hr class="border-white/10 border-t w-full" />

    <nav class="relative">
      <ul
        class="flex flex-col sm:flex-row sm:flex-wrap
               gap-4 sm:gap-6
               text-sm sm:text-base"
      >
        <li v-for="link in links" :key="link.id">
          <a
            class="cursor-pointer text-white/75 relative py-1 transition-colors duration-700 hover:text-[#FD9222] after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#FD9222] after:transition-transform after:duration-[900ms] hover:after:scale-x-100"
            @click="scrollTo(link.id)"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>
    </nav>

    <p
      class="relative flex items-center justify-center gap-1.5 text-xs sm:text-sm text-white/50 pt-2"
    >
      © 2026 Simply Chocolate. Made with
      <Heart :size="14" class="text-[#FD9222]" fill="currentColor" />
      for chocolate lovers
    </p>
  </footer>
</template>

<style scoped></style>
