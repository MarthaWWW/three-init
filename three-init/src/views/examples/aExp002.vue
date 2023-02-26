<!--
 * @Description: 使用正交照相机绘制多个立方体
-->
<template>
  <center id = "myContainer"></center>
</template>

<script>
import * as THREE from 'three'
let myRenderer, myCamera, myGeometry1, myGeometry2, myMaterial1, myMaterial2, myMesh1, myMesh2, myScene
export default {
  methods:
{
  Init () {
    // 创建渲染器
    myRenderer = new THREE.WebGLRenderer({ antialias: true })
    myRenderer.setSize(659, 370)
    myRenderer.setClearColor('white', 1.0)
    document.getElementById('myContainer')?.appendChild(myRenderer.domElement)
    myScene = new THREE.Scene()
    // 创建正交照相机
    const width = window.innerWidth
    console.log(width)
    const height = window.innerHeight
    console.log(height)
    const k = width / height
    const s = 24
    myCamera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000) // 本语句用于创造正交照相机
    // 语法格式THREE.OrthographicCamera(left, right, top, bottom, near, far)
    // left——渲染空间的左边界
    // right——右边界
    // top——上边界
    // bottom——下边界
    // near——距离照相机多远的位置开始渲染 default=0.1
    // far——距离照相机多远的位置截止渲染 default=1000
    // left-right, top-bottom互为相反数，让网格模型能够显示在中间位置
    myCamera.position.set(-1.66, 2.21, 18.1)
    myCamera.lookAt(myScene.position)
    // 创建第一个立方体
    myGeometry1 = new THREE.BoxGeometry(16, 16, 16)
    myMaterial1 = new THREE.MeshNormalMaterial()
    myMesh1 = new THREE.Mesh(myGeometry1, myMaterial1)
    myMesh1.translateX(-14)
    myScene.add(myMesh1)
    // 创建第二个立方体
    myGeometry2 = new THREE.BoxGeometry(16, 16, 16)
    myMaterial2 = new THREE.MeshNormalMaterial()
    myMesh2 = new THREE.Mesh(myGeometry2, myMaterial2)
    myMesh2.translateX(14)
    myScene.add(myMesh2)
    // 渲染两个相同大小的立方体图形
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
