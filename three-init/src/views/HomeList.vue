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
      { title: '041-根据索引设置立方体face的材质', name: '041' },
      { title: '042-隐藏或显示立方体的指定表面', name: '042' },
      { title: '043-在场景中根据透明度绘制立方体', name: '043' },
      { title: '044-在场景中绘制圆角化的立方体', name: '044' },
      { title: '045-在场景中绘制居中显示的魔方', name: '045' },
      { title: '046-在场景中围绕坐标轴旋转立方体', name: '046' },
      { title: '047-在场景中根据名称旋转立方体', name: '047' },
      { title: '048-在场景中绘制普通的圆柱体', name: '048' },
      { title: '049-在场景中绘制被切割的圆柱体', name: '049' },
      { title: '050-在场景中根据圆柱体绘制圆台', name: '050' },
      { title: '051-在场景中根据圆柱体绘制沙漏', name: '051' },
      { title: '052-在场景中绘制旋转的圆柱体', name: '052' },
      { title: '053-在场景中实现动态缩放圆柱体', name: '053' },
      { title: '054-在场景中绘制普通的圆锥体', name: '054' },
      { title: '055-在场景中绘制被切割的圆锥体', name: '055' },
      { title: '056-在经度方向上根据弧度绘制球体', name: '056' },
      { title: '057-在纬度方向上根据弧度绘制球体', name: '057' },
      { title: '058-在经纬度方向上根据弧度绘制球体', name: '058' },
      { title: '059-在场景中以嵌套方式绘制多个球体', name: '059' },
      { title: '060-在场景中', name: '060' },
      { title: '061-在场景中', name: '061' },
      { title: '062-在场景中', name: '062' },
      { title: '063-在场景中', name: '063' },
      { title: '064-在场景中', name: '064' },
      { title: '065-在场景中', name: '065' },
      { title: '066-在场景中', name: '066' },
      { title: '067-在场景中', name: '067' },
      { title: '068-在场景中', name: '068' },
      { title: '069-在场景中', name: '069' },
      { title: '070-在场景中', name: '070' },
      { title: '071-在场景中', name: '071' },
      { title: '072-在场景中', name: '072' },
      { title: '073-在场景中', name: '073' },
      { title: '074-在场景中', name: '074' },
      { title: '075-在场景中', name: '075' },
      { title: '076-在场景中', name: '076' },
      { title: '077-在场景中', name: '077' },
      { title: '078-在场景中', name: '078' },
      { title: '079-在场景中', name: '079' },
      { title: '080-在场景中', name: '080' },
      { title: '081-在场景中', name: '081' },
      { title: '082-使用图像设置立方体的各个表面', name: '082' },
      { title: '083-使用图像设置立方体的各个表面', name: '083' },
      { title: '084-使用图像设置立方体的各个表面', name: '084' },
      { title: '085-使用图像设置立方体的各个表面', name: '085' },
      { title: '086-使用图像设置立方体的各个表面', name: '086' },
      { title: '087-使用图像设置立方体的各个表面', name: '087' },
      { title: '088-使用图像设置立方体的各个表面', name: '088' },
      { title: '089-使用图像设置立方体的各个表面', name: '089' },
      { title: '090-使用图像设置立方体的各个表面', name: '090' },
      { title: '091-使用图像设置立方体的各个表面', name: '091' },
      { title: '092-使用图像设置立方体的各个表面', name: '092' },
      { title: '093-使用图像设置立方体的各个表面', name: '093' },
      { title: '094-使用图像设置立方体的各个表面', name: '094' },
      { title: '095-使用图像设置立方体的各个表面', name: '095' },
      { title: '096-使用图像设置立方体的各个表面', name: '096' },
      { title: '097-使用图像设置立方体的各个表面', name: '097' },
      { title: '098-使用图像设置立方体的各个表面', name: '098' },
      { title: '099-使用图像设置立方体的各个表面', name: '099' },
      { title: '100-使用图像设置立方体的各个表面', name: '100' },
      { title: '101-使用图像设置立方体的各个表面', name: '101' },
      { title: '102-使用图像设置立方体的各个表面', name: '102' },
      { title: '103-使用图像设置立方体的各个表面', name: '103' },
      { title: '104-使用图像设置立方体的各个表面', name: '104' },
      { title: '105-使用图像设置立方体的各个表面', name: '105' },
      { title: '106-使用图像设置立方体的各个表面', name: '106' },
      { title: '107-使用图像设置立方体的各个表面', name: '107' },
      { title: '108-使用图像设置立方体的各个表面', name: '108' },
      { title: '109-使用图像设置立方体的各个表面', name: '109' },
      { title: '110-使用图像设置立方体的各个表面', name: '110' },
      { title: '111-使用图像设置立方体的各个表面', name: '111' },
      { title: '112-使用图像设置立方体的各个表面', name: '112' },
      { title: '112-使用图像设置立方体的各个表面', name: '113' },
      { title: '114-使用图像设置立方体的各个表面', name: '114' },
      { title: '115-使用图像设置立方体的各个表面', name: '115' },
      { title: '116-使用图像设置立方体的各个表面', name: '116' },
      { title: '117-使用图像设置立方体的各个表面', name: '117' },
      { title: '118-使用图像设置立方体的各个表面', name: '118' },
      { title: '119-使用图像设置立方体的各个表面', name: '119' },
      { title: '120-使用图像设置立方体的各个表面', name: '120' },
      { title: '121-使用图像设置立方体的各个表面', name: '121' },
      { title: '122-使用图像设置立方体的各个表面', name: '122' },
      { title: '123-使用图像设置立方体的各个表面', name: '123' },
      { title: '124-使用图像设置立方体的各个表面', name: '124' },
      { title: '125-使用图像设置立方体的各个表面', name: '125' },
      { title: '126-使用图像设置立方体的各个表面', name: '126' },
      { title: '127-使用图像设置立方体的各个表面', name: '127' },
      { title: '128-使用图像设置立方体的各个表面', name: '128' },
      { title: '129-使用图像设置立方体的各个表面', name: '129' },
      { title: '130-使用图像设置立方体的各个表面', name: '130' },
      { title: '131-使用图像设置立方体的各个表面', name: '131' },
      { title: '132-使用图像设置立方体的各个表面', name: '132' },
      { title: '133-使用图像设置立方体的各个表面', name: '133' },
      { title: '134-使用图像设置立方体的各个表面', name: '134' },
      { title: '135-使用图像设置立方体的各个表面', name: '135' },
      { title: '136-使用图像设置立方体的各个表面', name: '136' },
      { title: '137-使用图像设置立方体的各个表面', name: '137' },
      { title: '138-使用图像设置立方体的各个表面', name: '138' },
      { title: '139-使用图像设置立方体的各个表面', name: '139' }
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
