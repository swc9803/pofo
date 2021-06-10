<template>
  <span class="curl" @mouseover="hover" />
  <!-- <i class="fas fa-power-off power"></i> -->
</template>
<script>

export default {
  setup () {
    const hover = () => {
      console.log('dd')
    }
    return {
      hover
    }
  }
}
</script>

<style scoped>
  .power {
    color: rgba(185, 34, 34, 0.774);
    width:300px;
    height:300px;
    position:absolute;
    left:50%;
    top:50%;
  }
  .curl {
    cursor: -moz-grabbing;
    width:180px;
    height:100px;
    position: absolute;
    top:0;
    left:0;
    background :
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
      rgb(30, 30, 30) 65%,
      rgb(70, 59, 59)
    );
  transition: all 2s linear;
  }
  .curl:hover {
    width: 200%;
    height: 200%;
  }
</style>
