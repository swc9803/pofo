<template>
  <div>
    <span class="front">
      <span class="curl" @click="curl"/>
      <i class="fas fa-power-off power" @click="moveToNext"/>
    </span>
    <Drawline class="line"/>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { gsap, Power0 } from 'gsap'
import Drawline from '@/components/Drawline'

export default {
  components: {
    Drawline
  },
  setup () {
    const router = useRouter()

    const curl = () => {
      gsap.to('.curl', {
        duration: 3, width: '200%', height: '250%'
      })
      gsap.to('.curl', {
        duration: 0, cursor: 'default', delay: 2.2
      })
      gsap.to('.curl', {
        duration: 0, visibility: 'hidden', delay: 3
      })
      gsap.to('.front', {
        duration: 0, background: '#1e1e1e', delay: 3
      })
      gsap.to('.power', {
        duration: 3, visibility: 'visible', opacity: 1, delay: 3
      })
    }
    const moveToNext = () => {
      gsap.to('.power', {
        duration: 3, color: 'rgb(219, 28, 28)'
      })
      gsap.to('.power', {
        duration: 1, opacity: 0, delay: 3.5
      })
      gsap.to('.power', {
        display: 'none', delay: 4.5
      })
      setTimeout(function () {
        document.querySelector('.line').style.animationPlayState = 'running'
      }, 4500)
      gsap.to('.line', {
        duration: 0, opacity: 1, delay: 4.4
      })
      gsap.to('.line', {
        duration: 0, animationDuration: 0, delay: 7
      })
      gsap.to('.line', {
        duration: 1.5, y: 30, opacity: 0, delay: 7.8, ease: Power0.easeNone
      })
      setTimeout(function () {
        router.push({
          name: 'Sea'
        })
      }, 8850)
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
  z-index: 2;
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
.line {
  position: absolute;
  z-index: 1;
  opacity: 0;
  stroke-dasharray: 400;
  stroke-dashoffset: 400;
  animation: draw 2.5s linear alternate both;
  animation-play-state: paused;
}
@keyframes draw {
  0% {
    stroke-dashoffset: 400;
  }
  100% {
    stroke-dashoffset: 0;
  }
}
</style>
