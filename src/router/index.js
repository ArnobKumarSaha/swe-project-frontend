import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/student/:regNo',
    name: 'StudentDetails',
    component: () => import('../components/student/StudentDetails.vue'),
    props: true
  },
  {
    path: '/student',
    component: () => import('../components/student/Students.vue'),
    name: "Students",/*
    children: [
      {
        path: ':regNo',
        component: () => import('../components/student/StudentDetails.vue'),
        name: 'StudentDetails'
      },
      {
        path: 'xyz',
        component: () => import('../components/student/StudentDetails.vue'),
        name: 'StudentDetai'
      }
    ]*/
  },
  {
    path: '/teacher',
    name: 'Teacher',
    component: () => import('../components/teacher/Teachers.vue'),
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../components/Signup.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/Login.vue')
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('../components/ForgotPassword.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
