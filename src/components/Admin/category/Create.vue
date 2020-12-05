<template>
  <form
    style="background-color:transparent;"
    class="parent-card form"
    method="POST"
    enctype="multipart/form-data"
  >
    <div>
      <div class="form_inputs">
        <h2>Create Category</h2>
        <div class="p-medium">
          <div class="form-control">
            <label for="name">name</label>
            <input type="text" name="name" id="name" v-model="name" />
          </div>
          <div class="form-input">
            <label for="tags">Sub Category:</label>
            <input
              class="currentInput input"
              id="tags"
              type="text"
              placeholder="Type Sub Category Then Press Enter"
              @keyup="getsubcategory($event)"
            />
            <div class="tags flex">
              <li
                v-for="t in subcategories"
                :key="t"
                :data-val="t"
                class="options btn btn-info btn-small tag-span"
              >
                {{t}}
                <i class="fas fa-times" @click="removetag(t)"></i>
              </li>
            </div>
          </div>
        </div>
        <button
          id="addNewitem"
          @click.prevent="createCategory()"
          class="btn btn-success"
          type="button"
        >Save</button>
      </div>
    </div>
    <!--Image Here-->
  </form>
</template>

<script>
import { mapGetters,  mapState } from "vuex";

export default {
  name: "createCategory",
  data() {
    return {
      edit: false,
      name: null,
      subcategories: []
    };
  },
  computed: {
    ...mapState("admin", ["allcategories"]),
    ...mapGetters("admin", ["categoryById"])
  },
  async created() {
    const id = this.$route.params.id;
    if (id) {
      this.edit = true;
      if (this.allcategories.length == 0) {
        await this.$store.dispatch("admin/getCategory");
      }
      const category = this.categoryById(id);
      this.name = category.name;
      this.subcategories = category.subcategories;

      return category && (this.loading = false);
    }
  },
  methods: {
    getsubcategory(e) {
      var keyBoardKey = e.keyCode || e.which;
      if (keyBoardKey === 13) {
        var thisValue = e.target.value.toLowerCase();
        if (thisValue != "") {
          if (!this.subcategories.includes(thisValue)) {
            this.subcategories.push(thisValue);
          }
          e.target.value = "";
        }
      }
    },
    removetag(tag) {
      this.subcategories = this.subcategories.filter(t => t != tag);
    },

    createCategory() {
      const data = new FormData();
      data.append("name", this.name);
      data.append("subCategory", JSON.stringify(this.subcategories));
      if (this.edit) {
        const id = this.$route.params.id;
        this.$store.dispatch({ type: "admin/editCategory", data, id });
      } else {
        this.$store.dispatch({ type: "admin/addCategory", data });
      }
    }
  },
  watch: {}
};
</script>

<style scoped>
.form {
  margin: auto;
  padding: 10px 0;
}

.form input,
.form textarea {
  display: block;
  width: 100%;
  height: 45px;
  margin: auto;
  margin-bottom: 10px;
  text-align: center;
  border-radius: var(--s-radius);
  border: 0;
  background: #fff;
  border: 1.2px solid #eee;
}
</style>