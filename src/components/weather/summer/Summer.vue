<template>
  <Remain/>
  <Rain/>
</template>

<script>
import Remain from '@/components/weather/summer/Remain'
import Rain from '@/components/weather/summer/Rain'

import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default {
  components: { Remain, Rain },
  setup () {
    onMounted(() => {
      ScrollTrigger.create({
        trigger: '.scrollElement',
        start: '27% top',
        end: '54% 100%',
        onEnter: () => {
          const url = '#summer'
          history.pushState('', '', url)
        },
        onEnterBack: () => {
          const url = '#summer'
          history.pushState('', '', url)
        },
        onLeaveBack: () => {
          const url = '#summer'
          history.pushState('', '', url)
        }
      })

      const Summeron = gsap.timeline()
      ScrollTrigger.create({
        animation: Summeron,
        trigger: '.scrollElement',
        start: '26% top',
        end: '52% 100%',
        scrub: 0
      })
      Summeron.from('.summer', { display: 'none' })

      const Summeroff = gsap.timeline()
      ScrollTrigger.create({
        animation: Summeroff,
        trigger: '.scrollElement',
        start: '55% top',
        end: '55% 100%',
        scrub: 0
      })
      Summeroff.to('.summer', { display: 'none' })
    })
  }
}
</script>

<style scoped>

</style>
