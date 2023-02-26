<!--
 * @Description：在场景中添加粒子实现星空背景
-->
<template>
  <center id = "myContainer"></center>
</template>

<script>
import * as THREE from '../../../public/ThreeJS/three'
const myAspect = window.innerWidth / window.innerHeight
let myCamera, myScene, myRenderer, mySphereMesh, myGeometry
export default {
  methods:
{
  // 渲染绿色圆球
  animate () {
    requestAnimationFrame(this.animate)
    const r = Date.now() * 0.001
    mySphereMesh.position.x = 900 * Math.cos(r)
    mySphereMesh.position.z = 900 * Math.sin(r)
    mySphereMesh.position.y = 900 * Math.sin(r)
    myRenderer.render(myScene, myCamera)
  },
  Init () {
    myRenderer = new THREE.WebGLRenderer({ antialias: true })
    myRenderer.setSize(712, 400)
    myRenderer.setClearColor('black', 1.0)
    document.getElementById('myContainer')?.appendChild(myRenderer.domElement)
    myScene = new THREE.Scene()
    myCamera = new THREE.PerspectiveCamera(45, myAspect, 1, 5000)
    myCamera.position.z = 2500
    // 绘制绿色圆球
    mySphereMesh = new THREE.Mesh(new THREE.SphereBufferGeometry(400, 16, 8),
      new THREE.MeshBasicMaterial({ color: 'green', wireframe: true }))
    myScene.add(mySphereMesh)
    // 绘制星空背景
    myGeometry = new THREE.Geometry()
    for (let i = 0; i < 5000; i++) {
      const myVector3 = new THREE.Vector3()
      myVector3.x = THREE.Math.randFloatSpread(2000)
      myVector3.y = THREE.Math.randFloatSpread(2000)
      myVector3.z = THREE.Math.randFloatSpread(2000)
      myGeometry.vertices.push(myVector3)
    }
    const myPoints = new THREE.Points(myGeometry,
      new THREE.PointsMaterial({ color: 0xffffff }))
    myScene.add(myPoints)
    this.animate()
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
