<template>
  <div class="sea">
    <div class="wave" />
    <div class="rod">
      <div class="rope1" @click="moveToMade"></div>
      <div>
      </div>
      <div class="rope3" />
    </div>
  </div>
</template>
    <!-- 트렌지션 그룹?  라우터 뷰로 이동해야함? -->
<script>
import { useRouter } from 'vue-router'

export default {
  setup () {
    const router = useRouter()

    const moveToMade = () => {
      router.push({
        name: 'Made'
      })
    }
    return {
      router,
      moveToMade
    }
  }
}
</script>

<style scoped>
  .rod {
    background: rgb(22, 0, 0);
    width: 2px;
    height: 70%;
    top:0;
    left:50%;
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
  .rope1 {
    background: rgb(22, 0, 0);
    width: 2px;
    height: 10%;
    top: 40%;
    position: absolute;
    transform: rotate(70deg);
    cursor: pointer;
  }
  .rope2 {
    height: 10%;
    top: 65%;
    position: absolute;
    /* transform: rotate(100deg); */
      transition: all 2s linear;
  }
  .rope2:hover {
    width: 250%;
    height: 250%;
  }
  .rope3 {
    background: rgb(22, 0, 0);
    width: 2px;
    height: 10%;
    top: 95%;
    position: absolute;
    transform: rotate(60deg);
    cursor: pointer;
  }
  .sea {
    background :
      linear-gradient(
      0deg,
      #005b72 35%,
      #005b72,
      #005b72,
      #ffffff
    );
    width: 100%;
    height: 100%;
    top:0;
    left:0;
    position: absolute;
    overflow-x: hidden;
    overflow-y: hidden;
  }
  .wave {
    background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/85486/wave.svg) repeat-x;
    position: absolute;
    width: 3525px;
    height: 220px;
    animation: wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite;
    transform: translate3d(0, 0, 0);
  }
  .wave:nth-of-type(2) {
    top: -175px;
    animation: wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) -.125s infinite, swell 7s ease -1.25s infinite;
    opacity: 1;
  }
  @keyframes wave {
    0% {
      margin-left: 0;
    }
    100% {
      margin-left: -1600px;
    }
  }
  @keyframes swell {
    0%, 100% {
      transform: translate3d(0,-25px,0);
    }
    50% {
      transform: translate3d(0,5px,0);
    }
  }
</style>
