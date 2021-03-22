import { createRouter, createWebHistory } from 'vue-router'

import Top from './views/Top.vue'
import SignUp from './views/SignUp.vue'
import LogIn from './views/LogIn.vue'
import Introduction from './views/Introduction.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Top,
      children: [
        {
          path: '/',
          component: Introduction
        },
        {
          path: '/signup',
          component: SignUp
        },
        {
          path: '/login',
          component: LogIn
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

export default router
