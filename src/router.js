/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  Object Strucutre:
                    path => router path
                    name => router name
                    component(lazy loading) => component to load
                    meta : {
                      rule => which user can have access (ACL)
                      breadcrumb => Add breadcrumb to specific page
                      pageTitle => Display title besides breadcrumb
                    }
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Router from 'vue-router'
import auth from "@/auth/authService";

import firebase from 'firebase/app'
import 'firebase/auth'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior() {
        return { x: 0, y: 0 }
    },
    routes: [

        {
            // =============================================================================
            // MAIN LAYOUT ROUTES
            // =============================================================================
            path: '',
            component: () => import('./layouts/main/Main.vue'),
            children: [
                {
                    path: '/',
                    redirect: '/views/CA/CAList'
                },

                {
                    path: '/views/CA/CAList',
                    name: 'caList',
                    component: () => import('./views/CA/CAList.vue'),
                    meta: {
                        rule: 'admin'
                    }
                },
                {
                    path: '/views/CA/CADetail/:id',
                    name: 'caDetail',                   
                    component: () => import('./views/CA/CADetail.vue'),
                    meta: {
                        rule: 'admin'
                    }
                },
                {
                    path: '/views/Test/Grid',
                    name: 'testGrid',
                    component: () => import('./views/Test/Grid.vue'),
                    meta: {
                        rule: 'admin'
                    }
                },
            ],
        },
        // =============================================================================
        // FULL PAGE LAYOUTS
        // =============================================================================
        {
            path: '',
            component: () => import('@/layouts/full-page/FullPage.vue'),
            children: [
                // =============================================================================
                // PAGES
                // =============================================================================
                {
                    path: '/callback',
                    name: 'authCallback',
                    component: () => import('@/views/Callback.vue'),
                    meta: {
                        rule: 'editor'
                    }
                },
                {
                    path: '/pages/login',
                    name: 'pageLogin',
                    component: () => import('@/pages/Login.vue'),
                    meta: {
                        rule: 'editor'
                    }
                },
                {
                    path: '/pages/register',
                    name: 'pageRegister',
                    component: () => import('@/pages/Register.vue'),
                    meta: {
                        rule: 'editor'
                    }
                },
                {
                    path: '/pages/forgot-password',
                    name: 'pageForgotPassword',
                    component: () => import('@/pages/ForgotPassword.vue'),
                    meta: {
                        rule: 'editor'
                    }
                },
                {
                    path: '/pages/reset-password',
                    name: 'pageResetPassword',
                    component: () => import('@/pages/ResetPassword.vue'),
                    meta: {
                        rule: 'editor'
                    }
                },
                {
                    path: '/pages/lock-screen',
                    name: 'pageLockScreen',
                    component: () => import('@/pages/LockScreen.vue'),
                    meta: {
                        rule: 'editor'
                    }
                },
                {
                    path: '/pages/comingsoon',
                    name: 'pageComingSoon',
                    component: () => import('@/pages/ComingSoon.vue'),
                    meta: {
                        rule: 'editor'
                    }
                },
                {
                    path: '/pages/error-404',
                    name: 'pageError404',
                    component: () => import('@/pages/Error404.vue'),
                    meta: {
                        rule: 'editor'
                    }
                },
                {
                    path: '/pages/error-500',
                    name: 'pageError500',
                    component: () => import('@/pages/Error500.vue'),
                    meta: {
                        rule: 'editor'
                    }
                },
                {
                    path: '/pages/not-authorized',
                    name: 'pageNotAuthorized',
                    component: () => import('@/pages/NotAuthorized.vue'),
                    meta: {
                        rule: 'editor'
                    }
                },
                {
                    path: '/pages/maintenance',
                    name: 'pageMaintenance',
                    component: () => import('@/pages/Maintenance.vue'),
                    meta: {
                        rule: 'editor'
                    }
                },
            ]
        },
        // Redirect to 404 page, if no match found
        {
            path: '*',
            redirect: '/pages/error-404'
        }
    ],
})

router.afterEach(() => {
    // Remove initial loading
    const appLoading = document.getElementById('loading-bg')
    if (appLoading) {
        appLoading.style.display = "none";
    }
})

router.beforeEach((to, from, next) => {
    firebase.auth().onAuthStateChanged(() => {

        // get firebase current user
        const firebaseCurrentUser = firebase.auth().currentUser;

        if (
            to.path === "/pages/login" ||
            to.path === "/pages/forgot-password" ||
            to.path === "/pages/error-404" ||
            to.path === "/pages/error-500" ||
            to.path === "/pages/register" ||
            to.path === "/callback" ||
            to.path === "/pages/comingsoon" ||
            (auth.isAuthenticated() || firebaseCurrentUser)
        ) {
            return next();
        }

        router.push({ path: '/pages/login', query: { to: to.path } })
        // Specify the current path as the customState parameter, meaning it
        // will be returned to the application after auth
        // auth.login({ target: to.path });

    });

});

export default router
