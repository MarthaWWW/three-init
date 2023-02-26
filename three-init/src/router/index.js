import { createRouter, createWebHashHistory } from 'vue-router'
import Cube from '../views/examples/aExp001.vue'
import Cubes from '../views/examples/aExp002.vue'
import CameraHelper from '../views/examples/aExp003.vue'
import PerspectiveCubes from '../views/examples/aExp004.vue'
import CameraHelperPerspective from '../views/examples/aExp005.vue'
import PerspectiveGlobalPicture from '../views/examples/aExp006.vue'
import ZoomGlobalPicture from '../views/examples/aExp007.vue'
import GlobalVideo from '../views/examples/aExp008.vue'
import Stars from '../views/examples/aExp009.vue'
import SkyBox from '../views/examples/aExp010.vue'
import OneToSix from '../views/examples/aExp011.vue'
import Move from '../views/examples/aExp012.vue'
import Scale from '../views/examples/aExp013.vue'
import Rotate from '../views/examples/aExp014.vue'
/*
import Cube from '../views/examples/aExp015.vue'
import Cube from '../views/examples/aExp016.vue'
import Cube from '../views/examples/aExp017.vue'
import Cube from '../views/examples/aExp018.vue'
import Cube from '../views/examples/aExp019.vue'
import Cube from '../views/examples/aExp020.vue'
import Cube from '../views/examples/aExp021.vue'
import Cube from '../views/examples/aExp022.vue'
import Cube from '../views/examples/aExp023.vue'
import Cube from '../views/examples/aExp024.vue'
import Cube from '../views/examples/aExp025.vue'
import Cube from '../views/examples/aExp026.vue'
import Cube from '../views/examples/aExp027.vue'
import Cube from '../views/examples/aExp028.vue'
import Cube from '../views/examples/aExp029.vue'
import Cube from '../views/examples/aExp030.vue'
import Cube from '../views/examples/aExp031.vue'
import Cube from '../views/examples/aExp032.vue'
import Cube from '../views/examples/aExp033.vue'
import Cube from '../views/examples/aExp034.vue'
import Cube from '../views/examples/aExp035.vue'
import Cube from '../views/examples/aExp036.vue'
import Cube from '../views/examples/aExp037.vue'
import Cube from '../views/examples/aExp038.vue'
import Cube from '../views/examples/aExp039.vue'
import Cube from '../views/examples/aExp040.vue'
import Cube from '../views/examples/aExp041.vue'
import Cube from '../views/examples/aExp042.vue'
import Cube from '../views/examples/aExp043.vue'
import Cube from '../views/examples/aExp044.vue'
import Cube from '../views/examples/aExp045.vue'
import Cube from '../views/examples/aExp046.vue'
import Cube from '../views/examples/aExp047.vue'
import Cube from '../views/examples/aExp048.vue'
import Cube from '../views/examples/aExp049.vue'
import Cube from '../views/examples/aExp050.vue'
import Cube from '../views/examples/aExp051.vue'
import Cube from '../views/examples/aExp052.vue'
import Cube from '../views/examples/aExp053.vue'
import Cube from '../views/examples/aExp054.vue'
import Cube from '../views/examples/aExp055.vue'
import Cube from '../views/examples/aExp056.vue'
import Cube from '../views/examples/aExp057.vue'
import Cube from '../views/examples/aExp058.vue'
import Cube from '../views/examples/aExp059.vue'
import Cube from '../views/examples/aExp060.vue'
import Cube from '../views/examples/aExp061.vue'
import Cube from '../views/examples/aExp062.vue'
import Cube from '../views/examples/aExp063.vue'
import Cube from '../views/examples/aExp064.vue'
import Cube from '../views/examples/aExp065.vue'
import Cube from '../views/examples/aExp066.vue'
import Cube from '../views/examples/aExp067.vue'
import Cube from '../views/examples/aExp068.vue'
import Cube from '../views/examples/aExp069.vue'
import Cube from '../views/examples/aExp070.vue'
import Cube from '../views/examples/aExp071.vue'
import Cube from '../views/examples/aExp072.vue'
import Cube from '../views/examples/aExp073.vue'
import Cube from '../views/examples/aExp074.vue'
import Cube from '../views/examples/aExp075.vue'
import Cube from '../views/examples/aExp076.vue'
import Cube from '../views/examples/aExp077.vue'
import Cube from '../views/examples/aExp078.vue'
import Cube from '../views/examples/aExp079.vue'
import Cube from '../views/examples/aExp080.vue'
import Cube from '../views/examples/aExp081.vue'
import Cube from '../views/examples/aExp082.vue'
import Cube from '../views/examples/aExp083.vue'
import Cube from '../views/examples/aExp084.vue'
import Cube from '../views/examples/aExp085.vue'
import Cube from '../views/examples/aExp086.vue'
import Cube from '../views/examples/aExp087.vue'
import Cube from '../views/examples/aExp088.vue'
import Cube from '../views/examples/aExp089.vue'
import Cube from '../views/examples/aExp090.vue'
import Cube from '../views/examples/aExp091.vue'
import Cube from '../views/examples/aExp092.vue'
import Cube from '../views/examples/aExp093.vue'
import Cube from '../views/examples/aExp094.vue'
import Cube from '../views/examples/aExp095.vue'
import Cube from '../views/examples/aExp096.vue'
import Cube from '../views/examples/aExp097.vue'
import Cube from '../views/examples/aExp098.vue'
import Cube from '../views/examples/aExp099.vue'
import Cube from '../views/examples/aExp100.vue'
*/
import HomeList from '../views/HomeList.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeList,
    children: [
      {
        path: '/001',
        name: '001',
        component: Cube
      },
      {
        path: '/002',
        name: '002',
        component: Cubes
      },
      {
        path: '/003',
        name: '003',
        component: CameraHelper
      },
      {
        path: '/004',
        name: '004',
        component: PerspectiveCubes
      },
      {
        path: '/005',
        name: '005',
        component: CameraHelperPerspective
      },
      {
        path: '/006',
        name: '006',
        component: PerspectiveGlobalPicture
      },
      {
        path: '/007',
        name: '007',
        component: ZoomGlobalPicture
      },
      {
        path: '/008',
        name: '008',
        component: GlobalVideo
      },
      {
        path: '/009',
        name: '009',
        component: Stars
      },
      {
        path: '/010',
        name: '010',
        component: SkyBox
      },
      {
        path: '/011',
        name: '011',
        component: OneToSix
      },
      {
        path: '/012',
        name: '012',
        component: Move
      },
      {
        path: '/013',
        name: '013',
        component: Scale
      },
      {
        path: '/014',
        name: '014',
        component: Rotate
      },
      {
        path: '/015',
        name: '015',
        component: Cube
      },
      {
        path: '/016',
        name: '016',
        component: Cube
      },
      {
        path: '/017',
        name: '017',
        component: Cube
      },
      {
        path: '/018',
        name: '018',
        component: Cube
      },
      {
        path: '/019',
        name: '019',
        component: Cube
      },
      {
        path: '/020',
        name: '020',
        component: Cube
      }
    ]
  }

]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
