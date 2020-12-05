<template>
  <main id="dashboard">
    <section class="overall-info flex f-space-around p-medium m-4 border-r-l">
      <div class=" gradient-green w-25 p-large c-w border-r-l shadow-l f-center">
        <p>Users</p>
        <b>2</b>
      </div>
      <div class=" gradient-yellow w-25 p-large c-w border-r-l shadow-l f-center">
        <p>Projects</p>
        <b>{{allprojects.length}}</b>
      </div>
      <div class=" gradient-blue w-25 p-large c-w border-r-l shadow-l f-center">
        <p>Articles</p>
        <b>{{allarticles.length}}</b>

      </div>
    </section>
    <aside class="grid g-two m-t-3 p-large">
      <div class="over-all-review p-relative p-3 border-r-l">
        <div class="p-3 flex">
          <h3>Over All Reviews:</h3>
        </div>
        <!-- <img src="/images/loading(3).svg" alt="" class="loading block"> -->
        <div class="grid p-large">
          <router-link :to="{name:'allprojects'}">All Project</router-link>
          <router-link :to="{name:'allarticles'}">All Article</router-link>

          <router-link :to="{name:'newproject'}">New Project</router-link>
          <router-link :to="{name:'newarticle'}">New Article</router-link>
        </div>
      </div>
    </aside>
  </main>
</template>

<script>
import {  mapState } from "vuex";

export default {
  name: "Dashboard",
  data() {
    return {
      loading: true
    };
  },
  computed: {
    ...mapState("admin", ["allprojects", 'allarticles'])
  },
  created() {
    if (this.allprojects.length == 0) {
      this.$store.dispatch({ type: "admin/getProjects" });
    }
    if (this.allarticles.length == 0) {
      this.$store.dispatch({ type: "admin/getArticles" });
    }
  },
  methods: {}
};
</script>

<style>
</style>