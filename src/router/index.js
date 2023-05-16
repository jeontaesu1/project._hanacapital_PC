import { createRouter, createWebHistory } from 'vue-router';
import PublishRoutes from './_publish_routes.js';

let routesList = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView,
  //   meta: { unauthorized: false, layout: 'DefaultLayout' },
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (About.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import('../views/AboutView.vue'),
  // },
];
routesList.push(...PublishRoutes);

//
let router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routesList,
});

export default router;
