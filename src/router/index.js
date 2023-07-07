import { createRouter, createWebHistory } from 'vue-router'
import ToDo from '../views/todo.vue'
import Load from '../views/loading.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ToDo
    },
    {
      path: '/todos',
      name: 'todo',
      component: ToDo
    },
    {
      path: '/deleted',
      name: 'deleted',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/deleted.vue')
    },
    {
      path: '/edit',
      component: () => import('../views/editTodo.vue'),
      props: route => ({ id: route.query.id })
    }
  ],
  linkActiveClass: "active",
})

export default router
