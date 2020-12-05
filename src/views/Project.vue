<template>
  <div>
    <div :class="{'loader-effect':loading}">
      <div v-if="!loading">
        <div class="close">
          <router-link :to="{name:'home'}" class="button-extend">
            <div class="button-extend__text-wrapper">
              <div class="button-extend__text">Close</div>
            </div>
            <div class="button-extend__icon">
              <svg
                class="icon-cross"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.5563 16.2637L4.94971 5.65714L5.65681 4.95003L16.2634 15.5566L15.5563 16.2637Z"
                  fill="black"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.95005 15.5566L15.5566 4.94995L16.2637 5.65706L5.65716 16.2637L4.95005 15.5566Z"
                  fill="black"
                />
              </svg>
            </div>
          </router-link>
        </div>
        <div class="hero">
          <div
            class="hero__image"
            :style=" {'background-image': 'url('+ url +'/'+ project.image + ')'}"
          ></div>
          <div id="project" class="hero__meta">
            <div class="hero__title">{{project.title}}</div>

            <a class="hero__arrow hide" href="#project">
              <svg
                fill="none"
                height="11"
                viewBox="0 0 12 11"
                width="12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g stroke="#000">
                  <path d="m5.98535 0v10" />
                  <path d="m10.9706 4.98528-4.98525 4.98528-4.98528-4.98528" />
                </g>
              </svg>
            </a>
          </div>
        </div>
        <div class="background background-white">
          <div class="meta line-background" data-background-color="white">
            <h2 class="meta__subtitle">{{project.subtitle}}</h2>

            <div class="meta__share">
              <a
                class="button-extend facebook"
                target="_blank"
                href="https://www.facebook.com/sharer.php?u=https://www.carr.net.au/project/norton-rose-fulbright-melbourne/"
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
                href="https://twitter.com/intent/tweet?url=https://www.carr.net.au/project/norton-rose-fulbright-melbourne/&amp;text=Norton Rose Fulbright Melbourne"
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
                href="http://pinterest.com/pin/create/link/?url=https://www.carr.net.au/project/norton-rose-fulbright-melbourne/"
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
                href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https://www.carr.net.au/project/norton-rose-fulbright-melbourne/&amp;title=http://Norton%20Rose%20Fulbright%20Melbourne&amp;summary=http://The%20new%20workplace%20fitout%20in%20Melbourne%20for%20law%20firm%20Norton%20Rose%20Fulbright%20draws%20reference%20to%20the%20acclaimed%20arts%20and%20culture%20that%20the%20city%20is%20renowned%20for,%20resulting%20in%20a%20flexible,%20modern%20and%20welcoming%20office."
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
            <div class="meta__tags">
              <router-link
                :to="{name:'home',  params:{ category:project.category, type:'project' }}"
                class="button-pill"
              >{{project.category}}</router-link>
            </div>
            <!-- <div class="meta__tags">
              <a
                v-for="tag in project.tags"
                :key="tag"
                href="https://www.carr.net.au/#area-workplace"
                class="button-pill"
              >{{tag}}</a>
            </div>-->
            <div class="meta__attributes">
              <div class="attribute">
                <div class="attribute__title">Client</div>
                <div class="attribute__text">{{project.client}}</div>
              </div>
              <div class="attribute">
                <div class="attribute__title">Location</div>
                <div class="attribute__text">Cairo, Egypt</div>
              </div>
              <div class="attribute">
                <div class="attribute__title">Status</div>
                <div class="attribute__text">Completed 2020</div>
              </div>

              <div class="attribute">
                <div class="attribute__title">Demo</div>
                <div class="attribute__text">
                  <a target="_blank" :href="project.demo">Open Here</a>
                </div>
              </div>
            </div>
            <div class="meta__intro-text">
              <p>{{project.brief}}</p>
            </div>
          </div>
          <div class="blocks line-background" data-background-color="white">
            <div class="block block-text grid g-two" v-for="c in project.content" :key="c._id">
              <div class="block-text__image">
                <img
                  class="blur show"
                  :src="'https://ams-server.xyz' +  c.image"
                  alt
                  data-gallery-image="https://www.carr.net.au/wp-2020/wp-content/uploads/2020/09/carr_nortonroseVIC-248-LR.jpg"
                  data-gallery-caption
                />
                <div class="gallery-icon"></div>
              </div>
              <div class="block-text__text" data-footnotes>
                <p>{{c.text}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Project from "@/components/Projects/project-components/ProjectComponent.vue";

import { mapGetters, mapState } from "vuex";

export default {
  name: "Project",
  data() {
    return {
      isFollowed: false,
      loading: true,
      project: null
    };
  },
  components: {
    // Project: Project
  },
  computed: {
    ...mapState(["url"]),
    ...mapState("studio", ["projects"]),
    ...mapGetters("studio", ["projectById"])
  },
  created() {
    return this.getProject(this.$route.params.id);
  },
  methods: {
    async getProject(id) {
      if (this.projects.length == 0) {
        await this.$store.dispatch("studio/getAllProjects");
      }
      this.project = await this.projectById(id);

      this.project && (this.loading = false);
    }
  },
  watch: {
    "$route.params.id": function(id) {
      if (id) this.getProject(id);
    }
  }
};
</script>

<style scoped>
.close {
  position: fixed;
  top: 0;
  right: 10px;
  padding: 16px;
  z-index: 10;
}
.hero {
  position: relative;
  height: 100vh;
  background-color: #000;
}
.hero .hero__image {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-size: cover;
  background-position: 50%;
  background-attachment: fixed;
  will-change: opacity;
}

.hero__meta {
  display: -webkit-box;
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 1.2px;
  font-weight: 700;
  text-transform: uppercase;
}

.hero__meta .hero__title {
  padding: 14px 16px;
}
.hero .hero__meta .hero__arrow {
  margin-left: auto;
  margin-right: 8px;
  padding: 14px 18px;
  cursor: pointer;
  -webkit-transition: opacity 0.6s cubic-bezier(0.55, 0, 0.1, 1);
  transition: opacity 0.6s cubic-bezier(0.55, 0, 0.1, 1);
}
.hero .hero__meta .hero__arrow svg {
  -webkit-transition: -webkit-transform 0.6s cubic-bezier(0.55, 0, 0.1, 1);
  transition: -webkit-transform 0.6s cubic-bezier(0.55, 0, 0.1, 1);
  transition: transform 0.6s cubic-bezier(0.55, 0, 0.1, 1);
  transition: transform 0.6s cubic-bezier(0.55, 0, 0.1, 1),
    -webkit-transform 0.6s cubic-bezier(0.55, 0, 0.1, 1);
}
.hero .hero__meta .hero__arrow:hover svg {
  -webkit-transform: translateY(4px);
  transform: translateY(4px);
}
.background {
  background-color: transparent;
  -webkit-transition: background-color 1.2s cubic-bezier(0.55, 0, 0.1, 1);
  transition: background-color 1.2s cubic-bezier(0.55, 0, 0.1, 1);
  will-change: background-color;
}
.meta {
  display: -webkit-box;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  background-color: #fff;
  padding-bottom: 225px;
}
.meta .meta__subtitle {
  -webkit-box-flex: 0;
  flex: 0 0 100%;
  min-height: 378px;
  background-color: #fff;
  padding: 112px 100px 106px 16px;
  z-index: 1;

  font-size: 80px;
  line-height: 80px;
}

.meta .meta__share {
  position: absolute;
  top: 124px;
  right: 16px;
  text-align: right;
  z-index: 1;
}
.meta .meta__tags {
  -webkit-box-flex: 0;
  flex: 0 0 33.33%;
  padding: 0 16px;
  font-size: 0;
}
.meta .meta__tags .button-pill {
  margin-right: 10px;
  margin-bottom: 10px;
}
.meta .meta__attributes {
  flex-wrap: wrap;
  -webkit-box-flex: 0;
  flex: 0 0 33.33%;
  padding: 0 16px;
}
.meta .meta__attributes .attribute {
  display: -webkit-box;
  display: flex;
  -webkit-box-flex: 0;
  flex: 0 0 100%;
  margin-bottom: 16px;
}
.meta .meta__attributes .attribute .attribute__title {
  -webkit-box-flex: 0;
  flex: 0 0 47%;
  padding-right: 16px;
  font-weight: bold;
}
.meta .meta__attributes .attribute .attribute__text {
  -webkit-box-flex: 0;
  flex: 0 0 53%;
}
.meta .meta__intro-text {
  -webkit-box-flex: 0;
  flex: 0 0 33.33%;
  padding: 0 16px;

  font-size: 24px;
  line-height: 32px;
}

.blocks .block {
  position: relative;
  padding-bottom: 110px;
  z-index: 1;
}
.blocks .block.block-text {
  /* display: flex; */
  /* flex-wrap: wrap; */
}
.blocks .block.block-image .block-image__image.width--two-thirds {
  width: 66.66%;
}
.blocks .block.block-text .block-text__text {
  -webkit-box-flex: 0;
  flex: 0 0 33.33%;
  padding: 0 16px;
  margin-left: auto;

  font-size: 24px;
  line-height: 32px;
}
.blocks .block.block-text .block-text__image {
  position: relative;
  -webkit-box-flex: 0;
  flex: 0 0 50%;
  padding-top: 5px;
  padding-left: 16px;
}

.blocks .block.block-text .block-text__text p {
  margin-bottom: 24px;
}
.blocks .block.block-image .block-image__image img {
  display: block;
  width: 100%;
}
.blocks .block.block-text .block-text__image img {
  display: block;
  width: 100%;
}

.line-background:before {
  content: "";
  position: absolute;
  top: 0;
  left: 33.33%;
  bottom: 0;
  width: 1px;
  height: 100%;
  background-color: #000;
  opacity: 0.2;
  z-index: 0;
}
.line-background:after {
  content: "";
  position: absolute;
  top: 0;
  right: 33.33%;
  bottom: 0;
  width: 1px;
  height: 100%;
  background-color: #000;
  opacity: 0.2;
  z-index: 0;
}

#single-post {
  /* position: absolute;
  top: 0;
  right: 33.33%;
  bottom: 0;
  left: 0; */
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
@media (max-width: 900px) {
  #profile {
    grid-template-columns: 1fr;
  }
  .hero {
    height: 70vh;
  }
  .hero .hero__image {
    background-attachment: scroll;
  }
  .meta {
    padding-bottom: 55px;
  }
  .meta .meta__subtitle {
    font-size: 30px;
    line-height: 36px;
    min-height: 0;
    padding-top: 20px;
    padding-right: 16px;
    padding-bottom: 28px;
  }
  .meta .meta__share {
    position: static;
    -webkit-box-flex: 0;

    display: flex;
    flex: 0 0 100%;
    -webkit-box-ordinal-group: 3;
    order: 2;
    text-align: left;
    padding: 8px 16px;
    margin-bottom: 50px;
  }
  .meta .meta__tags {
    -webkit-box-flex: 0;
    flex: 0 0 100%;
    margin-bottom: 35px;
  }
  .meta .meta__attributes {
    font-size: 12px;
    line-height: 21px;
    -webkit-box-flex: 0;
    flex: 0 0 100%;
    margin-bottom: 20px;
  }
  .meta .meta__intro-text {
    -webkit-box-flex: 0;
    flex: 0 0 100%;
    -webkit-box-ordinal-group: 4;
    order: 3;
  }
  .meta .meta__attributes .attribute {
    margin-bottom: 10px;
  }
  .line-background::after,
  .line-background:before {
    opacity: 0;
  }
}
</style>
