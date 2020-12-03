<template>
  <div>
    <div class="content" :class="{'loader-effect':loading}">
      <h1>All Articles</h1>
      <div v-if="!loading" class="grid g-four">
        <div v-for="a of allarticles" :key="a._id" class="content-item p-relative">
          <div class="content-item_bar">
            <span>{{a.date}}</span>
            <div class="flex">
              <router-link :to="{name:'newarticle',params: { id: a._id }}">
                <i class="fas fa-edit c-b m-r-3"></i>
              </router-link>
              <i class="fas fa-trash c-r m-l-3" @click="deleteArticle(a._id)"></i>
            </div>
          </div>
          <h4>{{a.title}}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "List",
  data() {
    return {
      loading: true
    };
  },
  computed: {
    ...mapState("admin", ["allarticles"])
  },
  created() {
    if (this.allarticles.length == 0) {
      this.$store.dispatch({ type: "admin/getArticles" });
    } else {
      this.loading = false;
    }
  },
  methods: {
    deleteArticle(id) {
      this.$store.dispatch({ type: "admin/deleteArticle", data: { id: id } });
    }
  },
  watch: {
    allarticles(val) {
      if (val) this.loading = false;
    }
  }
};
</script>

<style>
</style>