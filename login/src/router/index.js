import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Acceder from '../views/Aut/Acceder.vue'
import Registrarse from '../views/Aut/Registrarse.vue'
import dash from '../views/dash.vue'
import firebase from 'firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Acceder',
    name: 'Acceder',
    component: Acceder
  },
  {
    path: '/Registrarse',
    name: 'Registrarse',
    component: Registrarse
  },
  {
    path: '/dash',
    name: 'dash',
    component: dash,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next)=>{
  if(to.matched.some(ruta=>ruta.meta.requiresAuth)){
    const user = firebase.auth().currentUser;
    if(user){
      next();
    }else{
      next({
        name: 'Home'
      })
    }
  }else{
    next();
  }
})
export default router
