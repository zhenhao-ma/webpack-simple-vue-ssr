import Vue from 'vue';
import Router from 'vue-router';
import Home from '../page/Home.vue';
Vue.use(Router);

const routerFactory = () => {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: Home,
        name: 'home'
      }
    ]
  });
};
export default routerFactory;
