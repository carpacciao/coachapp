import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Auth from '@/views/Auth'
import Store from '../stores/store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        desc: 'Coding App - Home'
      }
    },
    {
      path: '/auth',
      name: 'Auth',
      component: Auth,
      meta: {
        desc: 'Coding App - Authentification'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {

  if (!Store.state.session.logged && to.path !== '/auth') {
    next(false)
  } else {
    next()
  }
  // if (Store.state.session.logged === false && router.currentRoute.fullPath !== '/auth') {
  //   router.push('/auth')
  // }
})

export default router
