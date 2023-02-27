<!--
 * @Description: 在多个对象中使用鼠标选择对象
-->
<template>
    <center id = "myContainer"></center>
</template>
  
<script>
let myRenderer, myCamera, myScene, myGeometry, myMaterial, myMesh, myMouse, myRaycaster, myIntersectObjects, myObject;
let myArray = [];
import * as THREE from '../../../public/ThreeJS/three.js'
  export default {
    methods:
  {
    onDocumentMouseMove(event){
      myMouse = new THREE.Vector2();
      myMouse.x = ((event.clientX-485) /712) * 2 - 1;
      myMouse.y = -((event.clientY-240) / 400) * 2 + 1;
      console.log(event.clientX,event.clientY);
      myRaycaster = new THREE.Raycaster();
      myRaycaster.setFromCamera(myMouse, myCamera);
      //获取与射线相交的myArray[]的所有图形
      myIntersectObjects = myRaycaster.intersectObjects(myArray);
      //这里操作第一个相交图形(使用鼠标选择的图形)
      if (myIntersectObjects.length > 0) {
      //设置该选择的立方体颜色为红色
      myObject = myIntersectObjects[0].object;
      myObject.material.color.set( 0xff0000 );
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
      document.getElementById('myContainer')?.appendChild(myRenderer.domElement);
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
      // 渲染多个立方体
      this.animate();
      // 添加鼠标移动事件监听器，检测鼠标的移动
      document.addEventListener('mousemove', this.onDocumentMouseMove);
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