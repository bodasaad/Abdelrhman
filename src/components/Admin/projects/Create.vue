<template>
  <form
    style="background-color:transparent;"
    class="parent-card form"
    method="POST"
    enctype="multipart/form-data"
  >
    <div>
      <div class="form_inputs">
        <h2 v-if="!edit">Create Project</h2>
        <h2 v-if="edit">Edit Project</h2>
        <div class="p-medium grid g-two">
          <div class="m-r-3">
            <div class="form-control">
              <label for="title">Title</label>
              <input type="text" name="title" id="title" v-model="title" />
            </div>
            <div class="form-control">
              <label for="subtitle">Sub Title</label>
              <input type="text" name="subtitle" id="subtitle" v-model="subtitle" />
            </div>
            <div class="form-control">
              <label for="client">Client</label>
              <input type="text" name="client" id="client" v-model="client" />
            </div>
            <div class="form-control">
              <label for="demo">Demo</label>
              <input type="text" name="demo" id="demo" v-model="demo" />
            </div>
          </div>
          <div class="m-l-3">
            <div class="form-control">
              <label for="itemImg">image</label>
              <input type="file" name="image" id="itemImg" @change="previewFiles" />
            </div>
            <div class="form-control grid">
              <label for="category">category</label>
              <select name="category" id="category" v-model="category">
                <option
                  v-for="t in categories"
                  :key="t.name"
                  :data-val="t.name"
                  :value="t.name"
                  class="options"
                >{{t.name}}</option>
              </select>
            </div>
            <div class="form-input">
              <label for="tags">Article Tags:</label>
              <input
                class="currentInput input"
                id="tags"
                type="text"
                placeholder="Type Tags Then Press Enter"
                @keyup="getTag($event)"
              />
              <div class="tags flex">
                <li v-for="t in tags" :key="t" :data-val="t" class="options btn btn-info tag-span">
                  {{t}}
                  <i class="fas fa-times" @click="removetag(t)"></i>
                </li>
              </div>
            </div>
          </div>
        </div>
        <div class="form-control">
          <label for="brief">Brief</label>
          <textarea type="text" name="brief" id="brief" v-model="brief" rows="4" cols="50"></textarea>
        </div>
        <div class="bg-darkgray p-3">
          <div class="form-control">
            <label for="contentText">Content</label>
            <textarea
              type="text"
              name="contentText"
              id="contentText"
              v-model="contentText"
              rows="4"
              cols="50"
            ></textarea>
          </div>
          <div class="form-control">
            <label for="contentImg">image</label>
            <input type="file" name="image" id="contentImg" />
          </div>
          <button @click.prevent="uploadImage()" class="btn btn-info">Add</button>
          <div class="grid g-two">
            <div class="parent-card p-relative" v-for="c in content" :key="c.name">
              <i class="fas fa-times close" @click="removeContent(content.length + 1)"></i>
              <div class="p-relative">
                <i class="fas fa-times close font-s" @click="deleteImage(c.image)"></i>
                <img :src="'https://ams-server.xyz' + c.image" alt class="w-50 block m-auto" />
              </div>
              <p class>{{c.text}}</p>
            </div>
          </div>
        </div>
        <button
          id="addNewitem"
          @click.prevent="createProject()"
          class="btn btn-success"
          type="button"
          v-if="!edit"
        >Save</button>
        <button
          id="addNewitem"
          @click.prevent="createProject()"
          class="btn btn-success"
          type="button"
          v-if="edit"
        >Update</button>
      </div>
    </div>
    <!--Image Here-->
  </form>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "createProject",
  data() {
    return {
      edit: false,
      loaded: false,
      title: null,
      subtitle: null,
      client: null,
      demo: null,
      image: "",
      tags: [],
      brief: "",
      category: "",
      content: [],
      contentimgs: [],
      contentText: null,
      contentName: null
    };
  },
  computed: {
    ...mapState(["categories", "url"]),
    ...mapState("admin", ["allprojects"]),
    ...mapGetters("admin", ["projectById"])
  },
  async created() {
    const id = this.$route.params.id;
    if (id) {
      this.edit = true;
      if (this.allprojects.length == 0) {
        await this.$store.dispatch("admin/getProjects");
      }
      const project = this.projectById(id);

      this.title = project.title;
      this.subtitle = project.subtitle;
      this.client = project.client;
      this.tags = project.tags;
      this.content = project.content;
      this.brief = project.brief;
      this.demo = project.demo;
      this.category = project.category;
      project && (this.loading = false);
    }
  },
  methods: {
    getTag(e) {
      var keyBoardKey = e.keyCode || e.which;
      if (keyBoardKey === 13) {
        var thisValue = e.target.value.toLowerCase();
        if (thisValue != "") {
          if (!this.tags.includes(thisValue)) this.tags.push(thisValue);
          e.target.value = "";
        }
      }
    },
    removetag(tag) {
      this.tags = this.tags.filter(t => t != tag);
    },
    async addContent(img) {
      if (this.contentText != "") {
        this.content.push({
          no: this.content.length + 1,
          text: this.contentText,
          name: this.contentName,
          image: img || ""
        });
      }
    },
    async removeContent(id) {
      const item = this.content.find(c => c._id.toString() == id.toString());

      this.deleteImage(item.image);
      this.content = this.content.filter(
        c => c._id.toString() !== id.toString()
      );
    },
    previewFiles(e) {
      var file = e.target.files[0];
      //   var output = $(".images-perview");
      var validImageTypes = ["image/jpg", "image/jpeg", "image/png"];
      var fileType = file["type"];
      if (validImageTypes.includes(fileType)) this.image = file;
    },
    async uploadImage() {
      const elm = document.getElementById("contentImg");
      if (elm.files.length == 0) return this.addContent("");

      var file = elm.files[0];
      var validImageTypes = ["image/jpg", "image/jpeg", "image/png"];
      var fileType = file["type"];
      if (validImageTypes.includes(fileType)) {
        var form = new FormData();
        form.append("image", file);

        //upload image to server
        const res = await fetch("https://ams-server.xyz/admin/media", {
          method: "Post",
          body: form
        });
        const json = await res.json();
        this.addContent(json);
      }
    },
    async deleteImage(name) {
       await fetch("https://ams-server.xyz/admin/media", {
        method: "Put",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name: name })
      });
      // const json = await res.json();
    },
    createProject() {
      const data = new FormData();
      data.append("title", this.title);
      data.append("subtitle", this.subtitle);
      data.append("client", this.client);
      data.append("brief", this.brief);
      data.append("demo", this.demo);
      data.append("image", this.image);
      data.append("category", this.category);
      data.append("tags", JSON.stringify(this.tags));
      data.append("content", JSON.stringify(this.content));
      if (this.edit) {
        const id = this.$route.params.id;
        this.$store.dispatch({ type: "admin/editProject", data, id });
      } else {
        this.$store.dispatch({ type: "admin/addProject", data });
      }
    }
  },
  watch: {}
};
</script>

<style scoped>
body {
  background-color: #f9f9f9 !important;
}
</style>