import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'place',
      component: require('@/components/Place')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
