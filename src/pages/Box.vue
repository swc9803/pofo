<template>
  <div class="front">
    <img src="@/assets/박스위.png" class="boxup" @click="cutting">
    <img src="@/assets/박스아래.png" class="boxdown" @click="cutting">
    <img src="@/assets/커터칼.png" class="cut">
    <img src="@/assets/라인.png" class="line">
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import gsap from 'gsap'

export default {
  setup () {
    const router = useRouter()

    const cutting = () => {
      document.querySelector('.cut').style.visibility = 'visible'
      gsap.from('.cut', {
        duration: 2, x: 550, y: -550
      })
      gsap.to('.cut', {
        duration: 3.53, x: '110%', delay: 2
      })
      gsap.to('.line', {
        duration: 3.5, width: '110%', delay: 2
      })
      gsap.to('.boxup', {
        duration: 1, y: '-100%', delay: 5.7
      })
      gsap.to('.boxdown', {
        duration: 1, y: '100%', delay: 5.7
      })
      gsap.to('.line', {
        duration: 0, visibility: 'hidden', delay: 5.7
      })
      setTimeout(function () {
        router.push({
          name: 'Sea'
        })
      }, 6500)
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
.boxup {
  cursor: pointer;
  position: absolute;
  width: 100%;
  height: 50%;
}
.boxdown {
  top: 50%;
  cursor: pointer;
  position: absolute;
  width: 100%;
  height: 50%;
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
