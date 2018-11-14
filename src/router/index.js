/**
 * @author vrma
 * @description 路由管理
 */
import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import VueElTable from '@/components/VueElTable'
import VueElTab from '@/components/VueElTab'

Vue.use(Router)

/**
 * @name 路由映射表
 * @description 暴露出去给权限控制使用
 */
export const constantRouterMap = [{
  path: '/',
  name: 'Dashboard',
  component: Dashboard
}, {
  path: '/table',
  name: 'VueElTable',
  component: VueElTable
}, {
  path: '/tab',
  name: 'VueElTab',
  component: VueElTab
}]

export default new Router({
  routes: constantRouterMap
})
