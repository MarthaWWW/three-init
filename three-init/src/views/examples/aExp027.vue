<!--
 * @Description: 使用SVGRenderer渲染线条宽度
    实现根据在材质中指定的宽度绘制线条
-->
<template>
    <center id = "myContainer"></center>
</template>
  
<script>
let myRenderer, myCamera, myScene, myGeometry, myMaterial, myMesh,myOrbitControls, myMap;
import * as THREE from '../../../public/ThreeJS/three.js'
  export default {
    methods:
  {
    animate(){

    },
    Init () {
    }
  },
    mounted () {
      this.Init()
    }
  }
</script>
  
<style lang="scss" scoped>
  #myContainer {
    margin:0;
    padding:0;
  }
</style>