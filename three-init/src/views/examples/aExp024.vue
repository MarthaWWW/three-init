<!--
 * @Description: 在场景中使用AxesHelper绘制坐标轴
    使用THREE.AxesHelper绘制坐标轴
    使用THREE.GridHelper绘制网格线
-->
<template>
    <center id = "myContainer"></center>
</template>
  
<script>
let myRenderer, myCamera, myScene, mySphereGeometry, mySpotLight, mySphereMaterial,
 mySphereMesh, myPlaneGeometry, myPlaneMaterial, myPlaneMesh, step;
import * as THREE from '../../../public/ThreeJS/three.js'
  export default {
    methods:
  {
    animate(){ // 不是很懂这个弹跳的动态效果是怎么做到的
      step += 0.05;
      mySphereMesh.position.x = 20 + (10 * Math.cos(step));
      mySphereMesh.position.y = 2 + (10* Math.abs(Math.sin(step)));
      requestAnimationFrame(this.animate);
      myRenderer.render(myScene, myCamera);
    },
    Init () {
       //创建渲染器
      myRenderer= new THREE.WebGLRenderer({antialias: true});
      myRenderer.setSize(712,400);
      myRenderer.setClearColor('white', 1.0);
      myRenderer.shadowMapEnabled = true;
      document.getElementById("myContainer")?.append(myRenderer.domElement);
      myScene = new THREE.Scene();
      myCamera = new THREE.PerspectiveCamera( 45,
          712/400, 0.1,1000);
      myCamera.position.set(64.7,15.1,17.8);
      myCamera.lookAt(myScene.position);
      mySpotLight = new THREE.SpotLight(0xffffff);
      mySpotLight.position.set(-40, 40, -15);
      mySpotLight.castShadow = true;
      mySpotLight.shadow.mapSize = new THREE.Vector2(1024,1024);
      mySpotLight.shadow.camera.far = 130;
      mySpotLight.shadow.camera.near = 40;
      myScene.add(mySpotLight);
      myScene.add(new THREE.AmbientLight(0x353535));
      //在场景中绘制XYZ坐标轴的轴线(红线是X轴，绿线是Y轴，蓝线是Z轴)
      myScene.add(new THREE.AxesHelper(120));
      //在场景中绘制网格线
      myScene.add(new THREE.GridHelper(100,30,0x2C2C2C,0x888888));
      //创建平面
      myPlaneGeometry = new THREE.PlaneGeometry(60, 100, 1, 1);
      myPlaneMaterial = new THREE.MeshLambertMaterial({color: 0xffffff});
      myPlaneMesh = new THREE.Mesh(myPlaneGeometry, myPlaneMaterial);
      myPlaneMesh.rotation.x = -0.5*Math.PI;
      myPlaneMesh.position.x = 26;
      myPlaneMesh.position.y = 0;
      myPlaneMesh.position.z = 0;
      myPlaneMesh.receiveShadow = true;
      myScene.add(myPlaneMesh);
      //创建球体
      mySphereGeometry = new THREE.SphereGeometry(4, 20, 20);
      mySphereMaterial = new THREE.MeshLambertMaterial({ color: 'red'});
      mySphereMesh = new THREE.Mesh(mySphereGeometry, mySphereMaterial);
      mySphereMesh.position.x = 20;
      mySphereMesh.position.y = 4;
      mySphereMesh.position.z = 2;
      mySphereMesh.castShadow = true;
      myScene.add(mySphereMesh);
      //渲染球体在平面上的弹跳动画
      this.animate();
      step = 0;
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