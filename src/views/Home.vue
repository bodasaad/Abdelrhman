<template>
  <div>
    <loadingCom v-if="enter"></loadingCom>
    <div v-if="!enter" class="columns opacity-none">
      <Articles ref="articles" :articles="articles" v-on:created="checkFiltertion"></Articles>
      <Projects ref="projects" :projects="projects" v-on:created="checkFiltertion"></Projects>
      <Studio ref="studio"></Studio>
      <Rails :loading="loading" ref="rails" :refs="this.$refs"></Rails>
    </div>
    <div class="columns-footer" v-if="!enter">
      <div class="columns-footer__menu">
        <div class="columns-footer__menu-item" @click="activeColumn('one', $event)">
          <div class="button-pill active" data-column="one">Articles</div>
        </div>
        <div class="columns-footer__menu-item" @click="activeColumn('two', $event)">
          <div class="button-pill" data-column="two">Projects</div>
        </div>
        <div class="columns-footer__menu-item" @click="activeColumn('three', $event)">
          <div class="button-pill" data-column="three">Studio</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import loadingCom from "@/components/general/homeloading.vue";
import Articles from "@/components/Home/Articles.vue";
import Projects from "@/components/Home/Projects.vue";
import Studio from "@/components/Home/Studio.vue";
import Rails from "@/components/Home/Rails.vue";
import * as helpers from "@/helpers/home";
let $ = require("jquery");

import { mapState } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      windowWidth: window.innerWidth,
      shiftX: null,
      shiftY: null,
      loading: true,
      enter: true
    };
  },
  components: {
    Articles: Articles,
    Projects: Projects,
    Studio: Studio,
    Rails: Rails,
    loadingCom: loadingCom
  },
  computed: {
    ...mapState(["one", "two", "colWidth"]),
    ...mapState("studio", ["articles", "projects", "ready"])
  },
  mounted() {
    if (this.ready == 2) {
      this.start();
    }
    this.loading = false;

    window.addEventListener("resize", () => {
      this.windowWidth = window.innerWidth;
    });
  },
  async created() {
    if (this.articles.length == 0) {
      this.$store.dispatch({ type: "studio/getAllArticles" });
    }
    if (this.projects.length == 0) {
      this.$store.dispatch({ type: "studio/getAllProjects" });
    }
    helpers.calcColumn();
  },

  methods: {
    start() {
      helpers.shrink();
      this.enter = false;
    },
    checkFiltertion() {
      const type = this.$route.params.type;
      const category = this.$route.params.category;
      if (type && category) {
        if (type === "article") {
          this.$refs.articles.activefilters = true;
          document.querySelector(`a[data-article-id="${category}"]`).click()
          this.$refs.projects.expand();
        }else{
                  this.$refs.projects.activefilters = true;
          document.querySelector(`a[data-project-id="${category}"]`).click()
          this.$refs.projects.expand();
        }
      }
    },
    activeColumn(col) {
      $(".column").addClass("none");
      $(`[data-column]`).removeClass("active");
      $(".column").removeClass("none");
      $(`[data-column="${col}"]`).addClass("active");
    }
  },
  watch: {
    // "$route.params.type": function(id) {
    //   console.log(v);
    // },
    windowWidth() {
      helpers.calcColumn();
    },
    ready(v) {
      if (v == 2) {
        setTimeout(() => {
          this.start();
        }, 2000);
      }
    }
  }
  // beforeRouteLeave(to, from, next) {
  //   this.$store.dispatch({ type: "calcColumns" });

  //   this.$store.dispatch("shrink");

  //   console.log("beforeRouteLeave: HOME");
  //   setTimeout(() => next(), 1000);
  // }
};
</script>

<style scoped>
.vdr.active:before {
  outline: 0;
}
.columns-footer .columns-footer__menu {
  display: -webkit-box;
  display: flex;
  padding: 16px;
  border-bottom: 1px solid #000;
}

.columns-footer {
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  border-top: 1.4px solid var(--main-color);
  box-shadow: 2px 4px 8px 0px rgb(161 161 161 / 37%),
    -2px -4px 8px 0px rgb(193 193 193 / 37%);
  z-index: 25;
  -webkit-transition: opacity 0.6s cubic-bezier(0.55, 0, 0.1, 1);
  transition: opacity 0.6s cubic-bezier(0.55, 0, 0.1, 1);
}
.columns-footer .columns-footer__menu .columns-footer__menu-item {
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-flex: 0;
  flex: 0 0 33.33%;
}
.columns-footer .columns-footer__menu .columns-footer__menu-item .button-pill {
  border: 1px solid transparent;
  -webkit-transition: border-color 0.6s cubic-bezier(0.55, 0, 0.1, 1);
  transition: border-color 0.6s cubic-bezier(0.55, 0, 0.1, 1);
}
.columns-footer
  .columns-footer__menu
  .columns-footer__menu-item
  .button-pill.active {
  border: 1px solid #000;
  background: var(--main-color);
  color: #fff;
}
.columns-footer .columns-footer__buttons {
  display: -webkit-box;
  display: flex;
  padding: 16px;
}
@media (max-width: 900px) {
  .columns-footer {
    display: block;
  }
}
</style>
