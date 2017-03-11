import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Animate from '@/components/Animate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }, {
      path: '/animate',
      name: 'animate',
      component: Animate
    }
  ]
})
