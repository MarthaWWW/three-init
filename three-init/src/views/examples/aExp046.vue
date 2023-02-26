<!--
 * @Description：在场景中围绕坐标轴旋转立方体
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
    const myWidth = 480; const myHeight = 320
    const myRenderer = new THREE.WebGLRenderer({ antialias: true })
    myRenderer.setSize(myWidth, myHeight)
    myRenderer.setClearColor('white', 1)
    document.getElementById('myContainer')?.appendChild(myRenderer.domElement)
    const myScene = new THREE.Scene()
    const k = myWidth / myHeight; const s = 120
    const myCamera = new THREE.OrthographicCamera(-s * k,
      s * k, s, -s, 1, 1000)
    myCamera.position.set(400, 300, 200)
    myCamera.lookAt(myScene.position)
    // 创建立方体
    const myGeometry = new THREE.BoxGeometry(100, 100, 100)
    const myMaterial = new THREE.MeshNormalMaterial()
    const myMesh = new THREE.Mesh(myGeometry, myMaterial)
    myScene.add(myMesh)
    // 使用定时器实现间隔渲染立方体
    setInterval(function () {
      myMesh.rotateX(0.01) // 按照指定的弧度围绕x轴旋转网格(立方体)
      myRenderer.render(myScene, myCamera)
    }, 120)
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
