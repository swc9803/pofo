<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>

export default {

}
</script>
<style>
  #app {
    font-family: Avenir,
    Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 14px;
    background: rgb(30, 30, 30);
    overflow-x: hidden;
    overflow-y: hidden;
  }
  /* .fade-enter.active, .fade-leave.active {
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
  } */
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease-out;
  }
</style>
