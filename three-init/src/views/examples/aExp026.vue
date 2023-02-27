<!--
 * @Description: 使用CSS3DRenderer渲染三维对象
-->
<template>
    <center id = "myContainer"></center>
</template>
  
<script>
let myRenderer, myCamera, myScene, myGeometry, myMaterial, myMesh;
let myArray = [];
import * as THREE from '../../../public/ThreeJS/three.js'
  export default {
    methods:
  {
    animate(){

    },
    Init () {
      //创建渲染器
      myRenderer = new THREE.WebGLRenderer({antialias: true });
      myRenderer.setSize(window.innerWidth, window.innerHeight);
      myRenderer.setClearColor('white', 1.0);
      $('#myContainer')[0].appendChild(myRenderer.domElement);
      myScene=new THREE.Scene();
      myScene.add(new THREE.AmbientLight(0xffffff));
      myCamera = new THREE.PerspectiveCamera(45,
          window.innerWidth / window.innerHeight, 0.1, 1000);
      myCamera.position.set(622,342,443);
      myCamera.lookAt(new THREE.Vector3(0, 0, 0));
      //创建多个立方体
      myGeometry = new THREE.BoxGeometry(80,80,80);
      for(var i=0;i<10;i++) {
        myMaterial = new THREE.MeshBasicMaterial({
        color: Math.random() * 0xffffff, opacity: 0.5});
        myMesh = new THREE.Mesh(myGeometry, myMaterial);
        myMesh.position.x = Math.random() * 480 - 140;
        myMesh.position.y = Math.random() * 480 - 140;
        myMesh.position.z = Math.random() * 480 - 140;
        myScene.add(myMesh);
        myArray.push(myMesh);
 }
 //渲染多个立方体
 animate();
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