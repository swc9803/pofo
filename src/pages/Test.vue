<template>
  <div class="sea">
    <div class="wave" />
  </div>
  <div class="rod shake">
    <div class="rope1" />
    <div class="rope2" />
    <div class="rope3" />
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  * {
    overflow-x: hidden;
    overflow-y: hidden;
  }
  .wave {
    background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/85486/wave.svg) repeat-x;
    position: absolute;
    width: 3525px;
    height: 198px;
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
  .sea {
    background :
      linear-gradient(
      0deg,
      #00495c 50%,
      #00495c,
      rgb(255, 255, 255) 65%,
      rgb(255, 255, 255)
    );
    width: 100%;
    height: 100%;
    top:0;
    left:0;
    position: absolute;
  }
  .rod {
    background: rgb(22, 0, 0);
    width: 2px;
    height: 85%;
    top:0;
    left:50%;
    position: absolute;
  }
  .rope1 {
    background: rgb(22, 0, 0);
    width: 2px;
    height: 50%;
    position: absolute;
    transform: rotate(50deg);
  }
  .rope2 {
    background: rgb(22, 0, 0);
    width: 2px;
    height: 70%;
    position: absolute;
    transform: rotate(120deg);
  }
  .rope3 {
    background: rgb(22, 0, 0);
    width: 2px;
    height: 90%;
    position: absolute;
    transform: rotate(50deg);
  }
</style>
