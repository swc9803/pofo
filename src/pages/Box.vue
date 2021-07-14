<template>
  <div class="front">
    <img src="@/assets/박스.png" class="box" @click="cutting">
    <img src="@/assets/커터칼.png" class="cut">
    <img src="@/assets/라인.png" class="line">
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
  setup () {
    const cutting = () => {
      document.querySelector('.cut').style.visibility = 'visible'
      gsap.from('.cut', {
        duration: 2, x: 550, y: -550
      })
      gsap.to('.cut', {
        duration: 4.57, x: '200%', delay: 2
      })
      gsap.to('.line', {
        duration: 4.5, width: '200%', delay: 2
      })
    }
    return {
      cutting
    }
  }
}
</script>

<style scoped>
.front {
  overflow-x: hidden;
  overflow-y: hidden;
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
}
.box {
  cursor: pointer;
  position: absolute;
  width: 100%;
  height: 100%;
}
.cut {
  position: absolute;
  width: 100%;
  height: 100%;
  visibility: hidden;
}
.line {
  position: absolute;
  width: 0.1px;
  height: 100%;
}

</style>
