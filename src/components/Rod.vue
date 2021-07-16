<template>
  <svg class="rod" width="303" height="874" viewBox="0 0 303 874" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M151 0H153V756H151V0Z" fill="black"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M92 368C95.866 368 99 364.866 99 361C99 357.134 95.866 354 92 354C88.134 354 85 357.134 85 361C85 364.866 88.134 368 92 368ZM92 364.5C93.933 364.5 95.5 362.933 95.5 361C95.5 359.067 93.933 357.5 92 357.5C90.067 357.5 88.5 359.067 88.5 361C88.5 362.933 90.067 364.5 92 364.5Z" fill="#919191"/>
    <path d="M91.3183 365.7C91.1047 445.371 74.458 516.645 30.5 429.5" stroke="#909090" stroke-width="2"/>
    <path d="M27 414L39 430H27L27 414Z" fill="#919191"/>
    <path d="M95.5 361C118.89 368.207 134.108 364.763 151 352L151 354C130.578 368.153 114.522 368.754 94.586 363.67L95.5 361Z" fill="black"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M211.896 569C208.03 569 204.896 565.866 204.896 562C204.896 558.134 208.03 555 211.896 555C215.763 555 218.897 558.134 218.897 562C218.897 565.866 215.763 569 211.896 569ZM211.896 565.5C209.963 565.5 208.396 563.933 208.396 562C208.396 560.067 209.963 558.5 211.896 558.5C213.829 558.5 215.397 560.067 215.397 562C215.397 563.933 213.829 565.5 211.896 565.5Z" fill="#919191"/>
    <path d="M212.578 566.7C212.792 646.373 229.439 717.649 273.398 630.502" stroke="#909090" stroke-width="2"/>
    <path d="M276.898 615.001L264.898 631.002H276.898L276.898 615.001Z" fill="#919191"/>
    <path d="M208.396 562C185.006 569.207 169.787 565.764 152.895 553L152.895 555C173.318 569.154 189.374 569.754 209.31 564.67L208.396 562Z" fill="black"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M93.4817 770C97.3477 770 100.482 766.866 100.482 763C100.482 759.134 97.3477 756 93.4817 756C89.6157 756 86.4817 759.134 86.4817 763C86.4817 766.866 89.6157 770 93.4817 770ZM93.4817 766.5C95.4147 766.5 96.9817 764.933 96.9817 763C96.9817 761.067 95.4147 759.5 93.4817 759.5C91.5487 759.5 89.9817 761.067 89.9817 763C89.9817 764.933 91.5487 766.5 93.4817 766.5Z" fill="#919191"/>
    <path d="M92.8 767.7C92.5864 847.371 75.9397 918.645 31.9817 831.5" stroke="#909090" stroke-width="2"/>
    <path d="M28.4817 816L40.4817 832H28.4817L28.4817 816Z" fill="#919191"/>
    <path d="M96.9817 763C120.371 770.207 135.59 766.763 152.482 754L153 756C132.578 770.153 116.003 770.754 96.0678 765.67L96.9817 763Z" fill="black"/>
    <circle class="hover" @mouseover="hover(), stop()" @mouseout="resume" cx="26.5" cy="413.5" r="26.5" fill="url(#paint0_radial)"/>
    <circle class="hover" @mouseover="stop" @mouseout="resume" cx="276.5" cy="614.5" r="26.5" fill="url(#paint1_radial)"/>
    <circle class="hover" @mouseover="stop" @mouseout="resume" cx="27.5" cy="815.5" r="26.5" fill="url(#paint2_radial)"/>
    <defs>
    <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(26.5 413.5) rotate(90) scale(26.5)">
    <stop stop-color="white"/>
    <stop offset="1" stop-color="#EEE979"/>
    </radialGradient>
    <radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(276.5 614.5) rotate(90) scale(26.5)">
    <stop stop-color="white"/>
    <stop offset="1" stop-color="#3EF720"/>
    </radialGradient>
    <radialGradient id="paint2_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(27.5 815.5) rotate(90) scale(26.5)">
    <stop stop-color="white"/>
    <stop offset="1" stop-color="#F58824"/>
    </radialGradient>
    </defs>
  </svg>
</template>

<script>
import gsap from 'gsap'
export default {
  setup () {
    const hover = () => {
      gsap.to('.hover', {
        duration: 1, height: 100
      })
    }
    const stop = () => {
      document.querySelector('.rod').style.animationPlayState = 'paused'
    }
    const resume = () => {
      document.querySelector('.rod').style.animationPlayState = 'running'
    }
    return {
      stop,
      resume,
      hover
    }
  }
}
</script>

<style scoped>
.hover {
  cursor: pointer;
  opacity: 0.5;
  transition: 0s;
}
.hover:hover {
  opacity: 1;
  transition-duration: 1.5s;
}
.rod {
  width: 100%;
  height: 70%;
  top: 0;
  position: absolute;
  transform-origin: 50% 0%;
  animation-name: shake;
  animation-duration: 6s;
  animation-iteration-count: infinite;
}
@keyframes shake{
  30%{
  transform: rotate(-2deg);
  }
  70%{
  transform: rotate(2deg);
  }
}
</style>
