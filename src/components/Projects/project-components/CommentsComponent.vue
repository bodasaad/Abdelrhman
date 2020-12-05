<template>
  <div>
    <p class="showComments" @click="showComments(this)">
      Comments
      <span>{{commentsLength}}</span>
      <span class="showCommentsIcon">
        <i class="fas fa-sort-down"></i>
      </span>
    </p>
    <div class="allComments" ref="allCommentss" :class="{'loader-effect':loading}">
      <p class="closeComments" @click="closeComments()">
        <i class="fas fa-sort-up"></i>
      </p>
      <p
        v-if="message"
        style="font-weight:800; font-size:30px; color:#999; text-align:center;"
      >{{message}}</p>
      <div>
        <div v-for="comment in comments" :key="comment._id" class="post_comment">
          <img
            class="userCommntedImg"
            :src="'http://localhost:3000/'+ comment.userPicture"
            alt
            srcset
          />
          <a :href="'/profile/'+ comment.userId">{{comment.username}}</a>
          <p style="color:#222; text-align:left;">{{comment.comment}}</p>
        </div>
        <div v-if="comments.length == 0">
          <p style="color:#222; text-align:center;">Be First Comment...</p>
        </div>
      </div>

      <form @submit.prevent="addComment()" class="post_addComment">
        <!-- <img id="loading" v-if="loading" class="loading" src="@/assets/loading2.gif" /> -->

        <input
          type="text"
          name="comment"
          class="comment"
          v-model="comment"
          placeholder="i'll Appreciate Your Feedback :)"
        />
        <button type="submit" style="z-index:9999; margin-left:5px;" class="addComment-btn btn">
          <i class="fas fa-comments"></i>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
import { error } from "util";
export default {
  data() {
    return {
      comment: "",
      comments: [],
      loading: true,
      message: null
    };
  },
  computed: { ...mapState(["jwt"]), ...mapGetters("feed", ["getcomments"]) },
  props: ["postId", "commentsLength"],
  created() {
    this.loading = true;
  },
  watch: {},
  methods: {
    showComments(e) {
      const commentsDiv = this.$refs.allCommentss;
      commentsDiv.style.display = "block";
      this.comments = this.getcomments(this.postId);
      this.loading = false;

      // this.comments = await this.$store.dispatch({
      //   type: "feed/getcomments",
      //   data: { id: this.postId }
      // });
      // console.log(comments);
    },
    closeComments() {
      const commentsDiv = this.$refs.allCommentss;
      $(commentsDiv).css({
        display: "none"
      });
      this.comments = null;
    },
    async addComment() {
      console.log("as");

      this.loading = true;
      await this.$store.dispatch({
        type: "feed/addcomment",
        data: { id: this.postId, comment: this.comment }
      });
      this.comment = "";
      this.loading = false;

      this.showComments(this.postId);
    }
  }
};
</script>

<style scoped>
.showComments {
  cursor: pointer;
  padding: 0 var(--main-padding);
  border-radius: var(--radius);
  text-align: right;
}
.showCommentsIcon {
  opacity: 0;
  transition: 0.3s;
  position: absolute;
  top: -2px;
  right: 11px;
}
.showComments:hover .showCommentsIcon {
  opacity: 1;
}
.closeComments {
  position: absolute;
  right: 14px;
  top: 5px;
  color: #333;
  z-index: 999;
  cursor: pointer;
}
.allComments {
  background: rgb(255, 255, 255);
  max-height: 400px;
  border-radius: var(--radius);
  overflow: scroll;
  display: none;
  z-index: 2;
  transition: 0.5s all ease-in-out;
  position: relative;
  box-shadow: inset 10px 15px 16px #b6bbb50c;
}
.post_comment {
  border-bottom: 1px solid #f9f9f9;
  padding: var(--scnd-padding);
  z-index: 3;
  display: flex;
  align-items: center;
}
.post_comment a {
  text-decoration: none;
  margin-right: var(--scnd-margin);
  width: 100px;
  line-height: 20px;
  color: blue;
}
.post_comment p {
  background-color: #eee;
  border-radius: var(--radius);
  padding: 0 var(--scnd-padding);
}
.userCommntedImg {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  float: left;
  margin-right: 3px;
}
#loading {
  height: 40px;
  width: 70px;
  margin-top: var(--scnd-margin);
}
</style>
