import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import store from './store';

const routes = [
    {
        path: '/',
        name: 'login',
        exact: true,
        component: require('../pages/Login'),
        meta: { login: false, },
    },
    {
        path: '/register',
        name: 'register',
        exact: true,
        component: require('./../pages/Register'),
        meta: { login: false, }
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        exact: true,
        component: require('../pages/Dashboard'),
        meta: { login: true, }
    },
];

const router = new VueRouter({
    routes,
    linkExactActiveClass: 'is-active',
});

router.beforeEach((to, from, next) => {
    if (to.meta.login && !store.getters.logged) {
        next({path: '/', replace: true});
        return;
    }
    next();
});

export default router;
