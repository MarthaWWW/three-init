<!--
 * @Description：使用CameraHelper绘制透视照相机
-->
<template>
  <center id = "myContainer"></center>
</template>

<script>
import * as THREE from '../../../public/ThreeJS/three.js'
let myCamera, myScene, myRenderer, mySphereMesh, myAspect, myPerspectiveCamera, myPerspectiveCameraHelper
export default {
  methods: {
    Init () {
      myAspect = window.innerWidth / window.innerHeight
      // 创建渲染器
      myRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      myRenderer.setSize(659, 370)
      myRenderer.setClearColor('white', 1.0)
      document.getElementById('myContainer')?.appendChild(myRenderer.domElement)
      // 创建（绘制）透视照相机
      myPerspectiveCamera = new THREE.PerspectiveCamera(45, myAspect, 250, 1000)
      myPerspectiveCameraHelper = new THREE.CameraHelper(myPerspectiveCamera)
      myScene.add(myPerspectiveCameraHelper)
      // 绘制绿色圆球
      mySphereMesh = new THREE.Mesh(new THREE.SphereBufferGeometry(200, 16, 8),
        new THREE.MeshBasicMaterial({ color: 'green', wireframe: true }))
      myScene.add(mySphereMesh)
      // 渲染圆球(及透视照相机)
      animate()
      function animate () {
        requestAnimationFrame(animate)
        const r = Date.now() * 0.0005
        mySphereMesh.position.x = 700 * Math.cos(r)
        mySphereMesh.position.z = 700 * Math.sin(r)
        mySphereMesh.position.y = 700 * Math.sin(r)
        myPerspectiveCamera.lookAt(mySphereMesh.position)
        myRenderer.setViewport(0, 0, 659, 370)
        myRenderer.render(myScene, myCamera)
      }
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
}
</style>
