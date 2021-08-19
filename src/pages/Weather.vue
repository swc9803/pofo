<template>
  <div class="scrollElement" />
  <Scroll class="svg" />
  <Spring class="wSpring" />
  <Summer class="wSummer" />
  <Fall class="wFall" />
  <Winter class="wWinter" />
</template>

<script>
import Scroll from '@/components/weather/Scroll'
import Spring from '@/components/weather/spring/Spring'
import Summer from '@/components/weather/summer/Summer'
import Fall from '@/components/weather/fall/Fall'
import Winter from '@/components/weather/winter/Winter'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
export default {
  components: { Scroll, Spring, Summer, Fall, Winter },
  setup () {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0)
    }
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
.svg {
  display: block;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
}
.scrollElement {
  position: absolute;
  height: 1600%;
  width: 100px;
  top: 0;
  opacity: 0;
}
</style>
