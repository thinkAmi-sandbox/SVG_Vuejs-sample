import Vue from 'vue'
import VueRouter from 'vue-router'
import SvgFile from '../views/SvgFileView'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'SvgFile',
    component: SvgFile,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
