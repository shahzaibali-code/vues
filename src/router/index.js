import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/UrlComponents/Login.vue'
import Detail from '../views/UrlComponents/DetailedCharts.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/Home',
    meta: {
      layout: "default"
    },
    component: Home
  },
  {
    path: '/Login',
    name: 'Login',
    meta: {
      layout: "default"
    },
    component: Login
  },
  {
    path: '/Start',
    name: 'Start',
    meta: {
      layout: "default"
    },
    component: Detail
  },
  {
    path: '/Home',
    name: 'Home',
    meta: {
      layout: "default"
    },
    component: Home
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

axios.interceptors.response.use(function (response) {
    
  return response;
}, function (error) {

  const originalRequest = error.config;

  if (error.response.status === 401 && !originalRequest._retry) {
      localStorage.setItem('LoginStatus', "LOGIN");

  }

  return Promise.reject(error);
});

export default router
