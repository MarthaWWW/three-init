<!--
 * @Description：使用鼠标拖曳功能播放全景视频
-->
<template>
<div>
  <p><button id="myButton1">开始播放全景视频</button>
 <button id="myButton2">暂停播放全景视频</button></p>
<center id="myContainer"></center>
<video id="myVideo" loop muted style="display:none">
  <source :src="url" type="video/mp4">
</video>

</div>
</template>

<script>
import * as THREE from 'three'
let myMouse = false; let myLongitude = 0; let myLatitude = 0; let myPhi = 0
let myTheta = 0; const myDistance = 50; let myPointerX = 0; let myPointerY = 0
let myPointerLongitude = 0; let myPointerLatitude = 0
let myCamera, myMaterial, myRenderer, myScene, myTexture, mySphereGeometry, myVideoMesh
export default {
  data () {
    return {
      url: require('../../../public/images/video02.mp4')
    }
  },
  methods:
{
  animate () {
    requestAnimationFrame(this.animate)
    myLatitude = Math.max(-85, Math.min(85, myLatitude))
    myPhi = THREE.MathUtils.degToRad(90 - myLatitude)
    myTheta = THREE.MathUtils.degToRad(myLongitude)
    // 重置透视照相机的位置
    myCamera.position.x = myDistance * Math.sin(myPhi) * Math.cos(myTheta)
    myCamera.position.y = myDistance * Math.cos(myPhi)
    myCamera.position.z = myDistance * Math.sin(myPhi) * Math.sin(myTheta)
    // 重置透视照相机的朝向
    myCamera.lookAt(myCamera.target)
    myRenderer.render(myScene, myCamera)
  },
  Init () {
    // 创建渲染器
    myRenderer = new THREE.WebGLRenderer({ antialias: true })
    myRenderer.setSize(712, 400)
    document.getElementById('myContainer')?.appendChild(myRenderer.domElement)
    myCamera = new THREE.PerspectiveCamera(75,
      window.innerWidth / window.innerHeight, 1, 1100)
    myCamera.target = new THREE.Vector3(0, 0, 0)
    myScene = new THREE.Scene()
    // 创建球形几何体
    mySphereGeometry = new THREE.SphereBufferGeometry(500, 60, 40)
    mySphereGeometry.scale(-1, 1, 1)
    // 当视频加载完成后自动播放
    document.getElementById('myVideo')?.play()
    // 将指定视频作为球体纹理
    myTexture = new THREE.VideoTexture(document.getElementById('myVideo'))
    myMaterial = new THREE.MeshBasicMaterial({ map: myTexture })
    // 创建全景视频所对应的球体
    myVideoMesh = new THREE.Mesh(mySphereGeometry, myMaterial)
    myScene.add(myVideoMesh)
    // 渲染球体(全景视频)
    this.animate()
    // 添加鼠标按下、移动、抬起等事件以处理拖拽操作
    document.addEventListener('mousedown', function (event) {
      event.preventDefault()
      myMouse = true
      // 获取鼠标的点击位置的坐标
      myPointerX = event.clientX
      myPointerY = event.clientY
      myPointerLongitude = myLongitude
      myPointerLatitude = myLatitude
    })
    document.addEventListener('mousemove', function (event) {
      if (myMouse) {
        myLongitude = (myPointerX - event.clientX) * 0.1 + myPointerLongitude
        myLatitude = (event.clientY - myPointerY) * 0.1 + myPointerLatitude
      }
    })
    document.addEventListener('mouseup', function () { myMouse = false })
    // 响应单击“开始播放全景视频”按钮
    document.getElementById('myButton1').click(function () {
      document.getElementById('myVideo').play()
    })
    // 响应单击“暂停播放全景视频”按钮
    document.getElementById('myButton2').click(function () {
      document.getElementById('myVideo').pause()
    })
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
