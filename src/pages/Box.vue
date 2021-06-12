<template>
  <div class="box">
    <div class="tape" />
  </div>
  <router-link to="/boxx">Boxx</router-link>
  <router-view />
</template>

<script>
export default {

}
</script>

<style scoped>
  .tape {
    background: linear-gradient( 45deg, rgba(196, 89, 27, 0.685), rgba(201, 106, 51, 0.685) );
    height: 12%;
    position: relative;
  }
   .box {
    width: 80%;
    height: 500px;
    background: rgb(110, 93, 83);
    border-radius : 2px;
  }
  .view-enter.active, .view-leave.active {
    transition: opacity 0.5s ease-in-out, tranform 0.5s ease;
  }
  .view-enter.active {
    transition-delay: 0.5s;
  }
  .view-enter, .view-leave.to {
    opacity: 0;
    transform: translateX(-100px);
  }
  .view-enter-to, .view-leave {
    opacity: 1;
    transform: translateX(0px);
  }
</style>
