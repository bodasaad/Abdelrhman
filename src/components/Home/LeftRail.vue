<template>
  <div
    class="rail"
    data-rail="one"
    ref="one"
    @mousedown="getDragPointer($event)"
    :style=" {'left':`${one.left}%`}"
  ></div>
</template>

<script>
import { mapState } from "vuex";
import * as helpers from "@/helpers/home";

export default {
  name: "LeftRail",
  data() {
    return {
      rail: null,
      shiftX: null
    };
  },
  computed: {
    ...mapState(["one", "two"])
  },
  mounted() {
    this.rail = this.$refs.one;
  },
  methods: {
    getDragPointer(e) {
      const x = e.clientX;
      const elRect = e.target.getBoundingClientRect();
      this.shiftX = x - elRect.left;
      document.addEventListener("mousemove", this.onMouseMove);
      document.addEventListener("mouseup", this.onMouseUp);
    },
    onMouseMove(e) {
      e.preventDefault();
      helpers.moveRail(this.shiftX, this.rail, e.pageX, "one");
    },
    onMouseUp() {
      document.getElementsByTagName("body")[0].style.cursor = "";
      document.removeEventListener("mousemove", this.onMouseMove);
    }
  },
  watch: {
 
  }
};
</script>
<style>
</style>