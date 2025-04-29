import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';  // 导入首页组件
import AboutPage from '../views/AboutPage.vue';  // 导入关于页面组件

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
