<!--
 * @Description：使用透视照相机滚动浏览全景图
 不清楚

-->
<template>
  <div id="myContainer"></div>
</template>

<script>
import * as THREE from 'three'
let myCamera, myScene, myRenderer, myTexture
let lon = 0; let lat = 0; let phi = 0; let theta = 0
const myTextureLoader = new THREE.TextureLoader()
const url = require('../../../public/images/img050.jpg')

export default {
  methods: {
    animate () {
      requestAnimationFrame(this.animate)
      lon += 0.15// 设置在经度方向的增量
      lat = Math.max(-85, Math.min(85, lat))
      phi = THREE.MathUtils.degToRad(90 - lat)
      theta = THREE.MathUtils.degToRad(lon)
      myCamera.position.x = 100 * Math.sin(phi) * Math.cos(theta)
      myCamera.position.y = 100 * Math.cos(phi)
      myCamera.position.z = 100 * Math.sin(phi) * Math.sin(theta)
      myCamera.lookAt(myScene.position)
      myRenderer.render(myScene, myCamera)
    },
    Init () {
      myRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      myRenderer.setSize(712, 400)
      document.getElementById('myContainer')?.append(myRenderer.domElement)
      myCamera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 1, 1000)
      myScene = new THREE.Scene()
      // 使用全景图设置场景背景
      myTexture = myTextureLoader.load(url, () => {
        const rt = new THREE.WebGLCubeRenderTarget(400)
        rt.fromEquirectangularTexture(myRenderer, myTexture)
        myScene.background = rt.myTexture
      })
      myScene.background = new THREE.WebGLCubeRenderTarget(400).fromEquirectangularTexture(myRenderer, myTexture)
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

<style lang="scss" scoped>
#myContainer {
  margin:0;
  padding:0;
}
</style>
