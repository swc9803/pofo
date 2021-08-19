<template>
  <WinterText class="winter" />
  <Snow class="winter" />
  <Snowman class="winter" />
</template>

<script>
import WinterText from '@/components/weather/winter/WinterText'
import Snow from '@/components/weather/winter/Snow'
import Snowman from '@/components/weather/winter/Snowman'
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export default {
  components: { WinterText, Snow, Snowman },
  setup () {
    onMounted(() => {
      ScrollTrigger.create({
        trigger: '.scrollElement',
        start: '76% top',
        end: '95% 100%',
        onEnter: () => {
          const url = '#winter'
          history.pushState('', '', url)
        },
        onEnterBack: () => {
          const url = '#winter'
          history.pushState('', '', url)
        },
        onLeaveBack: () => {
          const url = '#winter'
          history.pushState('', '', url)
        }
      })
    })
  }
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
