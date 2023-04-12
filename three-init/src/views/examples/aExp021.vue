<!--
 * @Description: 使用线性雾渲染场景的多个对象
    也就是对整个场景产生雾化效果
-->
<template>
  <center id = "myContainer"></center>
</template>

<script>
let myRenderer, myCamera, myScene, mySphereGeometry, myLight, mySphereMaterial,
 mySphereMesh, myBoxGeometry, myBoxMaterial, myBoxMesh, myPlaneGeometry, myPlaneMaterial, myPlaneMesh ;
import * as THREE from '../../../public/ThreeJS/three.js'
export default {
  methods:
{
  Init () {
     //创建渲染器
      myRenderer = new THREE.WebGLRenderer({antialias: true});
      myRenderer.setSize(712,400);
      myRenderer.setClearColor('white', 1.0);
      document.getElementById("myContainer")?.append(myRenderer.domElement);
      myCamera = new THREE.PerspectiveCamera(45,
          window.innerWidth/window.innerHeight, 0.1, 1000);
      myCamera.position.set(-15.68,88.93, 58.71);
      myCamera.lookAt(new THREE.Vector3(0,0,0));
      myScene = new THREE.Scene();
      //使用线性雾设置场景的fog雾化属性
      myScene.fog = new THREE.Fog(0xff00ff,80,120);
      myScene.add(new THREE.AmbientLight(0x444444));
      myLight = new THREE.PointLight(0xffffff);
      myLight.position.set(15,30,10);
      myScene.add(myLight);
      //创建立方体
      myBoxGeometry = new THREE.BoxGeometry(30,60,30);
      myBoxMaterial = new THREE.MeshLambertMaterial({color:0x0000ff});
      myBoxMesh = new THREE.Mesh(myBoxGeometry, myBoxMaterial);
      myBoxMesh.position.x = 5;
      myBoxMesh.position.y = -5;
      myBoxMesh.position.z = -5;
      myScene.add(myBoxMesh);
      //创建球体
      mySphereGeometry = new THREE.SphereGeometry(16,60,60);
      mySphereMaterial = new THREE.MeshLambertMaterial({color:0x00ffff});
      mySphereMesh = new THREE.Mesh(mySphereGeometry, mySphereMaterial);
      mySphereMesh.position.x = -30;
      mySphereMesh.position.z = -5;
      myScene.add(mySphereMesh);
      //创建平面
      myPlaneGeometry = new THREE.PlaneGeometry(400,400);
      myPlaneMaterial = new THREE.MeshStandardMaterial({color:0x00ff00});
      myPlaneMesh = new THREE.Mesh(myPlaneGeometry, myPlaneMaterial);
      myPlaneMesh.rotation.x = - 0.5 * Math.PI;
      myScene.add(myPlaneMesh);
      //使用线性雾渲染多个图形
      myRenderer.render(myScene, myCamera);
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