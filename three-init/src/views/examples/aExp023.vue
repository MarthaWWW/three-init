<!--
 * @Description: 在场景中使用ArrowHelper绘制箭头
    通过ArrowHelper创建箭头，将箭头视为一种特殊的几何体-->
<template>
    <center id = "myContainer"></center>
</template>
  
<script>
let myRenderer, myCamera, myScene, myGeometry, myMaterial, myMesh, myDirection, myOrigin, myLength
, myColor, myHeadLength, myHeadWidth,myArrowHelper;
import * as THREE from '../../../public/ThreeJS/three.js'
  export default {
    methods:
  {
    animate(){
      requestAnimationFrame(this.animate);
      myMesh.rotation.z += 0.02;
      myArrowHelper.rotation.z += 0.02;
      myRenderer.render(myScene, myCamera);
    },
    Init () {
    //创建渲染器
    myRenderer= new THREE.WebGLRenderer({antialias: true });
    myRenderer.setSize(712,400);
    document.getElementById("myContainer")?.append(myRenderer.domElement);
    myScene = new THREE.Scene();
    myScene.background = new THREE.Color(0xffffff);
    myCamera = new THREE.PerspectiveCamera(60,
        712/400, 0.1, 1000);
    myCamera.position.z = 6;
    //创建球体
    myGeometry =  new THREE.IcosahedronBufferGeometry(2,1);
    myMaterial = new THREE.MeshBasicMaterial({color: 'darkgreen',
      wireframe: true});
    myMesh = new THREE.Mesh(myGeometry, myMaterial);
    myScene.add(myMesh);
    //创建箭头
    //表示原点方向，必须是单位向量
    myDirection = new THREE.Vector3(0, 10, 0);
    //表示箭头原点位置
    myOrigin = new THREE.Vector3(0, 0, 0);
    //表示箭头长度，默认值为1
    myLength =3;
    //表示箭头颜色，默认值为0xffff00
    myColor = 0xff0000;
    //表示箭头头部长度，默认值为0.2 *myLength
    myHeadLength = 0.5;
    //表示箭头头部宽度，默认值为0.2 * myHeadLength
    myHeadWidth = 0.2;
    myArrowHelper = new THREE.ArrowHelper(myDirection,
        myOrigin, myLength, myColor,myHeadLength,myHeadWidth);
    myScene.add(myArrowHelper);
    //渲染球体和箭头
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