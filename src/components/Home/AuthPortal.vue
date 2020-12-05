<template>
  <div class="login-portal-pane" id="subscription">
    <div
      class="login-portal-pane__background"
      style="background-image: url(https://www.carr.net.au/wp-2020/wp-content/uploads/2019/12/Carr_UnitedPlace_Corridor_08-2.jpg);"
    ></div>
    <div class="login-portal-pane__close">
      <div class="button-extend">
        <div class="button-extend__text-wrapper">
          <div class="button-extend__text">Close</div>
        </div>
        <div class="button-extend__icon" @click="close()">
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
      </div>
    </div>
    <div
      class="login-portal-pane__text"
    >Sign Up to our client portal to access your latest documents, track project status and engage with your design journey.</div>
    <AuthForms v-if="visibilePortal"></AuthForms>
  </div>
</template>

<script>
import AuthForms from "@/components/general/AuthForms.vue";

export default {
  name: "AuthPortal",
  data() {
    return {};
  },
  components: {
    AuthForms: AuthForms
  },
  props: ["visibilePortal"],

  methods: {
    close() {
      document.querySelector("body").classList.remove("portal-pane--show");
      document.getElementById("subscription").classList.remove("show");
    }
  }
};
</script>

<style>
input:focus {
  outline: 0;
}
.login-portal-pane {

  position: absolute;
  top: 0;
  left: 100%;
  bottom: 0;
  width: 33.33vw;
  background-color: #000;
  overflow: hidden;
  -webkit-transition: -webkit-transform 0.6s cubic-bezier(0.55, 0, 0.1, 1);
  transition: -webkit-transform 0.6s cubic-bezier(0.55, 0, 0.1, 1);
  transition: transform 0.6s cubic-bezier(0.55, 0, 0.1, 1);
  transition: transform 0.6s cubic-bezier(0.55, 0, 0.1, 1),
    -webkit-transform 0.6s cubic-bezier(0.55, 0, 0.1, 1);
  will-change: transform;
  z-index: 80;
}

body.portal-pane--show .login-portal-pane {
  -webkit-transform: translateX(-33.32vw);
  transform: translateX(-33.32vw);
}

.login-portal-pane .login-portal-pane__text {
  color: #fff;
  padding: 16px;
  margin-top: 154px;
  margin-bottom: 0px;
}
.login-portal-pane .login-portal-pane__background {
  position: absolute;
  top: -10px;
  right: -10px;
  bottom: -10px;
  left: -10px;
  z-index: -1;
  background-size: cover;
  background-position: 50%;
  opacity: 0.5;
  -webkit-filter: blur(5px);
  filter: blur(5px);
  background-image: url(https://www.carr.net.au/wp-2020/wp-content/uploads/2019/12/Carr_UnitedPlace_Corridor_08-2.jpg);
  transition: .4s all;
}
.login-portal-pane .login-portal-pane__close {
  position: absolute;
  top: 16px;
  right: 16px;
}
.login-portal-pane .login-portal-pane__text {
  color: #fff;
  padding: 16px;
  margin-top: 154px;
  margin-bottom: 0px;
}
.login-portal-pane .login-portal-pane__form {
  padding: 16px;
}
.login-portal-pane
  .login-portal-pane__form
  .login-portal-pane__form-content
  input {
  color: #fff;
  border: 0;
  background-color: transparent;
  width: 95%;
  clear: both;
  display: block;
  font-size: 24px;
  line-height: 32px;
  padding: 15px 0;
  border-bottom: 1px solid #fff;
  margin-bottom: 3px;
}
.login-portal-pane
  .login-portal-pane__form
  .login-portal-pane__form-content
  input[type="submit"] {
  font-size: 14px !important;
  border: 1px solid #fff;
  border-radius: 20px;
  padding: 4px 10px;
  -webkit-transition: color 0.6s cubic-bezier(0.55, 0, 0.1, 1),
    background-color 0.6s cubic-bezier(0.55, 0, 0.1, 1);
  transition: color 0.6s cubic-bezier(0.55, 0, 0.1, 1),
    background-color 0.6s cubic-bezier(0.55, 0, 0.1, 1);
  clear: both;
  display: block;
  cursor: pointer;
  margin-top: 31px;
  width: 110px;
  float: right;
  margin-right: 5%;
}

.login-portal-pane
  .login-portal-pane__form
  .login-portal-pane__form-content
  input[type="submit"]:hover {
  color: #000;
  background-color: #fff;
}
@media (max-width: 900px) {
  .login-portal-pane {
    width: 100vw;
  }
  body.portal-pane--show .login-portal-pane{
       -webkit-transform: translateX(-100vw);
    transform: translateX(-100vw); 
  }
}
</style>