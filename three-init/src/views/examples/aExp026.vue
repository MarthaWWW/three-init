<!--
 * @Description: 使用CSS3DRenderer渲染三维对象
    使用THREE.CSS3DRenderer和CSS3DSprite创建多个三维球体组成的阵列并根据正弦函数进行位置变换
-->
<template>
    <div id = "myContainer"></div>
</template>
  
<script>
let myRenderer, myCamera, myScene, myPositions, myIndex, myTrackballControls,
myOffset, myImage, myPhi, myTheta, myObject, myTime, myScale;
let myObjects=[];
import * as THREE from '../../../public/ThreeJS/three.js'
import TWEEN from '@tweenjs/tween.js'
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js'
import { CSS3DRenderer, CSS3DSprite} from 'three/examples/jsm/renderers/CSS3DRenderer.js'
  export default {
    methods:
  {
    animate(){
      requestAnimationFrame(this.animate);
      TWEEN.update();
      myTrackballControls.update();
      myTime=performance.now();
      for(var i=0,l=myObjects.length;i<l;i++){
      myObject=myObjects[i];
      myScale=Math.sin((Math.floor(myObject.position.x)
          +myTime)*0.002)*0.3+1;
      myObject.scale.set(myScale,myScale,myScale);
      }
      myRenderer.render(myScene,myCamera);
    },
    Init () {
      myPositions=[],myObjects=[],myIndex=0;
      //创建渲染器THREE.CSS3DRenderer
      myRenderer=new CSS3DRenderer();
      myRenderer.setSize(window.innerWidth,window.innerHeight);
      document.getElementById("myContainer")?.append(myRenderer.domElement);
      myCamera=new THREE.PerspectiveCamera(75,
      window.innerWidth/window.innerHeight, 1,5000);
      myCamera.position.set(600,400,1500);
      myCamera.lookAt(0,0,0);
      myScene=new THREE.Scene();
      myTrackballControls=
          new TrackballControls(myCamera,myRenderer.domElement);
      //创建多个3D图形(小球)
      myImage=document.createElement('img');
      myImage.onload=function(){
        for(var i=0;i<512;i++){
        myObject=new CSS3DSprite( myImage.cloneNode() );
        myObject.position.x=Math.random()*4000-2000;
        myObject.position.y=Math.random()*4000-2000;
        myObject.position.z=Math.random()*4000-2000;
        myScene.add(myObject);
        myObjects.push(myObject);
        }
        myOffset=myIndex*512*3;
        for(var i=0,j=myOffset;i<512;i++,j+=3){
        myObject=myObjects[i];
        new TWEEN.Tween(myObject.position)
            .to({
              x:myPositions[j],
              y:myPositions[j+1],
              z:myPositions[j+2]
            },Math.random()*2000+2000)
            .easing(TWEEN.Easing.Exponential.InOut)
            .start();
        }
        myIndex=(myIndex+1)%4;
      };
      myImage.src=require('../../../public/images/img103.png');
      for(var i=0;i<512;i++){
        var x=(i%16)*150;
        var z=Math.floor(i/16)*150;
        var y=(Math.sin(x*0.5)+Math.sin(z*0.5))*200;
        myPositions.push(x-1125,y,z-2325);
      }
      for(var i=0;i<512;i++){
        var x=(i%8)*150;
        var y=Math.floor((i/8)%8)*150;
        var z=Math.floor(i/64)*150;
        myPositions.push(x-525,y-525,z-525);
      }
      for(var i=0;i<512;i++){
        myPositions.push(Math.random()*4000-2000,
            Math.random()*4000-2000, Math.random()*4000-2000);
      }
      for(var i=0;i<512;i++){
        myPhi=Math.acos(-1+(2*i)/512);
        myTheta=Math.sqrt(512*Math.PI)*myPhi;
        myPositions.push(750*Math.cos(myTheta)*Math.sin(myPhi),
            750*Math.sin(myTheta)*Math.sin(myPhi),750*Math.cos(myPhi));
      }
      //渲染多个3D图形(小球)
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
    text-align: center;
  }
</style>