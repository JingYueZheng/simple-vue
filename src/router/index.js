import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect:"/login",
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/login/register.vue')
  }
]

const router = new VueRouter({
  mode:'hash',
  routes
})

export default router
