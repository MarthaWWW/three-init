<!--
 * @Description：在场景中绘制持续旋转的球体
-->
<template>
  <center id = "myContainer"></center>
</template>

<script>
import * as THREE from 'three'
let myWidth, myHeight, myRenderer, myCamera, myGeometry, myMaterial, myMesh, myLight, myScene
export default {
  methods:
{
  animate () {
    myMesh.rotateY(0.01)						// 每次绕y轴旋转0.01弧度
    myRenderer.render(myScene, myCamera)
    requestAnimationFrame(this.animate)
  },
  Init () {
    myWidth = 480
    myHeight = 320
    const k = myWidth / myHeight
    const s = 120
    // 创建渲染器
    myRenderer = new THREE.WebGLRenderer()
    myRenderer.setSize(myWidth, myHeight)
    myRenderer.setClearColor('white', 1)
    document.getElementById('myContainer')?.appendChild(myRenderer.domElement)
    myScene = new THREE.Scene()
    myLight = new THREE.PointLight('white')
    myLight.position.set(400, 800, 300)
    myScene.add(myLight)
    myCamera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000)
    myCamera.position.set(400, 300, 200)
    myCamera.lookAt(myScene.position)
    // 创建球体
    myGeometry = new THREE.SphereGeometry(80, 32, 32)
    myMaterial = new THREE.MeshNormalMaterial({ wireframe: true, transparent: true })
    myMesh = new THREE.Mesh(myGeometry, myMaterial)
    myScene.add(myMesh)
    // 渲染(旋转)球体
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
