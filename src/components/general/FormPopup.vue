<template>
  <div v-if="startAuth">
    <div class="auth-forms">
      <div class="auth-forms_box">
        <a class="button-pill button-pill--icon m-medium" @click="close()">
          <svg
            data-v-82768ea8
            data-v-4fdd230d
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="icon-cross"
          >
            <path
              data-v-82768ea8
              data-v-4fdd230d
              d="M0.146484 9.14722L9.14722 0.146484L9.85433 0.853591L0.853591 9.85433L0.146484 9.14722Z"
              fill-rule="evenodd"
              clip-rule="evenodd"
              fill="black"
            />
            <path
              data-v-82768ea8
              data-v-4fdd230d
              d="M0.853637 0.14712L9.85361 9.14706L9.1465 9.85417L0.146531 0.854228L0.853637 0.14712Z"
              fill-rule="evenodd"
              clip-rule="evenodd"
              fill="black"
            />
          </svg>
        </a>
        <div class="auth-forms_box_header p-medium grid f-space-between">
          <img src="@/assets/images/Mix.png" class alt="logo" />
          <h3 class="c-b p-l-3 font-xl">Access your account to continue</h3>
        </div>
        <AuthForms v-on:close="close"></AuthForms>
      </div>
    </div>
  </div>
</template>

<script>
import AuthForms from "@/components/general/AuthForms.vue";

export default {
  name: "FormPopup",
  data() {
    return {};
  },
  props: ["startAuth"],

  components: {
    AuthForms: AuthForms
  },
  methods: {
    close() {
      this.$emit("close");
    }
  },
  watch: {},
  mounted() {}
};
</script>

<style >
.auth-forms {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 500;
  background-color: #f9f9f98e;
  pointer-events: unset;
}

.auth-forms_box {
  display: flex;
  flex-direction: column;
  max-width: 50%;
  color: var(--card-color);
  z-index: 700;
  max-height: 100%;
  width: 100%;
  height: 100%;
  pointer-events: auto;
  background-color: #fff;
  border: 2px solid var(--main-color);
  padding: var(--m-padding);
  border-right: 5px solid var(--main-color);
  border-bottom: 3px solid var(--main-color);
  color: #333 !important;
}
.auth-forms_box_header {
  align-items: center;
}
.auth-forms_box_header img {
  height: 120px;
}

.auth-forms_box
  .login-portal-pane__form
  .login-portal-pane__form-content
  input {
  border-color: var(--main-color);
  color: #333;
}
input[type="submit"] {
  color: #111 !important;
  border: 1px solid #333;
}
.forgotPassword {
  color: #333 !important;
}
.backLogin {
  color: #222 !important;
}
@media (min-width: 900px) {
  .auth-forms_box {
    height: auto;
  }
}
@media (max-width: 900px) {
  .auth-forms_box {
    min-width: 100%;
  }
}
</style>