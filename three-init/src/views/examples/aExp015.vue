<!--
 * @Description: 使用DragControls任意拖拽对象
 可以使用鼠标将三个对象拖曳到场景的任意位置
-->
<template>
    <center id = "myContainer"></center>
</template>
  
<script>
let myRenderer, myCamera, myScene, myMaterial,myBoxGeometry,myBoxMesh,myDragControls,mySphereGeometry,
myTorusKnotGeometry, myTorusKnotMesh, mySphereMesh;
let myObjects=[];
import * as THREE from 'three'
import { DragControls } from "three/examples/jsm/controls/DragControls";
  export default {
    methods:
  {
    animate(){
        // 动画渲染三个对象
        requestAnimationFrame(this.animate);
        myRenderer.render(myScene,myCamera);
    },
    Init () {
        myRenderer = new THREE.WebGLRenderer({antialias: true });
        myRenderer.setSize(712,400);
        myRenderer.setClearColor('white', 1.0);
        document.getElementById('myContainer')?.appendChild(myRenderer.domElement);
        myCamera = new THREE.PerspectiveCamera(45,
            window.innerWidth / window.innerHeight, 30, 1000);
        myCamera.position.set(-76.03,30.40,-48.87);
        myCamera.lookAt(new THREE.Vector3(0, 0 , 0));
        myScene = new THREE.Scene();
        myScene.translateX(30);
        myMaterial =new THREE.MeshNormalMaterial();
        //创建圆环结
        myTorusKnotGeometry =new THREE.TorusKnotGeometry(8,3,200,60);
        myTorusKnotMesh = new THREE.Mesh(myTorusKnotGeometry, myMaterial);
        myTorusKnotMesh.translateX(-62);
        myScene.add(myTorusKnotMesh);
        //创建立方体
        myBoxGeometry = new THREE.BoxGeometry(20, 20, 20);
        myBoxMesh = new THREE.Mesh(myBoxGeometry, myMaterial);
        myBoxMesh.translateX(-20);
        myScene.add(myBoxMesh);
        //创建球体
        mySphereGeometry=new THREE.SphereGeometry(20,60,60 );
        mySphereMesh=new THREE.Mesh(mySphereGeometry,myMaterial);
        mySphereMesh.translateX(70);
        myScene.add(mySphereMesh);
        
        myObjects.push(myTorusKnotMesh);
        myObjects.push(myBoxMesh);
        myObjects.push(mySphereMesh);
        this.animate();
        //根据将要拖拽的图形、照相机、渲染器创建DragControls
        myDragControls=new DragControls(myObjects,myCamera,myRenderer.domElement);
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
  
  