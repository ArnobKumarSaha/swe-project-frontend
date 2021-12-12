import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../views/Home.vue'
const AuthMeta = { requiresAuth: true }

var allRoutes = [
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
]

var studentRoutes = [
  {
    path: '/student/:regNo',
    name: 'StudentDetails',
    component: () => import('../components/student/StudentDetails.vue'),
    props: true,
    meta: AuthMeta  
  },
  {
    path: '/student',
    component: () => import('../components/student/Students.vue'),
    name: "Students",
    meta: AuthMeta
    /*
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
]

var teacherRoutes = [
  {
    path: '/teacher',
    name: 'Teacher',
    component: () => import('../components/teacher/Teachers.vue'),
    meta: AuthMeta
  }
]

var authRoutes = [
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../components/Signup.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../components/Login.vue')
  },
  {
    path: '/forgot-password',
    name: 'Forgot-password',
    component: () => import('../components/ForgotPassword.vue')
  },/*
  {
    path: "/test",
    name: "Test",
    get component() {
        if (true) { 
            return TestA;
        } else {
            return TestB;
        }
    }
  },*/
]

allRoutes = allRoutes.concat(studentRoutes, teacherRoutes, authRoutes)

const routes = allRoutes
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

var isLoggedIn = false;

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    console.log("inside beforeEach func")
    if (!isLoggedIn) {
      next({ name: 'Login' })
    } else {
      next()
    }
  } else {
    next()
  }
})


export default router
