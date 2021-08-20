<template>
  <div class="front">
    <Sea class="sea"/>
    <!-- <Rod/> -->
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { onMounted } from 'vue'
import Sea from '@/components/sea/Sea'
// import Rod from '@/components/sea/Rod'

export default {
  components: {
    Sea
    // Rod
  },
  setup () {
    onMounted(() => {
      gsap.to('.sea', {
      })
    })
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
/* .front {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  top: 0;
  left: 0;
}
.sea {
  position: absolute;
  top: 0;
  left: -1550px;
  height: 100%;
} */
</style>
