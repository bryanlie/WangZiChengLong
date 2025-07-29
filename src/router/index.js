import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import MathView from '../views/MathView.vue'
import ComputeView from '../views/ComputeView.vue'
import LanguageView from '../views/LanguageView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/math',
    name: 'math',
    component: MathView
  },
  {
    path: '/compute',
    name: 'compute',
    component: ComputeView
  },
  {
    path: '/language',
    name: 'language',
    component: LanguageView
  },
  {
    path: '/math/amc8',
    name: 'amc8',
    component: () => import('../views/math/amc8.vue')
  },
  {
    path: '/math/amc10',
    name: 'amc10',
    component: () => import('../views/math/amc10.vue')
  },
  {
    path: '/compute/python',
    name: 'python',
    component: () => import('../views/compute/python.vue')
  },
  {
    path: '/language/chinese',
    name: 'chinese',
    component: () => import('../views/language/chinese.vue')
  },
  {
    path: '/language/english',
    name: 'english',
    component: () => import('../views/language/english.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
})

export default router
