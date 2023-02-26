<!--
 * @Description：使用透视照相机绘制多个正方体
 61
-->
<template>
  <center id = "myContainer"></center>
</template>

<script>
import * as THREE from 'three'
let myRenderer, myCamera, myGeometry1, myMaterial1, myMesh1, myGeometry2, myMaterial2, myMesh2, myGeometry3, myMaterial3, myMesh3, myScene
export default {
  methods:
{
  Init () {
    myRenderer = new THREE.WebGLRenderer({ antialias: true })
    myRenderer.setSize(712, 400)
    myRenderer.setClearColor('white', 1.0)
    document.getElementById('myContainer')?.appendChild(myRenderer.domElement)
    myScene = new THREE.Scene()
    // 创建透视照相机
    myCamera = new THREE.PerspectiveCamera(45,
      window.innerWidth / window.innerHeight, 0.1, 1000)
    myCamera.position.set(40.06, 20.92, 42.68)
    myCamera.lookAt(new THREE.Vector3(0, 0, 0))
    // 创建第一个立方体
    myGeometry1 = new THREE.BoxGeometry(16, 16, 16)
    myMaterial1 = new THREE.MeshNormalMaterial()
    myMesh1 = new THREE.Mesh(myGeometry1, myMaterial1)
    myMesh1.translateX(-40)
    myScene.add(myMesh1)
    // 创建第二个立方体
    myGeometry2 = new THREE.BoxGeometry(16, 16, 16)
    myMaterial2 = new THREE.MeshNormalMaterial()
    myMesh2 = new THREE.Mesh(myGeometry2, myMaterial2)
    myMesh2.translateX(-10)
    myScene.add(myMesh2)
    // 创建第三个立方体
    myGeometry3 = new THREE.BoxGeometry(16, 16, 16)
    myMaterial3 = new THREE.MeshNormalMaterial()
    myMesh3 = new THREE.Mesh(myGeometry3, myMaterial3)
    myMesh3.translateX(20)
    myScene.add(myMesh3)
    // 渲染三个相同大小的立方体图形
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
