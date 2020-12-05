<template>
  <div>
    <FormPopup :startAuth="startAuth" v-on:close="closeAuthForm"></FormPopup>
    <div id="single-post" :class="{'loader-effect':loading}">
      <!-- <div class="pyro">
        <div class="before"></div>
        <div class="after"></div>
      </div>-->
      <router-link :to="{name:'home'}" class="button-pill button-pill--icon m-medium">
        <svg
          data-v-4fdd230d
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="icon-cross"
        >
          <path
            data-v-4fdd230d
            d="M0.146484 9.14722L9.14722 0.146484L9.85433 0.853591L0.853591 9.85433L0.146484 9.14722Z"
            fill-rule="evenodd"
            clip-rule="evenodd"
            fill="black"
          />
          <path
            data-v-4fdd230d
            d="M0.853637 0.14712L9.85361 9.14706L9.1465 9.85417L0.146531 0.854228L0.853637 0.14712Z"
            fill-rule="evenodd"
            clip-rule="evenodd"
            fill="black"
          />
        </svg>
      </router-link>
      <div v-if="!loading">
        <div class="items__item">
          <div class="items__item-title">
            <span class>{{article.title}}</span>
          </div>
          <div class="meta__tags">
            <router-link
              :to="{name:'home',  params:{ category:article.category, type:'article' }}"
              class="button-pill"
            >{{article.category}}</router-link>
          </div>
          <div class="meta__share">
            <a
              class="button-extend facebook"
              target="_blank"
              :href="'https://www.facebook.com/sharer.php?u=http://192.168.1.4:3000/articles/' + article._id"
            >
              <div class="button-extend__text-wrapper">
                <div class="button-extend__text">Share</div>
              </div>
              <div class="button-extend__icon">
                <svg
                  fill="none"
                  height="12"
                  viewBox="0 0 7 12"
                  width="7"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m4.65925 11.9995v-5.13897h1.72493l.25807-2.00289h-1.983v-1.2789c0-.57978.16111-.97509.99249-.97509l1.06062-.0005v-1.791057c-.18348-.024364-.81299-.079061-1.54543-.079061-1.52951 0-2.5762.933318-2.5762 2.647308v1.4773h-1.729402v2.00289h1.729402v5.13947h2.06852z"
                    fill="#000"
                  />
                </svg>
              </div>
            </a>
            <br />
            <a
              class="button-extend twitter"
              target="_blank"
              href="https://twitter.com/intent/tweet?url=https://www.carr.net.au/idea/maryanne-moodie/&amp;text=Q&amp;#038;A with Maryanne Moodie"
            >
              <div class="button-extend__text-wrapper">
                <div class="button-extend__text">Tweet</div>
              </div>
              <div class="button-extend__icon">
                <svg
                  fill="none"
                  height="10"
                  viewBox="0 0 12 10"
                  width="12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m10.318 2.69436-.2187.15819.0122.26965c.0042.09188.0063.18427.0063.27716 0 2.85055-2.16732 6.10058-6.10058 6.10058-.54827 0-1.07903-.07268-1.58387-.20883.65166-.18547 1.25108-.49547 1.7706-.90256l1.10745-.86781-1.40672-.02567c-.52254-.00954-.99175-.23928-1.31808-.6006.10881-.01638.21563-.03896.3201-.06732l-.03281-.97281c-.59-.11815-1.07686-.52263-1.31032-1.06186.12627.02159.25537.03473.38665.03879l1.74476.05394-1.45161-.96949c-.489-.32659-.8098-.88354-.8098-1.51499 0-.07248.00425-.14395.01251-.21418 1.19445 1.14847 2.79098 1.88262 4.55826 1.97134l.66366.03332-.15181-.64692c-.03077-.1311-.04693-.26957-.04693-.41449 0-1.00465.81496-1.81974 1.82019-1.81974.52337 0 .99604.22091 1.32881.57537l.1895.20184.27164-.05349c.0524-.01031.1044-.02141.1562-.03329l.2056.60121c-.0405.03164-.0816.06254-.1232.09266z"
                    fill="#000"
                    stroke="#000"
                  />
                </svg>
              </div>
            </a>
            <br />
            <a
              class="button-extend pinterest"
              target="_blank"
              href="http://pinterest.com/pin/create/link/?url=https://www.carr.net.au/idea/maryanne-moodie/"
            >
              <div class="button-extend__text-wrapper">
                <div class="button-extend__text">Pin</div>
              </div>
              <div class="button-extend__icon">
                <svg
                  fill="none"
                  height="12"
                  viewBox="0 0 10 12"
                  width="10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m2.1736 9.56524c-.15723.64846-.09537 1.56276-.02706 2.15686.02934.2552.40782.378.53486.1793.31899-.4989.7965-1.3168.97307-1.96895.09537-.35113.48782-1.78533.48782-1.78533.25518.46673 1.00141.86237 1.79469.86237 2.36177 0 4.06302-2.0833 4.06302-4.67166 0-2.48141-2.11045-4.33783-4.82665-4.33783-3.37866 0-5.17335 2.17541-5.17335 4.54493 0 1.10161.610904 2.47337 1.58912 2.90982.14822.06614.22748.03647.26163-.10077.02578-.10447.15789-.61448.21717-.85186.01933-.07542.00967-.14095-.05413-.21513-.32349-.37648-.58255-1.06885-.58255-1.71424 0-1.65675 1.30752-3.25972 3.53525-3.25972 1.92357 0 3.2704 1.2574 3.2704 3.05571 0 2.03199-1.06909 3.43961-2.46102 3.43961-.76878 0-1.3436-.61015-1.1593-1.35754.22039-.89267.64828-1.85643.64828-2.50058 0-.57677-.3222-1.05772-.99046-1.05772-.78554 0-1.41642.78015-1.41642 1.82427 0 .66518.23392 1.11522.23392 1.11522s-.77587 3.1472-.91829 3.73324z"
                    fill="#000"
                  />
                </svg>
              </div>
            </a>
            <br />
            <a
              class="button-extend linkedin"
              target="_blank"
              href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https://www.carr.net.au/idea/maryanne-moodie/&amp;title=http://Q&amp;A%20with%20Maryanne%20Moodie&amp;summary=http://We%20have%20been%20working%20with%20weave%20artist%20Maryanne%20Moodie%20for%20a%20special%20commission%20which%20will%20be%20a%20centrepiece%20in%20an%20upcoming%20hotel%20project.%20We%20chat%20with%20Maryanne%20about%20her%20work%20as%20the%20piece%20comes%20to%20life."
            >
              <div class="button-extend__text-wrapper">
                <div class="button-extend__text">Share</div>
              </div>
              <div class="button-extend__icon">
                <svg
                  fill="none"
                  height="11"
                  viewBox="0 0 11 11"
                  width="11"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m3.13518 10.9952h-2.10291v-6.7529h2.09897v6.7529zm-1.04949-7.6766c-.67214 0-1.218502-.54636-1.218502-1.21851 0-.67214.542432-1.218498 1.218502-1.218498.67214 0 1.21457.546358 1.21457 1.218498 0 .67215-.54243 1.21851-1.21457 1.21851zm8.91081 7.6766h-2.09899v-3.28213c0-.7822-.01179-1.79238-1.08879-1.79238-1.09272 0-1.25781.85295-1.25781 1.73342v3.34109h-2.09503v-6.7529h2.01249v.92371h.02751c.27908-.53064.96302-1.0888 1.98499-1.0888 2.12653 0 2.51953 1.39932 2.51953 3.21528v3.70271z"
                    fill="#000"
                  />
                </svg>
              </div>
            </a>
          </div>
          <div class="items__item-date">Posted At: {{article.date}}</div>

          <div class="items__item-image">
            <img :src="this.url +'/'+  article.image" alt />
          </div>
          <div id="reacts">
            <ul>
              <li @click="react(article._id ,'highfive', $event)">
                <div class="before"></div>
                <div class="after"></div>
                <img src="@/assets/icons/high-five.png" alt />
                <span>{{article.reactions.highfive.counter}}</span>
              </li>
              <li @click="react(article._id ,'like', $event)">
                <div class="before"></div>
                <div class="after"></div>
                <img src="@/assets/icons/thumbs-up.png" alt />
                <span>{{article.reactions.like.counter}}</span>
              </li>
              <li @click="react(article._id ,'dislike', $event)">
                <div class="before"></div>
                <div class="after"></div>
                <img src="@/assets/icons/thumbs-down.png" alt />
                <span>{{article.reactions.dislike.counter}}</span>
              </li>
            </ul>
          </div>
          <div class="ql-snow">
            <div class="items__item-content ql-editor" v-html="article.content"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="column articles">
      <router-link :to="{name:'home'}">
        <div class="items__title column-head">
          <span>Articles</span>
          <span>
            <i class="fas fa-times"></i>
          </span>
        </div>
      </router-link>
      <Article
        v-for="article in articles"
        :key="article._id"
        :article="article"
        :class="{'loader-effect':loading}"
      ></Article>
      <h3 v-if="articles.length == 0">No articles yet..</h3>
    </div>
  </div>
