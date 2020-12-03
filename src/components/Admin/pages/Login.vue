<template>
  <div class="content-wrapper">
    <div class="form_inputs">
      <form
        class="auth-form"
        id="login"
        action="/login"
        method="POST"
        @submit="submitLogin($event)"
      >
        <h1>Login</h1>
        <span>Sign in To Your Account</span>
        <!-- <p class="msg msg-err" v-if="message">{{ message }}</p> -->
        <div class="form">
          <input
            type="email"
            v-model="email"
            name="email"
            id="email"
            placeholder="Your Email Please"
          />
          <input
            type="password"
            v-model="password"
            name="password"
            id="passowrd"
            placeholder="Enter Your Password."
          />
          <button class="btn btn-primary">login</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

// import authService from "../../authService";
// import { log } from "util";
// import { setInterval } from "timers";
// import router from "../../router.js";
export default {
  name: "LoginComponent",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      loading: false
    };
  },
  //   computed: { ...mapState(["url", "isAuth"]) },
  methods: {
    async submitLogin(e) {
      e.preventDefault();
      const res = await this.$store.dispatch({
        type: "admin/login",
        data: {
          email: this.email,
          password: this.password
        }
      });
      if (res) this.$router.push({ name: "Dashboard" });
    }
  }
};
</script>

<style scoped>
.content-wrapper {
  height: 100vh;
  position: relative;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding: 0;
  text-align: center;
}
#loading {
  position: absolute;
  right: 50%;
  top: 41%;
  transform: translate(-50%, -41%);
}
.form {
  margin: auto;
  padding: 10px 0;
}
.form_inputs {
  width: 55%;

  margin: 0 auto;
  padding: var(--m-padding);
  position: relative;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  min-width: 0;
  margin-bottom: 1.5rem;
  word-wrap: break-word;
  background-clip: border-box;
  border: 1px solid;
  border-radius: 0.25rem;
  background-color: #fff;
  border-color: #d8dbe0;
}
.form input {
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
.message {
  color: #ccc;
  text-align: center;
  font-size: 18px;
  padding: 10px 20px;
  margin: 22px auto;
  width: 322px;
  border-radius: 25px;
  background-color: #00ff3b40;
}
@media (max-width: 767.98px) {
  .form_inputs {
    width: 95%;
  }
}
</style>
