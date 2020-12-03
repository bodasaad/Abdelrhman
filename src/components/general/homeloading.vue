<template>
  <div>
    <div data-v-fae5bece class="rails">
      <div data-rail="one" class="rail loading-rails" style="left: 33.3%"></div>
      <div data-rail="two" class="rail loading-rails" style="left: 66.6%;"></div>
    </div>
    <div class="logo">
      <img src="/img/word.7c99b425.png" alt="logo" />
    </div>
  </div>
</template>

<script>
let $ = require("jquery");

export default {
  name: "homeloading",
  data() {
    return {};
  },
  mounted() {
    setTimeout(() => {
      $(".loading-rails").addClass("active");
    }, 1000);
  }
};
</script>

<style scoped>
.loading-rails {
  height: 0 !important;
  transition: height 1s ease-out;
}
.loading-rails.active {
  height: 100vh !important;
  transition: height 1s ease-in;
}
</style>