</template>

<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

import Article from "@/components/Articles/article-components/ArticleComponent.vue";
import FormPopup from "@/components/general/FormPopup.vue";
let $ = require("jquery");

import { mapGetters, mapState } from "vuex";

export default {
  name: "Profile",
  data() {
    return {
      isFollowed: false,
      loading: true,
      article: null,
      startAuth: false
    };
  },
  components: {
    Article: Article,
    FormPopup: FormPopup
  },
  computed: {
    ...mapState(["url"]),
    ...mapState("studio", ["articles", "isAuth"]),
    ...mapGetters("studio", ["articleById"])
  },
  created() {
    this.getArticle(this.$route.params.id);
  },
  methods: {
    async getArticle(id) {
      if (this.articles.length == 0) {
        await this.$store.dispatch("studio/getAllArticles");
      }
      this.article = this.articleById(id);
      this.article && (this.loading = false);
      this.newview(id);
    },
    async newview(id) {
      await this.$store.dispatch("studio/newview", { id: id, item: "article" });
    },
    async react(id, reaction, e) {
      if (this.isAuth) {
        const res = await this.$store.dispatch("studio/react", {
          id: id,
          reaction: reaction
        });

        if (res.code !== 401) {
          if ($(e.target).is("li")) {
            $(e.target).addClass("active");
          } else {
            $(e.target)
              .parents("li")
              .addClass("active");
          }

          return setTimeout(() => {
            $("li.active").removeClass("active");
          }, 1000);
        } else {
          this.startAuth = true;
        }
      } else {
        this.startAuth = true;
      }
    },
    closeAuthForm() {
      this.startAuth = false;
    }
  },
  watch: {
    "$route.params.id": function(id) {
      this.getArticle(id);
    },
    isAuth(val) {
      if (val) {
        return;
      }
    }
  }
};
</script>

