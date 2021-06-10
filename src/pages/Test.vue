<template>
  <div id="demo">
  <button @click="show = !show">
    Toggle
  </button>

  <transition name="fade">
    <p v-if="show">hello</p>
  </transition>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
