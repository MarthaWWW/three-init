<!--
 * @Description: 使用OrbitControls任意缩放对象
 实现使用鼠标滚轮放大或缩小立方体对象
 按住鼠标左键控制立方体任意移动
 键盘上下左右方向键控制立方体移动
-->
<template>
    <center id = "myContainer"></center>
</template>
  
<script>
let myRenderer, myCamera, myScene, myGeometry, myMaterial, myMesh, myOrbitControls;
import * as THREE from 'three'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
  export default {
    methods:
  {
    animate(){
        myRenderer.render(myScene,myCamera);
    },
    Init () {
        //创建渲染器
        myRenderer=new THREE.WebGLRenderer({antialias:true});
        myRenderer.setSize(712,400);
        myRenderer.setClearColor('white',1.0);
        document.getElementById('myContainer')?.append(myRenderer.domElement);
        myScene=new THREE.Scene();
        myCamera=new THREE.PerspectiveCamera(45,
            window.innerWidth/window.innerHeight,0.1,1000);
        myCamera.position.set(40.06,20.92,42.68);
        myCamera.lookAt(new THREE.Vector3(0,0,0));
        myOrbitControls=new OrbitControls(myCamera,
            myRenderer.domElement);				 	         //创建轨道控制器
        myOrbitControls.addEventListener('change',this.animate); //监听鼠标、键盘事件
        //创建立方体
        myGeometry=new THREE.BoxGeometry(16,16,16);
        myMaterial=new THREE.MeshNormalMaterial();
        myMesh=new THREE.Mesh(myGeometry,myMaterial);
        myScene.add(myMesh);
        //渲染立方体
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
  
  