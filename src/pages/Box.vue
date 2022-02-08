<template>
  <div>
    <svg class="svg" ref="box" @click="cutting" preserveAspectRatio="none" width="1920" height="1080" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1920 1080">
      <defs/>
      <g id="boxframe" clip-path="url(#clip0)">
        <g id="boxbottom">
          <path id="boxall" fill="url(#paint0_linear)" d="M0 540h1920v540H0z"/>
          <path id="tape" fill="url(#paint1_linear)" d="M0 540h1920v90H0z"/>
        </g>
        <g id="boxtop">
          <path id="boxall_2" fill="url(#paint2_linear)" d="M0 0h1920v540H0z" transform="matrix(1 0 0 -1 0 540)"/>
          <path id="tape_2" fill="url(#paint3_linear)" d="M0 0h1920v90H0z" transform="matrix(1 0 0 -1 0 540)"/>
          <path id="boxcutline" fill="#000" fill-opacity=".2" d="M0 539h1920v2H0z"/>
        </g>
        <g id="knifegroup" filter="url(#filter0_d)">
          <g id="body" filter="url(#filter1_d)">
            <path fill="url(#paint4_linear)" d="M39 465l344.8-326a5 5 0 014.7-1.1l63 16c4 1 5.2 6 2 8.7l-388.3 330-14.3.2L39 465z"/>
          </g>
          <g id="knifebody">
            <path id="knife" fill="#B8B8B8" d="M1 539.1l-2.9-25 355.3-335.9 21.2 7.8L1 539z"/>
            <g id="knife1" fill="#A6A6A6">
              <path id="Rectangle 4" d="M26.6 514.9l-1.8 1.7-4.7-23.3 1.8-1.7 4.7 23.3z"/>
              <path id="Rectangle 12" d="M202.4 348.7l-1.8 1.7-4.7-23.3 1.8-1.7 4.7 23.3z"/>
              <path id="Rectangle 8" d="M114.5 431.8l-1.8 1.7-4.7-23.3 1.8-1.7 4.7 23.3z"/>
              <path id="Rectangle 13" d="M290.3 265.6l-1.8 1.7-4.7-23.3 1.8-1.7 4.7 23.3z"/>
              <path id="Rectangle 6" d="M70.6 473.3l-1.9 1.8-4.7-23.3L66 450l4.7 23.3z"/>
              <path id="Rectangle 14" d="M246.4 307.1l-1.9 1.8-4.7-23.3 1.9-1.8 4.7 23.3z"/>
              <path id="Rectangle 9" d="M158.5 390.2l-1.9 1.8-4.7-23.3 1.9-1.8 4.7 23.3z"/>
              <path id="Rectangle 15" d="M334.3 224l-1.9 1.8-4.7-23.3 1.9-1.8 4.7 23.4z"/>
              <path id="Rectangle 5" d="M48.6 494.1l-1.8 1.7-4.7-23.3 1.8-1.7 4.7 23.3z"/>
              <path id="Rectangle 16" d="M224.4 328l-1.8 1.6-4.7-23.3 1.8-1.7 4.7 23.3z"/>
              <path id="Rectangle 10" d="M136.5 411l-1.8 1.7-4.7-23.3 1.8-1.7 4.7 23.3z"/>
              <path id="Rectangle 17" d="M312.3 244.8l-1.8 1.8-4.7-23.3 1.8-1.8 4.7 23.3z"/>
              <path id="Rectangle 7" d="M92.5 452.6l-1.8 1.7L86 431l1.9-1.8 4.6 23.4z"/>
              <path id="Rectangle 18" d="M268.3 286.4l-1.8 1.7-4.7-23.3 1.8-1.7 4.7 23.3z"/>
              <path id="Rectangle 11" d="M180.4 369.5l-1.8 1.7-4.7-23.3 1.9-1.7 4.6 23.3z"/>
              <path id="Rectangle 19" d="M356.2 203.3l-1.8 1.7-4.7-23.3 1.8-1.7 4.7 23.3z"/>
            </g>
          </g>
          <g id="handle" filter="url(#filter2_d)">
            <g id="Rectangle 2" filter="url(#filter3_d)">
              <path fill="#323232" d="M220.5 339.7a5 5 0 01-7-.2L200 325.3a2 2 0 010-2.8l74-70a5 5 0 016.5-.3l17.2 13a1 1 0 010 1.5l-77.2 73z"/>
            </g>
            <g id="knifeline" stroke="#444" stroke-linecap="square">
              <path id="Line 1" d="M290.8 271.8L274 254.1m14.2 20.1l-8.4-8.8-8.3-8.9"/>
              <path id="Line 3" d="M280.5 281.5l-16.8-17.7M278 284l-8.4-8.9-8.3-8.8"/>
              <path id="Line 5" d="M270.2 291.3l-16.8-17.7m14.2 20.1l-8.4-8.8-8.3-8.9"/>
              <path id="Line 7" d="M259.9 301l-16.7-17.7m14.1 20.1l-8.4-8.8-8.3-8.9"/>
              <path id="Line 2" d="M285.6 276.7L269 259M283 279l-8.3-8.8-8.4-8.9"/>
              <path id="Line 4" d="M275.3 286.4l-16.7-17.7m14.1 20.1l-8.3-8.8-8.4-8.9"/>
              <path id="Line 6" d="M265 296.1l-16.7-17.7m14.2 20.2l-8.4-8.9-8.4-8.8"/>
              <path id="Line 8" d="M254.7 305.9L238 288.2m14.2 20.1l-8.4-8.8-8.4-8.9"/>
              <path id="Line 9" d="M249.6 310.7L232.9 293m14.1 20.2l-8.4-8.9-8.3-8.8"/>
              <path id="Line 10" d="M244.4 315.6l-16.7-17.7M242 318l-8.4-8.8-8.4-8.9"/>
              <path id="Line 11" d="M239.3 320.5l-16.7-17.7m14.1 20.1l-8.3-8.8-8.4-8.9"/>
              <path id="Line 12" d="M234.1 325.3l-16.7-17.7m14.2 20.2l-8.4-8.9-8.4-8.8"/>
              <path id="Line 13" d="M229 330.2l-16.7-17.7m14.1 20.1l-8.3-8.8-8.4-8.9"/>
            </g>
          </g>
          <path id="cutline" fill="#010101" fill-opacity=".5" d="M-1999 539.1H1v1.8h-2000z"/>
        </g>
      </g>
      <defs>
        <filter id="filter0_d" width="2464.4" height="437.2" x="-2003" y="111.7" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/>
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
        </filter>
        <filter id="filter1_d" width="434" height="415.8" x="27.4" y="111.7" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/>
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
        </filter>
        <filter id="filter2_d" width="107.8" height="104.4" x="194.6" y="246.7" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/>
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
        </filter>
        <filter id="filter3_d" width="103.8" height="100.4" x="196.6" y="246.7" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
          <feOffset dy="2"/>
          <feGaussianBlur stdDeviation="1"/>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/>
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
        </filter>
        <linearGradient id="paint0_linear" x1="0" x2="829.3" y1="540" y2="1798.7" gradientUnits="userSpaceOnUse">
          <stop stop-color="#EBC9A4"/>
          <stop offset="1" stop-color="#EBC9A4" stop-opacity=".8"/>
        </linearGradient>
        <linearGradient id="paint1_linear" x1="1568" x2="1247.6" y1="358.8" y2="1188" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FFEBCB"/>
          <stop offset="1" stop-color="#EED7B3"/>
          <stop offset="1" stop-color="#FFE1B3"/>
        </linearGradient>
        <linearGradient id="paint2_linear" x1="0" x2="829.3" y1="0" y2="1258.7" gradientUnits="userSpaceOnUse">
          <stop stop-color="#EBC9A4"/>
          <stop offset="1" stop-color="#EBC9A4" stop-opacity=".8"/>
        </linearGradient>
        <linearGradient id="paint3_linear" x1="1568" x2="1247.6" y1="-181.2" y2="648" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FFEBCB"/>
          <stop offset="1" stop-color="#EED7B3"/>
          <stop offset="1" stop-color="#FFE1B3"/>
        </linearGradient>
        <linearGradient id="paint4_linear" x1="41.9" x2="457.3" y1="486.6" y2="98.9" gradientUnits="userSpaceOnUse">
          <stop stop-color="#599CFF"/>
          <stop offset="1" stop-color="#3B7FE6"/>
        </linearGradient>
        <clipPath id="clip0">
          <path fill="#fff" d="M0 0h1920v1080H0z"/>
        </clipPath>
      </defs>
    </svg>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import gsap from 'gsap'
import { ref } from '@vue/reactivity'

export default {
  setup () {
    const router = useRouter()
    const box = ref()
    const cutting = () => {
      box.value.style.pointerEvents = 'none'
      const BoxMove = gsap.timeline()
      gsap.to('#knifegroup', { opacity: 1 })
      BoxMove.from('#knifegroup', { yPercent: -140, xPercent: 20, ease: 'none', duration: 1.2 })
      BoxMove.from('#cutline', { opacity: 0 }, 1.2)
      BoxMove.to('#knifegroup', { xPercent: 80, ease: 'none', duration: 2.5 }, 1.2)
      BoxMove.set('#cutline', { opacity: 0, delay: 2 }, 2)
      BoxMove.to('#boxbottom', { yPercent: 100, ease: 'none', duration: 1, delay: 2 }, 2)
      BoxMove.to('#boxtop', {
        yPercent: -100,
        ease: 'none',
        duration: 1,
        delay: 2,
        onComplete () {
          router.push({
            name: 'Sea'
          })
        }
      }, 2)
    }
    return {
      box, cutting
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
#knifegroup {
  opacity: 0;
}
</style>
