<template>
  <div class="search-pane">
    <div class="search__input">
      <input name="search" type="text" placeholder="What are you looking for?" />
      <div class="search__close" @click="close()">
        <a class="button-extend">
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
        </a>
      </div>
    </div>
    <div class="search__results"></div>
  </div>
</template>

<script>
export default {
  methods: {
    close() {
      document.querySelector("body").classList.remove("search-pane--show");
    }
  }
};
</script>

<style>
body .search-pane {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  -webkit-transition: opacity 0.6s cubic-bezier(0.55, 0, 0.1, 1);
  transition: opacity 0.6s cubic-bezier(0.55, 0, 0.1, 1);
  opacity: 0;
  pointer-events: none;
}
.search-pane .search__input input {
  width: 100%;
  padding: 16px 58px 16px 16px;
  border: 0;
  margin-bottom: 1px;
}
body .search-pane .search__results {
  display: -webkit-box;
  display: flex;
  position: absolute;
  top: 66px;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  background-color: #fff;
  -webkit-transition: opacity 0.6s cubic-bezier(0.55, 0, 0.1, 1);
  transition: opacity 0.6s cubic-bezier(0.55, 0, 0.1, 1);
}
.search-pane .search__input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid #000;
  z-index: 11;
}
.search-pane .search__input input {
  width: 100%;
  padding: 16px 58px 16px 16px;
  border: 0;
  font-size: 24px;
  margin-bottom: 1px;
}
.search-pane .search__input .search__close {
  position: absolute;
  top: 16px;
  right: 16px;
}
</style>