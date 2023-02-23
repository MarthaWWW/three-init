<!--
 * @Description: 在场景中自定义光源绘制立方体
    创建渲染器——指定渲染器何处呈现——创建场景——创建光源——创建相机——创建立方体——创建材质——创建网格——开始渲染
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
    const myRenderer = new THREE.WebGLRenderer() // 创建渲染器
    const myWidth = 480 // 设置窗口宽度
    const myHeight = 320 // 设置窗口高度
    myRenderer.setSize(myWidth, myHeight) // 设置渲染区域
    myRenderer.setClearColor('white', 1) // 设置清空颜色
    document.getElementById('myContainer')?.appendChild(myRenderer.domElement)
    const myScene = new THREE.Scene() // 创建场景
    const myLight = new THREE.PointLight('red') // 创建红色光源
    myLight.position.set(400, 800, 300) // 设置光源位置
    myScene.add(myLight) // 在场景中添加光源
    const k = myWidth / myHeight // 计算窗口宽高比
    const s = 120 // 三维场景显示范围控制系数
    const myCamera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000) // 创建相机
    myCamera.position.set(400, 300, 200) // 设置相机位置
    myCamera.lookAt(myScene.position) // 设置相机观察的目标点
    const myGeometry = new THREE.BoxGeometry(100, 100, 100) // 创建立方体
    const myMaterial = new THREE.MeshLambertMaterial({ color: 0xFFBF00 }) // 创建材质
    const myMesh = new THREE.Mesh(myGeometry, myMaterial) // 依据之前创建的立方体和材质创建网格
    myScene.add(myMesh)
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
