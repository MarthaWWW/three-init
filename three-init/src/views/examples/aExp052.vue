<!--
 * @Description：在场景中绘制旋转的圆柱体
-->
<template>
  <center id = "myContainer"></center>
</template>

<script>
import * as THREE from 'three'
let myWidth, myHeight, myRenderer, myCamera, myGeometry, myMaterial, myMesh, myLight, myScene, T0
export default {
  methods: {
    animate () {
      const T1 = new Date() // 本次时间
      const t = T1 - T0 // 两次时间差
      T0 = T1 // 把本次时间赋值给上次时间
      myMesh.rotateY(0.001 * t) // 旋转角速度0.001弧度每毫秒
      myRenderer.render(myScene, myCamera) // 执行渲染操作
      window.requestAnimationFrame(this.animate) // 请求再次执行渲染
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
      // 创建圆柱体
      myGeometry = new THREE.CylinderGeometry(80, 80, 100, 25)
      myMaterial = new THREE.MeshBasicMaterial({
        color: 'gray',
        wireframe: true
      })
      myMesh = new THREE.Mesh(myGeometry, myMaterial)
      myScene.add(myMesh)
      // 渲染(旋转)圆柱体
      T0 = new Date() // 上次时间
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
