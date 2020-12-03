<template>
  <div class="footer-meta">

    <div class="">
      <a class="button-pill button-pill--icon" href>
        <i class="fab fa-facebook-f"></i>
      </a>
      <a class="button-pill button-pill--icon" href>
        <i class="fab fa-twitter"></i>
      </a>
      <a class="button-pill button-pill--icon" href>
        <i class="fab fa-youtube"></i>
      </a>
      <a class="button-pill button-pill--icon" href>
        <i class="fab fa-instagram"></i>
      </a>
    </div>
   
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  }
};
</script>

<style>
.logo {
  position: absolute;
  bottom: 0;
  right: 10px;
  width: 40px;
  z-index: 999;
}
.logo img {
  height: 100%;
  width: 100%;
}
.footer-meta{
    margin-top: auto;
}
.footer {
  width: 50%;
  position: inherit;
  bottom: 20px;
  left: 0;
  font-size: 21px;
}
.footer-meta  .button-pill {
    margin-right: 5px;
}

.information__buttons {
  position: absolute;
  top: 175px;
  right: 16px;
  text-align: right;
}

</style>