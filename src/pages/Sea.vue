<template>
  <div class="front">
    <Rod class="sea"/>
    <Sea class="sea"/>
  </div>
</template>

<script>
import Rod from '@/components/sea/Rod'
import Sea from '@/components/sea/Sea'

export default {
  components: {
    Rod,
    Sea
  }
}
</script>

<style scoped>
body,
html{
  margin: 0;
  padding: 0;
  height: 100%;
}
.sea {
  display: block;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
}
</style>
