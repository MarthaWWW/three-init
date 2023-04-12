<!--
 * @Description: 使用指数雾设置场景的雾化效果
    THREE.FogExp2(color, density)
    雾的密度会随着距离指数增大
    density——雾的密度增长速度
-->
<template>
    <center id = "myContainer"></center>
</template>
  
<script>
let myRenderer, myCamera, myScene, myGeometry, myMaterial, myMesh;
import * as THREE from '../../../public/ThreeJS/three.js'
  export default {
    methods:
  {
    Init () {
       //创建渲染器
      myRenderer= new THREE.WebGLRenderer({antialias: true});
      myRenderer.setSize(712,400);
      myRenderer.setClearColor('white', 1.0);
      document.getElementById("myContainer")?.append(myRenderer.domElement);
      myScene = new THREE.Scene();
      myScene.add(new THREE.AmbientLight('white'));
      //使用指数雾设置场景的fog雾化属性
      myScene.fog = new THREE.FogExp2('white',0.025); 
      myCamera = new THREE.PerspectiveCamera(45,
      window.innerWidth / window.innerHeight, 30, 1000);
      myCamera.position.set(-34.34,-40.56,35.83);
      myCamera.lookAt(new THREE.Vector3(0, 0 , 0));
      //创建立方体
      myGeometry = new THREE.BoxGeometry(20, 20, 20);
      myMaterial=new THREE.MeshLambertMaterial({color:'darkgreen'});
      myMesh = new THREE.Mesh(myGeometry, myMaterial);
      myScene.add(myMesh);
      //渲染立方体
      myRenderer.render( myScene, myCamera );
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