<style scoped>
.items__item-title {
  font-size: 50px;
  padding: 160px 100px 106px 16px;
}
.items__item-date {
  font-size: 18px;
}
.items__item-content {
  padding: 160px 16px 106px 100px;
}
.articles {
  transition: filter 0.4s cubic-bezier(0.55, 0, 0.1, 1);
  left: 66%;
  filter: blur(5px);
}
.articles:hover {
  filter: blur(0);
}
#single-post {
  position: absolute;
  top: 0;
  right: 33.33%;
  bottom: 0;
  left: 0;
  opacity: 1;

  min-width: 60%;
  overflow-y: auto;
  overflow-x: hidden;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  border-right: 1px solid #000;
  z-index: 10;
  -webkit-transition: opacity 0.6s cubic-bezier(0.55, 0, 0.1, 1);
  transition: opacity 0.6s cubic-bezier(0.55, 0, 0.1, 1);
}
#single-post .items__item {
  cursor: unset;
}
#reacts {
  position: sticky;
  left: 2%;
  top: 150px;
  z-index: 3;
}

#reacts li {
  width: 50px;
  text-align: center;
  margin-bottom: var(--s-margin);
  padding: var(--s-padding);
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
#reacts li img {
  width: 100%;
  cursor: pointer;
}
#reacts li:hover {
  background-color: #f9f9f9;
}
#reacts li a {
  color: #000;
  text-align: center;
}
#reacts li a:hover {
  color: var(--main-color);
}

@keyframes done {
  from {
    outline-offset: 0;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
    outline-color: rgba(255, 0, 0, 0.143);
  }
  to {
    outline-offset: 5px;
    box-shadow: inset 0 0 20px #ff84298f, 0 0 20px #ff84298f;
    outline-color: #ff84298f;
  }
  /* 100% {
    outline-offset: 0;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
  } */
}

