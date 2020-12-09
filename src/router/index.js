import Vue from 'vue'
import Router from 'vue-router'
import Download from '@/components/Download'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Download',
      component: Download
    }
  ]
})
