<!--
 * @Description: 使用线性雾设置场景的雾化效果
    THREE.Fog(color, near, far)
    color——雾的颜色
    near——应用雾化效果的最小距离
    far——应用雾化效果的最大距离
-->
<template>
    <center id = "myContainer"></center>
</template>
  
<script>
let myRenderer, myCamera, myScene, myGeometry, myMaterial, myMesh, mySpotLight;
import * as THREE from '../../../public/ThreeJS/three.js'
  export default {
    methods:
  {
    Init () {
        //创建渲染器
        myRenderer = new THREE.WebGLRenderer( {antialias: true } );
        myRenderer.setSize(712,400);
        myRenderer.setClearColor('white', 1.0);
        document.getElementById("myContainer")?.appendChild(myRenderer.domElement);
        myScene = new THREE.Scene();
        //使用线性雾设置场景的fog雾化属性,这里使用的是白雾
        myScene.fog = new THREE.Fog(0xffffff,50,60);
        myCamera = new THREE.PerspectiveCamera(45,
            window.innerWidth / window.innerHeight, 30, 1000);
        myCamera.position.set(-55,17,31);
        myCamera.lookAt(new THREE.Vector3(0, 0 , 0));
        mySpotLight = new THREE.SpotLight('white');
        mySpotLight.position.set(-30, 60, 60);
        myScene.add(mySpotLight);
        //创建圆球
        myMaterial = new THREE.MeshPhongMaterial({color:0x7777ff});
        myMaterial.shininess = 100;
        myGeometry = new THREE.SphereGeometry(16, 100, 100);
        myMesh = new THREE.Mesh(myGeometry, myMaterial);
        myScene.add(myMesh);
        //渲染圆球
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