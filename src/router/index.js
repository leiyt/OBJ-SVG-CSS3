import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ObjDemo from '@/components/objDemo'
import Topology from '@/components/topo'
import Tree from '@/components/aTree'
import GdMap from '@/views/Gdmap'
import Egg from '@/views/egg'
import Chart from '@/views/chart'
import Loop from '@/components/menuLoop'
import Cat from '@/components/cat'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'obj',
      component: ObjDemo
    },
    {
      path: '/obj',
      name: 'objDemo',
      component: ObjDemo
    },
    {
      path: '/hello',
      name: 'hello',
      component: HelloWorld
    },
    {
      path: '/tree',
      name: 'tree',
      component: Tree
    },
    {
      path: '/cat',
      name: 'cat',
      component: Cat
    },
    {
      path: '/topo',
      name: 'topology',
      component: Topology
    },
    {
      path: '/map',
      name: 'map',
      component: GdMap
    },
    {
      path: '/egg',
      name: 'egg',
      component: Egg
    },
    {
      path: '/chart',
      name: 'chart',
      component: Chart
    },
    {
      path: '/loop',
      name: 'loop',
      component: Loop
    }
  ]
})
