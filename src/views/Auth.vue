<template>
  <div class="wrapper">
    <div class="auth-form">
      <div class="auth-form_image">
        <img class="logo" src="@/assets/images/salesDesign.svg" />
        <!-- <img class="bg" src="@/assets/images/LOGIN1.jpg" /> -->
      </div>
      <div>
        <component :is="currentComp"></component>
        <div id="auth" v-if="this.currentComp === 'SignUpCompnent'">
          <p>
            Already Have Account..
            <a @click="switchComponent('LoginComponent')">Login</a>
          </p>
        </div>
        <div id="auth" v-else>
          <p>
            Are You New Here..
            <a @click="switchComponent('SignUpCompnent')">New Account</a>
            <br />
            <a href>Forgot Password?</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SignUpCompnent from "@/components/auth-components/SignUpCompnent.vue";
import LoginComponent from "@/components/auth-components/LoginComponent.vue";
import { bus } from "../main.js";
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  name: "Auth",
  data() {
    return {
      currentComp: "LoginComponent",
      isAuth: false
    };
  },
  components: {
    SignUpCompnent: SignUpCompnent,
    LoginComponent: LoginComponent
  },
  // computed: { ...mapState(["url", "isAuth"]) },
  methods: {
    switchComponent(comp) {
      this.currentComp = comp;
    }
  },
  created() {
  }
};
</script>

<style>
.wrapper {
  min-height: unset;
  margin: 50px auto 0 auto;
  width: 100%;
}
main {
  width: 100%;
}

.auth-form {
  width: 60%;
  margin: var(--scnd-margin) auto;
  align-items: flex-start;
  grid-gap: var(--main-padding);
  border: 1.2px solid #ccc;
  border-radius: var(--scnd-radius);
  overflow: hidden;
  background-color: #fff;
  padding: var(--main-padding);
  text-align: center;
}
.auth-form_image {
  position: relative;
}
.auth-form_image::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.507);
}
.auth-form_image .bg {
  width: 100%;
  height: 100%;
}
.auth-form_image .logo {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  z-index: 99999;
}
.auth-form_inputs {
  position: relative;

  padding: var(--main-padding);
}
.auth-form_inputs .form-group {
  min-height: 40px;
}
.auth-form_inputs .form-control {
  border-radius: var(--scnd-radius) !important;
}
.auth-form_normal .reset {
  color: blue;
  margin: var(--scnd-margin) 0;
  text-align: center;
  font-size: 13px;
  text-decoration: none;
}
.auth-form_social {
  padding: var(--scnd-padding);
}
.auth-form_social ul {
  margin: 10px 0;
}
.auth-form_social ul li {
  background-color: #ccc;
  padding: var(--scnd-padding);

  border-radius: 20px;
  text-align: center;
}
.auth-form_social ul li a {
  color: #fff;
  text-decoration: navajowhite;
}
.auth-form_social ul li:first-child {
  background-color: #d62d20;
  margin-bottom: var(--scnd-margin);
}
.auth-form_social ul li:last-child {
  background-color: #3b5998;
}

@media only screen and (min-width: 320px) and (max-width: 767px) {
  .auth-form {
    width: 100%;
    margin: var(--scnd-margin) auto;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr;

    padding: var(--main-padding);
  }
  .auth-form_image {
    display: none;
  }
}
@media only screen and (min-width: 767px) and (max-width: 1024px) {
  .auth-form {
    width: 75%;
  }
}
</style>
