<template>
  <p
    class="message alert"
    :class="{ 'alert-warning' : msg.type=='warning', 'alert-success':  msg.type=='success' ,'alert-info':  msg.type=='info'}"
  >{{msg.msg}}</p>
</template>

<script>
export default {
  props: ["msg"]
};
</script>

<style>
</style>