<template>
  <div class="front">
    <Sea class="sea"/>
    <Rod/>
  </div>
</template>

<script>
import { gsap, Power0 } from 'gsap'
import { onMounted } from 'vue'
import Sea from '@/components/Sea'
import Rod from '@/components/Rod'

export default {
  components: {
    Sea,
    Rod
  },
  setup () {
    onMounted(() => {
      gsap.to('.sea', {
        duration: 30, x: -2000, ease: Power0.easeNone, repeat: -1
      })
    })
    return {

    }
  }
}
</script>

<style scoped>
.front {
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
}
</style>
