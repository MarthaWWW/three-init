<template>
  <el-container class="layout-container-demo" style="height:100%;padding-top:25px;padding-right:10px;padding-left:10px;">
    <el-aside width="260px">
      <el-scrollbar>
        <el-menu :default-openeds="['1']" style="height:750px;border-radius: 25px;">
          <el-sub-menu index="1">
            <template #title><div id="title-1">场景</div></template>
            <el-menu-item-group>
              <el-menu-item v-for="item in items1"  :key=item.index style="padding: 0px; padding-left:10px; "><div @click="gotoPage(item)">{{item.title}}</div></el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title><div id="title-2">几何体</div></template>
            <el-menu-item-group>
              <el-menu-item v-for="item in items2"  :key=item.index>{{item.message}}</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
          <el-sub-menu index="3">
            <template #title><div id="title-1">光源</div></template>
            <el-menu-item-group>
              <el-menu-item v-for="item in items3"  :key=item.index>{{item.message}}</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
           <el-sub-menu index="4">
            <template #title><div id="title-2">材质</div></template>
            <el-menu-item-group>
              <el-menu-item v-for="item in items4"  :key=item.index>{{item.message}}</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
           <el-sub-menu index="5">
            <template #title><div id="title-1">后期特效</div></template>
            <el-menu-item-group>
              <el-menu-item v-for="item in items5"  :key=item.index>{{item.message}}</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
           <el-sub-menu index="6">
            <template #title><div id="title-2">外部模型</div></template>
            <el-menu-item-group>
              <el-menu-item v-for="item in items6"  :key=item.index>{{item.message}}</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>
    </el-aside>

    <el-container style="height: 730px">
      <el-header id="webName">
        <div id="name">ThreeInit</div>
        <div id="propa">—— Begin your web3D development!</div>
      </el-header>
      <el-main style="background-color:white;border-radius: 30px; margin:60px;margin-top: 100px; box-shadow: 2px 2px 4px #5ca3b4 inset,-2px -2px 4px #5ca3b4 inset;">
        <router-view style="padding-top:50px;padding-bottom:40px"></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      items1: [{ title: '001-在场景中自定义光源绘制立方体', name: '001' },
        { title: '002-使用正交照相机绘制多个立方体', name: '002' },
        { title: '003-使用CameraHelper绘制正交相机', name: '003' },
        { title: '004-使用透视照相机绘制多个正方体', name: '004' },
        { title: '005-使用CameraHelper绘制透视照相机', name: '005' },
        { title: '006-使用透视照相机滚动浏览全景图', name: '006' },
        { title: '007-使用鼠标拖曳功能查看并缩放全景图', name: '007' },
        { title: '008-使用鼠标拖曳功能播放全景视频', name: '008' },
        { title: '009-在场景中添加粒子实现星空背景', name: '009' },
        { title: '010-使用六幅图像的天空盒设置背景', name: '010' },
        { title: '011-使用一个图像文件创建天空盒', name: '011' },
        { title: '012-使用TransformControls平移对象', name: '012' },
        { title: '013-使用TransformControls拉伸对象', name: '013' },
        { title: '014-使用TransformControls旋转对象', name: '014' },
        { title: '015-使用DragControls任意拖拽对象', name: '015' },
        { title: '016-使用OrbitControls任意缩放对象', name: '016' },
        { title: '017-使用OrbitControls旋转照相机', name: '017' },
        { title: '018-在多个对象中使用鼠标选择对象', name: '018' },
        { title: '019-在鼠标单击对象时改变对象颜色', name: '019' },
        { title: '020-使用线性雾设置场景的雾化效果', name: '020' },
        { title: '021-使用线性雾渲染场景的多个对象', name: '021' },
        { title: '022-使用指数雾设置场景的雾化效果', name: '022' },
        { title: '023-在场景中使用ArrowHelper绘制箭头', name: '023' },
        { title: '024-在场景中使用AxesHelper绘制坐标轴', name: '024' },
        { title: '025-使用CSS3DRenderer渲染全景图', name: '025' },
        { title: '026-使用CSS3DRenderer渲染三维对象', name: '026' },
        { title: '027-使用SVGRenderer渲染线条宽度', name: '027' },
        { title: '028-使用多个渲染器渲染相同的场景', name: '028' },
        { title: '029-在场景中统一设置所有对象的材质', name: '029' },
        { title: '030-在场景中统一调整所有对象的亮度', name: '030' },
        { title: '031-使用JSON格式保存和加载网格对象', name: '031' },
        { title: '032-使用JSON格式保存和加载整个场景', name: '032' }],
      items2: [{ title: '033-使用图像设置立方体的各个表面', name: '033' },
      { title: '034-使用多个图像设置立方体的表面', name: '034' },
      { title: '035-使用多个色彩设置立方体的表面', name: '035' },
      { title: '036-使用视频设置立方体的各个表面', name: '036' },
      { title: '037-使用颜色和视频设置立方体的各个表面', name: '037' },
      { title: '038-使用画布贴图设置立方体的各个表面', name: '038' },
      { title: '039-使用画布动画设置立方体的各个表面', name: '039' },
      { title: '040-使用天空盒背景设置立方体的各个表面', name: '040' },
      { title: '041-使用图像设置立方体的各个表面', name: '041' },
      { title: '042-使用图像设置立方体的各个表面', name: '042' },
      { title: '043-使用图像设置立方体的各个表面', name: '043' },
      { title: '044-使用图像设置立方体的各个表面', name: '044' },
      { title: '045-使用图像设置立方体的各个表面', name: '045' },
      { title: '046-使用图像设置立方体的各个表面', name: '046' },
      { title: '047-使用图像设置立方体的各个表面', name: '047' },
      { title: '048-使用图像设置立方体的各个表面', name: '048' },
      { title: '049-使用图像设置立方体的各个表面', name: '049' },
      { title: '050-使用图像设置立方体的各个表面', name: '050' },
      { title: '051-使用图像设置立方体的各个表面', name: '051' },
      { title: '052-使用图像设置立方体的各个表面', name: '052' },
      { title: '053-使用图像设置立方体的各个表面', name: '053' },
      { title: '054-使用图像设置立方体的各个表面', name: '054' },
      { title: '055-使用图像设置立方体的各个表面', name: '055' },
      { title: '056-使用图像设置立方体的各个表面', name: '056' },
      { title: '057-使用图像设置立方体的各个表面', name: '057' },
      { title: '058-使用图像设置立方体的各个表面', name: '058' },
      { title: '059-使用图像设置立方体的各个表面', name: '059' },
      { title: '060-使用图像设置立方体的各个表面', name: '060' },
      { title: '061-使用图像设置立方体的各个表面', name: '061' },
      { title: '062-使用图像设置立方体的各个表面', name: '062' },
      { title: '063-使用图像设置立方体的各个表面', name: '063' },
      { title: '064-使用图像设置立方体的各个表面', name: '064' },
      { title: '065-使用图像设置立方体的各个表面', name: '065' },
      { title: '066-使用图像设置立方体的各个表面', name: '066' },
      { title: '067-使用图像设置立方体的各个表面', name: '067' },
      { title: '068-使用图像设置立方体的各个表面', name: '068' },
      { title: '069-使用图像设置立方体的各个表面', name: '069' },
      { title: '070-使用图像设置立方体的各个表面', name: '070' },
      { title: '071-使用图像设置立方体的各个表面', name: '071' },
      { title: '072-使用图像设置立方体的各个表面', name: '072' },
      { title: '073-使用图像设置立方体的各个表面', name: '073' },
      { title: '074-使用图像设置立方体的各个表面', name: '074' },
      { title: '075-使用图像设置立方体的各个表面', name: '075' },
      { title: '076-使用图像设置立方体的各个表面', name: '076' },
      { title: '077-使用图像设置立方体的各个表面', name: '077' },
      { title: '078-使用图像设置立方体的各个表面', name: '078' },
      { title: '079-使用图像设置立方体的各个表面', name: '079' },
      { title: '080-使用图像设置立方体的各个表面', name: '080' },
      { title: '033-使用图像设置立方体的各个表面', name: '081' },
      { title: '033-使用图像设置立方体的各个表面', name: '082' },
      { title: '033-使用图像设置立方体的各个表面', name: '083' },
      { title: '033-使用图像设置立方体的各个表面', name: '084' },
      { title: '033-使用图像设置立方体的各个表面', name: '085' },
      { title: '033-使用图像设置立方体的各个表面', name: '086' },
      { title: '033-使用图像设置立方体的各个表面', name: '087' },
      { title: '033-使用图像设置立方体的各个表面', name: '088' },
      { title: '033-使用图像设置立方体的各个表面', name: '089' },
      { title: '033-使用图像设置立方体的各个表面', name: '090' },
      { title: '033-使用图像设置立方体的各个表面', name: '091' },
      { title: '033-使用图像设置立方体的各个表面', name: '092' },
      { title: '033-使用图像设置立方体的各个表面', name: '093' },
      { title: '033-使用图像设置立方体的各个表面', name: '094' },
      { title: '033-使用图像设置立方体的各个表面', name: '095' },
      { title: '033-使用图像设置立方体的各个表面', name: '096' },
      { title: '033-使用图像设置立方体的各个表面', name: '097' },
      { title: '033-使用图像设置立方体的各个表面', name: '098' },
      { title: '033-使用图像设置立方体的各个表面', name: '099' },
      { title: '033-使用图像设置立方体的各个表面', name: '100' },
      { title: '033-使用图像设置立方体的各个表面', name: '101' },
      { title: '033-使用图像设置立方体的各个表面', name: '102' },
      { title: '033-使用图像设置立方体的各个表面', name: '103' },
      { title: '033-使用图像设置立方体的各个表面', name: '104' },
      { title: '033-使用图像设置立方体的各个表面', name: '105' },
      { title: '033-使用图像设置立方体的各个表面', name: '106' },
      { title: '033-使用图像设置立方体的各个表面', name: '107' },
      { title: '033-使用图像设置立方体的各个表面', name: '108' },
      { title: '033-使用图像设置立方体的各个表面', name: '109' },
      { title: '033-使用图像设置立方体的各个表面', name: '110' },
      { title: '033-使用图像设置立方体的各个表面', name: '111' },
      { title: '033-使用图像设置立方体的各个表面', name: '112' },
      { title: '033-使用图像设置立方体的各个表面', name: '113' },
      { title: '033-使用图像设置立方体的各个表面', name: '114' },
      { title: '033-使用图像设置立方体的各个表面', name: '115' },
      { title: '033-使用图像设置立方体的各个表面', name: '116' },
      { title: '033-使用图像设置立方体的各个表面', name: '117' },
      { title: '033-使用图像设置立方体的各个表面', name: '118' },
      { title: '033-使用图像设置立方体的各个表面', name: '119' },
      { title: '033-使用图像设置立方体的各个表面', name: '120' },
      { title: '033-使用图像设置立方体的各个表面', name: '121' },
      { title: '033-使用图像设置立方体的各个表面', name: '122' },
      { title: '033-使用图像设置立方体的各个表面', name: '123' },
      { title: '033-使用图像设置立方体的各个表面', name: '124' },
      { title: '033-使用图像设置立方体的各个表面', name: '125' },
      { title: '033-使用图像设置立方体的各个表面', name: '126' },
      { title: '033-使用图像设置立方体的各个表面', name: '127' },
      { title: '033-使用图像设置立方体的各个表面', name: '128' },
      { title: '033-使用图像设置立方体的各个表面', name: '129' },
      { title: '033-使用图像设置立方体的各个表面', name: '130' },
      { title: '033-使用图像设置立方体的各个表面', name: '131' },
      { title: '033-使用图像设置立方体的各个表面', name: '132' },
      { title: '033-使用图像设置立方体的各个表面', name: '133' },
      { title: '033-使用图像设置立方体的各个表面', name: '134' },
      { title: '033-使用图像设置立方体的各个表面', name: '135' },
      { title: '033-使用图像设置立方体的各个表面', name: '136' },
      { title: '033-使用图像设置立方体的各个表面', name: '137' },
      { title: '033-使用图像设置立方体的各个表面', name: '138' },
      { title: '033-使用图像设置立方体的各个表面', name: '139' }
    ]


    }
  },
  methods: {
    gotoPage (item) {
      this.$router.push({ name: item.name })
    }
  }
}
</script>

