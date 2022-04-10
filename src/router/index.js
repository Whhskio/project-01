import Vue from 'vue'
import VueRouter from 'vue-router'
import Whh from './Whh.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/whh', component: Whh }
]

const router = new VueRouter({
  routes
})

export default router
