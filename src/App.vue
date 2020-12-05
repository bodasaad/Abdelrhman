<template>
  <div id="app">
    <link
      href="https://fonts.googleapis.com/css?family=Cairo:200,300,400,600,700,900&display=swap"
      rel="stylesheet"
    />

    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.2/styles/default.min.css"
    />
    <link href="https://cdn.quilljs.com/1.2.6/quill.bubble.css" rel="stylesheet" />
    <link href="https://cdn.quilljs.com/1.2.6/quill.core.css" rel="stylesheet" />
    <link href="https://cdn.quilljs.com/1.2.6/quill.snow.css" rel="stylesheet" />
    <SearchComponent></SearchComponent>
    <MessageComponent v-if="msg" :msg="msg"></MessageComponent>
    <!-- <div class="wrapper"> -->
    <main class="transition-fade">
      <div class="router-view">
        <transition :name="transitionName">
          <router-view></router-view>
        </transition>
      </div>
    </main>
    <!-- </div> -->
  </div>
</template>
<script>
window.$ = require("jquery");
window.JQuery = require("jquery");
import { mapState, mapActions } from "vuex";
import MessageComponent from "@/components/general/Message.vue";
import SearchComponent from "@/components/general/Search.vue";

export default {
  name: "app",
  data() {
    return {
      loading: true,
      prevHeight: 0,
      transitionName: ""
    };
  },
  components: {
    MessageComponent: MessageComponent,
    SearchComponent: SearchComponent,
  },
  props: {},
  computed: {
    ...mapState(["msg", "pageTransition", "categories"]),
    // ...mapState('admin',["msg"]),
    ...mapActions(["logout"]),
    // ...mapMutations("studio", ["checkauthintecated"])

  },

  created() {
    
    this.$store.commit("studio/checkauthintecated");

    if (this.categories.length == 0) {
      this.$store.dispatch({ type: "getCategories" });
    } else {
      this.loading = false;
    }
  },
  methods: {},
  watch: {
    //Use watch to monitor changes in $router
    $route(to, from) {
      if (from.name && to.name) {
        if (to.meta.index > from.meta.index) {
          //If the to index is larger than the from index, it is judged to be in the forward state, and vice versa, in the backward state.
          //Setting Animation Name
          this.transitionName = "slide-left";
        } else {
          this.transitionName = "slide-right";
        }
      }
    }
  },

  destroyed() {}
};
</script>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css");

@import url(//cdn.rawgit.com/rtaibah/dubai-font-cdn/master/dubai-font.css);

#app {
  overflow: hidden;
  widows: 100vw;
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  position: absolute;
  width: 100vw;
}
.slide-left-enter-active {
  transition: all 300ms;
}
.slide-left-enter-active,
.slide-right-enter-active {
  filter: blur(10px);
  transition: all 300ms;
}
.slide-right-enter {
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  transition: all 1000ms;
  filter: blur(5px);
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  transform: translate3d(-100%, 0, 0);
}

@media (max-width: 900px) {
  .slide-left-enter-active {
    transition: all 900ms;
  }
  .slide-left-enter-active,
  .slide-right-enter-active {
    filter: blur(10px);
    transition: all 900ms;
  }
}
</style>
