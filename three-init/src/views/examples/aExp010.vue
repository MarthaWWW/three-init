<!--
 * @Description：使用六幅图像的天空盒设置背景
-->
<template>
<center id = "myContainer"></center>
</template>

<script>
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
let myRenderer, myCamera, myScene, myOrbitControls, myCubeLoader, myImages, myAxesHelper,
  myGeometry, myLoader, myMap, myMaterial
let urls = [require('../../../public/images/img081right.jpg'), require('../../../public/images/img082left.jpg'),
  require('../../../public/images/img083top.jpg'), require('../../../public/images/img084bottom.jpg'), require('../../../public/images/img085front.jpg'), require('../../../public/images/img086back.jpg')]
let url = require('../../../public/images/img002.jpg')

export default {
  methods:
{
  Init () {
    myRenderer = new THREE.WebGLRenderer({ antialias: true })
    myRenderer.setPixelRatio(window.devicePixelRatio)
    myRenderer.setSize(712, 400)
    myRenderer.setClearColor(0xeeeeee)
    document.getElementById('myContainer')?.appendChild(myRenderer.domElement)
    myCamera = new THREE.PerspectiveCamera(45,
      window.innerWidth / window.innerHeight, 0.1, 1000)
    myCamera.position.set(10, 10, 15)
    myOrbitControls = new OrbitControls(myCamera, myRenderer.domElement)
    myCubeLoader = new THREE.CubeTextureLoader()
    // 六幅图像分别是朝前posz、朝后negz、朝上posy、朝下negy、朝右posx和朝左negx
    myImages = myCubeLoader.load(urls)
    myScene = new THREE.Scene()
    myScene.background = myImages
    // 绘制三维坐标轴
    myAxesHelper = new THREE.AxesHelper(50)
    myScene.add(myAxesHelper)
    // 添加立方体
    myGeometry = new THREE.BoxGeometry(4, 4, 4)
    myLoader = new THREE.TextureLoader()
    myMap = myLoader.load(url)
    myMaterial = new THREE.MeshBasicMaterial({ map: myMap })
    myScene.add(new THREE.Mesh(myGeometry, myMaterial))
    this.animate()
  },
  animate () {
    myOrbitControls.update()
    myRenderer.render(myScene, myCamera)
    requestAnimationFrame(this.animate)
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
