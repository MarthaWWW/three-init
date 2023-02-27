<!--
 * @Description: 在鼠标单击对象时改变对象颜色
-->
<template>
  <!--这里传递event事件一定要写$前缀-->
  <center id = "myContainer" @click="changeColor($event)"></center>
</template>

<script>
let myRenderer, myCamera, myScene, myGeometry, myMaterial, myMesh, myMouse, myOrbitControls,myRaycaster,myColor;
let myIntersects = [];
import * as THREE from '../../../public/ThreeJS/three.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
export default {
  methods:
{
  changeColor(event){
  myMouse=new THREE.Vector2();
  //THREE.Raycaster用于通过鼠标去获取在3D世界被选择的图形
  myRaycaster=new THREE.Raycaster();
  //拦截页面默认的点击事件
  event.preventDefault();
  //计算当前鼠标的坐标
  myMouse.x = ((event.clientX-485) /712) * 2 - 1;
  myMouse.y = -((event.clientY-240) / 400) * 2 + 1;
  //根据当前鼠标和照相机重置Raycaster
  myRaycaster.setFromCamera(myMouse,myCamera);
  //获取被点击(选择)的图形
  myIntersects=myRaycaster.intersectObjects(myScene.children);
  if(myIntersects.length>0){
   //生成随机颜色值
   myColor=Math.random()*0xffffff;
   //动态更新该图形表面的颜色
   myIntersects[0].object.material.color=new THREE.Color(myColor);
  }
},
  animate(){
    requestAnimationFrame(this.animate);
    myRenderer.render(myScene, myCamera);
  },
  Init () {
    //创建渲染器
    myRenderer = new THREE.WebGLRenderer({antialias: true });
    myRenderer.setSize(712,400);
    myRenderer.setClearColor('white', 1.0);
    document.getElementById("myContainer").appendChild(myRenderer.domElement);
    myScene=new THREE.Scene();
    myScene.add(new THREE.AmbientLight(0xffffff));
    myCamera=new THREE.PerspectiveCamera(75,
        window.innerWidth/window.innerHeight,0.1,1000);
    myCamera.position.set(622,342,443);
    // myCamera.lookAt(new THREE.Vector3(0, 0, 0));
    myOrbitControls=new OrbitControls(myCamera,myRenderer.domElement);
    //创建多个立方体
    myGeometry = new THREE.BoxGeometry(120,120,120);
    for(var i=0;i<10;i++) {
      myMaterial = new THREE.MeshLambertMaterial({
      color: Math.random() * 0xffffff});
      myMesh = new THREE.Mesh(myGeometry, myMaterial);
      myMesh.position.x = Math.random() * 480 - 140;
      myMesh.position.y = Math.random() * 480 - 140;
      myMesh.position.z = Math.random() * 480 - 140;
      myScene.add(myMesh);
    }
    //渲染多个立方体
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