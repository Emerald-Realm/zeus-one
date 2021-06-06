import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import trackRecord from '../components/homepage/trackRecord.vue'
import TheProjectPage from '../views/TheProjectPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/track',
    name: 'track Record',
    component: trackRecord
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/project',
    name: 'Project',
    component: TheProjectPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,

  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }else {
      return { x:0, y:0 }
    }
  }
})

export default router
