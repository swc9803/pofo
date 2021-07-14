<template>
  <div class="back">
    <span class="front">
      <span class="curl" @click="curl"/>
      <i class="fas fa-power-off power" @click="moveToNext"/>
    </span>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import gsap from 'gsap'

export default {
  setup () {
    const router = useRouter()

    const curl = () => {
      gsap.to('.curl', {
        duration: 3, width: '200%', height: '250%'
      })
      gsap.to('.curl', {
        duration: 0, x: 200, y: 200, width: '200%', height: '250%', delay: 3
      })
      gsap.to('.power', {
        duration: 3, visibility: 'visible', opacity: 1, delay: 3
      })
    }
    const moveToNext = () => {
      gsap.to('.power', {
        duration: 3, color: 'rgb(219, 28, 28)'
      })
      setTimeout(function () {
        router.push({
          name: 'Made'
        })
      }, 3200)
    }

    onMounted(() => {
      gsap.to('.curl', {
        duration: 1, width: 190, height: 130, repeat: -1, yoyo: true
      })
    })

    return {
      curl,
      moveToNext
    }
  }
}
</script>

<style scoped>
.front {
  text-align: center;
  overflow-x: hidden;
  overflow-y: hidden;
  background:
    linear-gradient(
    150deg,
    rgb(30, 30, 30),
    rgb(30, 30, 30),
    rgb(40, 40, 40),
    rgb(75, 75, 75),
    rgb(80, 80, 80),
    rgb(61, 45, 45),
    rgb(30, 30, 30),
    rgb(30, 30, 30),
    rgb(50, 50, 50),
    rgb(60, 60, 60),
    rgb(37, 37, 37)
  );
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
}
.power {
  visibility: hidden;
  opacity: 0;
  text-shadow: -1px 0 #ffffff, 0 1px #ffffff, 1px 0 #ffffff, 0 -1px #ffffff;
  -moz-text-shadow: -1px 0 #ffffff, 0 1px #ffffff, 1px 0 #ffffff, 0 -1px #ffffff;
  -webkit-text-shadow: -1px 0 #ffffff, 0 1px #ffffff, 1px 0 #ffffff, 0 -1px #ffffff;
  font-size: 7vw;
  color: rgba(27, 15, 15, 0.774);
  position: relative;
  top: 45%;
  cursor: pointer;
}
.curl {
  cursor: -moz-grabbing;
  width: 180px;
  height: 120px;
  position: absolute;
  top: -10px;
  left: 0px;
  border-radius: 0px 0px 40px 0px;
  box-shadow: 5px 5px 10px 5px rgb(30, 30, 30);
  background:
    linear-gradient(
    150deg,
    rgb(30, 30, 30),
    rgb(30, 30, 30) 50%,
    rgb(40, 40, 40),
    rgb(75, 75, 75),
    rgb(80, 80, 80),
    rgb(61, 45, 45),
    rgb(30, 30, 30),
    rgb(30, 30, 30),
    rgb(40, 40, 40) 75%,
    rgb(83, 71, 71)
  );
}
</style>
