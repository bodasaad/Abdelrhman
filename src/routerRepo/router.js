import Vue from "vue";
import Router from "vue-router";

import adminRoutes from './admin/main.js'
import studioRoutes from './studio/main.js'
Vue.use(Router);



let router = new Router({
  mode: "hash",
  // base: process.env.BASE_URL,
  routes: [
    {
      name: 'home',
      path: '/:category?/:type?',
      meta: { index: 1 },
      component: () =>
        import(/* webpackChunkName: "studio" */ "@/views/Home.vue"),
    },
    ...studioRoutes,
    ...adminRoutes,
  ]
});



router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("at");
  const expiryDate = localStorage.getItem("aed");

  if (to.matched.some(record => record.meta.requiredAuth)) {
    const oneday = 60 * 60 * 24 * 1000
    if (token == null || token === undefined || new Date(expiryDate) < oneday) {
      next({
        name: 'Login',
      });
    } else {
      next();
    }
  } else {
    return next();
  }
});

export default router;
