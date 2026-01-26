<script setup>
import { Instagram, TwitterIcon } from "lucide-vue-next";
const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};
</script>

<template>
  <div class="p-14 space-y-8 bg-[#1E1823] text-white" id="footer">
    <div class="flex justify-between items-center">
      <div class="w-1/5 text-2xl">
        <p><span class="text-[#FD9222]">Chocolate</span> a delicious cure for a bad day</p>
      </div>
      <div class="flex justify-center items-start gap-8">
        <ul>
          <li>Contact us</li>
          <li>+380 (68) 443-94-26</li>
          <li>simplychoc@gmail.com</li>
        </ul>
        <Instagram />
        <TwitterIcon />
      </div>
    </div>
    <hr class="border-[#FFFFFF1A] border-t-2 w-full" />
    <div class="">
      <ul class="flex gap-6">
        <li><a class="cursor-pointer" @click="scrollTo('home')">Home</a></li>
        <li>
          <a class="cursor-pointer" @click="scrollTo('made_section')"
            >How it’s made?</a
          >
        </li>
        <li>
          <a class="cursor-pointer" @click="scrollTo('our_products')"
            >Our products</a
          >
        </li>
        <li>
          <a class="cursor-pointer" @click="scrollTo('top_products')"
            >Top sellers</a
          >
        </li>
        <li>
          <a class="cursor-pointer" @click="scrollTo('is_loved')"
            >Chocolate is loved</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
</style>