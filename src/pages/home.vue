<template>
  <div class="box">
    <div class="tape" />
  </div>

</template>

<script>
export default {

}
</script>

<style>
  .box {
    width: 80%;
    height: 500px;
    background: rgb(200, 130, 90);
    border-radius : 2px;
    position: absolute;
  }
  .tape {
    background: rgb(245, 179, 141);
    background: linear-gradient( 45deg, rgb(245, 179, 141), rgb(233, 204, 188) );
    height: 12%;
    position: relative;

  }
</style>
