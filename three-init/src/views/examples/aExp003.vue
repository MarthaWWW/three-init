<!--
 * @Description：使用CameraHelper绘制正交相机
    实现绘制辅助线查看正交照相机的视角范围
-->
<template>
  <center id = "myContainer"></center>
</template>

<script>
import * as THREE from 'three'
let myRenderer, myCamera, myScene, mySphereMesh, myOrthographicCamera, myFrustumSize, myOrthographicCameraHelper,
  myAspect
export default {
  methods:
{
  animate () {
    requestAnimationFrame(this.animate)
    const r = Date.now() * 0.0005
    mySphereMesh.position.x = myFrustumSize * Math.cos(r)
    mySphereMesh.position.z = myFrustumSize * Math.sin(r)
    mySphereMesh.position.y = myFrustumSize * Math.sin(r)
    myOrthographicCamera.lookAt(mySphereMesh.position)
    myRenderer.render(myScene, myCamera)
  },
  Init () {
    myAspect = window.innerWidth / window.innerHeight
    myFrustumSize = 700
    // 创建渲染器
    myRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    myRenderer.setSize(659, 370)
    myRenderer.setClearColor('white', 1.0)
    document.getElementById('myContainer')?.appendChild(myRenderer.domElement)
    myScene = new THREE.Scene()
    myCamera = new THREE.PerspectiveCamera(45, myAspect, 1, 5000)
    myCamera.position.z = 2500
    // 创建（绘制）辅助正交照相机
    myOrthographicCamera = new THREE.OrthographicCamera(0.5 * myFrustumSize * myAspect / -2, 0.5 * myFrustumSize * myAspect / 2,
      myFrustumSize / 2, myFrustumSize / -2, 150, 1000)
    myOrthographicCameraHelper = new THREE.CameraHelper(myOrthographicCamera)
    myScene.add(myOrthographicCameraHelper)
    // 绘制圆球
    mySphereMesh = new THREE.Mesh(new THREE.SphereBufferGeometry(200, 16, 8),
      new THREE.MeshBasicMaterial({ color: 'green', wireframe: true }))
    myScene.add(mySphereMesh)
    // 渲染圆球(及辅助正交照相机)
    this.animate()
  },
  created () {
    this.Init()
  }
}
}
</script>

<style lang="scss" scoped>
#myContainer {
  margin:0;
  padding:0;
}
</style>
