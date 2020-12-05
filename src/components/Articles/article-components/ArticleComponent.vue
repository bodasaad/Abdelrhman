<template>
  <div>
    <router-link :to="{name:'articles', params:{ id:article._id }}">
      <div class="items__item">
        <div class="items__item-image">
          <img :src="this.url +'/'+ article.image" alt />
        </div>
        <div class="items__item-date">{{article.date}}</div>
        <div class="items__item-title">
          <span class>{{article.title}}</span>
        </div>
      </div>
    </router-link>
    <transition name="silde" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import { mapState } from "vuex";
// import CommentsComponent from "@/components/Articles/article-components/CommentsComponent";
// import LikesComponent from "@/components/Articles/article-components/LikesComponent";
export default {
  name: "ArticleComponent",
  data() {
    return {
      userId: "",
      comments: [],
      toggle: false,
      loading: true,
      edited: false,
      likes: [],
      updatedContent: "",
      activeCard: false,
      postId: ""
    };
  },
  computed: {
    ...mapState(["url"])
  },
  props: ["article"],
  created() {},
  components: {
    // CommentsComponent: CommentsComponent,
    // LikesComponent: LikesComponent
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.allposts {
  display: grid;
  justify-content: center;
  grid-gap: 1em;
  height: 91vh;
  transition: 0.6s all ease-in-out;
  margin: var(--main-margin) auto;
  overflow: scroll;
  position: relative;
  width: 88%;
  border-radius: var(--radius);
}
.post {
  width: 96%;
  display: grid;
  grid-template-columns: 1fr;
  margin: var(--scnd-margin) auto;
  grid-gap: 0.6em;
  position: relative;
  padding: var(--scnd-padding);
  border-bottom: 1px solid #eee;
  background: #fff;
  box-shadow: var(--shadow);
  border-radius: var(--radius);
}

.post_title h2 {
  font-size: 16px;
  text-align: left;
  font-weight: 100;
}
.post_title img {
  height: 30px;
  width: 30px;
  float: left;
  border-radius: var(--radius);
  margin-right: var(--scnd-margin);
}
.post_date {
  font-size: 0.7em;
  text-align: right;
  padding-top: 10px;
}
.post_content p {
  color: #000000;
  font-size: 20px;
  text-align: left;
  font-weight: 400;
  background: #f5f5f5;
  padding: var(--scnd-padding);
  line-height: 27px;
  border-radius: var(--radius);
  max-height: 125px;
  overflow: scroll;
  transition: 0.4s ease-in-out all;
}
.post_image img {
  width: 100%;
  border-radius: var(--radius);
}
.post_likeComments {
  position: relative;
}
.post_likes {
  display: flex;
  position: absolute;
  left: 0;
}
.post_likes-icon {
  margin-left: var(--scnd-margin);
}
.post_likes a {
  margin-right: var(--scnd-margin);
  border-radius: var(--radius);
  cursor: pointer;
  transition: 0.2s all ease-in-out;
}
.post_likes a:hover {
  color: rgba(255, 0, 0, 0.762);
}
.post_likes a.active {
  color: rgba(255, 0, 0, 0.762);
}
.post_comment h6 {
  text-align: left;
  color: #888;
}
.post_comment p {
  color: #ccc;
}
.post_addComment {
  display: flex;
  background-color: #f5f5f5;
  padding: 5px;
}

.post_addComment input {
  width: 94%;
  background-color: transparent;
  border: 0;
  color: #333;
  transition: 0.25s all ease-in-out;
  font-size: 12px;
}
.post_addComment input:focus {
  padding: 0 10px;
  font-size: 14px;
}

.post_actions .btn {
  margin-right: 10px;
  font-size: 15px;
  color: #888;
}
.post_actions {
  display: flex;
  justify-content: flex-end;
}
#editBox {
  position: absolute;
  background: #ffffffeb;
  width: 100%;
  height: 100%;
  left: 0;
  z-index: 999999;
}
.post .create-post_pop-up.Unactive {
  display: none;
}
.allposts #loading {
  height: 35px;
  width: 100px;
}
#imgPrv {
  display: none;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.598);
  height: 100%;
  width: 100%;
  z-index: 99999;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  transition: 0.5s all ease-in-out;
}
#imgPrv img {
  height: auto;
  position: relative;
  max-width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (min-width: 320px) and (max-width: 557px) {
  .allposts {
    width: 100%;
    box-shadow: none;
    height: 79vh;
  }
  .post {
    width: 100%;
  }
}
</style>
