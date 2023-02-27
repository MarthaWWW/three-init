<!--
 * @Description: 使用一个图像文件创建天空盒
 将一个图像文件拆分成6个
-->
<template>
  <center id = "myContainer"></center>
</template>

<script>
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
let myRenderer, myCamera, myScene, myMouse, myOrbitControls, myImage, myCanvas, myContext, myMesh
let myMaterials = []
let myTextures = []
const url = require('../../../public/images/img120.jpg')
export default {
  methods:
{
  animate () {
    requestAnimationFrame(this.animate)
    myRenderer.render(myScene, myCamera)
  },
  Init () {
    // 创建渲染器
    myRenderer = new THREE.WebGLRenderer({ antialias: true })
    myRenderer.setPixelRatio(window.devicePixelRatio)
    myRenderer.setSize(712, 400)
    document.getElementById('myContainer')?.append(myRenderer.domElement)
    myScene = new THREE.Scene()
    myCamera = new THREE.PerspectiveCamera(90,
      window.innerWidth / window.innerHeight, 0.1, 1000)
    myCamera.position.z = 0.001
    myOrbitControls = new OrbitControls(myCamera,myRenderer.domElement) // eslint-disable-line no-unused-vars
    // 创建空白的6个贴图
    myTextures = []
    for (let i = 0; i < 6; i++) { myTextures[i] = new THREE.Texture() }
    myImage = new Image()
    // img120.jpg文件在水平方向上包含六幅图像，可以在看图工具中仔细查看
    myImage.src = url
    myImage.onload = function () {
      for (let i = 0; i < myTextures.length; i++) {
        myCanvas = document.createElement('canvas')
        myContext = myCanvas.getContext('2d')
        myCanvas.height = myImage.height
        myCanvas.width = myImage.height
        // 从img120.jpg中取出第i幅图像
        myContext.drawImage(myImage, myImage.height * i, 0, myImage.height,
          myImage.height, 0, 0, myImage.height, myImage.height)
        myTextures[i].image = myCanvas
        myTextures[i].needsUpdate = true
      }
    }
    // 使用6幅贴图创建天空盒材质
    myMaterials = []
    for (let i = 0; i < 6; i++) {
      myMaterials.push(new THREE.MeshBasicMaterial({ map: myTextures[i] }))
    }
    // 使用6幅贴图创建天空盒
    myMesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), myMaterials)
    // 可以使用myMesh.geometry.scale(1,1,-1)或myMesh.geometry.scale(1,1,-1)
    // 即六幅图像在立方体的里面，而不是外面（myMesh.geometry.scale(1,1,1);）
    myMesh.geometry.scale(1, 1, -1)
    myScene.add(myMesh)
    // 渲染天空盒
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
