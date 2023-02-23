<template>
  <el-container class="layout-container-demo" style="height:100%;padding-top:25px;padding-right:10px">
    <el-aside width="240px">
      <el-scrollbar>
        <el-menu :default-openeds="['1']">
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

    <el-container>
      <el-header id="webName">
        <div id="name">ThreeInit</div>
        <div id="propa">—— Begin your web3D development!</div>
      </el-header>
      <el-main style="border-radius: 30px; margin:60px;margin-top: 80px; box-shadow: 2px 2px 4px #5ca3b4 inset,-2px -2px 4px #5ca3b4 inset;">
        <router-view style="padding-top:10px;"></router-view>s
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      items1: [{ title: '001-在场景中自定义光源绘制立方体', name: '001' }, { message: 'Option 2' }]
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
