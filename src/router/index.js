import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  // 映射关系
  routes: [
    {
      path:"/",
      redirect:"/home"
    },
    {
      path:"/home",
      component: () => import('../views/home/home.vue')
    },
    {
      path:"/favor",
      component: () => import('../views/favor/favor.vue')
    },
    {
      path:"/order",
      component: () => import('../views/order/order.vue')
    },
    {
      path:"/message",
      component: () => import('../views/message/message.vue')
    },
    {
      path:"/search",
      component: () => import('../views/city/SearchPage.vue'),
      meta: {
        hiddenTabBar: true
      }
    },
    {
      path:"/search-page",
      component: () => import('../views/search/search.vue'),
    },
    {
      path:"/detail/:id",
      component: () => import('@/views/detail/Detail.vue')
    },
  ]
})

export default router