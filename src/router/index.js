import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from "@/components/User"
import Department from "@/components/Department"
import DepartmentDemo from "@/components/DepartmentDemo"
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: "/user",
    component: User
  },
  {
    path: '/about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: "/department",
    component: Department
  },
  {
    path: "/dept",
    component: DepartmentDemo
  },
]
const router = new VueRouter({
  routes
})

export default router
