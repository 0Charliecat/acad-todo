import { createRouter, createWebHistory } from 'vue-router'
import ToDo from '../views/todo.vue'
import Edit from '../views/editTodo.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: "/todos"
    },
    {
      path: "/todos",
      name: 'todos',
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
      component: Edit,
      props: route => ({ id: route.query.id })
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  ],
  linkActiveClass: "active",
})

export default router
