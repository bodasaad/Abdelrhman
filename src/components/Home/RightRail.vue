<template>
  <div class="rail" data-rail="two" ref="two" @mousedown="getDragPointer($event)"></div>
</template>

<script>
import { mapState } from "vuex";
import * as helpers from "@/helpers/home";

export default {
  name: "RightRail",
  data() {
    return {
      rail: null,
      shiftX: null,
      screenwidth: window.innerWidth
    };
  },
  props: ["coltwo", "colthree"],
  computed: {
    ...mapState(["two", "colWidth"])
  },
  mounted() {
    // this.rail = this.$refs.two;
    // this.two.lastPos =
    //   (parseInt($(`.rail[data-rail="one"]`).css("left"), 10) /
    //     $(window).width()) *
    //     100 +
    //   5;
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
      helpers.moveRail(this.shiftX, this.rail, e.pageX, "two");
    },
    onMouseUp() {
      document.getElementsByTagName("body")[0].style.cursor = "";
      document.removeEventListener("mousemove", this.onMouseMove);
    }
  },
  watch: {}
};
</script>
<style>
</style>