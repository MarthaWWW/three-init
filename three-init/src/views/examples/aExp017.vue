<!--
 * @Description: 使用OrbitControls旋转照相机
-->
<template>
    <center id = "myContainer"></center>
</template>
  
<script>
let myRenderer, myCamera, myScene, myGeometry, myMaterial, myMesh,myOrbitControls, myMap;
let myMaterials=[];
let url = [require('../../../public/images/img071.jpg'),require('../../../public/images/img072.jpg'),
require('../../../public/images/img073.jpg'),require('../../../public/images/img074.jpg'),
require('../../../public/images/img075.jpg'),require('../../../public/images/img076.jpg')]  ;
import * as THREE from '../../../public/ThreeJS/three.js'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
  export default {
    methods:
  {
    // 渲染立方体
    animate(){
        myRenderer.render(myScene, myCamera);
        myOrbitControls.update(); //更新轨道控制器
        requestAnimationFrame(this.animate);
    },
    Init () {
        //创建渲染器
        myRenderer = new THREE.WebGLRenderer({antialias: true});
        myRenderer.setSize(712,400);
        myRenderer.setClearColor('white', 1.0);
        document.getElementById('myContainer')?.append(myRenderer.domElement);
        myCamera = new THREE.PerspectiveCamera(45,
            window.innerWidth / window.innerHeight, 0.1, 1000);
        myCamera.position.set(400, -600, 100);
        myCamera.lookAt(new THREE.Vector3(-400, 600, -100));
        myScene= new THREE.Scene();
        //创建轨道控制器实现自动旋转照相机
        myOrbitControls= new OrbitControls(
            myCamera,myRenderer.domElement );
        //动态阻尼系数 就是旋转灵敏度
        myOrbitControls.enableDamping = true;
        //是否自动旋转
        myOrbitControls.autoRotate = true;
        //设置旋转速度
        myOrbitControls.autoRotateSpeed = 3.5;
        //设置照相机距离原点的最近距离
        myOrbitControls.minDistance  = 1;
        //设置照相机距离原点的最远距离
        myOrbitControls.maxDistance  = 120;
        //是否开启鼠标右键拖拽
        myOrbitControls.enablePan = true;
        //创建立方体
        myGeometry = new THREE.CubeGeometry(50,50,50);
        myMaterials = [];
        for (var i = 1; i < 7; i++) {
        myMap = THREE.ImageUtils.loadTexture(url[i-1]);
        myMaterial = new THREE.MeshBasicMaterial({map: myMap});
        myMaterials.push(myMaterial);
        }
        myMesh = new THREE.Mesh(myGeometry, myMaterials);
        myScene.add(myMesh);
        this.animate();
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
  
  