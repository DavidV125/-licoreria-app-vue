import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue';
import ConfirmacionView from '../views/ConfirmacionView.vue';

const PRODUCTOS =  () => import('../views/ProductosView.vue');
const NOTFOUND = ()=> import('../views/NotFound.vue');
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: LoginView,
    },
    {
      path: '/nosotros',
      name: 'nosotros',
      component: HomeView,
    },
    {
      path: '/productos',
      name: 'productos',
      component: PRODUCTOS,
    },

    {
      path: '/confirmacion',
      name: 'confirmacion',
      component: ConfirmacionView,
  },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    { 
      path: '/:pathMatch(.*)*', 
      name: 'NotFound', 
      component: NOTFOUND
    },
  ],
})
export default router