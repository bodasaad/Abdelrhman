<template>
  <div id="auth-forms">
    <form class="login-portal-pane__form formLogin" @submit.prevent="login()">
      <div class="login-portal-pane__form-content">
        <h3 class="form-heading">Login</h3>
        <input
          type="email"
          id="wemail-client-forgot"
          name="email"
          placeholder="Email address"
          v-model="email"
        />
        <input
          type="password"
          id="password-client-forgot"
          name="password"
          placeholder="Password"
          v-model="password"
        />
        <p class="login-error" style="color: red;margin-top: 10px;"></p>
        <a class="backLogin c-w m-r-3">Forgot Password!</a>
        <a class="backLogin c-w m-l-3" @click="toggleForms( 'formSignup','formLogin' )">New Account!</a>
        <input type="submit" value="Login" class="forgotBtn" />
      </div>
    </form>
    <form
      method="post"
      action="/form"
      class="login-portal-pane__form formSignup none"
      @submit.prevent="signup()"
      autocomplete="off"
    >
      <div class="login-portal-pane__form-content">
        <h3>Sign up</h3>
        <input type="text" id="name-client" name="name" placeholder="Name" autocomplete="off" />
        <input
          type="email"
          id="email-client"
          name="email"
          placeholder="Email address"
          autocomplete="false | unknown-autocomplete-value"
        />
        <input
          type="password"
          id="password-client"
          name="password"
          placeholder="Password"
          v-model="password"
          autocomplete="false | unknown-autocomplete-value"
        />
        <p class="signup-error" style="color: red;margin-top: 10px;"></p>
        <a class="forgotPassword c-w">
          Already have account
          <b @click="toggleForms('formLogin' , 'formSignup')">Login</b>
        </a>
        <input type="submit" value="Sign up" class="loginBtn" />
      </div>
    </form>
  </div>
</template>

<script>
let $ = require("jquery");

export default {
  name: "AuthForms",
  data() {
    return {
      name: "",
      email: "",
      password: ""
    };
  },
  methods: {
    close() {
      document.querySelector("body").classList.remove("portal-pane--show");
      document.getElementById("subscription").classList.remove("show");
    },
    toggleForms(first, sec) {
      $(`.${first}`).removeClass("none");
      $(`.${sec}`).addClass("none");
    },
    async signup() {
      if (!this.name || !this.email || !this.password)
        return (document.querySelector(".signup-error").innerHTML =
          "Please add your informations ");
      const res = await this.$store.dispatch({
        type: "studio/signup",
        data: {
          name: this.name,
          email: this.email,
          password: this.password
        }
      });
      if (res) {
        return
      }
    },
    async login() {
      if (!this.email || !this.password) {
        return (document.querySelector(".login-error").innerHTML =
          "Please add your informations ");
      }
      const res = await this.$store.dispatch({
        type: "studio/login",
        data: {
          email: this.email,
          password: this.password
        }
      });

      if (!res) {
        return (document.querySelector(".login-error").innerHTML =
          "Your information not correct");
      } else {
        this.$emit("close");
      }
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

/* body.portal-pane--show .login-portal-pane,
body.portal-pane--show main {
  -webkit-transform: translateX(-33.32vw);
  transform: translateX(-33.32vw);
} */


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
.login-portal-pane__form {
  padding: 16px;
}

.login-portal-pane__form .login-portal-pane__form-content input {
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

.login-portal-pane__form .login-portal-pane__form-content input[type="submit"] {
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
}
</style>