<style scoped>
@font-face {
  font-family: Xiaobai;
  src: url(../../public/font/LittleWhite.ttf);
  }
@font-face {
  font-family: Kai;
  src: url(../../public/font/Kai.ttf);
  }
.layout-container-demo .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);

}
.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}
.layout-container-demo .el-menu {
  border-right: none;
}
.layout-container-demo .el-main {
  padding: 0;
}
.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
#webName{
  border-radius: 50px;
  background-color: cornflowerblue;
  color:whitesmoke;
  height: 65px;
  margin-left: 20px;
}
#name{
  font-family: Xiaobai;
  text-align: left;
  font-size: 46px;
  padding-left: 220px;
  float: left;
}
#propa{
  font-family: Kai;
  text-align: left;
  font-size: 24px;
  float: left;
  margin-left: 150px;
  padding-top:23px;
}
#title-1{
  width:240px;
  text-align: center;
  padding-left: 5px;
  font-size: 30px;
  font-family: Kai;
  font-weight: 500;
  border-radius: 20px;
  background-color: rgb(158, 240, 213);
}
#title-2{
  width:240px;
  text-align: center;
  padding-left: 5px;
  font-size: 30px;
  font-family: Kai;
  font-weight: 500;
  border-radius: 20px;
  background-color: rgb(247, 191, 211);
}
</style>
