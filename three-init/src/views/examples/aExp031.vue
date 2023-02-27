<!--
 * @Description: 使用JSON格式保存和加载网格对象
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