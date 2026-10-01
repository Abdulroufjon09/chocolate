<script setup>
import { X, Star } from "lucide-vue-next";
import { reactive, ref } from "vue";

const texts = reactive([
  { name: "Name", type: "text" },
  { name: "Email", type: "email" },
  { name: "Phone number", type: "tel" },
]);

const rating = ref(0);
const hovered = ref(0);
</script>

<template>
  <div class="app-scroll px-4 sm:px-6">
    <div v-reveal class="min-h-full flex flex-col justify-center py-6">
      <div class="w-full max-w-2xl mx-auto flex flex-col gap-5">
        <div class="flex items-start justify-between w-full gap-4">
          <p class="text-xl sm:text-2xl font-semibold leading-snug">
            LEAVE A REVIEW ABOUT
            <span class="text-[#FD9222]">OUR CHOCOLATE</span>
          </p>
          <RouterLink to="/">
            <X
              class="cursor-pointer shrink-0 transition-transform duration-700 hover:rotate-90 hover:text-[#FD9222]"
            />
          </RouterLink>
        </div>

        <div class="grid sm:grid-cols-2 gap-4">
          <div class="flex flex-col gap-4">
            <div class="flex items-center gap-1.5">
              <button
                v-for="n in 5"
                :key="n"
                class="cursor-pointer transition-transform duration-500 hover:scale-125"
                @click="rating = n"
                @mouseenter="hovered = n"
                @mouseleave="hovered = 0"
              >
                <Star
                  :size="28"
                  :class="
                    (hovered || rating) >= n
                      ? 'text-[#FD9222]'
                      : 'text-[#111111]/30'
                  "
                  :fill="(hovered || rating) >= n ? 'currentColor' : 'none'"
                />
              </button>
            </div>

            <input
              v-for="(item, index) in texts"
              :key="index"
              :type="item.type"
              class="input"
              :placeholder="item.name"
            />
          </div>

          <div class="flex flex-col gap-4">
            <textarea
              placeholder="Your review"
              class="input flex-1 min-h-28 py-3"
            ></textarea>
            <button class="btn btn-primary w-full">Send</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.app-scroll {
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: none;
}

.app-scroll::-webkit-scrollbar {
  display: none;
}

/* katta ekranda — bir ekran, scrollsiz */
@media (min-width: 1024px) and (min-height: 600px) {
  .app-scroll {
    overflow: hidden;
  }
}
</style>