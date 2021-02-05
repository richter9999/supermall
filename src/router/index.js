import { createRouter, createWebHistory } from 'vue-router'

const home = () => import('../views/home/index')
const category = () => import('../views/category')
const cart = () => import('../views/cart')
const profile = () => import('../views/profile')


const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: home
  },
  {
    path: '/category',
    name: 'Category',
    component: category
  },
  {
    path: '/cart',
    name: 'Cart',
    component: cart
  },
  {
    path: '/profile',
    name: 'Profile',
    component: profile
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
