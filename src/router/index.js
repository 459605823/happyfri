import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import Item from '@/pages/item/item'
import Score from '@/pages/score/score'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/item',
      name: 'Item',
      component: Item
    },
    {
      path: '/score',
      name: 'Score',
      component: Score
    }
  ]
})
