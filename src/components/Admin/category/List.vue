<template>
  <div>
    <h1>All Categories</h1>
    <div class="content" :class="{'loader-effect':loading}">
      <div v-if="!loading">
        <div
          v-for="a of allcategories"
          :key="a._id"
          class="content-item flex f-space-between p-relative h-25"
        >
          <h3>{{a.name}}</h3>
          <div class="flex">
            <router-link :to="{name:'newcategory',params: { id: a._id }}">
              <i class="fas fa-edit c-b m-r-3"></i>
            </router-link>
            <i class="fas fa-trash c-r m-l-3" @click="deleteCategory(a._id)"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {  mapState } from "vuex";

export default {
  name: "List",
  data() {
    return {
      loading: true
    };
  },
  computed: {
    ...mapState("admin", ["allcategories"])
  },
  created() {
    if (this.allcategories.length == 0) {
      this.$store.dispatch({ type: "admin/getCategories" });
    } else {
      this.loading = false;
    }
  },
  methods: {
    deleteCategory(id) {
      this.$store.dispatch({ type: "admin/deleteCategory", data: { id: id } });
    }
  },
  watch: {
    allcategories(val) {
      if (val) {
        this.loading = false;
      }
    }
  }
};
</script>

<style>
</style>