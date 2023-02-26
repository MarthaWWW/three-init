<!--
 * @Description: 
-->
<template>
    <center id = "myContainer"></center>
</template>
  
<script>
let myRenderer, myCamera, myScene, myGeometry, myLight, myMaterial, myMesh, myTransformControls, myTexture;
let url = require('../../../public/images/img002.jpg')  ;
import * as THREE from 'three'
import { TransformControls } from "three/examples/jsm/controls/TransformControls";
  export default {
    methods:
  {
    Init () {
        myRenderer=new THREE.WebGLRenderer({antialias:true});
        myRenderer.setSize(712, 400);
        document.getElementById('myContainer')?.append(myRenderer.domElement);
        myCamera=new THREE.PerspectiveCamera(50,
            window.innerWidth/window.innerHeight,0.01,30000);
        myCamera.position.set(1000,500,800);
        myCamera.lookAt(0,100,0);
        myScene=new THREE.Scene();
        myScene.background=new THREE.Color(0xffffff);
        myScene.add(new THREE.GridHelper(1000,10,0x888888,0x444444));
        myLight=new THREE.DirectionalLight(0xffffff,2);
        myLight.position.set(1,1,1);
        myScene.add(myLight);
        myTexture=new THREE.TextureLoader().load(url, function(){
        myRenderer.render(myScene,myCamera);
        });
        myGeometry=new THREE.BoxBufferGeometry(200,200,200);
        myMaterial=new THREE.MeshLambertMaterial({map:myTexture});
        myTransformControls = new TransformControls(myCamera,myRenderer.domElement);
        myTransformControls.addEventListener('change',function(){
        myRenderer.render(myScene,myCamera);
        });
        myTransformControls.setMode("scale");
        myMesh=new THREE.Mesh(myGeometry,myMaterial);
        myScene.add(myMesh);
        myTransformControls.attach(myMesh);
        myScene.add(myTransformControls);
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
  