<template>
  <WinterText class="winter" />
  <Snow/>
  <Snowman class="winter" />
</template>

<script>
import WinterText from '@/components/weather/winter/WinterText'
import Snow from '@/components/weather/winter/Snow'
import Snowman from '@/components/weather/winter/Snowman'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export default {
  components: { WinterText, Snow, Snowman }
}
</script>

<style scoped>
.winter {
  display: block;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
}
</style>
