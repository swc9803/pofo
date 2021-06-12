<template>
  <div style="color: white; font-size: 20px">
    aaaaaaaaaaaaaaaaaa
  </div>
  <router-link to="boxxx">boxxx</router-link>
  <transition name="fade">
    <router-view />
  </transition>
</template>

<script>
export default {

}
</script>

<style scoped>
  .fade-enter.active, .fade-leave.active {
    transition: opacity 0.5s ease-in-out, tranform 0.5s ease;
  }
  .fade-enter.active {
    transition-delay: 0.5s;
  }
  .fade-enter, .fade-leave.to {
    opacity: 0;
    transform: translateX(-100px);
  }
  .fade-enter-to, .fade-leave {
    opacity: 1;
    transform: translateX(0px);
  }
</style>
