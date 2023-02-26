<!--
 * @Description：使用鼠标拖曳功能查看并缩放全景图
-->
<template>
  <center id = "myContainer"></center>
</template>

<script>
import * as THREE from 'three'
let isMouse = false; let myMouseX = 0; let myMouseY = 0; let myLongitude = 0; let myLatitude = 0; let myTempLongitude = 0; let myTempLatitude = 0; let myPhi = 0; let myTheta = 0
let myCamera, myGeometry, myLoader, myMaterial, myRenderer, myScene, mySphere, myTexture
export default {
  methods:
{
  animate () {
    requestAnimationFrame(this.animate)
    myLatitude = Math.max(-85, Math.min(85, myLatitude))
    myPhi = THREE.MathUtils.degToRad(90 - myLatitude)
    myTheta = THREE.MathUtils.degToRad(myLongitude)
    myCamera.target.x = Math.sin(myPhi) * Math.cos(myTheta)
    myCamera.target.y = Math.cos(myPhi)
    myCamera.target.z = Math.sin(myPhi) * Math.sin(myTheta)
    myCamera.lookAt(myCamera.target)
    myRenderer.render(myScene, myCamera)
  },
  Init () {
    // 创建渲染器
    myRenderer = new THREE.WebGLRenderer()
    myRenderer.setSize(712,400)
    document.getElementById('myContainer')?.appendChild(myRenderer.domElement)
    myCamera = new THREE.PerspectiveCamera(75,
      window.innerWidth / window.innerHeight, 1, 1100)
    myCamera.target = new THREE.Vector3(0, 0, 0)
    myScene = new THREE.Scene()
    // 创建球体并设置全景图
    myGeometry = new THREE.SphereBufferGeometry(40, 30, 30)
    myGeometry.scale(-1, 1, 1)
    myLoader = new THREE.TextureLoader()
    myTexture = myLoader.load(require('../../../public/images/img129.jpg'))
    myMaterial = new THREE.MeshBasicMaterial({ map: myTexture })
    mySphere = new THREE.Mesh(myGeometry, myMaterial)
    myScene.add(mySphere)
    // 渲染全景图(拖拽查看全景图)
    this.animate()
    document.addEventListener('mousedown', function (event) {
      isMouse = true
      // 记录鼠标按下的位置
      myMouseX = event.clientX
      myMouseY = event.clientY
      myTempLongitude = myLongitude
      myTempLatitude = myLatitude
    })
    document.addEventListener('mousemove', function (event) {
      if (isMouse) {
      // 根据鼠标当前位置和按下的位置重新计算经纬度
        myLongitude = (myMouseX - event.clientX) * 0.1 + myTempLongitude
        myLatitude = (event.clientY - myMouseY) * 0.1 + myTempLatitude
      }
    })
    document.addEventListener('mouseup', function () { isMouse = false })
    document.addEventListener('wheel', function (event) {
      const myFOV = myCamera.fov + event.deltaY * 0.05
      myCamera.fov = THREE.MathUtils.clamp(myFOV, 10, 75)
      myCamera.updateProjectionMatrix()
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
