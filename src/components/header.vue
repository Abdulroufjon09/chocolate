<script setup>
import { ChevronDown, Instagram, TwitterIcon, Menu, X } from "lucide-vue-next";
import { onBeforeUnmount, onMounted, ref } from "vue";
import bg from "@/assets/images/header_bg.png";
import chocolate from "@/assets/images/chocolate.svg";
import coin from "@/assets/images/Coin.svg";
import spoon from "@/assets/images/spoon.svg";
import { scrollToSection } from "@/composables/scroll";

const scrollTo = (id) => scrollToSection(id);

const mobileMenuOpen = ref(false);
const toggleMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const scrolled = ref(false);
let container = null;

const onScroll = () => {
  scrolled.value = (container?.scrollTop ?? 0) > 12;
};

onMounted(() => {
  container = document.querySelector(".app-scroll");
  container?.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
});

onBeforeUnmount(() => {
  container?.removeEventListener("scroll", onScroll);
});

const links = [
  { label: "Home", id: "home" },
  { label: "How it’s made?", id: "made_section" },
  { label: "Our products", id: "our_products" },
  { label: "Top sellers", id: "top_products" },
  { label: "Chocolate is loved", id: "is_loved" },
];
</script>

<template>
  <nav
    class="sticky top-0 z-40 transition-all duration-700"
    :class="
      scrolled
        ? 'bg-white/60 backdrop-blur-xl shadow-[0_16px_40px_-28px_rgba(30,24,35,0.9)]'
        : 'bg-transparent'
    "
  >
    <div
      class="flex items-center justify-between px-4 sm:px-8 py-4 max-w-7xl mx-auto font-[Montserrat]"
    >
      <a
        class="flex items-center gap-2 cursor-pointer group"
        @click="scrollTo('home')"
      >
        <span
          class="w-9 h-9 rounded-full bg-[#1E1823] grid place-items-center transition-transform duration-[900ms] group-hover:rotate-12"
        >
          <img :src="chocolate" alt="" class="w-5 h-5" />
        </span>
        <p class="font-extrabold text-sm sm:text-lg tracking-wide">
          SIMPLY CHOCOLATE
        </p>
      </a>

      <ul class="hidden md:flex gap-7 text-sm font-medium">
        <li v-for="link in links" :key="link.id">
          <a
            class="cursor-pointer relative py-1 transition-colors duration-700 hover:text-[#FD9222] after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#FD9222] after:transition-transform after:duration-[900ms] hover:after:scale-x-100"
            @click="scrollTo(link.id)"
            >{{ link.label }}</a
          >
        </li>
      </ul>

      <ul class="hidden md:flex gap-4">
        <li>
          <a
            class="cursor-pointer transition-all duration-700 hover:text-[#FD9222] hover:-translate-y-0.5 inline-block"
          >
            <Instagram :size="20" />
          </a>
        </li>
        <li>
          <a
            class="cursor-pointer transition-all duration-700 hover:text-[#FD9222] hover:-translate-y-0.5 inline-block"
          >
            <TwitterIcon :size="20" />
          </a>
        </li>
      </ul>

      <button
        class="md:hidden z-20 cursor-pointer rounded-full p-2 transition-colors hover:bg-black/5"
        aria-label="Toggle menu"
        @click="toggleMenu"
      >
        <component :is="mobileMenuOpen ? X : Menu" :size="26" />
      </button>

      <transition
        name="menu"
        enter-active-class="transition-all duration-700 ease-out"
        leave-active-class="transition-all duration-500 ease-in"
        enter-from-class="opacity-0 -translate-y-3"
        enter-to-class="opacity-100 translate-y-0"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-3"
      >
        <div
          v-if="mobileMenuOpen"
          class="absolute top-full left-0 w-full bg-[#1E1823]/80 backdrop-blur-xl text-white flex flex-col items-center gap-5 py-7 shadow-2xl md:hidden"
        >
          <ul class="flex flex-col gap-5 items-center w-full">
            <li v-for="link in links" :key="link.id">
              <a
                class="cursor-pointer block w-full text-center text-base transition-colors hover:text-[#FD9222]"
                @click="
                  scrollTo(link.id);
                  toggleMenu();
                "
                >{{ link.label }}</a
              >
            </li>
          </ul>

          <div class="flex gap-5 pt-2 border-t border-white/10 w-40 justify-center">
            <Instagram
              class="cursor-pointer transition-colors hover:text-[#FD9222]"
              :size="20"
            />
            <TwitterIcon
              class="cursor-pointer transition-colors hover:text-[#FD9222]"
              :size="20"
            />
          </div>
        </div>
      </transition>
    </div>
  </nav>

  <header id="home" class="py-5 sm:py-7 px-4">
    <div class="relative flex justify-center">
      <div class="relative w-full max-w-6xl">
        <img
          :src="bg"
          alt="Chocolate assortment"
          class="rounded-[2rem] w-full min-h-[340px] sm:min-h-[440px] lg:min-h-[540px] object-cover"
        />

        <div
          class="absolute inset-0 rounded-[2rem] bg-gradient-to-t from-black/85 via-black/45 to-black/10"
        ></div>

        <!-- uchib yuradigan dekorlar -->
        <img
          :src="chocolate"
          alt=""
          class="float hidden sm:block absolute top-8 right-6 lg:right-10 w-12 lg:w-16 drop-shadow-2xl opacity-90"
          style="animation-delay: -1s"
        />
        <img
          :src="coin"
          alt=""
          class="float hidden lg:block absolute top-1/3 right-24 w-14 opacity-90"
          style="animation-delay: -3s"
        />
        <img
          :src="spoon"
          alt=""
          class="float hidden lg:block absolute bottom-28 right-8 w-16 rotate-12 opacity-80"
          style="animation-delay: -4.5s"
        />

        <div
          class="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 lg:p-14 text-white"
        >
          <div class="flex flex-col lg:flex-row justify-between gap-10">
            <div>
              <p
                class="hero-in text-xl sm:text-2xl lg:text-4xl font-bold max-w-xl leading-snug"
              >
                Treat yourself or a loved one to our finest ingredients for a
                moment of pure delight!
              </p>

              <div
                class="hero-in mt-7 flex flex-col sm:flex-row gap-4"
                style="animation-delay: 0.2s"
              >
                <RouterLink to="/buy" class="btn btn-primary">
                  Buy now
                </RouterLink>

                <button
                  class="btn btn-outline-light"
                  @click="scrollTo('made_section')"
                >
                  How it’s made
                </button>
              </div>
            </div>

            <div
              class="hero-in hidden lg:flex items-center gap-3 self-end"
              style="animation-delay: 0.4s"
            >
              <p class="text-xs uppercase tracking-[0.25em] opacity-80">
                Scroll Down
              </p>
              <button
                class="bounce-soft bg-white text-black rounded-full p-1.5 cursor-pointer transition-transform duration-700 hover:scale-110"
                @click="scrollTo('main')"
              >
                <ChevronDown :size="20" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
