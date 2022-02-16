<template>
  <div class="container" ref="background">
    <Squiggly />
    <div @click="toggle(), toggledata = !toggledata" class="toggle" ref="togglebackground">
      <div class="sunwrap" ref="suntoggle">
        <svg v-show="toggledata === false" class="sun" ref="sun" stroke="#c3d100" stroke-linecap="round" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100">
          <path id="Vector 3" stroke-width="3" d="M40.6 31.1c5.4-2.1 13.5-.7 19.2 0 3.5 2.3 6.1 4.9 8.2 7.7a25 25 0 0 1 1 16.7c-1 3.5-3.2 6.2-5.7 8.8A20.1 20.1 0 0 1 46.9 71c-8.7-.4-18.1-13.5-17.9-20.6.4-12.7 5.7-14.7 11.6-19.3Z"/>
          <g id="fires" stroke-width="2">
            <path class="fire" d="M64.8 9c1 .4 2 .5 2.5 1.5.5.8.7 2.7.2 3.5-1 1.7-3.9 2-5.6 2.4-1.8.6-3.8 2.2-2.5 4.1"/>
            <path class="fire" d="M14 24c1.8-.3 3.3 0 5 .3 1.3.3 1.6 1.3 2.5 2.2.4.4.8 1.5 1.1 2 .4.9 1.7.3 2.4.3"/>
            <path class="fire" d="M35.1 9.6c3.7-.6 4.3 3.5 2.7 6-1.3 2-1.5 3 .2 4.7"/>
            <path class="fire" d="M93.5 32c-1-1-1.8-2-3-2.5-.4-.2-1-.5-1.5-.5-.9 0-1.4.8-2.3 1-2.2.8-4.3 3.8-6.7 3.8"/>
            <path class="fire" d="M92.9 61.7c-2-.8-3-2.1-4.6-3.4-1-.8-1.5-1.3-2.8-1.5-2-.4-3.7.6-5 2.1-1.2 1.2-.1 2-.3 3.3"/>
            <path class="fire" d="M71 74c0 2.7 2.5 3.6 3.5 6 .9 1.9 1.4 3.7 1.8 5.9.3 1.7 1.4 3.1 1.7 4.7.2 1.4.9 2.1 2.1 2.5"/>
            <path class="fire" d="M47.4 81c.5 1.1 1.2 3.6.5 4.9-.6 1-1.4 2-2.2 3l-1.4 2c-.5 1-.6 1.8-1.3 2.5"/>
            <path class="fire" d="M28.5 73a30.8 30.8 0 0 1-8 3.6c-1.6.4-2 2.3-2.5 3.6-1.3 3-4.7 1.9-7.2.9"/>
            <path class="fire" d="M20.2 54.6c-.8-1.5-1.4-2.5-3.2-2.6-2.2-.1-4.4.2-6.6.2-1 0-1.6 0-2.3-.7-.8-.8-2-3-3-3"/>
          </g>
        </svg>
        <svg v-show="toggledata === true" class="moon" ref="sun" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100">
          <path id="Vector 5" stroke="#FAFF00" stroke-linecap="round" stroke-width="3" d="M55.5 16c-5.8 1-14 3.6-18.4 7.6-3 2.8-6 5.8-8.2 9.3a34.2 34.2 0 0 0-4.4 13c-1.3 7.6 0 16.2 4.3 22.7 2.6 4 5.4 8.4 9.6 10.3C42 80.4 45.6 83 49.3 83c3 1.5 8.3.5 11.8-1 3.4-2.4 7.8-8 10.5-11.4 6-13.1 5.6-12 5-12.1a591 591 0 0 1-15 7c-2 .2-7.8-1.3-8.5-1.3-1.6 0 1 .9-.5 0-1.9-1.2-4.8-7-6-9-1.3-2.1-2.5-3.8-3.3-6.3-.6-1.8-.3-4-.3-5.9 0-2.4 0-4.7.5-7.1 1.5-7 8.1-14 12.1-19.9"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import Squiggly from '@/components/Squiggly'
import gsap from 'gsap'
import { onMounted, ref } from 'vue'

export default {
  components: {
    Squiggly
  },
  setup () {
    const toggledata = ref(false)
    const background = ref()
    const sun = ref()
    const suntoggle = ref()
    const togglebackground = ref()
    const backgroundAni = gsap.timeline({ paused: true })
    const sunAni = gsap.timeline({ paused: true })
    const togglebackAni = gsap.timeline({ paused: true })
    const toggle = () => {
      if (toggledata.value === false) {
        backgroundAniPlay()
        sunAniPlay()
        togglebackAniPlay()
      } else if (toggledata.value === true) {
        backgroundAnireverse()
        sunAnireverse()
        togglebackAnireverse()
      }
    }
    onMounted(() => {
      // 배경 변경
      backgroundAni.to(background.value, { background: '#222222', duration: 0.3 })
      // 토글 위치 이동
      sunAni.to(suntoggle.value, { xPercent: 112, duration: 0.3, background: '#414141' })
      // 토글 배경 변경
      togglebackAni.to(togglebackground.value, { background: '#bcecff', duration: 0.3 })
      // sun 색 변경
      gsap.to(sun.value, {
        stroke: '#ffa459',
        duration: 2,
        repeat: -1,
        ease: 'none',
        yoyo: true
      })
    })

    const backgroundAniPlay = () => backgroundAni.play()
    const backgroundAnireverse = () => backgroundAni.reverse()
    const sunAniPlay = () => sunAni.play()
    const sunAnireverse = () => sunAni.reverse()
    const togglebackAniPlay = () => togglebackAni.play()
    const togglebackAnireverse = () => togglebackAni.reverse()

    return {
      toggledata,
      background,
      sun,
      suntoggle,
      backgroundAni,
      sunAni,
      togglebackAni,
      togglebackground,
      toggle,
      backgroundAniPlay,
      backgroundAnireverse,
      sunAniPlay,
      sunAnireverse,
      togglebackAniPlay,
      togglebackAnireverse
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #bcecff;
  .toggle {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20%;
    background: #222222;
    border-radius: 10rem;
    cursor: pointer;
    .sunwrap {
      position: relative;
      padding: 4%;
      background: #ffffff;
      border-radius: 70%;
      width: 40%;
      left: -1%;
      .sun,
      .moon {
        animation: squiggly .3s linear infinite;
      }
      svg {
        transition: .7s;
      }
    }
  }
}
@keyframes squiggly {
  0% {
    filter: url("#squiggly1");
  }
  25% {
    filter: url("#squiggly2");
  }
  50% {
    filter: url("#squiggly3");
  }
  75% {
    filter: url("#squiggly4");
  }
  100% {
    filter: url("#squiggly5");
  }
}
</style>
