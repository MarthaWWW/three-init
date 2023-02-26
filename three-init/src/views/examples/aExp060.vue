<!--
 * @Description: 在场景中同时绘制球体和圆柱体
-->
<template>
  <center id = "myContainer"></center>
</template>

<script>
import * as THREE from 'three'
export default {
  methods:
{
  Init () {
    // 创建渲染器
    const myRenderer = new THREE.WebGLRenderer({ antialias: true })
    const myWidth = 480; const myHeight = 320
    myRenderer.setSize(myWidth, myHeight)
    myRenderer.setClearColor('white', 1)
    document.getElementById('myContainer')?.appendChild(myRenderer.domElement)
    const myScene = new THREE.Scene()
    const myLight = new THREE.PointLight('white')
    myLight.position.set(400, 800, 300)
    myScene.add(myLight)
    const k = myWidth / myHeight; const s = 120
    const myCamera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000)
    myCamera.position.set(400, 300, 200)
    myCamera.lookAt(myScene.position)
    // 创建球体
    const mySphereGeometry = new THREE.SphereGeometry(60, 40, 40)
    const mySphereMaterial = new THREE.MeshLambertMaterial({ color: 'blue' })
    const mySphereMesh = new THREE.Mesh(mySphereGeometry, mySphereMaterial)
    mySphereMesh.translateY(-100)
    mySphereMesh.translateX(-180)
    myScene.add(mySphereMesh)
    // 创建圆柱体
    const myCylinderGeometry = new THREE.CylinderGeometry(50, 50, 100, 25)
    const myCylinderMaterial = new THREE.MeshLambertMaterial({ color: 'green' })
    const myCylinderMesh = new THREE.Mesh(myCylinderGeometry, myCylinderMaterial)
    myCylinderMesh.translateY(120)
    myCylinderMesh.translateX(200)
    myScene.add(myCylinderMesh)
    // 渲染球体和圆柱体
    myRenderer.render(myScene, myCamera)
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
