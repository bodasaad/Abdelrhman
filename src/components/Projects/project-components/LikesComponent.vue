<template>
  <div style="display:flex">
    <a @click="like(postId)">
      <span class="post_likes-icon">
        <i class="fas fa-heart"></i>
      </span>
    </a>
    <p id="showLikes" @click="getLikes(this)">{{ likesLength }}</p>
    <div id="allLikes" ref="allLikess">
      <img id="loading" v-if="loading" class="loading" src="@/assets/loading2.gif">
      <p id="closeLikes" @click="closeLikes()">
        <i class="fas fa-sort-up"></i>
      </p>
      <p
        v-if="message"
        style="font-weight:800; font-size:30px; color:#999; text-align:center;"
      >{{message}}</p>
      <div v-if="!loading">
        <div id="single-like" v-for="like in likes" :key="like.userId">
          <img :src="'http://localhost:3000/'+ like.userPicture" alt srcset>
          <h4>{{like.username}}</h4>
          <p v-if="like.userId === authUserId" class="liked">Unlike</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      likes: [],
      loading: true,
      message: null
    };
  },
  computed: { ...mapState(["jwt", "authUserId"]) },
  props: ["postId", "likesLength"],
  methods: {
    closeLikes() {
      const likesDiv = this.$refs.allLikess;
      $(likesDiv).css({
        display: "none"
      });
    },
    async like(postId) {
      this.postId = postId;
      const res = await this.$store.dispatch("addlike", postId);
      if (res === 200) {
        this.likesLength += 1;
        console.log(res);
      }
    },
    async getLikes() {
      
      this.isLoading = true;
      const likesDiv = this.$refs.allLikess;
      $(likesDiv).css({
        display: "block"
      });
      const AllLikes = await this.$store.dispatch("getLikes", this.postId);
      this.likes = AllLikes.likes;

      this.loading = false;
    }
  }
};
</script>


<style>
#allLikes {
  background-color: #fff;
  padding: var(--scnd-padding);
  max-width: 100%;
  display: none;
  box-shadow: var(--shadow);
  border-radius: var(--radius);
  position: absolute;
  min-width: 300px;
  top: -140px;
}
#closeLikes {
  position: absolute;
  cursor: pointer;
  right: 5px;
}
#single-like {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
#single-like img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.liked {
  color: brown;
}
</style>
