import { createRouter, createWebHistory } from 'vue-router'

import Top from '@/views/Top.vue'
import Signup from '@/views/Signup.vue'
import Login from '@/views/Login.vue'
import Introduction from '@/views/Introduction.vue'
import Home from '@/views/Home.vue'
import { store } from '@/services/store'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Top,
      children: [
        {
          path: '/',
          component: Home,
          beforeEnter: (_to, _from, next) => {
            const token = localStorage.getItem('Access-Token')
            if (!token) {
              next({ path: '/introduction' })
            } else {
              next()
            }
          }
        },
        {
          path: '/introduction',
          component: Introduction
        },
        {
          path: '/signup',
          component: Signup,
          beforeEnter: (_to, _from, next) => {
            const isRegistered = store.state.isRegistered
            const isAuthenticate = store.state.isAuthenticate
            if (!isRegistered || isAuthenticate) next({ path: '/' })
            else next()
          }
        },
        {
          path: '/login',
          component: Login,
          beforeEnter: (_to, _from, next) => {
            const isRegistered = store.state.isRegistered
            const isAuthenticate = store.state.isAuthenticate
            if (!isRegistered || isAuthenticate) next({ path: '/' })
            else next()
          }
        }
      ]
    },
    {
      // 上記のパスに当てはまらなければTopを返す
      path: '/:pathMatch(.*)*',
      component: Top
    }
  ],
  // route更新時にスクロール位置を先頭に戻す
  scrollBehavior () {
    return { left: 0, top: 0 }
  }
})