#reacts li.active > .before,
#reacts li.active > .after {
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  box-shadow: 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff,
    0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff,
    0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff,
    0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff,
    0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff,
    0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff,
    0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff,
    0 0 #fff, 0 0 #fff, 0 0 #fff;
  /* -moz-animation: 1.8s bang ease-out 1 backwards,
    1.8s gravity ease-in 1 backwards, 5s position linear 1 backwards;
  -webkit-animation: 1.8s bang ease-out 1 backwards,
    1.8s gravity ease-in 1 backwards, 5s position linear 1 backwards;
  -o-animation: 1.8s bang ease-out 1 backwards,
    1.8s gravity ease-in 1 backwards, 5s position linear 1 backwards;
  -ms-animation: 1.8s bang ease-out 1 backwards,
    1.8s gravity ease-in 1 backwards, 5s position linear 1 backwards; */
  animation: 1.8s bang ease-out 1 backwards, 1.8s gravity ease-in 1 backwards,
    5s position linear 1 backwards;
}

#reacts li > .after {
  /* -moz-animation-delay: 1.25s, 1.25s, 1.25s;
  -webkit-animation-delay: 1.25s, 1.25s, 1.25s;
  -o-animation-delay: 1.25s, 1.25s, 1.25s;
  -ms-animation-delay: 1.25s, 1.25s, 1.25s; */
  animation-delay: 1.25s, 1.25s, 1.25s;
  /* -moz-animation-duration: 1.25s, 1.25s, 6.25s;
  -webkit-animation-duration: 1.25s, 1.25s, 6.25s;
  -o-animation-duration: 1.25s, 1.25s, 6.25s;
  -ms-animation-duration: 1.25s, 1.25s, 6.25s; */
  animation-duration: 1.25s, 1.25s, 6.25s;
}

