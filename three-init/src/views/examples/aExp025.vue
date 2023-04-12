<!--
 * @Description: 使用CSS3DRenderer渲染全景图
    好像是不同的渲染器效果不同的样子
    使用THREE.CSS3DRenderer和CSS3DObject, 实现以鼠标拖拽方式在天空盒中查看全景图
    两个相互匹配，使用CSS3DObject转换DOM元素为三维对象时，使用CSS3DRenderer做渲染器
-->
<template>
    <div id = "myContainer"></div>
</template>
  
<script>
let myFOV, myImage, myRenderer, myCamera, myScene, myTarget, myLongitude, myLatitude, myPhi, myTheta, myElement, myCSS3DObject;
let myImages=[
        {url:require('../../../public/images/img155.jpg'),position:[-512,0,0],rotation:[0,Math.PI/2,0]},
        {url:require('../../../public/images/img154.jpg'),position:[512,0,0],rotation:[0,-Math.PI/2,0]},
        {url:require('../../../public/images/img156.jpg'),position:[0,512,0],rotation:[Math.PI/2,0,Math.PI]},
        {url:require('../../../public/images/img152.jpg'),position:[0,-512,0],
        rotation:[-Math.PI/2,0,Math.PI]},
        {url:require('../../../public/images/img153.jpg'),position:[0,0,512],rotation:[0,Math.PI,0]},
        {url:require('../../../public/images/img151.jpg'),position:[0,0,-512],rotation:[0,0,0]}];
import * as THREE from '../../../public/ThreeJS/three.js'
import { CSS3DRenderer, CSS3DObject} from 'three/examples/jsm/renderers/CSS3DRenderer.js'
  export default {
    methods:
  {
    onMouseDown(event){
      event.preventDefault();
      document.addEventListener('mousemove',this.onMouseMove,false);
      document.addEventListener('mouseup',this.onMouseUp,false);
    },

    onMouseMove(event){
      myLongitude-=event.movementX*0.1;
      myLatitude+=event.movementY*0.1;
    },

    onMouseUp(event){
      document.removeEventListener('mousemove',onMouseMove);
      document.removeEventListener('mouseup',onMouseUp);
    },

    onWheel(event){
      myFOV=myCamera.fov+event.deltaY*0.05;
      myCamera.fov=THREE.MathUtils.clamp(myFOV,10,75);
      myCamera.updateProjectionMatrix();
    },

    animate(){
      requestAnimationFrame(this.animate);
      myLatitude=Math.max(-85,Math.min(85,myLatitude));
      myPhi=THREE.MathUtils.degToRad(90-myLatitude);
      myTheta=THREE.MathUtils.degToRad(myLongitude);
      myTarget.x=Math.sin(myPhi)*Math.cos(myTheta);
      myTarget.y=Math.cos(myPhi);
      myTarget.z=Math.sin(myPhi)*Math.sin(myTheta);
      myCamera.lookAt(myTarget);
      myRenderer.render(myScene,myCamera);
    },
    Init () {
       //创建渲染器
      myRenderer=new CSS3DRenderer();
      myRenderer.setSize(712,400);
      document.getElementById('myContainer')?.appendChild(myRenderer.domElement);
      myCamera=new THREE.PerspectiveCamera(75,
          712/400,1,1000);
      myScene=new THREE.Scene();
      myTarget=new THREE.Vector3();
      myLongitude=90, myLatitude=0;
      myPhi=0, myTheta=0;
      //设置天空盒六个面(模拟真实空间)的纹理图像路径、旋转角度、所在位置
      for(i=0; i<myImages.length;i++){
        myImage=myImages[i];
        //根据位置和角度创建CSS3DObject，即天空盒
        myCSS3DObject=new CSS3DObject(myImage.url);
        myCSS3DObject.position.fromArray(myImage.position);
        myCSS3DObject.rotation.fromArray(myImage.rotation);
        myScene.add(myCSS3DObject);
 }
  //渲染天空盒
  this.animate();
  //添加鼠标事件监听器
  document.addEventListener('mousedown', this.onMouseDown, false);
  document.addEventListener('wheel', this.onWheel,false);
  },
    mounted () {
      this.Init()
    }
  }
  }
</script>
  
<style lang="scss" scoped>
  #myContainer {
    margin:0;
    padding:0;
    text-align: center;
  }
</style>