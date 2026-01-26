<script setup>
import Comment from "../components/comment.vue";
import Explore_new from "../components/explore_new.vue";
import Footer from "../components/footer.vue";
import Header from "../components/header.vue";
import Made_section from "../components/made_section.vue";
import Main from "../components/main.vue";
import Our_products from "../components/our_products.vue";
import Products_section from "../components/products_section.vue";
import Top_products from "../components/top_products.vue";
</script>

<template>
  <div class="app-scroll">
    <Header />
    <Main />
    <Products_section />
    <Made_section />
    <Our_products />
    <Top_products />
    <Comment />
    <Explore_new />
    <Footer />
  </div>
</template>


<style scoped>
.app-scroll {
  height: 100vh;
  overflow-y: auto;

  scrollbar-width: none;
}

.app-scroll::-webkit-scrollbar {
  display: none;
}
</style>