@-webkit-keyframes bang {
  to {
    box-shadow: -136px -34.6666666667px #0dff00, -248px -75.6666666667px #ff5100,
      220px -396.6666666667px #00ffb7, 154px -64.6666666667px #0011ff,
      -151px -231.6666666667px #00ffd5, 81px -52.6666666667px #ff6a00,
      -168px -358.6666666667px #00ff37, 63px -20.6666666667px #fb00ff,
      -178px -403.6666666667px #b3ff00, 127px -344.6666666667px #ff6f00,
      -81px -304.6666666667px #00ddff, -16px -231.6666666667px #00ff1a,
      -118px -90.6666666667px #ff1e00, -217px -38.6666666667px #00ffe6,
      -150px -389.6666666667px #0037ff, -203px -253.6666666667px #44ff00,
      -22px -147.6666666667px #ff0099, -34px -87.6666666667px #00ffd0,
      203px -229.6666666667px #ff0400, -205px -292.6666666667px #00eeff,
      -164px -52.6666666667px #ff6a00, 125px -34.6666666667px #ff0051,
      177px -91.6666666667px #ffc400, 56px -26.6666666667px cyan,
      217px -78.6666666667px #ff00aa, -185px -13.6666666667px #5100ff,
      -208px -198.6666666667px #0077ff, 122px -48.6666666667px #00ff33,
      -61px -262.6666666667px #ffea00, -32px -385.6666666667px #ff00d0,
      -112px 44.3333333333px #ff0080, 84px -121.6666666667px #001eff,
      -78px -402.6666666667px #00a2ff, -199px -231.6666666667px #aeff00,
      112px -181.6666666667px #0099ff, 104px -3.6666666667px #0004ff,
      122px 32.3333333333px #ff0059, -131px -252.6666666667px #00ffee,
      126px -302.6666666667px #ccff00, 115px -204.6666666667px #59ff00,
      50px -102.6666666667px #4000ff, 44px 53.3333333333px #0051ff,
      -242px -349.6666666667px #8800ff, -114px -260.6666666667px #04ff00,
      34px -33.6666666667px #9500ff, 128px -354.6666666667px #ff1100,
      -135px -129.6666666667px #00ff5e, 84px -289.6666666667px #ff00bf,
      -171px -5.6666666667px #0900ff, -180px -387.6666666667px #99ff00,
      5px -7.6666666667px blue;
  }
}
@-moz-keyframes bang {
  to {
    box-shadow: -136px -34.6666666667px #0dff00, -248px -75.6666666667px #ff5100,
      220px -396.6666666667px #00ffb7, 154px -64.6666666667px #0011ff,
      -151px -231.6666666667px #00ffd5, 81px -52.6666666667px #ff6a00,
      -168px -358.6666666667px #00ff37, 63px -20.6666666667px #fb00ff,
      -178px -403.6666666667px #b3ff00, 127px -344.6666666667px #ff6f00,
      -81px -304.6666666667px #00ddff, -16px -231.6666666667px #00ff1a,
      -118px -90.6666666667px #ff1e00, -217px -38.6666666667px #00ffe6,
      -150px -389.6666666667px #0037ff, -203px -253.6666666667px #44ff00,
      -22px -147.6666666667px #ff0099, -34px -87.6666666667px #00ffd0,
      203px -229.6666666667px #ff0400, -205px -292.6666666667px #00eeff,
      -164px -52.6666666667px #ff6a00, 125px -34.6666666667px #ff0051,
      177px -91.6666666667px #ffc400, 56px -26.6666666667px cyan,
      217px -78.6666666667px #ff00aa, -185px -13.6666666667px #5100ff,
      -208px -198.6666666667px #0077ff, 122px -48.6666666667px #00ff33,
      -61px -262.6666666667px #ffea00, -32px -385.6666666667px #ff00d0,
      -112px 44.3333333333px #ff0080, 84px -121.6666666667px #001eff,
      -78px -402.6666666667px #00a2ff, -199px -231.6666666667px #aeff00,
      112px -181.6666666667px #0099ff, 104px -3.6666666667px #0004ff,
      122px 32.3333333333px #ff0059, -131px -252.6666666667px #00ffee,
      126px -302.6666666667px #ccff00, 115px -204.6666666667px #59ff00,
      50px -102.6666666667px #4000ff, 44px 53.3333333333px #0051ff,
      -242px -349.6666666667px #8800ff, -114px -260.6666666667px #04ff00,
      34px -33.6666666667px #9500ff, 128px -354.6666666667px #ff1100,
      -135px -129.6666666667px #00ff5e, 84px -289.6666666667px #ff00bf,
      -171px -5.6666666667px #0900ff, -180px -387.6666666667px #99ff00,
      5px -7.6666666667px blue;
  }
}
@-o-keyframes bang {
  to {
    box-shadow: -136px -34.6666666667px #0dff00, -248px -75.6666666667px #ff5100,
      220px -396.6666666667px #00ffb7, 154px -64.6666666667px #0011ff,
      -151px -231.6666666667px #00ffd5, 81px -52.6666666667px #ff6a00,
      -168px -358.6666666667px #00ff37, 63px -20.6666666667px #fb00ff,
      -178px -403.6666666667px #b3ff00, 127px -344.6666666667px #ff6f00,
      -81px -304.6666666667px #00ddff, -16px -231.6666666667px #00ff1a,
      -118px -90.6666666667px #ff1e00, -217px -38.6666666667px #00ffe6,
      -150px -389.6666666667px #0037ff, -203px -253.6666666667px #44ff00,
      -22px -147.6666666667px #ff0099, -34px -87.6666666667px #00ffd0,
      203px -229.6666666667px #ff0400, -205px -292.6666666667px #00eeff,
      -164px -52.6666666667px #ff6a00, 125px -34.6666666667px #ff0051,
      177px -91.6666666667px #ffc400, 56px -26.6666666667px cyan,
      217px -78.6666666667px #ff00aa, -185px -13.6666666667px #5100ff,
      -208px -198.6666666667px #0077ff, 122px -48.6666666667px #00ff33,
      -61px -262.6666666667px #ffea00, -32px -385.6666666667px #ff00d0,
      -112px 44.3333333333px #ff0080, 84px -121.6666666667px #001eff,
      -78px -402.6666666667px #00a2ff, -199px -231.6666666667px #aeff00,
      112px -181.6666666667px #0099ff, 104px -3.6666666667px #0004ff,
      122px 32.3333333333px #ff0059, -131px -252.6666666667px #00ffee,
      126px -302.6666666667px #ccff00, 115px -204.6666666667px #59ff00,
      50px -102.6666666667px #4000ff, 44px 53.3333333333px #0051ff,
      -242px -349.6666666667px #8800ff, -114px -260.6666666667px #04ff00,
      34px -33.6666666667px #9500ff, 128px -354.6666666667px #ff1100,
      -135px -129.6666666667px #00ff5e, 84px -289.6666666667px #ff00bf,
      -171px -5.6666666667px #0900ff, -180px -387.6666666667px #99ff00,
      5px -7.6666666667px blue;
  }
}
@-ms-keyframes bang {
  to {
    box-shadow: -136px -34.6666666667px #0dff00, -248px -75.6666666667px #ff5100,
      220px -396.6666666667px #00ffb7, 154px -64.6666666667px #0011ff,
      -151px -231.6666666667px #00ffd5, 81px -52.6666666667px #ff6a00,
      -168px -358.6666666667px #00ff37, 63px -20.6666666667px #fb00ff,
      -178px -403.6666666667px #b3ff00, 127px -344.6666666667px #ff6f00,
      -81px -304.6666666667px #00ddff, -16px -231.6666666667px #00ff1a,
      -118px -90.6666666667px #ff1e00, -217px -38.6666666667px #00ffe6,
      -150px -389.6666666667px #0037ff, -203px -253.6666666667px #44ff00,
      -22px -147.6666666667px #ff0099, -34px -87.6666666667px #00ffd0,
      203px -229.6666666667px #ff0400, -205px -292.6666666667px #00eeff,
      -164px -52.6666666667px #ff6a00, 125px -34.6666666667px #ff0051,
      177px -91.6666666667px #ffc400, 56px -26.6666666667px cyan,
      217px -78.6666666667px #ff00aa, -185px -13.6666666667px #5100ff,
      -208px -198.6666666667px #0077ff, 122px -48.6666666667px #00ff33,
      -61px -262.6666666667px #ffea00, -32px -385.6666666667px #ff00d0,
      -112px 44.3333333333px #ff0080, 84px -121.6666666667px #001eff,
      -78px -402.6666666667px #00a2ff, -199px -231.6666666667px #aeff00,
      112px -181.6666666667px #0099ff, 104px -3.6666666667px #0004ff,
      122px 32.3333333333px #ff0059, -131px -252.6666666667px #00ffee,
      126px -302.6666666667px #ccff00, 115px -204.6666666667px #59ff00,
      50px -102.6666666667px #4000ff, 44px 53.3333333333px #0051ff,
      -242px -349.6666666667px #8800ff, -114px -260.6666666667px #04ff00,
      34px -33.6666666667px #9500ff, 128px -354.6666666667px #ff1100,
      -135px -129.6666666667px #00ff5e, 84px -289.6666666667px #ff00bf,
      -171px -5.6666666667px #0900ff, -180px -387.6666666667px #99ff00,
      5px -7.6666666667px blue;
  }
}
@keyframes bang {
  to {
    box-shadow: -136px -34.6666666667px #0dff00, -248px -75.6666666667px #ff5100,
      220px -396.6666666667px #00ffb7, 154px -64.6666666667px #0011ff,
      -151px -231.6666666667px #00ffd5, 81px -52.6666666667px #ff6a00,
      -168px -358.6666666667px #00ff37, 63px -20.6666666667px #fb00ff,
      -178px -403.6666666667px #b3ff00, 127px -344.6666666667px #ff6f00,
      -81px -304.6666666667px #00ddff, -16px -231.6666666667px #00ff1a,
      -118px -90.6666666667px #ff1e00, -217px -38.6666666667px #00ffe6,
      -150px -389.6666666667px #0037ff, -203px -253.6666666667px #44ff00,
      -22px -147.6666666667px #ff0099, -34px -87.6666666667px #00ffd0,
      203px -229.6666666667px #ff0400, -205px -292.6666666667px #00eeff,
      -164px -52.6666666667px #ff6a00, 125px -34.6666666667px #ff0051,
      177px -91.6666666667px #ffc400, 56px -26.6666666667px cyan,
      217px -78.6666666667px #ff00aa, -185px -13.6666666667px #5100ff,
      -208px -198.6666666667px #0077ff, 122px -48.6666666667px #00ff33,
      -61px -262.6666666667px #ffea00, -32px -385.6666666667px #ff00d0,
      -112px 44.3333333333px #ff0080, 84px -121.6666666667px #001eff,
      -78px -402.6666666667px #00a2ff, -199px -231.6666666667px #aeff00,
      112px -181.6666666667px #0099ff, 104px -3.6666666667px #0004ff,
      122px 32.3333333333px #ff0059, -131px -252.6666666667px #00ffee,
      126px -302.6666666667px #ccff00, 115px -204.6666666667px #59ff00,
      50px -102.6666666667px #4000ff, 44px 53.3333333333px #0051ff,
      -242px -349.6666666667px #8800ff, -114px -260.6666666667px #04ff00,
      34px -33.6666666667px #9500ff, 128px -354.6666666667px #ff1100,
      -135px -129.6666666667px #00ff5e, 84px -289.6666666667px #ff00bf,
      -171px -5.6666666667px #0900ff, -180px -387.6666666667px #99ff00,
      5px -7.6666666667px blue;
  }
}
@-webkit-keyframes gravity {
  to {
    transform: translateY(200px);
    -moz-transform: translateY(200px);
    -webkit-transform: translateY(200px);
    -o-transform: translateY(200px);
    -ms-transform: translateY(200px);
    opacity: 0;
  }
}
@-moz-keyframes gravity {
  to {
    transform: translateY(200px);
    -moz-transform: translateY(200px);
    -webkit-transform: translateY(200px);
    -o-transform: translateY(200px);
    -ms-transform: translateY(200px);
    opacity: 0;
  }
}
@-o-keyframes gravity {
  to {
    transform: translateY(200px);
    -moz-transform: translateY(200px);
    -webkit-transform: translateY(200px);
    -o-transform: translateY(200px);
    -ms-transform: translateY(200px);
    opacity: 0;
  }
}
@-ms-keyframes gravity {
  to {
    transform: translateY(200px);
    -moz-transform: translateY(200px);
    -webkit-transform: translateY(200px);
    -o-transform: translateY(200px);
    -ms-transform: translateY(200px);
    opacity: 0;
  }
}
@keyframes gravity {
  to {
    transform: translateY(200px);
    -moz-transform: translateY(200px);
    -webkit-transform: translateY(200px);
    -o-transform: translateY(200px);
    -ms-transform: translateY(200px);
    opacity: 0;
  }
}
@-webkit-keyframes position {
  0%,
  19.9% {
    margin-top: 10%;
    margin-left: 40%;
  }
  20%,
  39.9% {
    margin-top: 40%;
    margin-left: 30%;
  }
  40%,
  59.9% {
    margin-top: 20%;
    margin-left: 70%;
  }
  60%,
  79.9% {
    margin-top: 30%;
    margin-left: 20%;
  }
  80%,
  99.9% {
    margin-top: 30%;
    margin-left: 80%;
  }
}
@-moz-keyframes position {
  0%,
  19.9% {
    margin-top: 10%;
    margin-left: 40%;
  }
  20%,
  39.9% {
    margin-top: 40%;
    margin-left: 30%;
  }
  40%,
  59.9% {
    margin-top: 20%;
    margin-left: 70%;
  }
  60%,
  79.9% {
    margin-top: 30%;
    margin-left: 20%;
  }
  80%,
  99.9% {
    margin-top: 30%;
    margin-left: 80%;
  }
}
@-o-keyframes position {
  0%,
  19.9% {
    margin-top: 10%;
    margin-left: 40%;
  }
  20%,
  39.9% {
    margin-top: 40%;
    margin-left: 30%;
  }
  40%,
  59.9% {
    margin-top: 20%;
    margin-left: 70%;
  }
  60%,
  79.9% {
    margin-top: 30%;
    margin-left: 20%;
  }
  80%,
  99.9% {
    margin-top: 30%;
    margin-left: 80%;
  }
}
@-ms-keyframes position {
  0%,
  19.9% {
    margin-top: 10%;
    margin-left: 40%;
  }
  20%,
  39.9% {
    margin-top: 40%;
    margin-left: 30%;
  }
  40%,
  59.9% {
    margin-top: 20%;
    margin-left: 70%;
  }
  60%,
  79.9% {
    margin-top: 30%;
    margin-left: 20%;
  }
  80%,
  99.9% {
    margin-top: 30%;
    margin-left: 80%;
  }
}
@keyframes position {
  0%,
  19.9% {
    margin-top: 10%;
    margin-left: 40%;
  }
  20%,
  39.9% {
    margin-top: 40%;
    margin-left: 30%;
  }
  40%,
  59.9% {
    margin-top: 20%;
    margin-left: 70%;
  }
  60%,
  79.9% {
    margin-top: 30%;
    margin-left: 20%;
  }
  80%,
  99.9% {
    margin-top: 30%;
    margin-left: 80%;
  }
}

@media (min-width: 320px) and (max-width: 557px) {
  #profile {
    grid-template-columns: 1fr;
  }
  .items__item-content {
    padding: var(--s-padding) !important;
  }
}
@media (max-width: 900px) {
  #reacts ul {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    justify-content: space-evenly;
    background: #fff;
    width: 100%;
    padding: var(--s-padding) 0;
    border-top: 1.6px solid var(--main-color);
  }
  .articles {
    display: none;
  }
}
</style>
