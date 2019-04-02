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
    },
    {
      path: '/register',
      name: 'register',
      component: Auth,
      meta: {
        desc: 'Coding App - Registering'
      }
    }
  ]
})

// auth middleware
router.beforeEach((to, from, next) => {
  if (!Store.state.session.logged) {
    if (to.path === '/auth' || to.path === '/register') {
      next()
    } else {
      next(false)
    }
  } else {
    if (to.path === '/auth' || to.path === '/register') {
      next(false)
    } else {
      next()
    }
  }
})

export default router
